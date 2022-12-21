import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IHeader {
  headerText: string;
  testID: string;
}

export const Header = ({ headerText, testID }: IHeader) => {
  return (
    <LinearGradient
      colors={["rgba(170,100,6,1)", "rgba(129,82,4,1)"]}
      style={styles.header}
      testID={testID}
    >
      <Text style={styles.heading}>{headerText}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "25%",
    position: "relative",
  },
  heading: {
    position: "absolute",
    color: "#E4C9A4",
    top: "50%",
    left: 15,
    fontSize: 55,
    fontWeight: "bold",
  },
});
