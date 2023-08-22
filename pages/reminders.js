import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function RemindersPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleToggleCompleted = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);

    const completedTask = tasks[taskIndex];
    setCompletedTasks([...completedTasks, completedTask]);

    setTasks(updatedTasks);
  };

  const handleRemoveCompleted = () => {
    setCompletedTasks([]);
  };

  return (
    <div>
      <Header title="Reminders" />
      <h1>Reminders</h1>
      <div>
        <input
          type="text"
          placeholder="Add a reminder"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />{' '}
          Show Completed
        </label>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: showCompleted && completedTasks.includes(task) ? 'line-through' : 'none',
              }}
            >
              {task}
            </span>
            {!completedTasks.includes(task) && (
              <button onClick={() => handleToggleCompleted(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
      {showCompleted && (
        <div>
          <button onClick={handleRemoveCompleted}>Remove Completed</button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RemindersPage;

