import { TTodo } from "./types";

export const todoFactory = (inputText: string): TTodo => {
  return {
    text: inputText,
    key: Math.random(),
  };
};
