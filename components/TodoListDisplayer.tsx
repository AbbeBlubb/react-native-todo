import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SecondaryButton } from "./SecondaryButton";

interface ITodoListDisplayer {
    todoList: Array<string>;
    deleteTodo: CallableFunction;
}

export const TodoListDisplayer = (props: ITodoListDisplayer) => {
    return (
        <View style={styles.todoListDisplayer}>
            {props.todoList.map((todo, index) => {
              console.log(index)
                return (
                    <View style={styles.todoListDisplayerRow} key={index}>
                        <Text>{todo}</Text>
                        <SecondaryButton
                            deleteTodo={props.deleteTodo}
                            todoIndex={index}
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
