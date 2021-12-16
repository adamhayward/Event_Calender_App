const m = moment();
const currentHour = m.hour();
// create clock
const setClock = () => {
  const clock = document.getElementById("clock");
  const digitalClock = m.format("h :mm A");
  clock.textContent = digitalClock;
  $("#currentDay").html(m.format("dddd"));
  $("#currentDate").html(m.format("L"));
};
// determin color in relation to the time
const updateClass = (x) => {
  if (x < currentHour) {
    $(`#${x}`).removeClass("past, present, future");
    $(`#${x}`).addClass("past");
  }
  if (currentHour === x) {
    $(`#${x}`).removeClass("past, present, future");
    $(`#${x}`).addClass("present");
  }
  if (x > currentHour) {
    $(`#${x}`).removeClass("past, present, future");
    $(`#${x}`).addClass("future");
  }
};
// save user input
const saveData = (button, x) => {
  const saveBtn = $(".saveBtn");
  for (var i = 0; i < saveBtn.length; i++) {
    saveBtn.addClass("icon");
  }

  button.on("click", (e) => {
    e.preventDefault();
    button.addClass("iconClicked");
    const inputData = [];
    const inputField = $(`#${x}`);
    let inputText = inputField.val();
    inputData.push(inputText);
    localStorage.setItem(`${x}`, JSON.stringify(inputData));
  });
};
// print hours & saved data to document
const renderData = (x) => {
  const hourList = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  for (let i = 0; i < hourList.length; i++) {
    $(".hourField")[i].textContent = hourList[i];
  }
  let savedData = JSON.parse(localStorage.getItem(x));
  $(`#${x}`).text(savedData);
};
// allow each ID to access funtions
const hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
hourArr.forEach((hour) => {
  updateClass(hour);
  renderData(hour);
});
// Document's clock
setInterval(setClock, 1000);
// event listeners to save task
saveData($("#btn1"), 9);
saveData($("#btn2"), 10);
saveData($("#btn3"), 11);
saveData($("#btn4"), 12);
saveData($("#btn5"), 13);
saveData($("#btn6"), 14);
saveData($("#btn7"), 15);
saveData($("#btn8"), 16);
saveData($("#btn9"), 17);

