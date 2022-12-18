import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface IPrimaryButton {
  onPress: CallableFunction;
  title: string;
  accessibilityLabel: string;
}

export const PrimaryButton = ({
  onPress,
  title,
  accessibilityLabel,
}: IPrimaryButton) => {
  return (
    <View style={styles.primaryButton}>
      <Button
        onPress={() => onPress()}
        title={title}
        color="#27c09f"
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
