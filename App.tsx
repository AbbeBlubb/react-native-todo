import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import { TodoListDisplayer } from "./components/TodoListDisplayer";

export default function App() {
    const [inputText, setInputText] = useState<string>("");
    const [todoList, setTodoList] = useState<string[]>([]);

    const submitNewTodo = () => {
        if (inputText.trim() === "") return;
        setTodoList([...todoList, inputText]);
        setInputText("");
    };

    return (
        <View style={styles.rootContainer}>
            <StatusBar style="auto" />
            <Text style={styles.header}>My ToDo list</Text>
            <TodoListDisplayer todoList={todoList} />
            <Input inputText={inputText} setInputText={setInputText} />
            <PrimaryButton submitNewTodo={submitNewTodo} />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    header: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 20,
    },

    input: {
        marginTop: 40,
        padding: 20,
        width: "60%",
        borderColor: "#27c09f",
        borderWidth: 2,
    },
});
