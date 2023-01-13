localStorage.setItem("per1", "Phuoc")
localStorage.setItem("per2", "Tan")
let person1 = sessionStorage.getItem("per1");
let person2 = sessionStorage.getItem("per2");
localStorage.removeItem("per1");
let per1 = localStorage.setItem("per1", "Ha");

localStorage.setItem("per3", "Phuoc")
localStorage.removeItem("per3");

localStorage.clear();

fstline = "Jack a nagga's shit in the '94";
secline = "Seven 9 millimeters ";
thrdline = "Cause I ain't scared to go out ";
fothline = "Like a proper-ass naga";
fifline = "I just lay down";
sithline = "I'ma run up on the naga";
sevthline = "Shoot my 9 with 15, wow";
var alert1 = function(){
    document.getElementById("line1").innerHTML = fstline;
};
setTimeout(alert1, 1000);
var alert2 = function(){
    document.getElementById("line2").innerHTML = secline;
};
setTimeout(alert2, 2000);
var alert3 = function(){
    document.getElementById("line3").innerHTML = thrdline;
};
setTimeout(alert3, 3000);
var alert4 = function(){
    document.getElementById("line4").innerHTML = fothline;
};
setTimeout(alert4, 4000);
var alert5 = function(){
    document.getElementById("line5").innerHTML = fifline;
};
setTimeout(alert5, 5000);
var alert6 = function(){
    document.getElementById("line6").innerHTML = sithline;
};
setTimeout(alert6, 6000);
var alert7 = function(){
    document.getElementById("line7").innerHTML = sevthline;
};
setTimeout(alert7, 7000);