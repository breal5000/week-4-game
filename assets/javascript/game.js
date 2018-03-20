
var randomNumber;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    
    $(".crystals").empty();
        // crystal images
    var images =[
        "http://globalmedicalco.com/photos/globalmedicalco/6/27017.jpg",
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sb7083251a3d89ede/image/i00de9ee5653e79ab/version/1494405547/image.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXn7AweRKxNJxlCmjKMk06Fq-IhttmEUWSwveB6OqGMD8pfq0iA",
        "https://vignette.wikia.nocookie.net/psi/images/4/42/Chakra3_2152233_std.jpg/revision/latest?cb=20130406060300",

    ]
        // generate a random number and insert into random id
    randomNumber = Math.floor(Math.random() * 90) + 30; 

    $("#result").html("Random Number: " + randomNumber);   
    // 
    for(var i = 0; i < 4; i++){
            // generate a random number for the crystals
        var random = Math.floor(Math.random() * 11) + 1;
            // grab crystal div and insert random number
        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal", 
                "data-random": random
            }); // insert random number into 
            crystal.css({ 
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"

            });
            crystal.html(random)
            // append crystals with random number
        $(".crystals").append(crystal);
    }
    $("#previous").html("Your Total: " + previous);
}   

resetAndStart();
// create on click event
$(document).on("click", ".crystal", function (){
    // add value of crystals to total tally
    var num =parseInt($(this).attr("data-random"));
    // previous is equal to zero plus what ever wins or losses are added
    previous += num;
    
    $("#previous").html("Total Tally:" + previous);
        // loop if same add to win, if over, add to loss
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