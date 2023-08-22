// Create elements
const body = document.body;
const profileContainer = document.createElement('div');
profileContainer.className = 'profile-container';
const heading = document.createElement('h1');
heading.textContent = 'User Profile';
const form = document.createElement('form');
form.id = 'profile-form';

// Profile Picture
const profileImageContainer = document.createElement('div');
const profileImageLabel = document.createElement('label');
profileImageLabel.textContent = 'Profile Picture:';
const profileImageInput = document.createElement('input');
profileImageInput.type = 'file';
profileImageInput.id = 'profile-image';
profileImageInput.accept = 'image/*';
const previewImage = document.createElement('img');
previewImage.id = 'preview-image';
previewImage.className = 'profile-image';
profileImageContainer.appendChild(profileImageLabel);
profileImageContainer.appendChild(profileImageInput);
profileImageContainer.appendChild(previewImage);

// Name
const nameContainer = document.createElement('div');
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.placeholder = 'Your Name';
nameContainer.appendChild(nameLabel);
nameContainer.appendChild(nameInput);

// Bio
const bioContainer = document.createElement('div');
const bioLabel = document.createElement('label');
bioLabel.textContent = 'Bio:';
const bioTextarea = document.createElement('textarea');
bioTextarea.id = 'bio';
bioTextarea.placeholder = 'Write something about yourself';
bioContainer.appendChild(bioLabel);
bioContainer.appendChild(bioTextarea);

// Save Button
const saveButton = document.createElement('button');
saveButton.type = 'submit';
saveButton.textContent = 'Save Profile';

// Append elements to form
form.appendChild(profileImageContainer);
form.appendChild(nameContainer);
form.appendChild(bioContainer);
form.appendChild(saveButton);

// Append elements to profile container
profileContainer.appendChild(heading);
profileContainer.appendChild(form);

// Append profile container to body
body.appendChild(profileContainer);

// JavaScript to handle profile picture preview
const profileImageInput = document.getElementById('profile-image');
profileImageInput.addEventListener('change', function () {
    const file = profileImageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        previewImage.src = '';
    }
});

// JavaScript to handle form submission (without saving data)
const profileForm = document.getElementById('profile-form');
profileForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;

    // Display user inputs (you can perform actions with this data)
    console.log('Name:', name);
    console.log('Bio:', bio);
});
