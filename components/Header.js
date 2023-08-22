import React from 'react';

// Function to save user data to local storage.
function saveUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data))
}

// Function to retrieve user data from local storage
function getUserData() {
  const storedData = localStorage.getItem('userData');
  return storedData ? JSON.parse(storedData) : null;
}

// Function to remove user data from local storage
function clearUserData() {
  localStorage.removeItem('userData');
}

export default function Header() {
  // Example usage:
  // Save data
  const userData = { username: 'john_doe', email: 'john@example.com' };
  saveUserData(userData);

  // Retrieve data
  const savedUserData = getUserData();
  if (savedUserData) {
    console.log('User data:', savedUserData);
  } else {
    console.log('User data not found.');
  }

  // Remove data
  // clearUserData();

  return (
    <header className="header">
      {/* Your header content here */}
    </header>
  );
}


    </header>
  );
}
