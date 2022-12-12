import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface IPrimaryButton {
    submitNewTodo: CallableFunction;
}

export const PrimaryButton = (props: IPrimaryButton) => {
    return (
        <View style={styles.primaryButton}>
        <Button
            onPress={() => props.submitNewTodo()}
            title="Add todo"
            color="#27c09f"
            accessibilityLabel="Add new todo to the todo list"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    primaryButton: {
      marginTop: 20
    }
  });
