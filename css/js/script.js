/* add class depending on scroll*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-list__item-link').forEach((link) => {
          link.classList.toggle(
            'nav-list__item-link--active', 
            link.getAttribute('href').replace('#','') === entry.target.id
          );
        });
      }
    });
  },
  {
    threshold: 0.7,
  }
);
document.querySelectorAll(".section").forEach(
  (section) => observer.observe(section),);

  const anchors=document.querySelectorAll('a[href*="#"]');for(let anchor of anchors){anchor.addEventListener("click",function(e){e.preventDefault();const blockID=anchor.getAttribute("href").substr(1);document.getElementById(blockID).scrollIntoView({behavior:"smooth",block:"start",});});}

function fc(){
    let nav = document.querySelector('.navbar');
      if (window.pageYOffset > 950) {
         nav.classList.add('--active');
      } else {
        nav.classList.remove('--active');
      } 
  }
  
  window.onscroll=fc;
  fc();


/*end*/

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();