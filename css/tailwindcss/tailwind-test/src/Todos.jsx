import { useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    // vue 双向绑定 react 单向绑定
    const [newTodo, setNewTodo] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if( newTodo.trim()!== '' ) return 
        setTodos([...todos,newTodo])
        setNewTodo('')
    }
    return (
        <div className='container max-auto mt-4'>
            <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
            <form className="flex mb-4" onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    value={newTodo}
                    placeholder='Enter a todo...'
                    className="shadow appearance-none border w-full py-2 px-3 mr-2
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                    "
                    onChange={(e) => setNewTodo (e.target.value)}    
                />
                <button
                    type="submit" 
                    className="btn-primary"
                >Add</button>
            </form>
        </div>  
    )
}

export default Todos;