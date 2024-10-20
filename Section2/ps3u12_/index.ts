import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The Todo with ID: ${id} has a title of: "${title}" and is it finished: ${completed}`);
};

axios.get(url).then(response => {
    const todo = response.data as Todo;
    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(ID, title, completed);
});