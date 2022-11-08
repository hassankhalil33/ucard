import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/pallete";

const vw10 = (Dimensions.get('window').width / 10) * 1;
const vw90 = (Dimensions.get('window').width / 10) * 9;

const styles = (fontMedium?, fontBold?) => StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: vw10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  logo: {
    position: "absolute",
    height: 58,
    width: 125,
    top: 60,
    alignSelf: "center"
  },

  backButtonContainer: {
    position: "absolute",
    top: 73.75,
    left: 30
  },

  backButton: {
    width: 30,
    height: 30.5,
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

  viewOther: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textOther: {
    fontFamily: fontBold,
    color: colors.primary_lighter,
    fontSize: 14,
  },

  buttonOther: {
    fontFamily: fontMedium,
    color: colors.white,
    fontSize: 14,
  },

  form: {
    width: vw90
  }
});

export default styles
