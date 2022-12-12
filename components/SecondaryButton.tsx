import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface ISecondaryButton {
    deleteTodo: CallableFunction;
    todoIndex: number;
}

export const SecondaryButton = (props: ISecondaryButton) => {
    return (
        <View>
            <Button
                onPress={(todoIndex) => props.deleteTodo(todoIndex)}
                title="Done!"
                color="#bfded8"
                accessibilityLabel="Remove the todo from the todo list"
            />
        </View>
    );
};
