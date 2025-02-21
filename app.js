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
                           <li  class="service-link" ><a href="./services.html#social">SOCIAL MEDIA MARKETING</a></li>
                            <li  class="service-link"><a href="./services.html#softdev">SOFTWARE DEVELOPMENT</li>
                            <li  class="service-link"><a href="./services.html#webdev">WEB DEVELOPMENT</a></li>
                            <li  class="service-link"><a href="./services.html#appdev">APP DEVELOPMENT</a></li>
                            <li  class="service-link"><a href="./services.html#UI">UI/UX DESIGNING</a></li>
                            <li  class="service-link"><a href="./services.html#Graphs">GRAPHIC DESIGNING</a></li>
                            <li  class="service-link"><a href="./services.html#cloud">CLOUD SERVICES</a></li>
                        </ul>
                    </div>
                </i>
                <li><a href="./index.html#productsectn">PRODUCTS</a></li>
                <button type="button" id="getStarted">Get Started</button>
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
                    <li  class="service-link"><a href="./services.html#social">Socail Media Marketing</a></li>
                        <li  class="service-link"><a href="./services.html#webdev">Web Development</a></li>
                        <li  class="service-link"><a href="./services.html#appdev">App Development</a></li>
                        <li  class="service-link"><a href="./services.html#UI">UI UX Designing</a></li>
                        <li  class="service-link"><a href="./services.html#cloud">Cloud Services</a></li>
                        <li  class="service-link"><a href="./services.html#Graphs">Graphic Designing</a></li>
                        <li  class="service-link"><a href="./services.html#softdev">Software Development</a></li>
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
                <a href= "#"> <i class="fa-brands  fa-facebook-f"></i></a>
                <a href= "#"> <i class="fa-brands  fa-linkedin-in"></i></a>
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

// For blocking right click
// document.addEventListener("contextmenu",function(e){
//     e.preventDefault();
// },false)
// For blocking right click end

// Getstarted code

let getStarted = document.querySelector('#getStarted')
getStarted.addEventListener("click", () => {
    window.location.href = 'getstarted.html'
})
// Getstarted code end


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
const swiperPause = document.querySelector('.swiper');
swiperPause.addEventListener('mouseenter',()=>{
   swiper.autoplay.stop();
});
swiperPause.addEventListener('mouseleave',()=>{
   swiper.autoplay.start();
});