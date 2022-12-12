import React from "react";
import { Text, View } from "react-native";
import { SecondaryButton } from "./SecondaryButton";

interface ITodoListDisplayer {
    todoList: Array<string>;
}

export const TodoListDisplayer = (props: ITodoListDisplayer) => {
    return (
        <View>
            {props.todoList.map((todo, index) => {
                return (
                    <View key={index}>
                        <Text>{todo}</Text>
                        <SecondaryButton deleteTodo={()=> {return}} />
                    </View>
                );
            })}
        </View>
    );
};
