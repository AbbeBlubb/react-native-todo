import React from "react";
import { Button, View } from "react-native";

interface ISecondaryButton {
  onPress: CallableFunction;
  callbackArgument: any;
  title: string;
  accessibilityLabel: string;
  testID: string;
}

export const SecondaryButton = ({
  onPress,
  callbackArgument,
  title,
  accessibilityLabel,
  testID,
}: ISecondaryButton) => {
  return (
    <View>
      <Button
        onPress={() => onPress(callbackArgument)}
        title={title}
        color="#e2c568"
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      />
    </View>
  );
};
