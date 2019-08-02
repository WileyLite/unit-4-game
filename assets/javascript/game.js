var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// $(".crystal").attr('class');
var startGame = function () {

    $(".crystals").empty();

random_result = Math.floor(Math.random() * 101) + 19;

console.log(random_result);

$("#result").html('Random Result: ' + random_result);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    crystal.html(random);

    $(".crystals").append(crystal);

}}

startGame();


$(".crystal").on('click', function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);

    if(previous > random_result){
        
        lost++;
        $("#lost").html(lost);
        previous = 0;

        startGame();
        console.log("You lost");
    }
    else if(previous === random_result){

        win++;
        $("#lost").html(lost);
        previous = 0;

        startGame();
        console.log("You win!!")
    }

    console.log(previous);
    // console.log($(this).attr('data-random'));

});

// a game with 4 crystals
 // every crystal needs to have a randnum
 //that num should generate every single time win or loss
 