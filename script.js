let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");

let _Date = new Date();
let currMinute = (_Date.getMinutes() - 30) * 6;
minute.style.transformOrigin = "0px 0px";
minute.style.transform = `rotate(${currMinute}deg)`;
var currHour = _Date.getHours();
if(currHour<6){
    currHour =(Math.abs(-currHour - 6)) * 30;

}
else{
    currHour = Math.abs(currHour - 6) * 30;

}


hour.style.transform = `rotate(${currHour}deg)`;
hour.style.transformOrigin="0px 0px";
let m=currMinute = _Date.getMinutes();
console.log(m);
if(m>=12&&m<=23){
    currHour+=6;
  
}
if(m>=24&&m<=35){
    currHour+=12;
  
}
if(m>=36&&m<=47){
    currHour+=18;
  
}
if(m>=48&&m<=58){
    currHour+=24;
  
}
if(m==59){
    currHour+=30;
}

hour.style.transform = `rotate(${currHour}deg)`;
v=_Date.getSeconds()+_Date.getMinutes()*60;
setInterval(() => {
  let _Date = new Date();
  let currSecond = (_Date.getSeconds() - 30) * 6;

  let currMinute = (_Date.getMinutes() - 30) * 6;
  if(currSecond==-180){

    minute.style.transform = `rotate(${currMinute}deg)`;

  }
v++;
if(v%720==0){
    currHour+=6;
        hour.style.transform = `rotate(${currHour}deg)`;
      
}
  second.style.transformOrigin = "0px 0px";
  second.style.transform = `rotate(${currSecond}deg)`;
}, 1000);

