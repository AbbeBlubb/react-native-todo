import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IPrimaryButton {
  onPress: CallableFunction;
  inputIsValid: CallableFunction;
  title: string;
  accessibilityLabel: string;
  testID: string;
}

export const PrimaryButton = ({
  onPress,
  inputIsValid,
  title,
  accessibilityLabel,
  testID,
}: IPrimaryButton) => {
  const backgroundColor: string = inputIsValid() ? "#F09700" : "gray";

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[styles.primaryButton, { backgroundColor }]}
    >
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 7,
  },
  primaryButtonText: {
    color: "#371801",
    fontSize: 25,
  },
});
