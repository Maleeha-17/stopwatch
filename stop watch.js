let showTime = document.getElementById("showTime");
let seconds= 0;
let minutes= 0;
let hours= 0;


let time_counter = null;


function start_timer(){
    if(time_counter!== null){
        clearInterval(time_counter);
    }
    time_counter = setInterval(function(){
        seconds=seconds +1;    
    if(seconds >=60){
        seconds = 0;
        minutes = minutes + 1;
        if(minutes>=60){
            minutes=0;
            hours = hours+1;
        }
    }



    // condition ? condition true code : condition false code

    let hours_with_zero= hours < 10 ? "0" + hours: hours;
    let minutes_with_zero = minutes < 10 ? "0" + minutes: minutes;
    let seconds_with_zero =seconds < 10 ? "0" +seconds: seconds;
    
    
    
        showTime.innerText = hours_with_zero + " : " + minutes_with_zero + " : " + seconds_with_zero;
    },1000)
    
    
}
function pause_timer(){
    clearInterval(time_counter);
}
function stop_timer(){
    clearInterval(time_counter);
    hours = 0;
    minutes= 0;
    seconds= 0;

    showTime.innerText= "00 : 00 : 00";
}



// 