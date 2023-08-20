import Header from '@components/Header'; // Import your header component
import Footer from '@components/Footer'; // Import your footer component
import Link from 'next/link'; // Import Link from Next.js

function ExerciseLibrary() {
  return (
    <div>
      <Header title="Exercise Library" /> {/* Header */}
      <h1>Welcome to the Exercise Library</h1>
      <p>This is the Exercise Library where you can explore different categories of exercises.</p>
      <div>
        <Link href="/warmup">
          <button>Warmup</button>
        </Link>
        <Link href="/mobility">
          <button>Mobility</button>
        </Link>
        <Link href="/flexibility">
          <button>Flexibility</button>
        </Link>
        <Link href="/exercises">
          <button>Exercises</button>
        </Link>
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
}

export default ExerciseLibrary;
