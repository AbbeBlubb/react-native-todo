import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface IPrimaryButton {
  onPress: CallableFunction;
  inputIsValid: CallableFunction;
  title: string;
  accessibilityLabel: string;
}

export const PrimaryButton = ({
  onPress,
  inputIsValid,
  title,
  accessibilityLabel,
}: IPrimaryButton) => {
  const color = inputIsValid() ? "#27c09f" : "#bfded8";

  return (
    <View style={styles.primaryButton}>
      <Button
        onPress={() => onPress()}
        title={title}
        color={color}
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    marginTop: 20,
  },
});
