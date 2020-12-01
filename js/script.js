//Function to add zero before numbers below 10
const addZero=(e)=>{
 return e < 10 ? "0"+e:''+e
}

// Funtion to add st,nd,rd, or th depending on the number
const addStrings=(e)=>{
 if(e>3 && e<21)return "th";
 switch(e % 10){
  case 1: return 'st'
  case 2: return 'nd'
  case 3: return 'rd'
  default: return 'th'
 }
}

const dayDisplay=()=>{
 const d = new Date;
 const day = d.getDay();
 const month = d.getMonth();
 const date = d.getDate();


 const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
 ]

 const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
 ]
 
 //outputting to the DOM
 const output = `${days[day]}, ${months[month]}  ${date}${addStrings(date)}`
 document.querySelector('#output').innerHTML = output; 
}


//Fucntion that calculates the number of days, hours, mins, and sec that is remianing b4 another new year
const myFunction=()=>{
 //DOM elements
 var dayDOM = document.querySelector("#day");
 let hourDOM = document.querySelector("#hour");
 let minDOM = document.querySelector("#min");
 let secDOM = document.querySelector("#sec");
 
 let date = new Date();
 let newYear = new Date(date.getFullYear() + 1,0);
 
 let dateParse = Date.parse(date);
 let newYearParse = Date.parse(newYear);

 let difference = newYearParse - dateParse;

 const day = Math.floor(difference / (1000 * 60 * 60 *24));
 const hour = Math.floor(difference / (1000 * 60 * 60) % 24);
 const min = Math.floor(difference / (1000 * 60) % 60);
 const sec = Math.floor(difference / (1000) % 60);
 
 //Outputting to the DOM
 dayDOM.innerHTML = day;
 hourDOM.innerHTML = addZero(hour);
 minDOM.innerHTML = addZero(min);
 secDOM.innerHTML = addZero(sec);

 //Color randomizer
 var colorRand = Math.ceil(Math.random() * 10)
 var color = ['orange','purple','red','pale','black','yellow','blue','gold','tan','white','green']
 
 document.querySelector('#year').innerHTML = newYear.getFullYear();
 document.querySelector('#h1').style.color = color[colorRand];
 //Calling of dayDisplay Function
 dayDisplay()
}

//Calling of myFunction function using setInterval
setInterval(myFunction,1000)


