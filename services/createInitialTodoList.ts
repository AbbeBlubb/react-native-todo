import { todoFactory } from "./utils";
import { TTodoList } from "./types";

const todoTexts = [
  "Remove snow from car",
  "Send postal card",
  "Buy a Christmas tree",
  "Studded tires for the pram",
  "Decorate the Christmas tree",
  "How to make Persian rice?",
  "Find someone to roll meatballs",
];

const createTodoList = (list: string[]): TTodoList => {
  return list.map((todoText) => todoFactory(todoText));
};

export const createInitialTodoList = (): TTodoList => {
  return createTodoList(todoTexts);
};
