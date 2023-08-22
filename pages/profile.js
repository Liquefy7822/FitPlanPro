<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <style>
        /* Basic styling for the profile page */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        .profile-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .profile-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <div class="profile-container">
        <h1>User Profile</h1>
        <form id="profile-form">
            <div>
                <label for="profile-image">Profile Picture:</label>
                <input type="file" id="profile-image" accept="image/*">
                <img src="" alt="Profile Picture" class="profile-image" id="preview-image">
            </div>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Your Name">
            </div>
            <div>
                <label for="bio">Bio:</label>
                <textarea id="bio" placeholder="Write something about yourself"></textarea>
            </div>
            <button type="submit">Save Profile</button>
        </form>
    </div>

    <script>
        // JavaScript to handle profile picture preview
        const profileImageInput = document.getElementById('profile-image');
        const previewImage = document.getElementById('preview-image');

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
    </script>
</body>
</html>
