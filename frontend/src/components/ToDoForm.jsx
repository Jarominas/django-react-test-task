import { Loader, Loader2 } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'

const TodoForm = ({ addTodo }) => {
    const [addLoading, setAddLoading] = React.useState(false)
    const [formData, setFormData] = React.useState({
        title: '',
        description: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.title.trim() || !formData.description.trim()) {
            toast.error('Please fill in all fields')
            return
        }
        setAddLoading(true)

        await addTodo({
            ...formData,
            completed: false,
        })

        setFormData({
            title: '',
            description: '',
        })
        setAddLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Add New Task</h2>

            <div>
                <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Task title'
                    value={formData.title}
                    onChange={handleChange}
                    disabled={addLoading}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
            </div>

            <div>
                <textarea
                    id='description'
                    name='description'
                    placeholder='Task desciption'
                    value={formData.description}
                    onChange={handleChange}
                    rows='3'
                    disabled={addLoading}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                ></textarea>
            </div>

            <button
                type='submit'
                className='w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 flex items-center justify-center'
            >
                {addLoading ? <Loader2 className='animate-spin' /> : 'Add Task'}
            </button>
        </form>
    )
}

export default TodoForm
