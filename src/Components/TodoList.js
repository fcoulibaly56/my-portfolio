import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const TodoContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const TodoTitle = styled.h2`
  color: #6d6875;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const TodoInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TodoInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5989b;
  border-radius: 8px;
  font-size: 1rem;
  color: #6d6875;
  transition: border-color 0.3s;

  &:focus {
    border-color: #b5838d;
    outline: none;
  }
`;

const TodoButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #e5989b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b5838d;
  }
`;

const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  margin: 0.5rem 0;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const TodoText = styled.span`
  flex: 1;
  margin-right: 1rem;
  color: #6d6875;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4c4c;
  }
`;

// Composant To-Do List
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TodoContainer>
      <TodoTitle>To-Do List</TodoTitle>
      <TodoInputContainer>
        <TodoInput
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <TodoButton onClick={addTask}>Add</TodoButton>
      </TodoInputContainer>
      <TodoListContainer>
        {tasks.map((task) => (
          <TodoItem key={task.id}>
            <TodoText
              $completed={task.completed}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </TodoText>
            <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
          </TodoItem>
        ))}
      </TodoListContainer>
    </TodoContainer>
  );
};

export default TodoList;