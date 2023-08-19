// components/GoalSettingForm.js
import React, { useState } from 'react';

function GoalSettingForm() {
  const [goals, setGoals] = useState('');
  const [age, setAge] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [sportsRequirements, setSportsRequirements] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server or perform necessary actions.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goals">Fitness Goals:</label>
        <input
          type="text"
          id="goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="fitnessLevel">Fitness Level:</label>
        <input
          type="text"
          id="fitnessLevel"
          value={fitnessLevel}
          onChange={(e) => setFitnessLevel(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="sportsRequirements">Sports Requirements:</label>
        <textarea
          id="sportsRequirements"
          value={sportsRequirements}
          onChange={(e) => setSportsRequirements(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GoalSettingForm;
