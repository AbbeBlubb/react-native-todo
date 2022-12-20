import React from "react";
import { Text, StyleSheet } from "react-native";

interface IHeader {
  headerText: string;
  testID: string;
}

export const Header = ({ headerText, testID }: IHeader) => {
  return (
    <Text style={styles.header}>{headerText}</Text>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 20,
        backgroundColor: "#888", // Temporary background to see the area
    },
});
