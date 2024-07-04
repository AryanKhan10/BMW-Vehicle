const ham=document.querySelector(".ham");
const manu=document.querySelector("#bar-list");
// const overlay = document.querySelector('.ov');
console.log(manu);
ham.addEventListener("click", () => {
ham.classList.toggle("ic");
manu.classList.toggle("active");
// overlay.classList.toggle('overlay');

});
manu.addEventListener("click", () => {
ham.classList.remove("ic");
manu.classList.remove("active");
})
