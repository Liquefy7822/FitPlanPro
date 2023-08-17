import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function CustomWorkouts() {
  const [workoutText, setWorkoutText] = useState('');

  // Load workout text from local storage when the page loads
  useEffect(() => {
    const savedWorkoutText = localStorage.getItem('customWorkout');
    if (savedWorkoutText) {
      setWorkoutText(savedWorkoutText);
    }
  }, []);

  const handleWorkoutChange = (event) => {
    const newText = event.target.value;
    setWorkoutText(newText);
    // Save workout text to local storage
    localStorage.setItem('customWorkout', newText);
  };

  return (
    <div className="container">
      <Head>
        <title>Custom Workouts - Your Fitness App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Custom Workouts" />
        <p className="description">
          Create and manage your own custom workout plans here.
        </p>

        <textarea
          value={workoutText}
          onChange={handleWorkoutChange}
          placeholder="Enter your custom workout plan here..."
          rows={10}
          cols={50}
        />

        <p>Here's your workout plan:</p>
        <pre>{workoutText}</pre>
      </main>

      <Footer />
    </div>
  )
}

