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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  text: {
    color: "#f3f3f3",
    fontSize: 26,
  },

  lowerView: {
    alignSelf: "flex-end",
    padding: 40,
  }
});
