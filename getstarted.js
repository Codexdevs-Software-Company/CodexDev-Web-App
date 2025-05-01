const selectOptns = document.querySelector(".select-options");
const options = document.querySelectorAll(".option")
selectOptns.addEventListener("click",()=>{
    selectOptns.classList.toggle("active");
})
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        selectOptns.querySelector("input").value = option.textContent;
        selectOptns.classList.toggle("active");
    })
})
document.addEventListener("click",(e)=>{
    if(!selectOptns.contains(e.target)){
        selectOptns.classList.remove("active");
    }
})