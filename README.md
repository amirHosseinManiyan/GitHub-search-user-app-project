# GitHub User Search

A responsive GitHub user search application built with HTML, CSS, and Vanilla JavaScript.

Users can search for GitHub profiles and view their public information using the GitHub API.

## Features

- Search for GitHub users by username
- Display GitHub profile information
- Show avatar, username, bio, join date, repositories, followers, and following
- Display profile links including location, website, Twitter, and company
- Input validation for GitHub usernames
- Custom error messages for different error states
- Network error handling
- User not found handling
- Server error handling
- Light/Dark theme toggle
- Save the selected theme using `localStorage`
- Responsive design for mobile, tablet, and desktop
- Formatted large numbers such as `23.9K` and `1.2M`
- Formatted GitHub join dates such as `25 Jan 2011`
- Display `Not Available` when profile information is unavailable

## Built With

- HTML5
- CSS3
- CSS Variables
- Flexbox
- CSS Grid
- Vanilla JavaScript
- Fetch API
- GitHub REST API
- LocalStorage

## Error Handling

The application handles different error states:

- Empty username
- Invalid username format
- User not found
- Network errors
- Server errors

Custom error messages are displayed to provide clear feedback to the user.

## Theme

The application supports both Light and Dark themes.

The selected theme is saved in `localStorage`, so the user's theme preference is preserved after refreshing or reopening the page.

The initial theme is applied before the stylesheet loads to prevent an unwanted theme transition when the page is refreshed.

## Responsive Design

The application is fully responsive and optimized for:

- Mobile
- Tablet
- Desktop

The layout and error message positioning adapt to different screen sizes.

## API

This project uses the GitHub REST API to retrieve public GitHub user information.

The application fetches user data based on the entered GitHub username and dynamically updates the profile card.

## 🚀 Live Demo

[View Live Demo](https://amirhosseinmaniyan.github.io/GitHub-search-user-app-project/)

## 👨‍💻 Author

GitHub: [@amirHosseinManiyan](https://github.com/amirHosseinManiyan)