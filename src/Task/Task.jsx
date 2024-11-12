import React, { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Test task",
    priority: "High Priority",
    createdAt: "9-Feb-2024",
    assets: { files: 0, comments: 2, links: 0, progress: "0/1" },
    team: ["CA", "JS", "AJ"],
    status: "To Do",
  },
  // Add more initial tasks as shown in your image...
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "Normal Priority",
    createdAt: new Date().toLocaleDateString(),
    assets: { files: 0, comments: 0, links: 0, progress: "0/1" },
    team: [],
    status: "To Do",
  });

  // Function to add a new task
  const handleAddTask = () => {
    if (newTask.title.trim() === "") return; // Prevent empty task title
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setNewTask({
      title: "",
      priority: "Normal Priority",
      createdAt: new Date().toLocaleDateString(),
      assets: { files: 0, comments: 0, links: 0, progress: "0/1" },
      team: [],
      status: "To Do",
    });
  };

  // Function to handle changes in the new task input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <button onClick={() => handleAddTask()}>+ Create Task</button>

      <div>
        {/* New Task Form */}
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          placeholder="Enter task title"
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
        >
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Normal Priority">Normal Priority</option>
        </select>
      </div>

      {/* Task List */}
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Priority</th>
            <th>Created At</th>
            <th>Assets</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>{task.createdAt}</td>
              <td>
                {task.assets.comments} comments, {task.assets.files} files,{" "}
                {task.assets.links} links, {task.assets.progress}
              </td>
              <td>{task.team.join(", ")}</td>
              <td>
                <button>Edit</button>
                <button
                  onClick={() =>
                    setTasks(tasks.filter((t) => t.id !== task.id))
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
