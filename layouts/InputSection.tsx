import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";

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
        width: "100%",
        alignItems: "center",
        paddingVertical: 25,
        paddingHorizontal: 5,
      },
      inputWrapper: {
        width: "100%",
      },
      primaryButtonWrapper: {
        marginTop: 15,
      },
});