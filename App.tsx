import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';




const ToDoList = () => {
  return(
    <View>
      <Text>map tdDo list here</Text>
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

// interface IsubmitNewTodo {
//   setTodoList: CallableFunction, 
//   todoList: TodoList, 
//   inputText: string, 
//   setInputText: CallableFunction
// }

const submitNewTodo = (todoList, inputText, setTodoList, setInputText) => {
  //const todoList = props.todoList
  console.log("submitnewtodo todolist ", todoList);
  console.log("submitnewtodo inputtext props ", inputText)


  // setTodoList([...todoList, inputText])
  // setInputText("");
}

interface IPrimaryButton {
  submitNewTodo: CallableFunction, 
  setTodoList: CallableFunction, 
  todoList: TodoList, 
  inputText: string, 
  setInputText: CallableFunction
}

const PrimaryButton = (props: IPrimaryButton) => {
  console.log("primarybutton inputText: ", props.inputText)
  console.log("primarybutton todoList: ", props.todoList)

  const todoList = props.todoList;

  return(
    <Button
      onPress={props.submitNewTodo(props.setTodoList, todoList, props.inputText, props.setInputText)}
      title="Add todo"
      color="#27c09f"
      accessibilityLabel="Add new todo to the todo list"
    />
  )
}

type Todo = string;
type TodoList= Array<Todo>

export default function App() {
  const [inputText, setInputText] = useState<string>("hej");
  const [todoList, setTodoList] = useState<TodoList>([]);

  console.log("App", inputText, todoList)

  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />
      <Text style={styles.header}>My ToDo list</Text>
      <ToDoList />
      <Input inputText={inputText} setInputText={setInputText} />
      <PrimaryButton submitNewTodo={submitNewTodo} setTodoList={setTodoList} todoList={todoList} setInputText={setInputText} inputText={inputText} />
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
