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
