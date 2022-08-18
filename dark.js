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
    element.classList.add(onpageLoad);
    document.getElementById("theme").textContent =
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

// cookies

 var num = 1;

 function addCookie(){

  document.cookie = num+" = "+num;

   num++;

  }

 function listCookies(){

  var result = document.cookie;

  document.getElementById("list").innerHTML = result;

  }

 function removeCookies() {

  var res = document.cookie;

  var multiple = res.split(";");

 for(var i = 0; i < multiple.length; i++) {

  var key = multiple[i].split("=");

  document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";

  }
  }
     
     
