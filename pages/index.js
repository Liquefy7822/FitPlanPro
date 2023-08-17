import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Home() {
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

        <ul className="feature-list">
          <li><Link href="/goal-setting">Goal Setting</Link></li>
          <li><Link href="/personalized-workout">Personalized Workout Plans</Link></li>
          <li><Link href="/exercise-library">Exercise Library</Link></li>
          <li><Link href="/custom-workouts">Custom Workouts</Link></li>
          <li><Link href="/progress-tracking">Progress Tracking</Link></li>
          <li><Link href="/reminders">Reminder and Scheduling</Link></li>
          <li><Link href="/nutrition-tips">Nutrition and Hydration Tips</Link></li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}

