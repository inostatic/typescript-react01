import React from "react"
import {ITodo} from "../interface";

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
    if (todos.length === 0) {
        return (
            <p className="center">Пока дел нет!</p>
        )
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map((item, index) => {
                const classes = ['todo']
                if (item.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={onToggle.bind(null, item.id)}
                            />
                            <span>{item.title}</span>
                            <i
                                className="material-icons red-text"
                                onClick={event => removeHandler(event, item.id)}
                            >delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}