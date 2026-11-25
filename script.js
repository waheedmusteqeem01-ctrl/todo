function showtask() {
  let input = document.getElementById("writetask").value;
  let output = document.getElementById("task");
  if (input === "") {
    alert("EMPTY INPUT CANNOT BE STORED");
  } else {
    document.getElementById("task").innerHTML += "<li>" + input + "</li>";

  }
}
document.querySelector("input");
let 