const { withAndroidManifest } = require("@expo/config-plugins");
const { XML } = require("@expo/config-plugins");
const { mkdirSync } = require("fs");

const NfcHceServiceXml = `
<service
  android:name="com.reactnativehce.services.CardService"
  android:exported="true"
  android:enabled="false"
  android:permission="android.permission.BIND_NFC_SERVICE">
  <intent-filter>
    <action
      android:name="android.nfc.cardemulation.action.HOST_APDU_SERVICE"/>
    <category android:name="android.intent.category.DEFAULT"/>
  </intent-filter>
  <meta-data
    android:name="android.nfc.cardemulation.host_apdu_service"
    android:resource="@xml/aid_list"/>
</service>`;

let NfcHceService;
XML.parseXMLAsync(NfcHceServiceXml).then((res) => (NfcHceService = res));

function addNfcPermissionToManifest(androidManifest) {
  // Add `<uses-permission android:name="android.permission.NFC" />` to the AndroidManifest.xml
  if (!Array.isArray(androidManifest.manifest["uses-permission"])) {
    androidManifest.manifest["uses-permission"] = [];
  }

  if (
    !androidManifest.manifest["uses-permission"].find(
      (item) => item.$["android:name"] === "android.permission.NFC"
    )
  ) {
    androidManifest.manifest["uses-permission"].push({
      $: {
        "android:name": "android.permission.NFC",
      },
    });
  }
  return androidManifest;
}

function addNfcHceHardwareFeatureToManifest(androidManifest) {
  // Add `<uses-feature android:name="android.hardware.nfc.hce" android:required="true" />` to the AndroidManifest.xml
  if (!Array.isArray(androidManifest.manifest["uses-feature"])) {
    androidManifest.manifest["uses-feature"] = [];
  }

  if (
    !androidManifest.manifest["uses-feature"].find(
      (item) => item.$["android:name"] === "android.hardware.nfc.hce"
    )
  ) {
    androidManifest.manifest["uses-feature"].push({
      $: {
        "android:name": "android.hardware.nfc.hce",
        "android:required": "true",
      },
    });
  }
  return androidManifest;
}

function addNfcHceServiceToManifest(androidManifest) {
  const { manifest } = androidManifest;

  if (!Array.isArray(manifest["application"])) {
    console.warn("withReactNativeHce: No manifest.application array?");
    return androidManifest;
  }

  const application = manifest["application"].find(
    (item) => item.$["android:name"] === ".MainApplication"
  );
  if (!application) {
    console.warn("withReactNativeHce: No .MainApplication?");
    return androidManifest;
  }

  let services = application["service"];
  if (!Array.isArray(services)) {
    services = [];
    application["service"] = services;
  }

  if (
    !services.find(
      (item) =>
        item.$["android:name"] === "com.reactnativehce.services.CardService"
    )
  ) {
    services.push(NfcHceService.service);
  }

  return androidManifest;
}

function aidFilters(appIds) {
  return appIds.map((appId) => ({ $: { "android:name": appId } }));
}

function aidGroup(appIds) {
  return [
    {
      $: {
        "android:category": "other",
        "android:description": "@string/app_name",
      },
      "aid-filter": aidFilters(appIds),
    },
  ];
}

function hostApduService(appIds) {
  return {
    "host-apdu-service": {
      $: {
        "xmlns:android": "http://schemas.android.com/apk/res/android",
        "android:description": "@string/app_name",
        "android:requireDeviceUnlock": "false",
      },
      "aid-group": aidGroup(appIds),
    },
  };
}

async function writeAidList(appIds) {
  const obj = hostApduService(appIds);
  const dir = "android/app/src/main/res/xml";

  mkdirSync(dir, { recursive: true });
  await XML.writeXMLAsync({ path: `${dir}/aid_list.xml`, xml: obj });
}

module.exports = function withNfcHceAndroidManifest(config, { appIds }) {
  return withAndroidManifest(config, (config) => {
    config.modResults = addNfcPermissionToManifest(config.modResults);
    config.modResults = addNfcHceHardwareFeatureToManifest(config.modResults);
    config.modResults = addNfcHceServiceToManifest(config.modResults);
    writeAidList(appIds);
    return config;
  });
};
