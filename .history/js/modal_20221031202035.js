var sizes = document.querySelectorAll(".size-radio");
var btns = document.querySelectorAll(".btn__size");
// sizes.forEach((size) => {
//   size.addEventListener("click", function () {
//     btns.forEach((b) => {
//       b.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });

for (i = 0; i < sizes.length; i++) {
  sizes[i].onclick = function () {
    if (sizes[i].classList.contains("active")) {
      sizes[i].remove("active");
    }
  };
}

// var toppings = document.querySelectorAll("btn__topping");

// toppings.forEach((tp) => {
//   tp.addEventListener("click", function () {
//     if ($(this).hasClass("active")) {
//       this.classList.remove("active");
//     } else {
//       console.log($(this).hasClass("active"));
//       this.classList.add("active");
//     }
//     console.log($(this).hasClass("active"));
//   });
// });
