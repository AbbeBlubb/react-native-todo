import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { PrimaryButton } from "./PrimaryButton";

interface IInputSection {
  inputText: string;
  setInputText: CallableFunction;
  submitNewTodo: CallableFunction;
  inputIsValid: CallableFunction;
}

export const InputSection = ({ inputText, setInputText, submitNewTodo, inputIsValid }: IInputSection) => {
  return (
    <View style={styles.inputSection}>
      <View style={styles.inputWrapper}>
        <Input
          inputText={inputText}
          setInputText={setInputText}
          testID="input-new-todo"
        />
      </View>
      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          onPress={submitNewTodo}
          inputIsValid={inputIsValid}
          title="Add todo"
          accessibilityLabel="Add a new todo to the list"
          testID="button-submit-new-todo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    inputSection: {
        backgroundColor: "yellow", // Temporary background to visualize the area
        width: "100%",
        alignItems: "center",
        paddingVertical: 25,
      },
      inputWrapper: {
        width: "100%",
        paddingHorizontal: 15,
      },
      primaryButtonWrapper: {
        marginTop: 15,
      },
});
