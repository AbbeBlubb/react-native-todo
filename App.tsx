import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { PrimaryButton } from "./components/PrimaryButton";
import { Input } from "./components/Input";

const TodoList = (props: { todoList: TodoList }) => {
    return (
        <View>
            {props.todoList.map((todo, index) => {
                return (
                  <View key={index}>
                    <Text>{todo}</Text>

                  </View>
                );
            })}
        </View>
    );
};

type Todo = string;
type TodoList = Array<Todo>;

export default function App() {
    const [inputText, setInputText] = useState<string>("hej");
    const [todoList, setTodoList] = useState<TodoList>([]);

    const submitNewTodo = () => {
        setTodoList([...todoList, inputText]);
        setInputText("");
    };

    return (
        <View style={styles.rootContainer}>
            <StatusBar style="auto" />
            <Text style={styles.header}>My ToDo list</Text>
            <TodoList todoList={todoList} />
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
