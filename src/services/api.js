import axios from 'axios';

const instance = axios.create({
  baseURL: "https://7sbu9rt3z9.execute-api.eu-west-2.amazonaws.com/prod",
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
