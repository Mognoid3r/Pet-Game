//point counter
var points = 0;
//quiz toggle
var questionAnswered = false;
// Event listener for our quiz-button
$("#quiz-button").on("click", function () {
    questionAnswered = false;

    // Storing our opentdb API URL for the quiz
    var queryURL = "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {       // After the data from the AJAX request comes back
            // for loop through the questions
            // console.log(response)
            for (var i = 0; i < response.results.length; i++) {
                var questionUrl = response.results[i].question;
                var correct = response.results[i].correct_answer;
                var incorrect = response.results[i].incorrect_answers;
                console.log(correct);
                console.log(incorrect);

                $("#body").html(questionUrl)
                var quizquestion = $("<div>");
                var truebtn = $("<button>").text("True");
                var falsebtn = $("<button>").text("False");

                $("#body").append("<br><br>");
                $("#body").append(truebtn);
                $("#body").append(falsebtn);
                //swap to default pet face function
                function defaultEmoji() {
                    $(".pet").attr("src", "images/testemoji/defaultemoji.png")
                }
                //correct faceswap function
                function correctPetFace() {
                    points++;
                    $(".points").html("Corrent Answers: " + points);
                    $(".pet").attr("src", "images/testemoji/correctAnswer.jpg")
                    setTimeout(defaultEmoji, 5000);
                }
                //incorrect faceswap function
                function incorrectPetFace() {
                    $(".pet").attr("src", "images/testemoji/incorrectemoji.png")
                    setTimeout(defaultEmoji, 5000);
                }
                //answer click function
                truebtn.on("click", function (event) {

                    var x = "True";
                    console.log(questionAnswered)
                    if (questionAnswered == false) {
                        questionAnswered = true;
                        if (x == correct) {
                            console.log(x)
                            $("#correctAns").text("true is the correct answer");
                            correctPetFace();

                        } else {
                            alert("not correct");
                            incorrectPetFace();
                        }
                    }
                });

                falsebtn.on("click", function (event) {
                    if (questionAnswered == false) {

                        questionAnswered = true;
                        var y = "False";
                        if (y == correct) {
                            console.log(questionAnswered)
                            $("#correctAns").text("false is the correct answer");
                            correctPetFace();
                            
                        } else {
                            alert("not correct!");
                            incorrectPetFace();
                        }
                    }

                });
            };
        });
});
