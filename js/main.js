// Color buttons change the heading color
var title = document.getElementById("title");
var colorBtns = document.querySelectorAll(".color-btn");

colorBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    title.style.color = btn.dataset.color;
  });
});

// To do list
document.querySelector("#myForm").addEventListener("submit", function (event) {

  var works = document.querySelector("#works").value;
  var result = document.querySelector("#result"); // ul

  if (works == "") {
    alert("Enter Data");
    event.preventDefault();
  } else {
    var myLi = document.createElement("li");
    myLi.innerHTML = works;
    result.append(myLi);
    document.querySelector("#works").value = "";
    event.preventDefault();
  }

});