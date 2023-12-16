import { useEffect, useState } from 'react';
import './home.css';
import API_Manager from '../../services/API_Manager';
import Row from '../../Component/row';

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    API_Manager.getTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addTodo() {
    let text = prompt('Nouvelle tâche');
    let todo = {
      text,
      status: false,
    };

    API_Manager.addTodo(todo)
      .then((response) => {
        setTodos([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const tasks = [
    {
      id: 1,
      title: 'Ma tâche',
      status: false,
    },
    {
      id: 2,
      title: 'Ma tâche 2',
      status: false,
    },
    {
      id: 3,
      title: 'Ma tâche 3',
      status: false,
    },
    
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenue sur la page d'accueil de l'application TODO !
        </p>

      </header>
      <button className='CreateNewTask' onClick={addTodo}> Nouvelle tâche </button>

      <table className="table">
            <thead className="thead">
                <tr>
                    <th>Terminer</th>
                    <th>Titre</th>
                    <th>Statut</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <Row key={task.id} object={task} />
                ))}
            </tbody>
        </table>
  
    </div>
  );
}