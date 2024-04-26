function scrollhome() {
  var my_element = document.getElementById("homepage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollabout() {
  var my_element = document.getElementById("aboutpage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollproducts() {
  var my_element = document.getElementById("productspage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollgallery() {
  var my_element = document.getElementById("gallerypage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollcontact() {
  var my_element = document.getElementById("contactpage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

const slides = document.querySelectorAll(".mySlides");
let slideIndex=0;
initializeSlider();
function initializeSlider() {
  if(slides.length>0) {
    slides[slideIndex].classList.add("displaySlide");
    setInterval(nextSlide,3000);
  }
}
function nextSlide() {
  slideIndex++;
  slideIndex=slideIndex%4;
  showSlide();
}
function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  })
  slides[slideIndex].classList.add("displaySlide");
}

const form = document.getElementById("contactform");
if(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#submi").value = "SENDING....";
    let data = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycbxezUkZyp6VLSI2QK0_P9XYUrFcm9QXSg9_44fdrIyQfUmZjtDJeTpc5hqNEkA_vnPU/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        alert("Your form has been submitted");
        location.reload();
      });
  });
}

const form1 = document.getElementById("login-form")
if(form1) {
  form1.addEventListener("submit", (event) => {
    event.preventDefault();
    nameInner=document.getElementById("username").value;
    sessionStorage.setItem('username',nameInner);
    window.location.replace("campuscravings.html");
  });
}
if(sessionStorage.getItem('username')!=null) {
  let login = document.getElementById("signins");
  login.innerHTML=sessionStorage.getItem('username');
  login.removeAttribute('href');
  login.style.cursor="pointer";
}

function goTo() {
  if(sessionStorage.getItem('username')!=null) {
    window.location.href="main.html";
  } else {
    alert("Please sign in first")
    window.location.href="login.html";
  }
}