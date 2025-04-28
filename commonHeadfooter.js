

// common header and footer js code


class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <header class="header" >
        <div class="logo"><img src="./images/LOGO 1.png" alt="Codex logo"></div>
        <i class="fa-solid fa-bars hamburgar"></i>
        <nav class="nav">
        <i class="fa-solid fa-xmark close"></i>
            <ul class="nav-items">
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./aboutus.html">ABOUT US</a></li>
                <li><a href="./index.html#ourTameSectn">OUR TEAM</a></li>
                <li><a href="./index.html#productsectn">PRODUCTS</a></li>
                <li class="sub-menu">
                <a href="./index.html#servicecrd">SERVICES</a>
                <i class="fa-solid fa-angle-down down1"> </i>
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
                </li>
                  <li><a href="./portfolio.html">PORTFOLIO</a> </li>
                <button type="button" id="getStarted" class="getStarted">Get Started</button>
            </ul
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
            <div class = "topwrape">
             <div class="wrpsocial">
                <a href= "https://www.facebook.com/people/Codexdev/61561564619057/" target="_blank"> <i class="fa-brands  fa-facebook-f"></i></a>
                <a href= "https://www.linkedin.com/company/codexdevs/" target="_blank"> <i class="fa-brands  fa-linkedin-in"></i></a>
              </div>
              <div class="bTop"><a href="#" id"backTop"> <i class="fa-solid fa-angle-down down"></i></a>
              </div>
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

const getStarted = document.querySelectorAll("#getStarted");
getStarted.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        window.location.href = "getstarted.html";
    })
});


const headerLogo = document.querySelector(".logo");
headerLogo.addEventListener("click",()=>{
    headerLogo.style.cursor= "pointer"
    location.href = "index.html";
});



const hamburgar = document.querySelector(".hamburgar");
const show = document.querySelector(".close");
const nav = document.querySelector(".nav")
hamburgar.addEventListener("click", ()=>{
   nav.classList.toggle("toggle");
   show.classList.toggle("show");
   hamburgar.classList.toggle("hide")
})
show.addEventListener("click",()=>{
    hamburgar.classList.toggle("hide");
    nav.classList.toggle("toggle");
    show.classList.toggle("show");
})
const links = document.querySelectorAll(".nav-items a");
links.forEach((link)=>{
    link.addEventListener("click",()=>{
        nav.classList.toggle("toggle");
        hamburgar.classList.remove("hide");
        show.classList.toggle("show");
    })
})

const backTop = document.querySelector('#backTop');
 backTop.addEventListener('click', ()=> {
    // e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
 });


