import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface IPrimaryButton {
    onPress: CallableFunction;
    title: string;
    accessibilityLabel: string;
}

export const PrimaryButton = (props: IPrimaryButton) => {
    return (
        <View style={styles.primaryButton}>
        <Button
            onPress={() => props.onPress()}
            title={props.title}
            color="#27c09f"
            accessibilityLabel={props.accessibilityLabel}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    primaryButton: {
      marginTop: 20
    }
  });
