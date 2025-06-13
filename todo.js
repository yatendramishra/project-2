import React, { useState } from 'react';
import './todo.css';

const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newTodo, setNewTodo] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const openModal = (index = null) => {
        if (index !== null) {
            setEditingIndex(index);
            setEditText(todos[index]);
        } else {
            setEditingIndex(null);
            setNewTodo('');
        }
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setNewTodo('');
        setEditText('');
        setEditingIndex(null);
    };

    const handleSave = () => {
        if (editingIndex !== null) {
            const updated = [...todos];
            updated[editingIndex] = editText;
            setTodos(updated);
        } else if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
        }
        closeModal();
    };

    const deleteTodo = (index) => {
        const updated = [...todos];
        updated.splice(index, 1);
        setTodos(updated);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className="todo-header">
                <h2>To-Do Page</h2>
                <p>You can add your To-Do list here separately.</p>
            </div>


            <main className="main-content">
                <div className="todo-container">
                    <h3>To-Do List</h3>
                    <button onClick={() => openModal()} className="add-task-btn">+ Add Task</button>

                    <ul className="todo-list">
                        {todos.map((todo, index) => (
                            <li key={index}>
                                <span>{todo}</span>
                                <div>
                                    <button onClick={() => openModal(index)}>✏️</button>
                                    <button onClick={() => deleteTodo(index)}>❌</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{editingIndex !== null ? 'Edit Task' : 'Add New Task'}</h3>
                        <input
                            type="text"
                            value={editingIndex !== null ? editText : newTodo}
                            onChange={(e) =>
                                editingIndex !== null ? setEditText(e.target.value) : setNewTodo(e.target.value)
                            }
                            placeholder="Enter task"
                        />
                        <div className="modal-buttons">
                            <button onClick={handleSave}>Save</button>
                            <button onClick={closeModal} className="cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToDo;
