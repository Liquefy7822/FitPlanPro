import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useRouter } from 'next/router'; // Import useRouter for programmatic navigation

export default function Home() {
  const router = useRouter();

  // Function to navigate to the specified page
  const navigateToPage = (page) => {
    router.push(page);
  };

  return (
    <div className="container">
      <Head>
        <title>Your Fitness App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Your Fitness App!" />
        <p className="description">
          Get started by exploring the following features:
        </p>

        <div className="feature-columns">
          <div className="feature-column">
            <button onClick={() => navigateToPage('/goal-setting')}>Goal Setting</button>
            <button onClick={() => navigateToPage('/personalized-workout')}>Personalized Workout Plans</button>
            <button onClick={() => navigateToPage('/exercise-library')}>Exercise Library</button>
          </div>
          <div className="feature-column">
            <button onClick={() => navigateToPage('/custom-workouts')}>Custom Workouts</button>
            <button onClick={() => navigateToPage('/progress-tracking')}>Progress Tracking</button>
            <button onClick={() => navigateToPage('/reminders')}>Reminder and Scheduling</button>
            <button onClick={() => navigateToPage('/nutrition-tips')}>Nutrition and Hydration Tips</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

