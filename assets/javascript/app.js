//Global Variables
var timer;

var intervalId;

var number = 60;

var correct = 0;

var incorrect = 0;

var unanswered = 8;

var q1 = false;

var q2 = false;

var q3 = false;

var q4 = false;

var q5 = false;

var q6 = false;

var q7 = false;

var q8 = false;

//console.log("unanswered:" + unanswered);



//Code that runs when clicking the button on the opening page
$("#button1").click(function() { 

    //Tells the code to hide the "main" div while displaying the "questions" div
    $("#main").hide();
    $("#questions").show();
    //Begins the "run" function
    run();
    
});








function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


  //  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#clock").html("<h2>Time Remaining:" + " " + number + " " + "seconds</h2>");
    //  Once number hits zero...
    if (number === 0) {
      //  ...run the stop function.
      stop();
      //  Alert the user that time is up, by hiding the "questions" div and showing the "results" div
      $("#questions").hide();
      $("#results").show();    
    }
}






//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){
        //changes the value of variable q1 to true
        q1=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects
        if (this.value==1.1){
            incorrect = incorrect + 1;

        }
        else if (this.value==1.2) {
            incorrect = incorrect + 1;

        }
        else if (this.value==1.3) {
            correct = correct + 1;


        }
        else if (this.value==1.4) {
            incorrect = incorrect + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});


//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){

        //changes the value of variable q2 to true
        q2=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects
        if (this.value==2.1){
            correct = correct + 1;

        }
        else if (this.value==2.2) {
            incorrect = incorrect + 1;

        }
        else if (this.value==2.3) {
            incorrect = incorrect + 1;


        }
        else if (this.value==2.4) {
            incorrect = incorrect + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});




//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){
    
    //changes the value of variable q3 to true
    q3=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects    
        if (this.value==3.1){
            incorrect = incorrect + 1;

        }
        else if (this.value==3.2) {
            correct = correct + 1;

        }
        else if (this.value==3.3) {
            incorrect = incorrect + 1;


        }
        else if (this.value==3.4) {
            incorrect = incorrect + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});


//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){

    //changes the value of variable q4 to true
        q4=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects    
        if (this.value==4.1){
            incorrect = incorrect + 1;

        }
        else if (this.value==4.2) {
            incorrect = incorrect + 1;

        }
        else if (this.value==4.3) {
            incorrect = incorrect + 1;


        }
        else if (this.value==4.4) {
            correct = correct + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers        
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});




//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){

        //changes the value of variable q5 to true
        q5=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects           
        if (this.value==5.1){
            correct = correct + 1;

        }
        else if (this.value==5.2) {
            incorrect = incorrect + 1;

        }
        else if (this.value==5.3) {
            incorrect = incorrect + 1;


        }
        else if (this.value==5.4) {
            incorrect = incorrect + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers          
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});



//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){

        //changes the value of variable q6 to true
        q6=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects                   
        if (this.value==6.1){
            incorrect = incorrect + 1;

        }
        else if (this.value==6.2) {
            incorrect = incorrect + 1;

        }
        else if (this.value==6.3) {
            incorrect = incorrect + 1;


        }
        else if (this.value==6.4) {
            correct = correct + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers               
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});


//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){

        //changes the value of variable q7 to true        
        q7=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects                    
        if (this.value==7.1){
            correct = correct + 1;

        }
        else if (this.value==7.2) {
            incorrect = incorrect + 1;

        }
        else if (this.value==7.3) {
            incorrect = incorrect + 1;


        }
        else if (this.value==7.4) {
            incorrect = incorrect + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers               
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});




//Code that runs when a radio button is clicked
$(document).ready(function(){
    $('input[type=radio]').click(function(){

        //changes the value of variable q8 to true                
        q8=true;

        //increases the value of either the "correct" variable or the "incorrect" variable,
        // depending on the answer the user selects             
        if (this.value==8.1){
            incorrect = incorrect + 1;

        }
        else if (this.value==8.2) {
            incorrect = incorrect + 1;

        }
        else if (this.value==8.3) {
            incorrect = incorrect + 1;


        }
        else if (this.value==8.4) {
            correct = correct + 1;
        }

        //Alters the html on the "results" div to display the current 
        //number of correct and incorrect answers    
        $("#correct").html("Correct Answers: " + (correct));
        $("#incorrect").html("Incorrect Answers: " + (incorrect));

    });
});

var submitAnswer1 = function() {
    var radios = document.getElementsByName('choice1');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            break;
        }
   }
   
   if (val == "" ) {
     alert('please select choice answer');
   } else if ( val == "Scripting" ) {
     alert('Answer is correct !');
   } else {
     alert('Answer is wrong');
   }
 };



//Tells the code to decrease the variable "unanswered" by 1 each time a radio 
//button is clicked 
 $(document).ready(function(){
    $('input[type=radio]').click(function(){
        unanswered = unanswered - (1);

        //Alters the html to display the number of questions not answered by the user
        $("#unanswered").html("Unanswered: " + (unanswered));

    });


//Code that runs when the user clicks on "button 2"
 $("#button2").click(function() { 

    //Tells the code to hide the "questions" div and display the "results" div
    $("#questions").hide();
    $("#results").show();
 });




 });
