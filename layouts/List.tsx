import React from "react";
import { FlatList } from "react-native";
import { Row } from "../components/Row";
import { TTodoList } from "../services/types";

interface IList {
  todoList: TTodoList;
  deleteTodo: CallableFunction;
}

export const List = ({ todoList, deleteTodo }: IList) => {
  return (
    <FlatList
      data={todoList}
      renderItem={({ item }) => <Row item={item} deleteTodo={deleteTodo} />}
    />
  );
};
