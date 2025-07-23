// Display the current date
document.getElementById("date").textContent = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Set the current year in footer
document.getElementById("year").textContent = new Date().getFullYear();




const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});




document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting the Omaha Times! We will get back to you soon.');
  this.reset();
});
