"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = " https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then((response) => {
  const todo = response.data;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  // console.log(`The Todo with ID : ${ID} Has a title of : ${title} and is it finished : ${completed}`)
  logTodo(ID, title, completed);
});
const logTodo = (id, title, completed) => {
  console.log(
    `The Todo with ID : ${id} Has a title of : ${title} and is it finished : ${completed}`
  );
};
