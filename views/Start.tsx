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
import { List } from "../layouts/List";
import { New } from "../layouts/New";
import { createInitialTodoList } from "../services/createInitialTodoList";
import { TTodo, TTodoList } from "../services/types";
import { todoFactory } from "../services/utils";

export const Start = () => {
  const [todoList, setTodoList] = useState<TTodoList>(createInitialTodoList());
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
          <List todoList={todoList} deleteTodo={deleteTodo} />
          <New
            inputText={inputText}
            setInputText={setInputText}
            submitNewTodo={submitNewTodo}
            inputIsValid={inputIsValid}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

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
