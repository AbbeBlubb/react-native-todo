import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SecondaryButton } from "../components/SecondaryButton";

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
            <View style={styles.todoListRowTextContainer}>
              <Text testID="todo-text" style={styles.todoListRowText}>
                {todo}
              </Text>
            </View>
            <View style={styles.todoListRowDeleteContainer}>
              <SecondaryButton
                onPress={deleteTodo}
                callbackArgument={index}
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
    //justifyContent: "space-between",
    //alignItems: "center",
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
    //paddingBottom: 10,
  }
});
