import { BarCodeScanner } from "expo-barcode-scanner";

const getBarCodePermissions = async () => {
  await BarCodeScanner.requestPermissionsAsync();
};

export { getBarCodePermissions }
