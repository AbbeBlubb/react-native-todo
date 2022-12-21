import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import { TodoList } from "./components/TodoList";

export default function App() {
    const [inputText, setInputText] = useState<string>("");
    const [todoList, setTodoList] = useState<string[]>([]);

    const inputIsValid = () => {
        return !(inputText.trim() === "")
    }

    const submitNewTodo = () => {
        if (!inputIsValid()) return;
        setTodoList([...todoList, inputText]);
        setInputText("");
    };

    const deleteTodo = (index: number) => {
        let todoListCopy = [...todoList];
        todoListCopy.splice(index, 1);
        setTodoList(todoListCopy);
    };

    return (
        <View style={styles.rootContainer}>
            <StatusBar style="auto" />
            <Header headerText="My ToDo list" testID="header" />
            <TodoList todoList={todoList} deleteTodo={deleteTodo} />
            <View style={styles.inputSection}>
                <View style={styles.inputWrapper}>
                    <Input inputText={inputText} setInputText={setInputText} testID="input-new-todo" />
                </View>
                <View style={styles.primaryButtonWrapper}>
                    <PrimaryButton onPress={submitNewTodo} inputIsValid={inputIsValid} title="Add todo" accessibilityLabel="Add a new todo to the list" testID="button-submit-new-todo" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "#F3F0F1",
        alignItems: "center",
        justifyContent: "space-between",
    },
    inputSection: {
        backgroundColor: "yellow", // Temporary background to visualize the area
        width: "100%",
        alignItems: "center",
        paddingVertical: 25,
    },
    inputWrapper: {
        width: "100%",
        paddingHorizontal: 15,
    },
    primaryButtonWrapper: {
        marginTop: 15,
    }
});
