// m var created for moment 
var m = moment();
var clock = document.getElementById('clock');
    console.log("Today's date: " + m.format("dddd, L"));
    console.log("Local Time: " + m.format(" HH:MM:SS"));
    console.log("Week #: " + m.week() + " out of 52");
    console.log("Weeks remaining this year: " + (52 - m.week()));



// populates current date at top of app
$("#currentDay").html(m.format("dddd"));
$("#currentDate").html(m.format("L"));

function updateClock (){
var now = moment();
var digitalClock = now.format('h:mm A');
clock.textContent = digitalClock;
}

setInterval(updateClock, 1000);
    
    

    

