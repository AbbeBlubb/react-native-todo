import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Input = () => {
  return(
    <Text>Cat</Text>
  )
}

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />

      <Text style={styles.header}>My ToDo list</Text>
      <Text>ToDo list</Text>
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20
  }
});
