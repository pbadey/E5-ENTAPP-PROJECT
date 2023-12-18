import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

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
