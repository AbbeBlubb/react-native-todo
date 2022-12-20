import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IHeader {
  headerText: string;
  testID: string;
}

export const Header = ({ headerText, testID }: IHeader) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "25%",
    backgroundColor: "#E08603",
    position: "relative"
  },
  heading: {
    position: "absolute",
    color: "#E4C9A4",
    top: "50%",
    left: 15,
    fontSize: 40,
    fontWeight: "bold",
  },
});
