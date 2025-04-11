import React from 'react'
import TodoForm from './components/ToDoForm'
import TodoList from './components/ToDoList'
import { ToastContainer, toast } from 'react-toastify'
import useTodos from './hooks/useTodos'

function App() {
    const { todos, loading, error, addTodo, updateTodo, deleteTodo, toggleComplete } = useTodos()

    React.useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    return (
        <div className='min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 p-6'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-3xl font-bold text-center text-indigo-800 mb-8'>
                    Meteora Fall To Do App
                </h1>

                <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
                    <TodoForm addTodo={addTodo} loading={loading} />
                </div>

                <div className='bg-white rounded-lg shadow-md p-6'>
                    {loading ? (
                        <div className='flex justify-center items-center'>
                            <div className='h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent'></div>
                        </div>
                    ) : (
                        <TodoList
                            todos={todos}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                        />
                    )}
                </div>
            </div>

            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme='colored'
            />
        </div>
    )
}

export default App
