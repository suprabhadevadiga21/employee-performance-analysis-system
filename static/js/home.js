

/* SCROLL */
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

/* ✅ FIXED LOGIN REDIRECT */
function goLogin(){
  window.location.href="/login";
}

/* ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

