import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SecondaryButton } from "../components/SecondaryButton";
import { TTodo, TTodoList } from "../services/types";

interface IList {
  todoList: TTodoList;
  deleteTodo: CallableFunction;
}

export const List = ({ todoList, deleteTodo }: IList) => {
  return (
    <ScrollView style={styles.list}>
      {todoList.map((todo: TTodo) => {
        return (
          <View style={styles.listRow} key={todo.key}>
            <View style={styles.listRowTextContainer}>
              <Text testID="todo-text" style={styles.listRowText}>
                {todo.text}
              </Text>
            </View>
            <View style={styles.listRowDeleteContainer}>
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
  list: {
    width: "100%",
  },
  listRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    paddingTop: 20,
  },
  listRowTextContainer: {
    flex: 1,
    fontSize: 30,
    paddingBottom: 10,
    borderStyle: "dotted",
    borderBottomColor: "#DABFB0",
    borderBottomWidth: 3,
  },
  listRowText: {
    fontSize: 23,
  },
  listRowDeleteContainer: {
    marginLeft: 20,
  }
});
