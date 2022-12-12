import React from "react";
import { Text, View } from "react-native";

interface ITodoListDisplayer {
  todoList: Array<string>
}

export const TodoListDisplayer = (props: ITodoListDisplayer) => {
    return (
        <View>
            {props.todoList.map((todo, index) => {
                return (
                  <View key={index}>
                    <Text>{todo}</Text>
                  </View>
                );
            })}
        </View>
    );
};
