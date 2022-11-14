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

  profile: {
    marginTop: 15
  },

  innerContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: "100%",
    height: "95%",
    padding: "10%",
    paddingBottom: "50%",
    marginTop: "10%",
  },

  text: {
    fontFamily: fontFamily,
    fontSize: 16,
    color: colors.primary,
    alignSelf: "center"
  },

  button: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    bottom: "26%",
    width: "100%",
  }
})

export default styles
