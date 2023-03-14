function replaceText() {
  var inputElement = document.getElementById("usercontent");
  var paraElement = document.getElementById("mypara");
  paraElement.innerHTML = inputElement.value;
  inputElement.value = "";
}
