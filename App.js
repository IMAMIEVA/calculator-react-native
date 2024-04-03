import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from "./calculator";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>ГОВНО</Text>*/}
      {/*<StatusBar style="auto" />*/}

      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
