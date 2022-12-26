import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";


interface IDelete {
  onPress: CallableFunction;
  callbackArgument: any;
  title: string;
  accessibilityLabel: string;
  testID: string;
}

export const Delete = ({
  onPress,
  callbackArgument,
  title,
  accessibilityLabel,
  testID,
}: IDelete) => {
  return (
    <Pressable
      onPress={() => onPress(callbackArgument)}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={styles.pressable}
    >
      <Text>
        {title}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#e2c568",
  }
});
