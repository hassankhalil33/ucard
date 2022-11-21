import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/pallete";

const vw5 = (Dimensions.get('window').width / 10) * 0.5;

const styles = (fontMedium?, fontBold?) => StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column"
  },

  text: {
    fontFamily: fontMedium,
    fontSize: 14,
    color: colors.white,
    alignSelf: "center",
    marginTop: 20
  },

  upperHalf: {
    width: "100%",
    height: "47%",
    alignItems: "center",
  },

  lowerHalf: {
    width: "100%",
    height: "44%",
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
    fontFamily: fontBold,
    fontSize: 24,
    color: colors.white,
    paddingTop: 75
  },

  subHeader: {
    alignSelf: "flex-start",
    fontFamily: fontMedium,
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    marginLeft: 30,
    marginTop: 20,
  },

  search: {
    paddingTop: "3%",
    width: "80%"
  },

  suggestedView: {
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: colors.primary_light,
    width: "90%",
    height: "100%",
    padding: vw5
  },

  suggestedHeader: {
    alignSelf: "flex-start",
    fontFamily: fontMedium,
    fontSize: 20,
    lineHeight: 30,
    color: colors.blue,
  },

  profiles: {
    marginTop: 15,
    paddingBottom: "31%"
  },

  profile: {
    marginTop: 15,
  },

  addButtonContainer: {
    position: "absolute",
    top: "10%",
    left: 40
  },

  addButton: {
    width: 30,
    height: 30.5,
  }
});

export default styles
