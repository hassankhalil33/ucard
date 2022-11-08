import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (
  fontFamily?,
  category = "personal",
  height = 200,
  width = 330,
  normal = true,
) => StyleSheet.create({

  container: {
    padding: 30,
    height: height,
    width: width,
    backgroundColor: category == "personal" ? colors.blue : colors.orange,
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
    marginTop: normal ? 75 : "28%"
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
