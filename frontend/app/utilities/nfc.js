import NfcManager, { NfcTech, Ndef } from "react-native-nfc-manager";


const writeNdef = async (value) => {
  let result = false;

  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);

    const bytes = Ndef.encodeMessage([Ndef.textRecord(value)]);
    alert("Started NFC Write");

    if (bytes) {
      await NfcManager.ndefHandler
        .writeNdefMessage(bytes);
      result = true;
    }
  } catch (ex) {
    alert(ex);

  } finally {
    NfcManager.cancelTechnologyRequest();
  }

  alert(result);
}

export {
  writeNdef
}
