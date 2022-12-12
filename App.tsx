import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';




const ToDoList = () => {
  return(
    <View>
      <Text>ToDo list</Text>
      <Text>ToDo list</Text>
      <Text>ToDo list</Text>
      <Text>ToDo list</Text>
    </View>
  )
}

const Input = (props: {inputText: string, setInputText: CallableFunction}) => {
  return(
    <TextInput style={styles.input} placeholder={'Write here!'} value={props.inputText} onChangeText={(newInputText) => props.setInputText(newInputText) } />
  )
}

export default function App() {
  const [inputText, setInputText] = useState<string>("");

  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />
      <Text style={styles.header}>My ToDo list</Text>
      <ToDoList />
      <Input inputText={inputText} setInputText={setInputText} />
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
  },

  input: {
    marginTop: 40,
    padding: 20,
    width: "60%",
    borderColor: "#27c09f",
    borderWidth: 2,
  }
});
