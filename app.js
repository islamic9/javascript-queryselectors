let parent = document.querySelector("#parent");
console.log(parent);

let xmark = document.querySelector("#xmark");
console.log(xmark);

let circle = document.querySelector("#circle");
console.log(circle);

circle.addEventListener("click", () => {
  circle.style.display = "none"
  parent.style.display = "flex"
  parent.style.align = "center"
})
xmark.addEventListener("click", () => {
  parent.style.display = "none"
  circle.style.display = "block"
  circle.style.display = "flex"
  circle.style.align = "center"
  circle.style.margin = "450px 1100px 0 0"
})