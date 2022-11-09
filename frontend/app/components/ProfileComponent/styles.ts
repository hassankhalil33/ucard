import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (width = 370, dark = false, margin = 0, fontRegular?, fontBold?) => StyleSheet.create({
  container: {
    height: 60,
    width: width,
    flexDirection: "row",
    marginTop: margin
  },

  image: {
    width: 60,
    height: 60
  },

  content: {
    marginLeft: "5%",
    justifyContent: "center",
    height: 60
  },

  lowerText: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  name: {
    fontFamily: fontBold,
    fontSize: 16,
    lineHeight: 24,
    color: dark ? colors.primary : colors.white
  },

  prof: {
    fontFamily: fontRegular,
    fontSize: 12,
    lineHeight: 18,
    color: dark ? colors.primary : colors.white
  },

  time: {
    fontFamily: fontRegular,
    fontSize: 12,
    lineHeight: 18,
    color: dark ? colors.primary : colors.white
  }
})

export default styles
