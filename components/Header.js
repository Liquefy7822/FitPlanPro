import Link from 'next/link';
import Image from 'next/image';

export default function Header({ title }) {
  return (
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
