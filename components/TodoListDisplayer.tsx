import React from "react";
import { Button, Text, View } from "react-native";

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
                        <Button
                            onPress={() => {return}}
                            title="Done!"
                            color="#bfded8"
                            accessibilityLabel="Remove the todo from the todo list"
                        />
                    </View>
                );
            })}
        </View>
    );
};
