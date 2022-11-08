import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (color = colors.blue, fontFamily?) => StyleSheet.create({
  button: {
    backgroundColor: color,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 10,
  },

  text: {
    color: colors.white,
    fontFamily: fontFamily,
    fontSize: 18,
    lineHeight: 27,
  }
})

export default styles
