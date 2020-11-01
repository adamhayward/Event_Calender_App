$(document).ready(function () {
  console.log(moment().hour());
  var currentHour = moment().hour();
  var timeBlocks = $('.hour');
  console.dir(timeBlocks);
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var timeBlockId = timeBlock.children[0].id;
    var hour = parseInt(timeBlockId.split('-')[1])
    console.dir(timeBlock.children[0].id);

  }

});


