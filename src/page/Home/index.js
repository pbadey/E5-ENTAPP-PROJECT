import Table from '../../Component/table';
import './home.css';

export default function HomePage() {
  const createNewTask = () => {
    console.log('TODO: create new task');
  }
  const modifyTask = (id) => () => {
    console.log(`TODO: modify task ${id}`);
  }
  const deleteTask = (id) => () => {
    console.log(`TODO: delete task ${id}`);
  }

  const tasks = [
    {
      id: 1,
      title: 'Ma tâche',
      description: 'Ma description',
      status: 'En cours',
    },
    {
      id: 2,
      title: 'Ma tâche 2',
      description: 'Ma description 2',
      status: 'Fini',
    },
    {
      id: 3,
      title: 'Ma tâche 3',
      description: 'Ma description 3',
      status: 'En attente',
    },
    {
      id: 4,
      title: 'Ma tâche 4',
      description: 'Ma description 4',
      status: 'A faire',
    },
    {
      id: 5,
      title: 'Ma tâche 5',
      description: 'Ma description 5',
      status: 'En cours',
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenue sur la page d'accueil de l'application TODO !
        </p>

      </header>
      <button className='CreateNewTask' onClick={createNewTask}>Créer une nouvelle tâche</button>

      <Table tasks={tasks} modifyTask={modifyTask} deleteTask={deleteTask} />
    </div>
  );
}

