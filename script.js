let current_time = moment().format("HH:mm");
let current_hour = moment().format("HH");
//let current_hour = "12";


var element = document.querySelectorAll('.fas')
element.forEach(function(el){
  el.addEventListener('click', function () {
    //console.log('click');
    saveInput();
  });
});

var saveInput = function(){
     for (i = 10; i <= 17; i++) {
        var answer= document.getElementById(i);
        localStorage.setItem(i, answer.value);
     };
};

for (i = 10; i <= 17; i++) {
     var answer= document.getElementById(i);
     answer.value = localStorage.getItem(i);
};

console.log(current_time);
console.log(current_hour);

var i;
for (i = 10; i <= 17; i++) {
     //debugger;
     var hourBlock = document.getElementById(i);
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




