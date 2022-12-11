import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const ToDoList = () => {
  return(
    <View>
       <Text>ToDo list</Text>
      <Text>ToDo list</Text>
      <Text>ToDo list</Text>
      <Text>ToDo list</Text>
      <Text>ToDo list</Text>
    </View>
  )
}

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
      <ToDoList />

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
