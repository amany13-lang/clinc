function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card").forEach(el => {
  observer.observe(el);
});