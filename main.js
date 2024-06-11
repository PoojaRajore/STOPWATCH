let [second, minute, hour]=[0,0,0];
let displaytime=document.querySelector("#displaytime");
let startbtn=document.querySelector("#start");
let stopbtn=document.querySelector("#stop");
let resetbtn=document.querySelector("#reset");
let timer=null;

//here we create a function of our stop watch
//this part execute every second
function stopwatch(){
    second++;
    if(second==60){
        second=0;
        minute++;
        
        if(minute==60){
            minute=0;
            hour++;
        }
    }
    // here we access second minute hour for display 00:00:00 in this format 
    let h = hour < 10 ? "0" + hour:hour;
    let m = minute < 10 ?  "0" + minute:minute;
    let s = second <10 ? "0" + second:second;
    
    displaytime.innerHTML = h +":"+ m+":"+ s;
}
//here we creating a function when watch become start
function watchstart(){
    if(timer!==null){
        //here if timer already be start so clear first the time interval
        clearInterval(timer);
    }
     timer=setInterval(stopwatch,1000);
}
// here we create a function for stop our watch so
function watchstop(){
    clearInterval(timer);
}

//here we creating a function for reset our watch 
function watchreset(){
    clearInterval(timer);
    [second, minute, hour]=[0,0,0];
    displaytime.innerHTML="00:00:00";
}
//here we call start botton
startbtn.onclick=()=>{
    watchstart();
}
//here we call stop btn
stopbtn.onclick=()=>{
    watchstop()
}
//here we call reset btn
resetbtn.onclick=()=>{
    
    watchreset();
}

    

