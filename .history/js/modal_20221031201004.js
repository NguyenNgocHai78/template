var sizes = document.querySelectorAll(".size-radio");
var btns = document.querySelectorAll(".d-none");
sizes.forEach((size) => {
  size.addEventListener("click", function () {
    btns.forEach((b) => {
      b.classList.remove("active");
    });
    this.classList.add("active");
  });
});

var toppings = document.querySelectorAll("btn__topping");

toppings.forEach((tp) => {
  tp.addEventListener("click", function () {
    // if ($(this).hasClass("active")) {
    //   this.classList.remove("active");
    // } else {
    //   console.log($(this).hasClass("active"));
    //   this.classList.add("active");
    // }
    // console.log($(this).hasClass("active"));
    console.log(1);
  });
});
