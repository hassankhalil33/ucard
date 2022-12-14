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

  upperHalf: {
    width: "100%",
    height: "50%",
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

  addButtonContainer: {
    position: "absolute",
    top: "10%",
    right: 40
  },

  addButton: {
    width: 30,
    height: 30.5,
  },

  subHeader: {
    alignSelf: "flex-start",
    fontFamily: fontFamily,
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    marginLeft: 30,
    marginTop: "20%",
  },
})

export default styles
