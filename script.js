// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add Interactive Reservation Form Feedback
const reservationForm = document.querySelector('.reservation-form form');
reservationForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your reservation! We look forward to seeing you.');
  reservationForm.reset();
});

// Add Hover Effect to Gallery Images
const galleryImages = document.querySelectorAll('.image-item img');
galleryImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

// Testimonials Auto-Switcher
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showNextTestimonial() {
  testimonials[testimonialIndex].style.display = 'none';
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  testimonials[testimonialIndex].style.display = 'block';
}
setInterval(showNextTestimonial, 5000); // Switch every 5 seconds
testimonials.forEach((testimonial, index) => {
  testimonial.style.display = index === 0 ? 'block' : 'none';
});

// Add Animation to Hero Section on Load
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(50px)';
  heroContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  setTimeout(() => {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }, 100);
});