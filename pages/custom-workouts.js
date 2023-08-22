import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function CustomWorkoutsPage() {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState('');
  const [workoutName, setWorkoutName] = useState('');

  // Function to add a new custom workout
  const handleAddWorkout = () => {
    if (newWorkout.trim() !== '' && workoutName.trim() !== '') {
      const updatedWorkouts = [
        ...workouts,
        { name: workoutName, workout: newWorkout },
      ];
      setWorkouts(updatedWorkouts);
      setNewWorkout('');
      setWorkoutName('');
    }
  };

  return (
    <div>
      <Header title="Custom Workouts" />
      <h1>Custom Workouts</h1>
      <div>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <textarea
          placeholder="Enter your custom workout"
          value={newWorkout}
          onChange={(e) => setNewWorkout(e.target.value)}
        ></textarea>
        <button onClick={handleAddWorkout}>Save Workout</button>
      </div>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <h2>{workout.name}</h2>
            <p>{workout.workout}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default CustomWorkoutsPage;
