let exam = document.getElementById('exam'); //Finds the element with id exam in the html file.
let checkResult = document.getElementById('check'); //Finds the element with id check in the html file.

const questionBank = [
    {
        question: "The exclusive right to copy, distribute, and profit from a work is _________",
        answerChoices: {1: 'Copyright', 2: 'Fair Use Doctrine', 3: 'Intellectual Property', 4: 'Derivative Work'},
        answer: '1'
    },
    {
        question: "Which of the following effect option can be used to create a Green screen effect known as Chroma Key?",
        answerChoices: {1: 'High key', 2: 'Low key', 3: 'Green key', 4: 'Ultra key'},
        answer: '4'
    },
    {
        question: "Which of the following is an accurate description of a nested sequence?",
        answerChoices: {1: 'Combining multiple video sequences into one master sequence', 2: 'Combine single video sequences into one master sequence', 3: 'Combine multiple video projects into one master sequence', 4: 'Combine single video project into existing video project'},
        answer: '1'
    },
    {
        question: "Inside of which panel can you add or remove video clips to the sequence?",
        answerChoices: {1: 'Sequence panel', 2: 'Timeline', 3: 'Adjustments panel', 4: 'Editing panel'},
        answer: '2'
    },
    {
        question: "Which of the following uses a cutaway technique to show footage that is separate from the narrative, also called supplemental footage?",
        answerChoices: {1: 'A roll', 2: 'B roll', 3: 'AB roll', 4: 'BA roll'},
        answer: '2'
    },
    {
        question: "Which of the following is a type of editing trim that moves end point and shifts all trailing clips?",
        answerChoices: {1: 'Razor', 2: 'Tight trim', 3: 'Ripple', 4: 'End trim'},
        answer: '3'
    },
    {
        question: "What is a correct description of rolling text?",
        answerChoices: {1: 'Titles that move vertically', 2: 'Titles that move horizontally', 3: 'Titles that transition from black', 4: 'Titles that transition to black'},
        answer: '1'
    },
    {
        question: "In which circumstance does copyright clearance not need to be requested?",
        answerChoices: {1: 'Fair use', 2: 'Public domain', 3: 'Web-based use'},
        answer: '1'
    },
    {
        question: "A sequence and a project are the same thing",
        answerChoices: {1: 'True', 2: 'False', 3: 'It varies'},
        answer: '2'
    },
    {
        question: "An exclusive right granted by the federal government allowing the owner to reproduce and sell an artistic or published work.",
        answerChoices: {1: 'Copyright', 2: 'Derivative work', 3: 'Intellectual property', 4: 'Fair use'},
        answer: '1'
    },
];

createExam(questionBank, exam, checkResult); 

function createExam(questions, exam, check){
    function show(questions, exam){
        let output = []; //Empty array for questions.
        for (const i in questions){
            let answers = []; 
            for (const num in questions[i].answerChoices){
                answers.push('<label>' + '<input type="radio" name="question'+i+'" value="'+num+'">' + num + ': ' + questions[i].answerChoices[num] + '</label>'); //Adds the radio buttons for all answer choices specified for the question in position i.
            }
            output.push('<br>' + '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + '<br>' + answers.join('') + '</div>'); //Adds the question and radio buttons together for any given question as well as line breaks to the array output.
        }
        exam.innerHTML = output.join('<br>'); //Seperates all objects in the array output with a <br> and then returns them so they show up on the premiere.html page.
    }
    function result(questions, exam){
        let pass = ''; //Lets the user know if they will pass or fail the exam based on their score at the moment.
        let ansCorrect = 0; //Number of correct answers.
        for (const i in questions){ //Iterates through all the questions.
            const answers = exam.querySelectorAll('.answers'); //
            const user = (answers[i].querySelector('input[type="radio"]:checked')); //I used a css selector that targets radio buttons to check what radio button the user chose.
            if (user && user.value == questions[i].answer){ //If the user's selection matches the radio button attributed to the correct answer to the question...
                ansCorrect++; //... 1 is added to the number of correct answers.
            }
        }
        if ((ansCorrect/questions.length) <= 0.6){ //If the user gets less than 60% questions correct, they fail.
            pass = ' You failed.';
        }
        if ((ansCorrect/questions.length) > 0.6){
            pass = ' You passed!';
        }
        alert(ansCorrect +' out of '+ questions.length + '. This converts to ' + (ansCorrect*100) + '/' + (questions.length * 100) + ' on the actual exam.' + pass); //This creates an alert window that pops up on your screen and shows you your results.
    }
    show(questions, exam); //Calls the showQuest function (equivalent of methods in Java).
    check.onclick = function(){result(questions, exam);}; //When the button with the id check is clicked, the user is given how many of the questions they got right.
}



