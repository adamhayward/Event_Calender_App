//Loads page with specific stylings related to local time 
$(document).ready(function () {

  var currentHour = moment().hour();
  console.log(currentHour);
  var hourBlocks = $('.hour');

  for (var i = 0; i < hourBlocks.length; i++) {
    var hourBlock = hourBlocks[i];
    var hourBlockId = hourBlock.children[0].id;
    var hour = parseInt(hourBlockId.split('-')[1]);
    var timeBlock = $('.time-block');
    // sets style for past hours
    if (hour <= currentHour) {
      timeBlock.addClass('past');
      // sets style for current hour
    } else if (hour === currentHour) {
     timeBlock.toggleClass('present');
      console.log(hour === currentHour);
    }
    // sets style for future hours
    else {
      timeBlock.toggleClass('future');
      console.log(hour >= currentHour);
    }
  }
});
//Clock
var clock = document.getElementById('clock');
var m = moment();
//references 'moment.js' for local time 
function updateClock() {
  var now = moment();
  var digitalClock = now.format('h :mm A');
  clock.textContent = digitalClock;
}
//Runs function to dispaly local time on 'clock'
setInterval(updateClock, 1000);

//DATE
//display current day and date to header
$("#currentDay").html(m.format("dddd"));
$("#currentDate").html(m.format("L"));

//HOUR FIELDS
// funciton to populate hour data
function renderHours() {
  var hourList = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  var hours = $(".hourField");
  for (var i = 0; i < hourList.length; i++) {
    hours[i].textContent = hourList[i];
  }
}
renderHours();

// Save Button toggle fearures 

var saveBtn = $(".saveBtn");
var inputData = $("textarea");
var btn1 = $('#btn1');
var btn2 = $('#btn2');
var btn3 = $('#btn3');
var btn4 = $('#btn4');
var btn5 = $('#btn5');
var btn6 = $('#btn6');
var btn7 = $('#btn7');
var btn8 = $('#btn8');
var btn9 = $('#btn9');

// Initial save button icon 
function renderBtns() {

  for (var i = 0; i < saveBtn.length; i++) {
    saveBtn.addClass('icon');
  }
}
renderBtns();

//function assignemts for each save button
btn1.on("click", (event) => {
  event.preventDefault();
  for (var i = 0; i < saveBtn.length; i++) {
    btn1.toggleClass('iconClicked');

  }
  var eventData = inputData.value;
  localStorage.setItem("hour-9", textInput);

});

btn2.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn2.toggleClass('iconClicked');
});

btn3.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn3.toggleClass('iconClicked');
});

btn4.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn4.toggleClass('iconClicked');
});

btn5.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn5.toggleClass('iconClicked');
});

btn6.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn6.toggleClass('iconClicked');
});

btn7.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn7.toggleClass('iconClicked');
});

btn8.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn8.toggleClass('iconClicked');
});

btn9.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn9.toggleClass('iconClicked');
});














