
// ask player to initiali
        
// create a variables to generate random hidden number
var randomNumber;
var lost;
var win;
// create variables to generate random crystal number assignments
//var resetAndStart = function () {
    //$(".crystals").empty();
   //console.log("its working");
randomNumber = Math.floor(Math.random() * 120) + 30; // from 30 and up
    console.log(randomNumber);
$("#result").html("Random Number: ");   
for(var i = 0; i < 4; i++){
var random = Math.floor(Math.random() * 12);
    
var crystal = $("<div>");
        crystal.attr({"class": 'crystal', "data-random": random});
    $(".crystals").append(crystal);
    
}   
