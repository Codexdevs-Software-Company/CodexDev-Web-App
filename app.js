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
         <header class="header" id="top">
        <div class="logo"><img src="./images/LOGO 1.png" alt="Codex logo"></div>
        <nav class="nav">
            <ul class="nav-items">
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./aboutus.html">ABOUT US</a></li>
                <li><a href="#">PORTFOLIO</a></li>
                <li><a href="./index.html#ourTameSectn">OUR TEAM</a></li>
                <li><a href="#">SERVICES</a> </li>
                <i class="fa-solid fa-caret-down down">
                    <div class="dropdown">
                        <ul>
                            <li><a href="#">SOFTWARE DEVELOPMENT</li>
                            <li><a href="#">WEB DEVELOPMENT</a></li>
                            <li><a href="#">APP DEVELOPMENT</a></li>
                            <li><a href="#">UI/UX DESIGNING</a></li>
                            <li><a href="#">GRAPHIC DESIGNING</a></li>
                            <li><a href="#">CLOUD SERVICES</a></li>
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
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>UI UX Designing</li>
                        <li>Cloud Services</li>
                        <li>Graphic Designing</li>
                        <li>Social Media Marketing</li>
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
                <span><a href="#top"><img src="./images/UP ARROW.png" alt="uparrow"></a></span>
            </div>
        </div>


        <div class="bottomfooter">
            <span class="copyright">
                <p>Copyright © 2023 CODEXDEV</p>
            </span>
            <span class="privacyplcy">
                <p>Privacy Policy</p>
            </span>
            <span class="Terms">
                <p>Terms of Service</p>
            </span>
            <span class="socialicons"><img src="./images/social media pages.png" alt="socialicons"></span>
        </div>
    </div>
          
      `
    }
}
customElements.define("my-header", MyHeader)
customElements.define("my-footer", MyFooter)
// common header and footer js code end


// Getstarted code

let getStarted = document.querySelector('#getStarted')
getStarted.addEventListener("click",()=>{
    window.location.href = 'getstarted.html'
})
// Getstarted code end