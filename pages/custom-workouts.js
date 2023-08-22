import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function CustomWorkoutsPage() {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    workout: '',
    repetitions: 0, // New feature: Number of repetitions
    duration: 0,   // New feature: Duration in minutes
  });

  // Function to add a new custom workout
  const handleAddWorkout = () => {
    if (
      newWorkout.workout.trim() !== '' &&
      newWorkout.name.trim() !== '' &&
      (newWorkout.repetitions > 0 || newWorkout.duration > 0)
    ) {
      const updatedWorkouts = [...workouts, { ...newWorkout }];
      setWorkouts(updatedWorkouts);
      setNewWorkout({
        name: '',
        workout: '',
        repetitions: 0,
        duration: 0,
      });
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
          value={newWorkout.name}
          onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
        />
        <textarea
          placeholder="Enter your custom workout"
          value={newWorkout.workout}
          onChange={(e) => setNewWorkout({ ...newWorkout, workout: e.target.value })}
        ></textarea>
        <input
          type="number"
          placeholder="Repetitions (optional)"
          value={newWorkout.repetitions}
          onChange={(e) => setNewWorkout({ ...newWorkout, repetitions: parseInt(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Duration (minutes, optional)"
          value={newWorkout.duration}
          onChange={(e) => setNewWorkout({ ...newWorkout, duration: parseInt(e.target.value) })}
        />
        <button onClick={handleAddWorkout}>Save Workout</button>
      </div>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <h2>{workout.name}</h2>
            <p>{workout.workout}</p>
            {workout.repetitions > 0 && <p>Repetitions: {workout.repetitions}</p>}
            {workout.duration > 0 && <p>Duration: {workout.duration} minutes</p>}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default CustomWorkoutsPage;

