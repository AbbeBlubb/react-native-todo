import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

interface IDelete {
  onPress: CallableFunction;
  callbackArgument: any;
  accessibilityLabel: string;
  testID: string;
}

export const Delete = ({
  onPress,
  callbackArgument,
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
      <Image 
        source={require("../assets/delete-icon.png")}
        style={styles.deleteIcon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DABFB0",
    opacity: 0.4,
  },
  deleteIcon: {
    height: 25,
    width: 25,
  }
});
