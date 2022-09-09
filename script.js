var myQuestions = [
  {
    question: "Why so JavaScript and Java have Similar name?",
    answers: {
      a: "JavaScript is a stripped-down version of Java",
      b: "JavaScript's syntax is loosely based on Java's",
      c: "They both originated on the island of Java",
      d: "None of the above",
    },
    correctAnswer: "b",
  },
  {
    question:
      "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers: {
      a: "The User's machine running a Web browser",
      b: "The Web server",
      c: "A central machine deep within Netscape's corporate offices",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
  {
    question: "_____ JavaScript is also called client-side JavaScript.",
    answers: {
      a: "Microsoft",
      b: "Navigator",
      c: "LiveWire",
      d: "Native",
    },
    correctAnswer: "b",
  },
  {
    question: "_____ JavaScript is also called server-side JavaScript.",
    answers: {
      a: "Microsoft",
      b: "Navigator",
      c: "LiveWire",
      d: "Native",
    },
    correctAnswer: "c",
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: {
      a: "Storing numbers, dates, or other values",
      b: "Varying randomly",
      c: "Causing high-school algebra flashbacks",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
  {
    question:
      "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse clicks, form inputs, and page navigation.",
    answers: {
      a: "Client-side",
      b: "Server-side",
      c: "Local",
      d: "Native",
    },
    correctAnswer: "a",
  },
  {
    question: "How does JavaScript store dates in a date object?",
    answers: {
      a: "The number of milliseconds since January 1st, 1970",
      b: "The number of days since January 1st, 1900",
      c: "The number if second since Netscape's public stock offering.",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following can't be done with client-side JavaScript?",
    answers: {
      a: "Validating a form",
      b: "Sending a form's content by email",
      c: "Storing the form's contents to a database file on the server",
      d: "None of the above",
    },
    correctAnswer: "c",
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: {
      a: "2names",
      b: "_first_and_last_names",
      c: "FirstAndLast",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Using ______ statement is how you test for a specific condition.",
    answers: {
      a: "Select",
      b: "If",
      c: "Switch",
      d: "For",
    },
    correctAnswer: "b",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];

      for (letter in questions[i].answers) {
        answers.push(
          '<label class="quiz-question">' +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    var userAnswer = "";
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = "lightgreen";
      } else {
        answerContainers[i].style.color = "red";
      }
    }
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
