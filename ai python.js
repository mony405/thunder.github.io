// ai course 
document.addEventListener('DOMContentLoaded', function() {
  const enrollButton = document.querySelector('.enroll-button');
  enrollButton.addEventListener('click', function(event) {
      // event.preventDefault(); // Remove this line
      alert('Thank you for enrolling!');
  });
});
// 
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const skills = document.querySelectorAll('.skills div');

    viewMoreBtn.addEventListener('click', function() {
        // Toggle visibility of hidden skills after the first row
        for (let i = 14; i < skills.length; i++) {
            skills[i].classList.toggle('hidden');
        }

        // Change button text based on visibility
        if (viewMoreBtn.innerText === 'View more') {
            viewMoreBtn.innerText = 'View less';
        } else {
            viewMoreBtn.innerText = 'View more';
        }
    });
});
// 
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slideWidth = slider.clientWidth / 3;
    let slideIndex = 0;
  
    prevBtn.addEventListener('click', function() {
      slideIndex = Math.max(slideIndex - 1, 0);
      updateSlider();
    });
  
    nextBtn.addEventListener('click', function() {
      slideIndex = Math.min(slideIndex + 1, slider.children.length / 3 - 1);
      updateSlider();
    });
  
    function updateSlider() {
      slider.style.transform = `translateX(-${slideIndex * slideWidth * 3}px)`;
    }
  });
//////////////////////////////////////////////
//python
document.addEventListener('DOMContentLoaded', function() {
  const enrollButton = document.querySelector('.kenroll');
  enrollButton.addEventListener('click', function(event) {
      //event.preventDefault();
      alert('Thank you for enrolling!');
  });
});
/////validation
function validateForm() {
  var username = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required!');
      return false;
  }

  return true;
}
