import { useEffect, useState } from "react"
import { updateTodo, deleteTodo } from "../services/api"

export default function Row(props) {
    // Retrieve data from props
    const { id, title, status } = props.object

    // Set state variables
    const [textForm, setText] = useState('')
    const [statusForm, setStatus] = useState(false)

    // Set default value
    useEffect(() => {
        setText(title)
        setStatus(status)
        console.log(status)
    }, [])

    // Update function triggered by checkbox
    const statusChange = (event) => {
        setStatus(event.target.checked)

        updateTodo({
            id: id,
            title: textForm,
            status: event.target.checked
        })
            .catch((error) => {
                console.log(error)
            })
    }

    // Update function triggered by text input
    const textChange = (event) => {
        setText(event.target.value)
    }

    // Post update to API
    const sendUpdate = (todo) => {
        updateTodo({
            id: id,
            title: textForm,
            status: statusForm
        })
            .catch((error) => {
                console.log(error)
            })
    }

    // Delete function triggered by button
    const deleteTodo = () => {
        deleteTodo(id)
            .then(() => {
                document.getElementById(id).remove()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <tr key={id}>
            <td>{title}</td>
            <td>{status}</td>
            <td>
                <button className='liteButton' >Modifier</button>
                <button className='liteButton' >Supprimer</button>

            </td>
        </tr>
    );
}