import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface IInput {
  inputText: string;
  setInputText: CallableFunction;
  testID: string;
}

export const Input = ({ inputText, setInputText, testID }: IInput) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={"Write here!"}
      value={inputText}
      onChangeText={(newInputText) => setInputText(newInputText)}
      testID={testID}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderStyle: "dotted",
    borderColor: "#DABFB0",
    borderWidth: 3,
  },
});
