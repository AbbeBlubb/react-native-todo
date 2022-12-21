import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { Header } from "./components/Header";
import { InputSection } from "./components/InputSection";

import { TodoList } from "./components/TodoList";

export default function App() {
  const initialList = [
    "Remove snow from car",
    "Send postal card",
    "Buy a Christmas tree",
    "Studded tires for the pram",
    "Decorate the Christmas tree",
    "How to make Persian rice?",
    "Find someone to roll meatballs",
  ];
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>(initialList);

  const inputIsValid = () => {
    return !(inputText.trim() === "");
  };

  const submitNewTodo = () => {
    if (!inputIsValid()) return;
    Keyboard.dismiss();
    setTodoList([...todoList, inputText]);
    setInputText("");
  };

  const deleteTodo = (index: number) => {
    let todoListCopy = [...todoList];
    todoListCopy.splice(index, 1);
    setTodoList(todoListCopy);
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />
      <Header headerText="Todo's" testID="header" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={-900}
      >
        <View style={styles.bodySection}>
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
          <InputSection
            inputText={inputText}
            setInputText={setInputText}
            submitNewTodo={submitNewTodo}
            inputIsValid={inputIsValid}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#F3F0F1",
  },
  keyboardAvoidingView: {
    height: "75%", // Header is 25 %
  },
  bodySection: {
    height: "100%",
    justifyContent: "space-between",
  },
});
