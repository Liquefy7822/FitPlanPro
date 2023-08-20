import { useEffect, useState } from 'react';
import Header from '@components/Header'; // Import your header component
import Footer from '@components/Footer'; // Import your footer component
import { useRouter } from 'next/router';

function ExerciseLibrary() {
  const [exerciseList, setExerciseList] = useState({});
  const router = useRouter();

  // Sample exercise data (you can replace this with your actual data)
  const sampleExerciseData = {
    Category1: [
      {
        name: 'Exercise 1',
        description: 'Description of Exercise 1',
        image: 'image1.jpg',
        video: 'video1.mp4',
      },
      {
        name: 'Exercise 2',
        description: 'Description of Exercise 2',
        image: 'image2.jpg',
        video: 'video2.mp4',
      },
    ],
    Category2: [
      {
        name: 'Exercise 3',
        description: 'Description of Exercise 3',
        image: 'image3.jpg',
        video: 'video3.mp4',
      },
    ],
  };

  useEffect(() => {
    // You can set the exercise list here if needed
    setExerciseList(sampleExerciseData);
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <Header title="Exercise Library" /> {/* Header */}
      <h1>Exercise Library</h1>
      {Object.keys(exerciseList).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {exerciseList[category].map((exercise, index) => (
              <li key={index}>
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
        </div>
      ))}
      <button onClick={goBack}>Go Back</button> {/* Back button */}
      <Footer /> {/* Footer */}
    </div>
  );
}

export default ExerciseLibrary;
