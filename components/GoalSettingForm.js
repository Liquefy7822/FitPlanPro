import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

function GoalSettingForm() {
  const [formData, setFormData] = useState({
    goals: [],
    age: 0,
    fitness_level: '',
    time_available: 0,
  });
  const [workoutPlan, setWorkoutPlan] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/generate-workout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setWorkoutPlan(data.workout_plan);
      } else {
        console.error('Error generating workout plan');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="goals">Fitness Goals:</label>
          <select
            name="goals"
            id="goals"
            multiple
            onChange={handleInputChange}
          >
            <option value="strength">Strength</option>
            <option value="flexibility">Flexibility</option>
            <option value="endurance">Endurance</option>
          </select>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="fitness_level">Fitness Level:</label>
          <select
            name="fitness_level"
            id="fitness_level"
            value={formData.fitness_level}
            onChange={handleInputChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label htmlFor="time_available">Time Available (minutes):</label>
          <input
            type="number"
            name="time_available"
            id="time_available"
            value={formData.time_available}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Generate Workout Plan</button>
      </form>
      {/* Link to the personalized workout page */}
      <Link href="/personalized-workout">
        <button>Go to Personalized Workout Page</button>
      </Link>
    </div>
  );
}

export default GoalSettingForm;


