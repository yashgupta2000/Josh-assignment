import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      completed: false,
    };
    addTask(newTask);
    setTaskTitle('');
    setTaskDescription('');
    setTaskPriority('low');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-lg m-auto'>
      <input
        className='border  border-gray-600 p-1 rounded-sm my-2'
        type="text"
        placeholder="Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        className='border border-gray-600 p-1 rounded-sm my-2 w-full max-w-full'
        placeholder="Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        rows="4" // To give it some initial height
      ></textarea>
      <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)} 
        className='border  border-gray-600 p-1 rounded-sm my-2'
        >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className='bg-green-400 p-1 rounded-sm' type="submit">Add Task</button>
    </form>
  );

};

export default TaskForm;
