var sizes = document.querySelectorAll(".size-radio");
var btns = document.querySelectorAll(".d-none");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    sizes.forEach((s) => {
      s.classList.remove("active");
    });
    this.classList.add("active");
  });
});
var toppings = document.querySelectorAll(".topping-detail");

toppings.forEach((tp) => {
  tp.addEventListener("click", function () {
    console.log("active");
    if ($(this).hasClass("active")) {
      console.log("unactive");
      this.classList.remove("active");
    } else {
      console.log($(this).hasClass("active"));
      this.classList.add("active");
    }
    console.log($(this).hasClass("active"));
  });
});
