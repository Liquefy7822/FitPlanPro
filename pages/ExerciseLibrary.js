import { useEffect, useState } from 'react';

function ExerciseLibrary() {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    // Load the exercise list when the component mounts
    fetch('/exercises.json')
      .then((response) => response.json())
      .then((data) => {
        // Store the exercise list in state
        setExerciseList(data);
      })
      .catch((error) => {
        console.error('Error loading exercise list:', error);
      });
  }, []);

  return (
    <div>
      <h1>Exercise Library</h1>
      <ul>
        {Object.keys(exerciseList).map((category) => (
          <li key={category}>
            <h2>{category}</h2>
            <ul>
              {exerciseList[category].map((exercise) => (
                <li key={exercise.name}>
                  <h3>{exercise.name}</h3>
                  <p>Description: {exercise.description}</p>
                  <img src={exercise.image} alt={exercise.name} />
                  <video controls>
                    <source src={exercise.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseLibrary;
