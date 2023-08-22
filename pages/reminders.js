import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function RemindersPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeCompleted = () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    setTasks(incompleteTasks);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });

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
        {sortedTasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            {!task.completed && (
              <button onClick={() => toggleCompleted(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
      {showCompleted && (
        <div>
          <button onClick={removeCompleted}>Remove Completed</button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RemindersPage;

