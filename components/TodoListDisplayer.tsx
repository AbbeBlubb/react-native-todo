import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SecondaryButton } from "./SecondaryButton";

interface ITodoListDisplayer {
  todoList: Array<string>;
  deleteTodo: CallableFunction;
}

export const TodoListDisplayer = ({
  todoList,
  deleteTodo,
}: ITodoListDisplayer) => {
  return (
    <View style={styles.todoListDisplayer}>
      {todoList.map((todo, index) => {
        return (
          <View style={styles.todoListDisplayerRow} key={index}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  todoListDisplayer: {
    width: "100%",
  },
  todoListDisplayerRow: {
    backgroundColor: "#555", // Temporary background to see the areas
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
