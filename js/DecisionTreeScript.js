//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/*window.___gcfg = {lang: 'en'};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();*/

var score = 0;
var step = 0;
var questions = [];
var result = 0;
var numberqs = 0;
var answers = [];
var talk = [];
var responsesYes = [];
var responsesNo = [];
var teams = [];

class Question {
  constructor(question, yesAns, noAns, questionDesc) {
    this.question = question;
    this.yesAns = yesAns;
    this.noAns = noAns;
    this.questionDesc = questionDesc;
  }

  formatAnswer(answerList) {
    if (answerList == null) {
      return "";
    }

    let arrayOfAnswers = answerList;
    let formattedAnswers = "";
    arrayOfAnswers.forEach((answer, i) => {
      if (i != arrayOfAnswers.length - 1) {
        formattedAnswers = formattedAnswers + answer + "<br><br>";
      } else {
        formattedAnswers = formattedAnswers + answer;
      }
    });
    return formattedAnswers;
  }

  formatDesc(descriptionList) {
    if (descriptionList == null) {
      return "";
    }

    let arrayOfDescriptions = descriptionList;
    let formattedDescriptions = "";
    arrayOfDescriptions.forEach((description, i) => {
      formattedDescriptions = formattedDescriptions + description + " ";
    });
    return formattedDescriptions;
  }

  getYes() {
    return this.formatAnswer(this.yesAns);
  }

  getNo() {
    return this.formatAnswer(this.noAns);
  }

  getDesc() {
    return this.formatDesc(this.questionDesc);
  }
}

//to change the questions/answers for any questions change the text below q1,q2,q3,q4... are the number of the questions
//the structure of each question is this

//let q# = new Question( IGNORE THIS LINE
//   "Question Goes Here", //the question which is asked
//   [//the text displayed in the left hand side box
//     "Left hand side text goes here",
//      "Left hand side text goes here",
//   ],
//   [//the text displayed in the right hand side box
//     "Left hand side text goes here",
//      "Left hand side text goes here",
//   ],
//   [ //text under the question goes here
//     "For Example: ",
//     "Who decides what work is done?",
//     "Who decides HOW the work is delivered?",
//     "Who has control over changing what work is done?",
//   ]
// );
// all text must be in quotes "" and be followed by a ,
// the left and right side text which is inside the [] brackets will be broken up based on where the commas are placed inside these brackets
//eg
// ["first bit of text","second bit of text","third bit of text"]
// will be displayed as
//    first bit of text
//
//    second bit of text
//
//    third bit of text
//
//eg 2
// ["first bit of text second bit of text third bit of text"]
// will be displayed as
// first bit of text second bit of text third bit of text
// either method of writing in the text can be used for what is displayed under the question
let contactFormUrl = "https://www.youtube.com/watch?v=PSrO55KS6VY"; //this is the link to Rullion Managed Teams contact form quotes around the url are required

let q1 = new Question(
  "Reason for demand?",
  [
    "A clear project with a defined outcome",
    "Defined milestones to be met by Rullion",
    "Payment on completion of milestones",
    "A defined work package where Rullion are accountable for delivery",
  ],
  [
    "Provision of an individual with a specific skillset",
    "Covering maternity leave/sickness absence",
    "Additional resource required, e.g., to work on a project where Client is accountable for delivery",
  ]
);

let q2 = new Question(
  "How would you prefer this project be delivered?",
  [
    "No preference - can be delivered from anywhere unless physical constraints to the work",
    "<b>For example:</b><br>Physical installation",
    "Rullion arrange work, hours and location (in agreement with Client)",
    "Rullion responsible for selection of the team with a single ‘Client Introduction’ meeting included in the process",
  ],
  [
    "Decide how and when work is done.",
    "<b>For example:</b>",
    "In a fixed location",
    "Number of hours worked / when",
    "Client controls the individual task management",
  ]
);

let q3 = new Question(
  "Who can carry out the work and who decides?",
  ["Rullion can provide and pay for a suitable substitution if required"],
  ["Client decides which individual will carry out the work"]
);

let q4 = new Question(
  "What level of control is required?",
  [
    "Control is provided by Rullion with little effort exerted by Client the client instructs Rullion not individuals directly",
  ],
  [
    "A significant amount of control is exerted by Client there is a direct reporting line into the Client's management",
  ],
  [
    "For Example: ",
    "Who decides what work is done?",
    "Who decides HOW the work is delivered?",
    "Who has control over changing what work is done?",
  ]
);

let q5 = new Question(
  "Is supervision required?",
  [
    "Rullion Delivery Manager provides supervision with milestones agreed the Client can approve / decline against the output",
  ],
  [
    "Client Management provides all supervision and the client oversee all aspects of an individual's work",
  ],
  [
    "For Example: ",
    "Is work under constant review or does the review take place when the agreed output is delivered?",
    "Is the individual self reliant or are they being mentored / developed?",
  ]
);

let q6 = new Question(
  "Do they need direction?",
  [
    "Rullion agrees ways of working with Client",
    "Regular service feedback loop with Rullion",
  ],
  [
    "Direction and instruction given directly by Client to individual as the work is being undertaken",
  ],
  [
    "For Example: ",
    "Is specific instruction provided on how the work is delivered or does the individual determine how to deliver the outcome?",
    "Is Client coordinating how the work is being done as it is undertaken?",
  ]
);

let q7 = new Question(
  "How will they be paid?",
  [
    "<b>Fixed Price Outcome Based</b>",
    "Payment made once milestone completed and output accepted",
  ],
  [
    "<b>Time & Materials</b>",
    "Daily rate, paid for number of days work completed regardless of output",
  ]
);

let questionList = [q1, q2, q3, q4, q5, q6, q7];

let a1 = new Question(
  "Your recommended product is:<br>Rullion Change Delivery",
  null,
  null,
  [
    "If you would like to speak to the team about this product please use the contact form below.",
  ]
);

let a2 = new Question(
  "Your recommended product is:<br>Rullion Managed Teams",
  null,
  null,
  [
    "If you would like to speak to the team about this product please fill out <a href='" +
      contactFormUrl +
      "'>this</a> form.",
  ]
);

function getLang() {
  var userLang = navigator.language || navigator.userLanguage;
  var lang = userLang.split("-");

  if (lang[0] == "it") return "ita";
  else return "eng";
}

function answer(res) {
  if (res == "yes") {
    score = score + 1;
    next();
  } else next();
}

function next() {
  numberqs = questionList.length;
  if (step == numberqs) {
    result = 1;

    $("#result").show();
    if (score > 3) {
      document.getElementById("resultTitle").innerHTML = a1.question;
      document.getElementById("resultText").innerHTML = a1.getDesc();
    } else {
      document.getElementById("resultTitle").innerHTML = a2.question;
      document.getElementById("resultText").innerHTML = a2.getDesc();
    }

    // document.getElementById("title").innerHTML = "Your recommended product is";
    $("#btnRestart").show();
    $("#title").show();
    $("#question").hide();
    $("#questionDesc").hide();
    $("#ansYes").hide();
    $("#ansNo").hide();
  } else {
    $("#question").html(questionList[step].question);
    document.getElementById("questionDesc").innerHTML =
      questionList[step].getDesc();
    document.getElementById("ansYes").innerHTML = questionList[step].getYes();
    document.getElementById("ansNo").innerHTML = questionList[step].getNo();
    step++;
  }
}

function start() {
  $("#ansYes").show();
  $("#ansNo").show();
  $("#title").hide();
  $("#btnStart").hide();
  next();
}
