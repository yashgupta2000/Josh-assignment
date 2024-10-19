import { useState } from 'react';
import TaskItem from './TaskItem';

const TaskBoard = ({ tasks, updateTask, deleteTask }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const filteredTasks = tasks
    .filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    })
    .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

    return (
        <div className="task-board mt-10 rounded-sm flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-600 p-1 rounded-sm my-4 w-2/5"
          />
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
            ))
          ) : (
            <p className="text-center mt-4">No tasks found</p>
          )}
        </div>
      );
      
};

export default TaskBoard;
