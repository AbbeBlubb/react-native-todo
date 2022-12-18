import React from "react";
import { Button, View } from "react-native";

interface ISecondaryButton {
    onPress: CallableFunction;
    callbackArgument: any;
    title: string;
    accessibilityLabel: string;
}

export const SecondaryButton = (props: ISecondaryButton) => {
    return (
        <View>
            <Button
                onPress={(callbackArgument) => props.onPress(callbackArgument)}
                title={props.title}
                color="#bfded8"
                accessibilityLabel={props.accessibilityLabel}
            />
        </View>
    );
};
