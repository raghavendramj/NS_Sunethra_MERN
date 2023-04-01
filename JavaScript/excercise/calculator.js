var display = document.getElementById("display");
var buttons = document.getElementsByTagName("button");
var btnsArray = Array.from(buttons);
for (eachBtn of btnsArray) {
  eachBtn.addEventListener("click", function (e) {
    console.log("Number clicked -> ", e.target.innerText);
    var btnNumber = e.target.innerText;
    switch (btnNumber) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        if (display.innerText == "") {
          alert("Please enter some value!");
        } else {
          display.innerText = eval(display.innerText);
        }
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
        }
        break;

      default: {
        display.innerText += btnNumber;
      }
    }
  });
}