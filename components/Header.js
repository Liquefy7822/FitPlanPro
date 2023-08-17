import Link from 'next/link';

export default function Header({ title }) {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link href="/">Home</Link></li>
          <li className="nav-item"><Link href="/goal-setting">Goal Setting</Link></li>
          <li className="nav-item"><Link href="/personalized-workout">Personalized Workout Plans</Link></li>
          <li className="nav-item"><Link href="/exercise-library">Exercise Library</Link></li>
          <li className="nav-item"><Link href="/custom-workouts">Custom Workouts</Link></li>
          <li className="nav-item"><Link href="/progress-tracking">Progress Tracking</Link></li>
          <li className="nav-item"><Link href="/reminders">Reminder and Scheduling</Link></li>
          <li className="nav-item"><Link href="/nutrition-tips">Nutrition and Hydration Tips</Link></li>
        </ul>
      </nav>
      <h1 className="app-title">{title}</h1>
    </header>
  );
}
