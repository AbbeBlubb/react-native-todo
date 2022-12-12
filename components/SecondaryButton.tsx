import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface ISecondaryButton {
    deleteTodo: CallableFunction;
}

export const SecondaryButton = (props: ISecondaryButton) => {
    return (
        <View style={styles.secondaryButton}>
            <Button
                onPress={() => {
                    return;
                }}
                title="Done!"
                color="#bfded8"
                accessibilityLabel="Remove the todo from the todo list"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    secondaryButton: {
        
    },
});