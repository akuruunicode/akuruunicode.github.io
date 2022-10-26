function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
 }
 // This function will run automatically
(function() {
  let element = document.body;

  // Detect the OS's preferred color scheme
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    element.classList.toggle("dark", true);
  } else {
    let darkmode_localstorage = localStorage.getItem("darkmode") || false; // Return 'false' if 'darkmode' in localStorage returns null
    element.classList.toggle("dark", darkmode_localstorage);
  }
})();

function manually_darkmode_toggle() {
  let element = document.body;
  let is_darkmode_enable = element.classList.toggle("dark");
  localStorage.setItem("darkmode", is_darkmode_enable); // Save to localStorage
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
 }
// On page load set the theme.
(function() {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add("onpageLoad");
    document.getElementById("theme").textContent ='akuru';
      localStorage.getItem("theme") || "light";
  })();
  
  function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark");
  
    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
      localStorage.setItem("theme", "");
    } else {
      localStorage.setItem("theme", "dark");
    }
  
    document.getElementById("theme").textContent = localStorage.getItem("theme");
  }

