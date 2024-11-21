let day = document.querySelector('.day')
let month = document.querySelector('.month')
let date = document.querySelector('.date')
let year = document.querySelector('.year')
let time = document.querySelector('.hr')
let minut = document.querySelector('.minut')
let sec = document.querySelector('.sec')
let status = document.querySelector('.status')
const weeks = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const montohs = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let fullDate = new Date();
fullDate.getDate();
currntmonth = fullDate.getMonth();
fullDate.getFullYear();
dayweek = fullDate.getDay();
if (weeks[dayweek]) {
  day.innerText = weeks[dayweek] + ', ';
}
month.innerText = fullDate.getMonth();
date.innerText = fullDate.getDate();
year.innerText = fullDate.getFullYear();
if (montohs[currntmonth]) {
  month.innerText = "  OF  " + montohs[currntmonth];
}
setInterval(() => {
  fullDate = new Date();
  


  
  time.innerText = fullDate.getHours();
  minut.innerText = `: ${fullDate.getMinutes()}`;
  sec.innerText = `: ${ fullDate.getSeconds()}`;



  
    if( fullDate.getHours()>12){

      let a=fullDate.getHours()- 12;
      time.innerText = `${a}`;

      if(a<10){
          time.innerText = `0${a}`;
          
      }
      }
  
    if(fullDate.getMinutes()<10){
      minut.innerText = `: 0${fullDate.getMinutes()}`;

    }
  
    if(fullDate.getSeconds()<10){
    sec.innerText = `: 0${ fullDate.getSeconds()}`;
    }
  




}, 1000)
if (fullDate.getHours() > 12) {
  status.innerText = "PM";
} else {
  status.innerText = "AM";
}