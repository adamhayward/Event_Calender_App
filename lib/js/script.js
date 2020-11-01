
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

    console.log(hour)
    if (hour < currentHour) {
      console.log(hour < currentHour);
      console.log('add . past class');
      timeBlock.addClass('past');

    } else if (hour === currentHour) {
      console.log(hour == currentHour);
      console.log('add .present class');
      timeBlock.addClass('present');

      console.log(hour === currentHour);
    }
    else {

      console.log('add .future class')
      timeBlock.children[0].toggleClass('future');
      console.log(hour >= currentHour);
    }


  }

});
//CLOCK

var clock = document.getElementById('clock');
var m = moment();

function updateClock() {
  var now = moment();
  var digitalClock = now.format('h :mm A');
  clock.textContent = digitalClock;
}
setInterval(updateClock, 1000);

//DATE
$("#currentDay").html(m.format("dddd"));
$("#currentDate").html(m.format("L"));

//HOUR FIELDS
function renderHours() {
  var hourList = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  var hours = $(".hourField");
  for (var i = 0; i < hourList.length; i++) {
    hours[i].textContent = hourList[i];
  }
}
renderHours();

// SAVE BUTTON "ICON/style" TOGGLE

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


function renderBtns() {

  for (var i = 0; i < saveBtn.length; i++) {
    saveBtn.addClass('icon');
  }
}
renderBtns();

// button styling & funcitions


btn1.on("click", () => {
  for (var i = 0; i < saveBtn.length; i++)
    btn1.toggleClass('iconClicked');
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
    btn2.toggleClass('iconClicked');
});




  // var hourBlock = hourBlocks[i];
  // var hourBlockId = hourBlock.children[0].id;
  // var hour = parseInt(hourBlockId.split('-')[1]);
  // var timeBlock = $('.time-block');


// saveBtn.on('click', function (event) {
//   event.preventDefault();

//   var textInput = inputData.value;
//   localStorage.setItem('hour-9', textInput);
// })












