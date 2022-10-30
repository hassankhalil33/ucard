import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lowerView}>
        <Text style={styles.text}>Create Your Business Card in Seconds!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303841",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  text: {
    color: "#f3f3f3",
    fontSize: 28,
  },

  lowerView: {
    alignSelf: "flex-end",
    padding: 45,
  }
});
