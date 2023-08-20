import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

function GoalSettingForm() {
  const [formData, setFormData] = useState({
    goals: [],
    age: 0,
    fitness_level: '',
    time_available: 0,
  });

  const router = useRouter(); // Initialize the router

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
      // Collect and process form data here as before

      // Redirect to the personalized workout page
      router.push('/personalized-workout');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form input fields */}
        <button type="submit">Generate Workout Plan</button>
      </form>
    </div>
  );
}

export default GoalSettingForm;


