import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Input = () => {
  return(
    <Text>Cat</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Input />
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
