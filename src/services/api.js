import axios from 'axios';

const instance = axios.create({
  baseURL: "https://ang7w8sshl.execute-api.eu-west-2.amazonaws.com/dev"
});

export async function getTodos() {
  try {
    const response = await instance.get('/todo');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function addTodo(todo) {
  try {
    const response = await instance.post('/todo', todo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateTodo(todo) {
  try {
    const response = await instance.put(`/todo/${todo.id}`, todo)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo(id) {
  try {
    const response = await instance.delete(`/todo/${id}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }

}