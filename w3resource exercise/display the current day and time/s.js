// let date = new Date()
// let weekend = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

// let day = date.getDay()
// let time = date.getHours()
// let minutes = date.getMinutes()
// let seconds = date.getSeconds()
// let zone = "PM"

// if (time <= 11) {
//     zone = "AM"
//     console.log(`current time is ${time} ${zone} : ${minutes} : ${seconds}`);
//     if (time >= 12) {
//         zone = "PM"
//         console.log(`current time is ${time} ${zone} : ${minutes} : ${seconds}`);
//     }
// }



///////////////////////////////////////////////////////////////////


var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
// var prepand = (hour >= 12) ? " PM " : " AM ";
// hour = (hour >= 12) ? hour - 12 : hour;

let zone = (hour >=12)? "PM" : "AM"
hour = (hour > 12)? hour - 12 : hour


console.log("Today is : " + daylist[day] + ".");
console.log("Current Time : " + hour + zone + " : " + minute + " : " + second);
