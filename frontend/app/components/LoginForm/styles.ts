import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (fontFamily?) => StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%"
  },

  title: {
    color: colors.primary,
    marginBottom: 20,
    fontFamily: fontFamily,
    fontSize: 20,
    lineHeight: 30,
  },

  button: {
    width: "100%",
    marginTop: 30
  }
})

export default styles
