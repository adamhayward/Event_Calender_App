//CLOCK


var clock = document.getElementById('clock');
var m = moment();

function updateClock() {
  var now = moment();
  var digitalClock = now.format('h  :mm A');
  clock.textContent = digitalClock;
}
setInterval(updateClock, 1000);

//DATE
$("#currentDay").html(m.format("dddd"));
$("#currentDate").html(m.format("L"));

//HOUR FIELDS
function renderHours() {
  var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  var hours = document.getElementsByClassName("hour");
  for (var i = 0; i < hours.length; i++) {
    hours[i].textContent = hour[i];
  }
}
renderHours();

//formating for event fields 
var textArea = document.querySelector("textArea");

//SAVE BUTTON "ICON/style" TOGGLE

var descriptinButton = document.querySelector(".saveBtn");
var descriptionInput = document.querySelector("textarea");

descriptinButton.addEventListener('click', function (event) {
  event.preventDefault();

  var textInput = descriptionInput.value;
  localStorage.setItem('hour-9', textInput);
})


function renderBtns() {
  var saveBtn = document.querySelectorAll(".saveBtn");
  for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].classList.add('icon');
  }
}
renderBtns();


// saveBtn.addEventListener("click", () => {
//     saveBtn.classList.toggle('iconClicked');
//   });











// function renderBtns(){
//     // var saveBtn = document.getElementsByClassName("saveBtn");
//     for (var i = 0; i < saveBtn.length; i++) {
//         saveBtn[i].setAttribute("class", "icon")
//     }

// }
// renderBtns();
