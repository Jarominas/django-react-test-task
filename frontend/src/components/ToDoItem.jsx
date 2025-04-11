import { Loader2, Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const ToDoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    const [isDeleting, setIsDeleting] = React.useState(false)

    const handleDelete = async () => {
        setIsDeleting(true)
        await deleteTodo(todo.id)
        setIsDeleting(false)
    }
    return (
        <div className='flex items-center gap-4'>
            <div className='flex-shrink-0 pt-1'>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id, todo.completed)}
                    className='h-5 w-5 text-purple-600 focus:ring-purple-500 rounded cursor-pointer accent-purple-600'
                />
            </div>

            <div className='flex-1 min-w-0'>
                <h3
                    className={`text-lg font-medium ${
                        todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                    }`}
                >
                    {todo.title}
                </h3>
                {todo.description && (
                    <p
                        className={`mt-1 text-sm ${
                            todo.completed ? 'line-through text-gray-400' : 'text-gray-600'
                        }`}
                    >
                        {todo.description}
                    </p>
                )}
                <div className='flex items-center justify-between'>
                    <p className='mt-1  text-xs text-gray-500'>
                        Created: {new Date(todo.created_at).toLocaleString()}
                    </p>
                </div>
            </div>

            <div className='flex-shrink-0 flex space-x-2'>
                <button
                    onClick={() => editTodo(todo.id)}
                    className='px-2 py-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 hover:cursor-pointer hover:text-purple-600 transition-all duration-200'
                >
                    <Pencil className='w-6 h-6' />
                </button>
                <button
                    onClick={() => handleDelete(todo.id)}
                    className='px-2 py-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 hover:cursor-pointer hover:text-red-600 transition-all duration-200'
                >
                    {isDeleting ? (
                        <Loader2 className='w-6 h-6 animate-spin' />
                    ) : (
                        <Trash2 className='w-6 h-6' />
                    )}
                </button>
            </div>
        </div>
    )
}

export default ToDoItem
