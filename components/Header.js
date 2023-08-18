import Link from 'next/link';
import Image from 'next/image';

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
      <div className="header-content">
        <Image src="https://i.imgur.com/SqwGFl8.jpg" alt="App Logo" width={80} height={80} />
        <h1 className="FitPlanPro">{title}</h1>
        <a href="https://github.com/Liquefy7822/FitPlanPro">
          <Image src="/github-logo.svg" alt="GitHub" width={40} height={40} />
        </a>
      </div>
    </header>
  );
}
