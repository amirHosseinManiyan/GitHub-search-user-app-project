const html = document.documentElement;
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
let currentTheme = html.dataset.theme;

function changeTheme(newTheme) {
   html.dataset.theme = newTheme;
   currentTheme = newTheme;
   if (newTheme === "dark") {
      themeIcon.setAttribute("src", "assets/icon-sun.svg");
      themeLabel.textContent = "LIGHT";
   } else if (newTheme === "light") {
      themeIcon.setAttribute("src", "assets/icon-moon.svg");
      themeLabel.textContent = "DARK"
   }
}

changeTheme(currentTheme);

themeIcon.addEventListener("click", function() {
   if (currentTheme === "light") {
      changeTheme("dark");
      localStorage.setItem("theme", "dark");
   } else if (currentTheme === "dark") {
      changeTheme("light");
      localStorage.setItem("theme", "light");
   }
});

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchError = document.getElementById("search-error");

function showError(message,) {
   searchError.textContent = message;
   searchError.classList.add("search-error-show");

   setTimeout(() => {
      searchError.classList.remove("search-error-show");
   }, 3000);
}

function formatJoinedDate(dateString) {
   const date = new Date(dateString);

   const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
   ];

   const day = date.getDate();
   const month = months[date.getMonth()];
   const year = date.getFullYear();

   return `${day} ${month} ${year}`;
}

function formatNumber(number) {
   if (number < 1000) {
      return number.toString();
   }

   if (number < 1000000) {
      return (number / 1000).toFixed(1).replace(".0", "") + "K";
   }

   return (number / 1000000).toFixed(1).replace(".0", "") + "M";
}

function renderUser(userData) {
   const profileAvatar = document.querySelector(".profile-avatar");
   const profileName = document.querySelector(".profile-name");
   const profileUsername = document.querySelector(".profile-username");
   const profileJoined = document.querySelector(".profile-joined");
   const profileBio = document.querySelector(".profile-bio");
   const repos = document.querySelector(".repos");
   const followers = document.querySelector(".followers");
   const following = document.querySelector(".following");
   const location = document.querySelector(".location");
   const blog = document.querySelector(".blog");
   const twitter = document.querySelector(".twitter");
   const company = document.querySelector(".company");

   profileAvatar.setAttribute("src", userData.avatar_url);

   profileName.textContent = userData.name;

   profileUsername.textContent = userData.login;
   profileUsername.setAttribute("href", `https://github.com/${userData.login}`);

   profileJoined.textContent = `Joined ${formatJoinedDate(userData.created_at)}`;
   
   if (userData.bio) {
      profileBio.textContent = userData.bio;
   } else {
      profileBio.textContent = "This profile has no bio";
   }

   repos.textContent = formatNumber(userData.public_repos);

   followers.textContent = formatNumber(userData.followers);

   following.textContent = formatNumber(userData.following);

   if (userData.location) {
      location.textContent = userData.location;
   } else {
      location.textContent = "Not available";
   }

   if (userData.blog !== "") {
      blog.textContent = userData.blog;
      blog.setAttribute("href", userData.blog);
   } else {
      blog.textContent = "Not available";
      blog.setAttribute("href", "#");    
   }

   if (userData.twitter_username) {
      twitter.textContent = userData.twitter_username;
      twitter.setAttribute("href", userData.twitter_username);
   } else {
      twitter.textContent = "Not available";
      twitter.setAttribute("href", "#");    
   }

   if (userData.blog) {
      company.textContent = userData.company;
      company.setAttribute("href", userData.company);
   } else {
      company.textContent = "Not available";
      company.setAttribute("href", "#");    
   }
}

searchButton.addEventListener("click", async function() {
   const enteredUsername = searchInput.value.trim();
   const usernameRegex = /^[a-zA-Z0-9-]+$/;

   if (enteredUsername === "") {
      showError("Please enter a GitHub username");
   } else if (!usernameRegex.test(enteredUsername)) {
      showError("Invalid format. Use letters, numbers, hyphens");
   } else {
      const apiUrl = `https://api.github.com/users/${enteredUsername}`;
      try {
         const response = await fetch(apiUrl);
         if (response.ok) {
            const userData = await response.json();
            renderUser(userData);
         } else if (response.status === 404) {
            showError("User not found");
         } else {
            showError("Something went wrong. Please try again");
         }
      } catch (error) {
         showError("Network error. Please try again");
      }
   }
});