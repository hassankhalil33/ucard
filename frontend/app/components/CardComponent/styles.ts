import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (
  fontFamily?,
  category = "PERSONAL",
  height = 200,
  width = 330,
  extraInfo = false,
) => StyleSheet.create({

  container: {
    padding: 30,
    height: height,
    width: width,
    backgroundColor: category == "PERSONAL" ? colors.blue : colors.orange,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.17)",
    borderRadius: 20,
  },

  desc: {
    fontFamily: fontFamily,
    color: colors.white,
    fontSize: 14
  },

  prof: {
    fontFamily: fontFamily,
    color: colors.white,
    fontSize: 14,
    opacity: 0.5,
    marginTop: extraInfo ? 6 : "28%"
  },

  name: {
    fontFamily: fontFamily,
    color: colors.white,
    fontSize: 22,
  },

  logo: {
    position: "absolute",
    height: 27,
    width: 40,
    bottom: 30,
    right: 35,
  }
});

export default styles
