// Create a function to generate the user profile page
function createUserProfilePage() {
  // Create the main container div
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile-container');

  // Create the heading
  const heading = document.createElement('h1');
  heading.textContent = 'User Profile';

  // Create the form element
  const profileForm = document.createElement('form');
  profileForm.id = 'profile-form';

  // Create the profile picture input and preview
  const profileImageLabel = document.createElement('label');
  profileImageLabel.textContent = 'Profile Picture:';
  const profileImageInput = document.createElement('input');
  profileImageInput.type = 'file';
  profileImageInput.id = 'profile-image';
  profileImageInput.accept = 'image/*';
  const profileImagePreview = document.createElement('img');
  profileImagePreview.alt = 'Profile Picture';
  profileImagePreview.classList.add('profile-image');
  profileImagePreview.id = 'preview-image';

  // Create the name input
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.placeholder = 'Your Name';

  // Create the bio input
  const bioLabel = document.createElement('label');
  bioLabel.textContent = 'Bio:';
  const bioInput = document.createElement('textarea');
  bioInput.id = 'bio';
  bioInput.placeholder = 'Write something about yourself';

  // Create the submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Save Profile';

  // Append all elements to the form
  profileForm.append(
    profileImageLabel,
    profileImageInput,
    profileImagePreview,
    nameLabel,
    nameInput,
    bioLabel,
    bioInput,
    submitButton
  );

  // Append the heading and form to the container
  profileContainer.append(heading, profileForm);

  // Append the container to the body
  document.body.appendChild(profileContainer);

  // JavaScript to handle profile picture preview
  profileImageInput.addEventListener('change', function () {
    const file = profileImageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImagePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      profileImagePreview.src = '';
    }
  });

  // JavaScript to handle form submission (without saving data)
  profileForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const name = nameInput.value;
    const bio = bioInput.value;

    // Display user inputs (you can perform actions with this data)
    console.log('Name:', name);
    console.log('Bio:', bio);
  });
}

// Call the function to create the user profile page
createUserProfilePage();

