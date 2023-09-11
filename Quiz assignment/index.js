var contents = $("#contents");

var data;
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (response) {
    data = response;
    // console.log(data)
    $("#scoreValue").text(`0 / ${data.length}`);
    showQuestions(); // Questions with options are appended to the Content Div.
    createSubmit(); // Creates a Submit Button After all questions are displayed.



    // $("#submitBtn").click(function() {
    //     console.log("Submit Clicked")
    //     const score = checkAnswers();

    //     var scoreValue = $("#scoreValue");
    //     scoreValue.text(`${score} / ${data.length}`)

    // });


});

// Function showQuestions is Defined Globally.
function showQuestions() {

    for (var i = 0; i < data.length; i++) {
        var id = data[i].id
        var question = data[i].question;
        var options = data[i].options

        contents.append(createQuestions(id,
            question,
            options
        ));
    }
    // createSubmit();
}

// Function CreateQuestions is defined globally.
function createQuestions(id, question, options) {
    var questionContainer = $("<div>");
    questionContainer.addClass("questionContainer");

    var questionElement = $("<h3>");
    questionElement.text(`Q${id}. ${question}`);

    var optionsContainer = $("<div>");
    optionsContainer.addClass("optionsContainer");
    for (var i = 0; i < options.length; i++) {
        var option = options[i];

        var optionButton = $("<input>").attr({
            type: "radio",
            name: "option" + id,
            value: i + 1
        }).text(option);

        var optionLabel = $("<label>").text(option).append(optionButton);
        // var optionLabel = $("<label>").append(optionButton,option);

        optionsContainer.append(optionLabel);
    }

    questionContainer.append(questionElement, optionsContainer)
    return questionContainer;
}

//  Function to create submit button is defined.
function createSubmit() {
    var submitButton = $("<button>").attr({
        type: "submit",
        id: "submitBtn"
    }).text("Submit");

    contents.append(submitButton);
}


// $("#submitBtn").click(function() {   // Only click to the element doesn't work here as contents might not be loaded(async function )
$("#contents").on("click", "#submitBtn", function () { // Event listener click is added to submit button after the contents are fully loaded.
    console.log("Submit Clicked")
    const score = checkAnswers();

    var scoreValue = $("#scoreValue");
    scoreValue.text(`${score} / ${data.length}`)

});

function checkAnswers() {
    let score = 0;
    for (let i = 0; i < data.length; i++) {
        const selectedAnswer = $(`input[name="option${data[i].id}"]:checked`).val();
        const correctIndex = data[i].answer;
        if (selectedAnswer !== undefined && parseInt(selectedAnswer) === correctIndex) {
            score++;
        }
    }
    // $("input[type='radio']").prop("checked", false) 
    return score;
}