
var randomNumber;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    
    $(".crystals").empty();

    var images =[
        "http://globalmedicalco.com/photos/globalmedicalco/6/27017.jpg",
        "http://www.crystalcleaningofohio.com/portals/7/Images/3.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXn7AweRKxNJxlCmjKMk06Fq-IhttmEUWSwveB6OqGMD8pfq0iA",
        "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Crystal-Background-Free-Download-PIC-WPB0011448.jpg",

    ]

    randomNumber = Math.floor(Math.random() * 90) + 30; // from 30 and up

    $("#result").html("Random Number: " + randomNumber);   

    for(var i = 0; i < 4; i++){
    
        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal", 
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"

            });
            crystal.html(random)
    
        $(".crystals").append(crystal);
    }
    $("#previous").html("Your Total: " + previous);
}   

resetAndStart();

$(document).on("click", ".crystal", function (){
    
    var num =parseInt($(this).attr("data-random"));
    
    previous += num;
    
    $("#previous").html("Total Tally:" + previous);

    if(previous > randomNumber){
        lost--;
        
        $("#lost").html("You Lose:" + lost);
        
        previous = 0;

        resetAndStart();
    }
    else if(previous === randomNumber){
        win++;

        $("#win").html("your Wins:" + win);
        
        previous = 0;
        
        resetAndStart();
    }
});