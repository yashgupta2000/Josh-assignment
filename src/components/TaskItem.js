import { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const [editedPriority, setEditedPriority] = useState(task.priority);

    const handleUpdate = () => {
        updateTask({ ...task, title: editedTitle, description: editedDescription, priority: editedPriority });
        setIsEditing(false);
    };

    return (
        <div className={`task-item rounded-sm border-2 ${task.priority === 'high' ? 'border-red-500' : task.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'} border border-gray-500 p-4 m-auto mt-10 w-4/5 flex justify-between items-center`}>
            {isEditing ? (
                <div className="flex w-full justify-between items-center">
                    <div className="w-full">
                        <input
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="block mb-2 border p-1 w-full"
                        />
                        <textarea
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            className="block mb-2 border p-1 w-full"
                        ></textarea>
                        <select
                            value={editedPriority}
                            onChange={(e) => setEditedPriority(e.target.value)}
                            className="block mb-2 border p-1 w-full"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white px-4 py-2 ml-4"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className={`w-full`}>
                    <div className="">
                        <h3 className="mb-1"><strong>{task.title}</strong></h3>
                        <p className="mb-3">{task.description}</p>
                    </div>


                    <span>{task.priority}</span>

                    <div className="flex justify-around">
                        <button
                            className="bg-yellow-500 text-white px-2 py-1"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 text-white px-2 py-1"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-green-500 text-white px-2 py-1"
                            onClick={() => updateTask({ ...task, completed: !task.completed })}
                        >
                            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskItem;
