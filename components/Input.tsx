import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = (props: { inputText: string; setInputText: CallableFunction }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={"Write here!"}
            value={props.inputText}
            onChangeText={(newInputText) => props.setInputText(newInputText)}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
        padding: 20,
        width: "60%",
        borderColor: "#27c09f",
        borderWidth: 2,
    },
});
