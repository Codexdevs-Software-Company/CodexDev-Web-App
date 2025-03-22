// code for testomonial

const saraL = document.getElementById('SaraL');
const emmak = document.getElementById('Emmak');
const john = document.getElementById('John');

const h3 = document.querySelector(".feedbck-slider h3");
const para = document.querySelector(".feedbck-slider p");

let currentIndex = 0;
const maxLength = 3;

const rightArr = document.querySelector('#rightarr')
const leftArr = document.querySelector('#leftarr')
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

rightArr.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= maxLength) {
        currentIndex = 0;
    }
    moveText(currentIndex);
    updateText(currentIndex)
})
leftArr.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 2;
    }
    moveText(currentIndex);
    updateText(currentIndex);
})
// code for testomonial End