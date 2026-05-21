/* PAGE SWITCH (UNCHANGED BUT SMOOTHER FEEL) */
function showPage(id, btn){

  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll("nav button");

  sections.forEach(s => s.classList.remove("active"));
  buttons.forEach(b => b.classList.remove("active"));

  setTimeout(() => {
    document.getElementById(id).classList.add("active");
  }, 50);

  btn.classList.add("active");

  /* ripple effect */
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  btn.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

/* DARK MODE */
function toggleMode(){
  document.body.classList.toggle("dark");

  localStorage.setItem("mode",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

window.onload = function(){
  if(localStorage.getItem("mode")==="dark"){
    document.body.classList.add("dark");
  }
};

/* SKILLS */
function showSkill(skill){
  document.getElementById("output").innerText =
  "You selected: " + skill;
}

/* PROFILE INTERACTION (ENHANCED ONLY) */
document.getElementById("profile").addEventListener("click", function(){
  this.classList.toggle("active");
});
