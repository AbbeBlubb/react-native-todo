import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Delete } from "./Delete";
import { TTodo } from "../services/types";

interface IRow {
  item: TTodo;
  deleteTodo: CallableFunction;
}

export const Row = ({ item, deleteTodo }: IRow) => {
  return (
    <View style={styles.row} key={item.key}>
      <View style={styles.rowTextContainer}>
        <Text testID="todo-text" style={styles.rowText}>
          {item.text}
        </Text>
      </View>
      <View style={styles.rowDeleteContainer}>
        <Delete
          onPress={deleteTodo}
          callbackArgument={item.key}
          title="Done!"
          accessibilityLabel="Remove the todo from the todo list"
          testID="button-delete-todo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 20,
    flexDirection: "row",
    paddingTop: 20,
  },
  rowTextContainer: {
    flex: 1,
    fontSize: 30,
    paddingBottom: 10,
    borderStyle: "dotted",
    borderBottomColor: "#DABFB0",
    borderBottomWidth: 3,
  },
  rowText: {
    fontSize: 23,
  },
  rowDeleteContainer: {
    marginLeft: 20,
  },
});
