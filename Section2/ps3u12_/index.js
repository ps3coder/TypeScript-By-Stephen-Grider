"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
var logTodo = function (id, title, completed) {
  console.log(
    "The Todo with ID: "
      .concat(id, ' has a title of: "')
      .concat(title, '" and is it finished: ')
      .concat(completed)
  );
};
axios_1.default.get(url).then(function (response) {
  var todo = response.data;
  var ID = todo.id;
  var title = todo.title;
  var completed = todo.completed;
  logTodo(ID, title, completed);
});
