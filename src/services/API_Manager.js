import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const getTodos = () => {
  return axiosInstance.get("/todo")
}

const addTodo = (todo) => {
  return axiosInstance.post("/todo", todo)
}

const updateTodo = (todo) => {
  return axiosInstance.put(`/todo/${todo.id}`, todo)
}

const deleteTodo = (id) => {
  return axiosInstance.delete(`/todo/${id}`)
}

const API_Manager = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
}

export default API_Manager