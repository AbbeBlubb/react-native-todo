import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SecondaryButton } from "../components/SecondaryButton";
import { TTodo, TTodoList } from "../services/types";

interface ITodoList {
  todoList: TTodoList;
  deleteTodo: CallableFunction;
}

export const TodoList = ({ todoList, deleteTodo }: ITodoList) => {
  return (
    <ScrollView style={styles.todoList}>
      {todoList.map((todo: TTodo) => {
        return (
          <View style={styles.todoListRow} key={todo.key}>
            <View style={styles.todoListRowTextContainer}>
              <Text testID="todo-text" style={styles.todoListRowText}>
                {todo.text}
              </Text>
            </View>
            <View style={styles.todoListRowDeleteContainer}>
              <SecondaryButton
                onPress={deleteTodo}
                callbackArgument={todo.key}
                title="Done!"
                accessibilityLabel="Remove the todo from the todo list"
                testID="button-delete-todo"
              />
            </View>
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
    marginHorizontal: 20,
    flexDirection: "row",
    paddingTop: 20,
  },
  todoListRowTextContainer: {
    flex: 1,
    fontSize: 30,
    paddingBottom: 10,
    borderStyle: "dotted",
    borderBottomColor: "#DABFB0",
    borderBottomWidth: 3,
  },
  todoListRowText: {
    fontSize: 23,
  },
  todoListRowDeleteContainer: {
    marginLeft: 20,
  }
});
