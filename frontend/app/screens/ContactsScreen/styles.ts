import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (fontFamily?) => StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column"
  },

  modal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

  header: {
    fontFamily: fontFamily,
    fontSize: 24,
    color: colors.white,
    paddingTop: 75
  },

  text: {
    fontFamily: fontFamily,
    fontSize: 16,
    color: colors.white,
    alignSelf: "center"
  },

  addButtonContainer: {
    position: "absolute",
    top: "10%",
    right: 40
  },

  addButton: {
    width: 30,
    height: 30.5,
  },

  scanButtonContainer: {
    position: "absolute",
    top: "10%",
    left: 40
  },

  scanButton: {
    width: 30,
    height: 30.5,
  },

  cancelButton: {
    width: "80%",
    alignSelf: "flex-end",
    marginBottom: "8%"
  },

  innerContainer: {
    paddingBottom: "35%",
    marginTop: "10%",
  },

  profile: {
    marginTop: 15
  },

})

export default styles
