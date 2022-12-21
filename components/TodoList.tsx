import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SecondaryButton } from "./SecondaryButton";

interface ITodoList {
  todoList: Array<string>;
  deleteTodo: CallableFunction;
}

export const TodoList = ({ todoList, deleteTodo }: ITodoList) => {
  return (
    <ScrollView style={styles.todoList}>
      {todoList.map((todo, index) => {
        return (
          <View style={styles.todoListRow} key={index}>
            <Text testID="todo-text">{todo}</Text>
            <SecondaryButton
              onPress={deleteTodo}
              callbackArgument={index}
              title="Done!"
              accessibilityLabel="Remove the todo from the todo list"
              testID="button-delete-todo"
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoList: {
    width: "100%",
  },
  todoListRow: {
    backgroundColor: "#555", // Temporary background to see the areas
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
