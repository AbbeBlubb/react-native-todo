import React from "react";
import { Text, View } from "react-native";

type Todo = string;
type TodoList = Array<Todo>;

export const TodoListDisplayer = (props: { todoList: TodoList }) => {
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
