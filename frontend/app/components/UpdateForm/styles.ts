import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (fontFamily?) => StyleSheet.create({
  field: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 18,
    fontFamily: fontFamily,
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    color: colors.primary,
    borderRadius: 5,
    lineHeight: 27,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#949494"
  }
})

export default styles
