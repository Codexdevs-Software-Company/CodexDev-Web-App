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
                <li><a href="./index.html#productsectn">PRODUCTS</a></li>
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
                  <li><a href="./portfolio.html">PORTFOLIO</a> </li>
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
headerLogo.addEventListener("click", () => {
    location.href = "index.html";
})


// Getstarted code

const getStarted = document.querySelectorAll("#getStarted");
getStarted.forEach((btn) => {
    btn.addEventListener("click", () => {

        window.location.href = "getstarted.html";
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
        customArrow.classList.remove("active");
    }
});

// Code for showing services content on single page 

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.servicedev');
    const backToTop = document.getElementById('backTop');

    function smoothScrollTo(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
        }
    }

    function showSection(serviceId) {
        sections.forEach(section => section.classList.remove('active'));
        const activeSection = document.getElementById(serviceId);
        if (activeSection) activeSection.classList.add('active');
    }
    function loadSectionFromHash() {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            showSection(hash);
            setTimeout(() => smoothScrollTo(`#${hash}`), 100);
        }
    }
    loadSectionFromHash();
    window.addEventListener('hashchange', loadSectionFromHash);

    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      
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
// Code for showing services content on single page end


// code for testomonial

const feedBack = [
    {
        title: "Satisfied App Development client",
        desc: `"From design to functionality, everything was flawless. The website runs smoothly, and our users love it. Fantastic job!"`
    },
    {
        title: "Satisfied client",
        desc: `"Professinal, creative and always on time! They truly understand how to bring a vision to life. Would definetly work with them again!"`
    },
    {
        title: "Web Development client",
        desc: `"Incedrible experince! The team delivered a stunning, user-friendly website that exceeded our expectations. Highly recommended!"`
    }
]

const saraL = document.getElementById('SaraL');
const emmak = document.getElementById('Emmak');
const john = document.getElementById('John');

const h3 = document.querySelector(".feedbck-slider h3");
const para = document.querySelector(".feedbck-slider p");

let currentIndex = 0;
const maxLength = 3;

const next = document.querySelector('#rightarr')
const prev = document.querySelector('#leftarr')



function moveText(index) {
    if (index == 0) {
        saraL.style.translate = "10px";
        saraL.classList.replace("change", "SaraL");
        emmak.style.translate = "-5px";
        emmak.classList.replace("change1", "Emmak");
        john.style.translate = "6px";
        john.classList.replace("change", "Emmak")
        john.classList.replace("change1", "Emmak")
    }
    else if (index == 1) {
        saraL.style.translate = "-13.8rem";
        saraL.classList.replace("SaraL", "change")
        emmak.style.translate = "35.63rem"
        emmak.classList.replace("Emmak", "change")
        emmak.classList.replace("change1", "Emmak")
        john.style.translate = "-13.8rem"
        john.classList.replace("Emmak", "change1")
        john.classList.replace("change", "change1")
    }
    else if (index == 2) {
        saraL.style.translate = "17.5rem";
        saraL.classList.replace("SaraL", "change")
        emmak.style.translate = "15.7rem"
        emmak.classList.replace("change", "change1")
        emmak.classList.replace("Emmak", "change1")
        john.style.translate = "-33.13rem"
        john.classList.replace("change1", "change")
        john.classList.replace("Emmak", "change")
    }

}
function updateText(index) {
    h3.classList.add("fad-out");
    para.classList.add("fad-out");
    setTimeout(() => {
        h3.textContent = feedBack[index].title;
        para.textContent = feedBack[index].desc;

        h3.classList.remove("fad-out");
        para.classList.remove("fad-out");
    },400)
}

next.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= maxLength) {
        currentIndex = 0;
    }
    moveText(currentIndex);
    updateText(currentIndex)
})
prev.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 2;
    }
    moveText(currentIndex);
    updateText(currentIndex);
})
// code for testomonial End


const swiperPause = document.querySelector('.swiper');
swiperPause.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});
swiperPause.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});









