function updateClock (){
var now = moment();
var digitalClock = now.format('h:mm:ss A');
clock.textContent = digitalClock;
}
setInterval(updateClock, 1000);
// populates current date at top of app
var m = moment();
$("#currentDay").html(m.format("dddd"));
$("#currentDate").html(m.format("L"));


var clock = document.getElementById('clock');


var saveBtn = document.querySelector(".saveBtn");
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var textArea = document.querySelector("textArea");

saveBtn.addEventListener("click", () => {
    saveBtn.classList.toggle('iconClicked');
})
    

renderHours();


function renderHours() {
    var x = document.getElementsByClassName("hour");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].textContent = hours[i];
    }
  }



