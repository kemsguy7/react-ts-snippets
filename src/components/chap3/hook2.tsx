import React, { useState } from 'react';
interface User {
  name: string;
  age: number;
  email: string;
}
//handlig complex state with ts

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    age: 25,
    email: 'johndoe@gmial.com',
  });

  const updateUserName = () => {
    setUser({ ...user, name: 'Jane Doe' });
  };

  return (
    <div>
      <h1>User Profile </h1>
      <p> Name: {user.name}</p>
      <p> Age: {user.age}</p>
      <p> Email: {user.email}</p>
      <button onClick={updateUserName}>Click to update Name</button>
    </div>
  );
};

//handling arrays in state with ts
interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: 'Learn React', completed: false },
    { id: 2, description: 'Learn TypeScript', completed: false },
  ]);

  const addTask = (description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {' '}
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.description}
          </li>
        ))}
      </ul>
      <button onClick={() => addTask('New Task')}> Add Task </button>
    </div>
  );
};

export default UserProfile;
