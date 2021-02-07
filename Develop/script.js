let current_time = moment().format("HH:mm");
let current_hour = moment().format("HH");
//let current_hour = "9";

console.log(current_time);
console.log(current_hour);

var i;
for (i = 10; i <= 17; i++) {
     //debugger;
     var hourBlock = document.getElementById(i);
     // console.log(hourBlock);
     // console.log(hourBlock.id);
     // console.log(current_hour);
     if(hourBlock.id < current_hour){
          hourBlock.style.backgroundColor = "red";
     }
     else if(hourBlock.id === current_hour){
          hourBlock.style.backgroundColor = "gray";
     }
     else{
          hourBlock.style.backgroundColor = "green";
     }
         
};

//9 oclock specifically with jQuery
var hourString = current_hour.toString();
console.log(hourString);
if("9" > current_hour){
     $("#9").css("backgroundColor", "red");
}else if("9" === current_hour){
     $("#9").css("backgroundColor", "gray");
}else{
     $("#9").css("backgroundColor", "green");
};


