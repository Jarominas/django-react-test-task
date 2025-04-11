import React from 'react'
import api from '../api'
import { toast } from 'react-toastify'

const useTodos = () => {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await api.get('/api/todos/')
            setTodos(response.data)
        } catch (error) {
            console.error('Error fetching todos:', error)
            setError('Failed to fetch todos. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const addTodo = async (newTodo) => {
        try {
            setLoading(true)
            setError(null)
            const response = await api.post('/api/todos/', newTodo)
            setTodos((prevTodos) => [response.data, ...prevTodos])
            toast.success('Task added successfully!')
            return { success: true, data: response.data }
        } catch (error) {
            console.error('Error adding todo:', error)
            setError('Failed to add todo. Please try again.')
            return { success: false, error }
        } finally {
            setLoading(false)
        }
    }

    const updateTodo = async (id, updatedTodo) => {
        try {
            setError(null)
            const response = await api.put(`/api/todos/${id}/`, updatedTodo)
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? response.data : todo))
            )
            toast.success('Task updated successfully!')
            return { success: true, data: response.data }
        } catch (error) {
            console.error('Error updating todo:', error)
            setError('Failed to update todo. Please try again.')
            return { success: false, error }
        }
    }

    const deleteTodo = async (id) => {
        try {
            setError(null)
            await api.delete(`/api/todos/delete/${id}/`)
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
            toast.success('Task deleted successfully!')
            return { success: true }
        } catch (error) {
            console.error('Error deleting todo:', error)
            setError('Failed to delete todo. Please try again.')
            return { success: false, error }
        }
    }

    const toggleComplete = async (id, completed) => {
        const todoToUpdate = todos.find((todo) => todo.id === id)
        if (todoToUpdate) {
            return await updateTodo(id, { ...todoToUpdate, completed: !completed })
        }
        return { success: false, error: 'Todo not found' }
    }

    return {
        todos,
        loading,
        error,
        fetchTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
    }
}

export default useTodos
