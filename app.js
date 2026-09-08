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