function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  

  function changeText(id) {
    id.innerHTML = "yeaahh!";
  }
  function changeText2(id) {
    id.innerHTML = "Log in";
  }
  function changeText3(id) {
    id.innerHTML = "Sign up";
  }