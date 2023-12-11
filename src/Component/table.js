export default function Table({ tasks, modifyTask, deleteTask }) {
    return (
        <table className="table">
            <thead className="thead">
                <tr>
                    <th>Titre</th>
                    <th>Statut</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>
                            <button className='liteButton' onClick={modifyTask(task.id)}>Modifier</button>
                            <button className='liteButton' onClick={deleteTask(task.id)}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}