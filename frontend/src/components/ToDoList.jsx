import { useState } from 'react'
import TodoEditForm from './ToDoEditForm'
import TodoItem from './ToDoItem'

const TodoList = ({ todos, toggleComplete, deleteTodo, updateTodo }) => {
    const [editingId, setEditingId] = useState(null)

    const handleEdit = (id) => {
        setEditingId(id)
    }

    const handleCancelEdit = () => {
        setEditingId(null)
    }

    const handleUpdate = async (id, updatedTodo) => {
        await updateTodo(id, updatedTodo)
        setEditingId(null)
    }

    if (todos.length === 0) {
        return <p className='text-center text-gray-500 py-4'>No tasks yet. Add one above!</p>
    }

    return (
        <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Your Tasks List</h2>

            <ul className='space-y-4'>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className='p-4 bg-gray-50 rounded-lg group hover:cursor-pointer shadow-sm transition-colors duration-200 hover:bg-gray-100'
                    >
                        {editingId === todo.id ? (
                            <TodoEditForm
                                todo={todo}
                                updateTodo={handleUpdate}
                                cancelEdit={handleCancelEdit}
                            />
                        ) : (
                            <TodoItem
                                todo={todo}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                editTodo={handleEdit}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
