import { useEffect, useState } from "react"
import { updateTodo, deleteTodo, getTodos } from "../services/api"

export default function Row(props) {
    // Retrieve data from props
    const { id, title, status } = props.object

    // Set state variables
    const [textForm, setText] = useState(title)
    const [statusForm, setStatus] = useState(status)

    // Set default value
    useEffect(() => {
        setText(title)
        setStatus(status)
    }, [])

    // Delete function triggered by button
    const deleteTodos = (id) => {
        deleteTodo(id)
            .then(() => {
                document.getElementById(id).remove()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function modifyTodos() {
        let choices = ["a faire", "fait", "en cours"];
        let selectedChoice = prompt('Nouveau statut', choices.join(', '));

        if (!selectedChoice) {
            console.log('Aucun choix sélectionné');
            return;
        }

        selectedChoice = selectedChoice.toLowerCase();
        let status = '';
        if (choices.includes(selectedChoice)) {
            status = selectedChoice;
        } else {
            console.log('Choix invalide');
            return;
        }

        let todo = {
            id: id,
            title: title,
            status: status,
        };
        try {
            await updateTodo(todo);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <tr key={id} id={id}>
            <td>{title}</td>
            <td>{status}</td>
            <td>
                <button className='liteButton' onClick={() => modifyTodos(id)}>Modifier</button>
                <button className='liteButton' onClick={() => deleteTodos(id)} >Supprimer</button>

            </td>
        </tr>
    );
}