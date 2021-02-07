let current_time = moment().format("HH:mm");
//let current_hour = moment().format("HH");
let current_hour = "13";

console.log(current_time);
console.log(current_hour);

var i;
for (i = 9; i <= 17; i++) {
     debugger;
     var hourBlock = document.getElementById(i);
     console.log(hourBlock);
     console.log(hourBlock.id);
     console.log(current_hour);
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

// var hour9Block = document.getElementById(9);
// if(hour9Block < current_hour){
//      hourBlock.style.backgroundColor = "red";
// }
// else if(hourBlock.id === current_hour){
//      hourBlock.style.backgroundColor = "gray";
// }
// else{
//      hourBlock.style.backgroundColor = "green";
// };

