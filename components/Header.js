import { useState } from 'react';
import Image from 'next/image';
import Sidebar from './Sidebar'; // Import the Sidebar component

export default function Header({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <button className="toggle-button" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <Sidebar isOpen={isSidebarOpen} title={title} /> {/* Render the Sidebar component */}
    </header>
  );
}
