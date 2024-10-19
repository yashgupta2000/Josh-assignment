import React, { useState } from 'react';
import TaskBoard from '../components/TaskBoard';
import TaskForm from '../components/TaskForm';

const HomePage = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1 className='text-2xl text-center  mb-6'>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskBoard tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const tasks = [
    { id: 1, title: 'First Task', description: 'Sample task', priority: 'high', completed: false },
    { id: 2, title: 'Second Task', description: 'Another task', priority: 'medium', completed: false },
  ];

  return { props: { initialTasks: tasks } };
};

export default HomePage;
