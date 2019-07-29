let today = new Date();
let day = today.getDay();
let daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let hour = today.getHours();
let min = today.getMinutes();

let suffix = (hour >= 12)? " PM" : " AM";
hour = (hour >= 12)? hour - 12 : hour;

if (hour === "0" && suffix === " PM"){
  if(min === "0" && sec === "0") {
    hour = 12;
    suffix = " Noon";
  }
} 
else if (hour === "0" && suffix === " AM") {
  if(min === "0" && sec === "0") {
    hour = 12;
    suffix = " Midnight";
  }
}

var todayHTML = document.getElementById("todayHTML");
var timeHTML = document.getElementById("timeHTML");

todayHTML.innerHTML = "Today is: " + daylist[day];
timeHTML.innerHTML = "Current time is: " + hour + suffix + " " + min;

//log URL 
console.log(document.URL);
