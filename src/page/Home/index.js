import { useEffect, useState } from 'react';
import './home.css';
import Row from '../../Component/row';
import { addTodo, getTodos } from '../../services/api';
import { v4 as uuidv4 } from 'uuid';

export default function HomePage() {
 const [todos, setTodos] = useState([]);

 useEffect(() => {
    getTodos()
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => {
        console.log(error);
      });
 }, []);

 async function newTodo() {
  let title = prompt('Nouvelle tâche');
  let todo = {
     id: uuidv4(),
     title,
     status: 'A faire',
  };
  try {
     await addTodo(todo);
     getTodos().then((response) => {
      setTodos(response);
    })
  } catch (error) {
     console.log(error);
  }
 }

 return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenue sur la page d'accueil de l'application TODO !
        </p>
      </header>
      <button className='CreateNewTask' onClick={newTodo}> Nouvelle tâche </button>

      <table className="table">
            <thead className="thead">
                <tr>
                    <th>Titre</th>
                    <th>Statut</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos && todos.map((task) => (
                    <Row key={task.id} object={task} />
                ))}
            </tbody>
        </table>
   </div>
 );
}