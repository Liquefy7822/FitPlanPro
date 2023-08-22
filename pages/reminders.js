import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function RemindersPage() {
  // Sample list of reminders with checkboxes
  const [reminders, setReminders] = useState([
    { text: 'Task 1: Complete the workout at 4 PM', checked: false },
    { text: 'Task 2: Prepare a healthy meal for dinner', checked: false },
    { text: 'Task 3: Review fitness goals for the week', checked: false },
  ]);

  const [newReminder, setNewReminder] = useState('');

  // Function to toggle the checkbox
  const handleCheckboxChange = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].checked = !updatedReminders[index].checked;
    setReminders(updatedReminders);
  };

  // Function to add a new reminder
  const handleAddReminder = () => {
    if (newReminder.trim() !== '') {
      const updatedReminders = [
        ...reminders,
        { text: newReminder, checked: false },
      ];
      setReminders(updatedReminders);
      setNewReminder('');
    }
  };

  return (
    <div>
      <Header title="Reminders" />
      <h1>Reminders</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new reminder"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
        />
        <button onClick={handleAddReminder}>Add</button>
      </div>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={reminder.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              {reminder.text}
            </label>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default RemindersPage;
