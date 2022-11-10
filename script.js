var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
document.write("Today is : " + dayList[day] + "<br>");
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var meridiem = (hours >= 12) ? " PM " : " AM ";
hours = (hours >= 12) ? hours - 12 : hours;
if (hours === 0 && meridiem === ' PM ') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        meridiem = ' Noon';
    }
    else {
        hours = 12;
        meridiem = ' PM';
    }
}
if (hours === 0 && meridiem === ' AM ') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        meridiem = ' Midnight';
    }
    else {
        hours = 12;
        meridiem = ' AM';
    }
}
document.write("Current Time : " + hours + meridiem + " : " + minutes + " : " + seconds);