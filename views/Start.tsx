import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    View
} from "react-native";
import { Header } from "../layouts/Header";
import { InputSection } from "../layouts/InputSection";
import { TodoList } from "../layouts/TodoList";
import { TTodo, TTodoList } from "../services/types";

export const Start = () => {
  const initialTodoTexts = [
    "Remove snow from car",
    "Send postal card",
    "Buy a Christmas tree",
    "Studded tires for the pram",
    "Decorate the Christmas tree",
    "How to make Persian rice?",
    "Find someone to roll meatballs",
  ];

  const todoFactory = (inputText: string): TTodo => {
    return {
      text: inputText,
      key: Math.random(),
    };
  };

  const createTodoList = (list: string[]): TTodoList => {
    return list.map((todoText) => todoFactory(todoText));
  };

  const [todoList, setTodoList] = useState<TTodoList>(
    createTodoList(initialTodoTexts)
  );
  const [inputText, setInputText] = useState<string>("");

  const inputIsValid = () => {
    return !(inputText.trim() === "");
  };

  const submitNewTodo = () => {
    if (!inputIsValid()) return;
    Keyboard.dismiss();
    const newTodo: TTodo = todoFactory(inputText);
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  const deleteTodo = (key: number) => {
    const updatedTodoList = todoList.filter((todo: TTodo) => todo.key !== key);
    setTodoList(updatedTodoList);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
