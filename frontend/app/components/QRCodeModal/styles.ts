import { StyleSheet } from "react-native";
import colors from "../../constants/pallete";

const styles = () => StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelButton: {
    backgroundColor: colors.blue,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 30,
    borderRadius: 10,
  }
});

export default styles
