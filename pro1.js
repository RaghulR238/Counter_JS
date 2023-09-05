const days=document.getElementById("days");
const Hours=document.getElementById("Hours");
const Minutes=document.getElementById("Minutes");
const Seconds=document.getElementById("Seconds");

const sub=document.getElementById("submit");
function time(){
  var a=butt.value;
  // console.log(a);
    const curyear=new Date().getFullYear();//create date obj(in build method)
    //const newyear=new Date(`January 1 ${curyear+1}`);//targeting next year(target for timer)
    const curdate=new Date();
    const newyear=new Date(a);
    //console.log(curdate);
    console.log(newyear);
    const diff=newyear-curdate;//difference btw current date minus target date(new year)
   console.log(diff);
    const day=Math.floor(diff/1000/60/60/24);
    const hr=Math.floor((diff/1000/60/60)%24);
    const min=Math.floor((diff/1000/60)%60);
    const sec=Math.floor((diff/1000)%60);
  // console.log(day+" "+hr+" "+min+" "+sec);
  days.innerHTML=day<10?"0"+day:day;
  Hours.innerHTML=hr<10?"0"+hr:hr;
  Minutes.innerHTML=min<10?"0"+min:min;
  Seconds.innerHTML=sec<10?"0"+sec:sec;
  
}
//setInterval(time,1000);
// sub.addEventListener("click",setInterval);
let butt=document.getElementById("button");

    
    

setInterval(time,1000);
