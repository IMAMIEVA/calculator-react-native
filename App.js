import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from "./calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#000',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
