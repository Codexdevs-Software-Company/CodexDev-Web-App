// Slider js code

const swiper = new Swiper('.swiper', {
    loop: true, // Infinite loop mode
    autoplay: {
        delay: 3000, // Slide auto-change every 3 seconds
        disableOnInteraction: false, // Click ya touch ke baad bhi autoplay chalta rahe
    },
    speed: 800, // Smooth transition speed (800ms)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Dots par click karne se slide change ho
    },
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    effect: 'fade', // Smooth fade transition (or use "slide" for normal)
});

// slider js code end

// common header and footer js code


class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <header class="header" >
        <div class="logo"><img src="./images/LOGO 1.png" alt="Codex logo"></div>
        <nav class="nav">
            <ul class="nav-items">
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./aboutus.html">ABOUT US</a></li>
                <li><a href="./index.html#ourTameSectn">OUR TEAM</a></li>
                <li><a href="./index.html#servicecrd">SERVICES</a> </li>
              <i class="fa-solid fa-angle-down down">
                    <div class="dropdown">
                        <ul>
                           <li  class="service-link" ><a href="./services.html#social">DEGITAL MARKETING</a></li>
                            <li  class="service-link"><a href="./services.html#softdev">PYTHON DEVELOPMENT</li>
                            <li  class="service-link"><a href="./services.html#webdev">WEB DEVELOPMENT</a></li>
                            <li  class="service-link"><a href="./services.html#appdev">APP DEVELOPMENT</a></li>
                            <li  class="service-link"><a href="./services.html#UI">PRODUCT DESIGNING</a></li>
                            <li  class="service-link"><a href="./services.html#Graphs">GRAPHIC DESIGNING</a></li>
                            <li  class="service-link"><a href="./services.html#cloud">CLOUD SERVICES</a></li>
                        </ul>
                    </div>
                </i>
                <li><a href="./index.html#productsectn">PRODUCTS</a></li>
                <button type="button" id="getStarted" class="getStarted">Get Started</button>
            </ul>
        </nav>
        
    </header>
     `
    }
}


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <div class="footer">
        <div class="uperfooter">
            <div class="codexdiscp">
                <div class="logo1"><img src="./images/LOGO.png" alt="logo"></div>
                <div class="desc">
                    <p>At CodexDev, we are IT experts specializing in innovative solutions, cutting-edge technologies,
                        and
                        tailored strategies to elevate your business.</p>
                </div>
            </div>

            <div class="footerservice">
                <div class="ourservices">
                    <h2>Our Services</h2>
                </div>
                <div class="servicelist">
                    <ul>
                    <li  class="service-link"><a href="./services.html#social">Degital Marketing</a></li>
                        <li  class="service-link"><a href="./services.html#webdev">Web Development</a></li>
                        <li  class="service-link"><a href="./services.html#appdev">App Development</a></li>
                        <li  class="service-link"><a href="./services.html#UI">Product Designing</a></li>
                        <li  class="service-link"><a href="./services.html#cloud">Cloud Services</a></li>
                        <li  class="service-link"><a href="./services.html#Graphs">Graphic Designing</a></li>
                        <li  class="service-link"><a href="./services.html#softdev">Python Development</a></li>
                    </ul>
                </div>
            </div>
            <div class="footertouch">
                <div class="intouch">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>codexdevsofficial@gmail.com</li>
                        <li>+92 3159274139</li>
                    </ul>
                    <div class="line2"></div>
                </div>
                <div class="footerloc">
                    <h4>Location</h4>
                    <p>Shaheed Benazir Women University, STP, 3rd floor, Office #02</p>
                </div>
            </div>
        </div>


        <div class="bottomfooter">
            <span class="copyright">
                <p>Copyright © 2023 CODEXDEV</p>
            </span>
            <span class="privacyplcy" style="cursor:pointer;">
                <p>Privacy Policy</p>
            </span>
            <span class="Terms" style="cursor:pointer;">
                <p>Terms of Service</p>
            </span>
            <div class="socialstop">
             <div class="wrpsocial">
                <a href= "https://www.facebook.com/people/Codexdev/61561564619057/" target="_blank"> <i class="fa-brands  fa-facebook-f"></i></a>
                <a href= "https://www.linkedin.com/company/codexdevs/" target="_blank"> <i class="fa-brands  fa-linkedin-in"></i></a>
              </div>
              <div class="bTop"><a href="#"  id"backTop"> <i class="fa-solid fa-angle-down down"></i></a>
              </div>
           </div>
        </div>
    </div>
          
      `
    }
}
customElements.define("my-header", MyHeader)
customElements.define("my-footer", MyFooter)
// common header and footer js code end

const headerLogo = document.querySelector(".logo");
headerLogo.style.cursor = "pointer";
headerLogo.addEventListener("click",()=>{
    location.href = "index.html";
})


// Getstarted code

const getStarted = document.querySelectorAll("#getStarted");
getStarted.forEach((btn)=>{
    btn.addEventListener("click",()=>{

        location.href = "getstarted.html";
    })
});
// Getstarted code end


// For blocking right click
// document.addEventListener("contextmenu",function(e){
//     e.preventDefault();
// },false)
// For blocking right click end



const select = document.querySelector('.select1');
const customArrow = document.querySelector('.custom');
if (select && customArrow) {
    select.addEventListener('click', function (event) {
        event.stopPropagation();
        customArrow.classList.toggle("active");
    });
}
document.addEventListener("click", function (event) {
    if (!customArrow.contains(event.target)) {
        console.log('slelcted');
        customArrow.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.servicedev');
    const backToTop = document.getElementById('backTop');
    function showSection(serviceId) {
        sections.forEach(section => section.classList.remove('active'));
        const activeSection = document.getElementById(serviceId);
        if (activeSection) activeSection.classList.add('active');
    }
    function loadSectionFromHash() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            showSection(hash);
        }
    }
    loadSectionFromHash();
    window.addEventListener('hashchange', loadSectionFromHash);

    // Handle Back to Top button
    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // No change to hash, so content remains visible
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".card");

    serviceCards.forEach(card => {
        card.addEventListener("click", function () {
            const serviceId = this.getAttribute("id");
            window.location.href = `services.html#${serviceId}`;
        });
    });
});

const swiperPause = document.querySelector('.swiper');
swiperPause.addEventListener('mouseenter',()=>{
   swiper.autoplay.stop();
});
swiperPause.addEventListener('mouseleave',()=>{
   swiper.autoplay.start();
});



const projects = [
    {
        logo: 'images/viewlogo.png',
        title: 'COUPONSHUB',
        desc:  `CouponsHub offers 100% free Udemy course coupons, making premium learning
                        accessible at no cost!`
    },
    {
        logo: 'images/Muscolo.png',
        title: 'MUSCOLO',
        desc:  `Muscolo App is a powerful CMD-based gym fitness management system for seamless member and workout tracking.`
    },
    {
        logo: 'images/pharmacarelogo.png',
        title: 'PHARMA CARE +',
        desc:  `Pharma Care+ provides medicine details, dosage, first aid tips, and a doctor-approved chatbot for real-time assistance.`
    },
]
const viewlogo = document.querySelector('.logoview')
const logo = document.querySelector('#copun');
const title = document.querySelector('#title');
const desc = document.querySelector('#projectDecrpt');
let currentIndex = 0;

function updateProject(index) {
    viewlogo.classList.add("fadeOut")
    title.classList.add("fadeOut")
    desc.classList.add("fadeOut")
    setTimeout(()=>{
        logo.src = projects[index].logo;
        title.textContent = projects[index].title;
        desc.textContent = projects[index].desc;

        viewlogo.classList.remove("fadeOut")
        title.classList.remove("fadeOut")
        desc.classList.remove("fadeOut")
    },500);
  }

  document.querySelector('.next-btn').addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= projects.length) {
      currentIndex = 0; 
    }
    updateProject(currentIndex);
  });
  document.querySelector('.prev-btn').addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = projects.length - 1;
    }
    updateProject(currentIndex);
  });