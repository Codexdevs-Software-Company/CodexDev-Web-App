
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