import React from "react";
import { Button, StyleSheet, View } from "react-native";


type Todo = string;
type TodoList = Array<Todo>;

interface IPrimaryButton {
    submitNewTodo: CallableFunction;
    setTodoList: CallableFunction;
    todoList: TodoList;
    inputText: string;
    setInputText: CallableFunction;
}

export const PrimaryButton = (props: IPrimaryButton) => {
    console.log("primarybutton inputText: ", props.inputText);
    console.log("primarybutton todoList: ", props.todoList);

    const todoList = props.todoList;

    return (
        <View style={styles.primaryButton}>
        <Button
            onPress={props.submitNewTodo(
                todoList,
                props.inputText,
                props.setTodoList,
                props.setInputText
            )}
            title="Add todo"
            color="#27c09f"
            accessibilityLabel="Add new todo to the todo list"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    primaryButton: {
      marginTop: 20
    }
  });
