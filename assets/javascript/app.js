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




function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


  //  The decrement function.
function decrement() {
    //  Decrease "number" variable by one.
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
      
      
      function func1() {

        var type = document.getElementsByClassName("q1");
        if(type[0].checked) {
            q1 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q1 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q1 = true;

            correct = correct + 1;
        }

        else if (type[3].checked) {
            q1 = true;

            incorrect = incorrect + 1;
        }

        if (q1 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }




    function func2() {

        var type = document.getElementsByClassName("q2");
        if(type[0].checked) {
            q2 = true;

            correct = correct + 1;
        }
        
        else if (type[1].checked) {
            q2 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q2 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q2 = true;

            incorrect = incorrect + 1;
        }

        if (q2 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func3() {

        var type = document.getElementsByClassName("q3");
        if(type[0].checked) {
            q3 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q3 = true;

            correct = correct + 1;
        }

        else if (type[2].checked) {
            q3 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q3 = true;

            incorrect = incorrect + 1;
        }

        if (q3 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func4() {

        var type = document.getElementsByClassName("q4");
        if(type[0].checked) {
            q4 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q4 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q4 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q4 = true;

            correct = correct + 1;
        }

        if (q4 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func5() {

        var type = document.getElementsByClassName("q5");
        if(type[0].checked) {
            q5 = true;

            correct = correct + 1;
        }
        
        else if (type[1].checked) {
            q5 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q5 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q5 = true;

            incorrect = incorrect + 1;
        }

        if (q5 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func6() {

        var type = document.getElementsByClassName("q6");
        if(type[0].checked) {
            q6 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q6 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q6 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q6 = true;

            correct = correct + 1;
        }

        if (q6 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }


    function func7() {

        var type = document.getElementsByClassName("q7");
        if(type[0].checked) {
            q7 = true;

            correct = correct + 1;
        }
        
        else if (type[1].checked) {
            q7 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q7 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q7 = true;

            incorrect = incorrect + 1;
        }

        if (q7 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }


    function func8() {

        var type = document.getElementsByClassName("q8");
        if(type[0].checked) {
            q8 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q8 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q8 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q8 = true;

            correct = correct + 1;
        }

        if (q8 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }
    func1();
    func2();
    func3();
    func4();
    func5();
    func6();
    func7();
    func8();

    $("#correct").html("Correct Answers: " + (correct));
    $("#incorrect").html("Incorrect Answers: " + (incorrect));
    $("#unanswered").html("Unanswered: " + (unanswered));




    }
}


        

//Code that runs when clicking the button on the opening page
$("#button1").click(function() { 

    //Tells the code to hide the "main" div while displaying the "questions" div
    $("#main").hide();
    $("#questions").show();
    
    //Begins the "run" function
    run();
    
});


//Code that runs when the user clicks on "button 2"
$("#button2").click(function() {
    //Tells the code to hide the "questions" div and display the "results" div
    $("#questions").hide();
    $("#results").show();


    function func1() {

        var type = document.getElementsByClassName("q1");
        if(type[0].checked) {
            q1 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q1 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q1 = true;

            correct = correct + 1;
        }

        else if (type[3].checked) {
            q1 = true;

            incorrect = incorrect + 1;
        }

        if (q1 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }




    function func2() {

        var type = document.getElementsByClassName("q2");
        if(type[0].checked) {
            q2 = true;

            correct = correct + 1;
        }
        
        else if (type[1].checked) {
            q2 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q2 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q2 = true;

            incorrect = incorrect + 1;
        }

        if (q2 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func3() {

        var type = document.getElementsByClassName("q3");
        if(type[0].checked) {
            q3 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q3 = true;

            correct = correct + 1;
        }

        else if (type[2].checked) {
            q3 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q3 = true;

            incorrect = incorrect + 1;
        }

        if (q3 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func4() {

        var type = document.getElementsByClassName("q4");
        if(type[0].checked) {
            q4 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q4 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q4 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q4 = true;

            correct = correct + 1;
        }

        if (q4 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func5() {

        var type = document.getElementsByClassName("q5");
        if(type[0].checked) {
            q5 = true;

            correct = correct + 1;
        }
        
        else if (type[1].checked) {
            q5 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q5 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q5 = true;

            incorrect = incorrect + 1;
        }

        if (q5 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }

    function func6() {

        var type = document.getElementsByClassName("q6");
        if(type[0].checked) {
            q6 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q6 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q6 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q6 = true;

            correct = correct + 1;
        }

        if (q6 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }


    function func7() {

        var type = document.getElementsByClassName("q7");
        if(type[0].checked) {
            q7 = true;

            correct = correct + 1;
        }
        
        else if (type[1].checked) {
            q7 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q7 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q7 = true;

            incorrect = incorrect + 1;
        }

        if (q7 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }


    function func8() {

        var type = document.getElementsByClassName("q8");
        if(type[0].checked) {
            q8 = true;

            incorrect = incorrect + 1;
        }
        
        else if (type[1].checked) {
            q8 = true;

            incorrect = incorrect + 1;
        }

        else if (type[2].checked) {
            q8 = true;

            incorrect = incorrect + 1;
        }

        else if (type[3].checked) {
            q8 = true;

            correct = correct + 1;
        }

        if (q8 == true) {
            unanswered = unanswered - 1;
        }
        
    

    }
    func1();
    func2();
    func3();
    func4();
    func5();
    func6();
    func7();
    func8();

    $("#correct").html("Correct Answers: " + (correct));
    $("#incorrect").html("Incorrect Answers: " + (incorrect));
    $("#unanswered").html("Unanswered: " + (unanswered));

});


//.onclick="func();">
