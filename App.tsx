import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const inputIsValid = () => {
    return !(inputText.trim() === "");
  };

  const submitNewTodo = () => {
    if (!inputIsValid()) return;
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
      <Header headerText="My ToDo list" testID="header" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.touchableWithoutFeedback}>
          <View style={styles.bodySection}>
            <TodoList todoList={todoList} deleteTodo={deleteTodo} />
            <View style={styles.inputSection}>
              <View style={styles.inputWrapper}>
                <Input
                  inputText={inputText}
                  setInputText={setInputText}
                  testID="input-new-todo"
                />
              </View>
              <View style={styles.primaryButtonWrapper}>
                <PrimaryButton
                  onPress={submitNewTodo}
                  inputIsValid={inputIsValid}
                  title="Add todo"
                  accessibilityLabel="Add a new todo to the list"
                  testID="button-submit-new-todo"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
  touchableWithoutFeedback: {
    height: "100%",
  },
  bodySection: {
    height: "100%", 
    justifyContent: "space-between",
  },
  inputSection: {
    backgroundColor: "yellow", // Temporary background to visualize the area
    width: "100%",
    alignItems: "center",
    paddingVertical: 25,
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 15,
  },
  primaryButtonWrapper: {
    marginTop: 15,
  },
});
