import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (fontMedium?, fontBold?) => StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
  },

  logo: {
    position: "absolute",
    height: 58,
    width: 125,
    top: 60,
    left: 45,
  },

  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  backgroundImage: {
    height: 1000,
    width: 450,
  },

  textMain: {
    fontFamily: fontMedium,
    color: colors.white,
    fontSize: 28,
  },

  textInner: {
    fontFamily: fontMedium,
    color: colors.white,
    fontSize: 16,
  },

  textOther: {
    fontFamily: fontBold,
    color: colors.primary_lighter,
    fontSize: 14,
  },

  lowerView: {
    padding: 45,
  },

  buttonMain: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary_light,
    marginTop: 12,
    marginBottom: 12,
    width: 160,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.17)",
    borderRadius: 18,
  },

  buttonOther: {
    fontFamily: fontMedium,
    color: colors.white,
    fontSize: 14,
  }
});

export default styles
