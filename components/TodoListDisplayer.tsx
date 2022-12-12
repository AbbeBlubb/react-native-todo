import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SecondaryButton } from "./SecondaryButton";

interface ITodoListDisplayer {
    todoList: Array<string>;
}

export const TodoListDisplayer = (props: ITodoListDisplayer) => {
    return (
        <View style={styles.todoListDisplayer}>
            {props.todoList.map((todo, index) => {
                return (
                    <View style={styles.todoListDisplayerRow} key={index}>
                        <Text>{todo}</Text>
                        <SecondaryButton
                            deleteTodo={() => {
                                return;
                            }}
                        />
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    todoListDisplayer: {
      width: "80%"
    },
    todoListDisplayerRow: {
      width: "100%",
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
});
