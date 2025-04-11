import { Loader2 } from 'lucide-react'
import React from 'react'

const TodoEditForm = ({ todo, updateTodo, cancelEdit }) => {
    const [formData, setFormData] = React.useState({
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
    })
    const [updateLoading, setUpdateLoading] = React.useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.title.trim()) return
        setUpdateLoading(true)
        await updateTodo(todo.id, formData)
        setUpdateLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <input
                    type='text'
                    id='edit-title'
                    name='title'
                    placeholder='Task Title'
                    value={formData.title}
                    onChange={handleChange}
                    disabled={updateLoading}
                    className='w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                    required
                />
            </div>

            <div>
                <textarea
                    id='edit-description'
                    name='description'
                    placeholder='Task Description'
                    value={formData.description}
                    onChange={handleChange}
                    disabled={updateLoading}
                    rows='3'
                    className='w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                ></textarea>
            </div>

            <div className='flex items-center'>
                <input
                    type='checkbox'
                    id='edit-completed'
                    name='completed'
                    checked={formData.completed}
                    onChange={handleChange}
                    className='h-4 w-4 text-purple-600 focus:ring-purple-500 rounded accent-purple-500'
                />
                <label htmlFor='edit-completed' className='ml-2 block text-sm text-gray-700'>
                    Completed
                </label>
            </div>

            <div className='flex space-x-2'>
                <button
                    type='submit'
                    disabled={updateLoading}
                    className='w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 flex items-center justify-center'
                >
                    {updateLoading ? <Loader2 className='animate-spin' /> : 'Update Task'}
                </button>
                <button
                    disabled={updateLoading}
                    type='button'
                    onClick={cancelEdit}
                    className='flex-1 bg-gray-300 text-gray-800 hover:cursor-pointer  py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200'
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default TodoEditForm
