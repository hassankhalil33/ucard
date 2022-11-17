import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = (fontFamily?) => StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: "15%",
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 10,
  },

  default: {
    marginTop: "5%",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    width: "100%",
    marginBottom: "20%"
  },

  header: {
    fontFamily: fontFamily,
    fontSize: 20,
    lineHeight: 30,
    color: colors.blue,
    marginTop: "3%",
  },

  modal: {
    backgroundColor: colors.white,
    width: "100%",
    paddingTop: "6%",
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: "-5%"
  },

  profile: {
    marginTop: 15
  },

  image: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginBottom: 10
  },

  button: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    paddingBottom: "2%"
  },

  button2: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    paddingBottom: "25%"
  }
});

export default styles
