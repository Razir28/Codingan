function darkMode()
{
  
  const mode = document.getElementById("darkMode-btn");
  const body = document.body;
  const change_title = document.getElementById("title");

  body.classList.toggle("darkMode-css");
  
  if(body.classList.contains("darkMode-css"))
  {
    mode.innerHTML = "🌞";
    change_title.innerHTML = "Dark Mode!";
  }
  else
  {
    mode.innerHTML = "🌑";
    change_title.innerHTML = "Light Mode!"
  }

}