import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';

function GoalSettingForm() {
  const [formData, setFormData] = useState({
    goals: [],
    age: 0,
    fitness_level: '',
    time_available: 0,
  });
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [showScoreMessage, setShowScoreMessage] = useState(false);

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

    // Calculate user's score based on form inputs
    let score = 0;
    // Add scoring logic based on the user's inputs
    score += calculateScoreForGoals(formData.goals);
    score += calculateScoreForAge(formData.age);
    score += calculateScoreForFitnessLevel(formData.fitness_level);
    score += calculateScoreForTimeAvailable(formData.time_available);

    // Set the user's score
    setUserScore(score);
    // Show the score message
    setShowScoreMessage(true);
  };

  // Define scoring functions for each input
  const calculateScoreForGoals = (goals) => {
    // Implement scoring logic for goals here
    return goals.length * 5; // Example: Score based on the number of selected goals
  };

  const calculateScoreForAge = (age) => {
    // Implement scoring logic for age here
    return Math.max(0, 30 - age); // Example: Score based on age (higher age, lower score)
  };

  const calculateScoreForFitnessLevel = (fitness_level) => {
    // Implement scoring logic for fitness level here
    if (fitness_level === 'beginner') {
      return 10;
    } else if (fitness_level === 'intermediate') {
      return 20;
    } else if (fitness_level === 'advanced') {
      return 30;
    }
    return 0;
  };

  const calculateScoreForTimeAvailable = (time_available) => {
    // Implement scoring logic for time available here
    return Math.min(time_available / 10, 30); // Example: Score based on time available (max score is 30)
  };

  // Define different messages based on the user's score
  let message = '';
  if (showScoreMessage) {
    if (userScore <= 10) {
      message = "Your score is low. Consider a beginner's workout plan.";
    } else if (userScore <= 20) {
      message = "Your score is moderate. Try an intermediate workout plan.";
    } else if (userScore <= 30) {
      message = "Your score is good. You can follow an advanced workout plan.";
    } else {
      message = "Your score is excellent. You are ready for an advanced workout!";
    }
  }

  return (
    <div>
      <Header title="Goal Setting" />
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
        </div> {/* Add closing tag for <div> */}
        <div>
          <label htmlFor="time_available">Time Available (minutes):</label>
          <input
            type="number"
            name="time_available"
            id="time_available"
            value={formData.time_available}
            onChange={handleInputChange}
        </div>
        <button type="submit">Generate Workout Plan</button>
      </form>
      {showScoreMessage && <p>{message}</p>}
      <Footer />
    </div>
  );
}

export default GoalSettingForm;

