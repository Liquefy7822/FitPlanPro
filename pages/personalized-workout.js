
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

// Sample workout data (replace with your actual data)
const workoutData = [
  { name: 'Exercise 1', description: 'Description of Exercise 1' },
  { name: 'Exercise 2', description: 'Description of Exercise 2' },
  // Add more exercises here
];

function PersonalizedWorkout() {
  const router = useRouter();

  // Retrieve form data from query parameters
  const { goals, age, fitness_level, time_available } = router.query;

  // Process form data and generate personalized workout plan
  // You'll need to implement this part

  // For this example, we'll just display the workout data
  return (
    <div>
      <h1>Your Personalized Workout</h1>
      <p>Goals: {goals}</p>
      <p>Age: {age}</p>
      <p>Fitness Level: {fitness_level}</p>
      <p>Time Available: {time_available} minutes</p>

      <h2>Workout Plan</h2>
      <ul>
        {workoutData.map((exercise, index) => (
          <li key={index}>
            <strong>{exercise.name}</strong>
            <p>{exercise.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalizedWorkout;
