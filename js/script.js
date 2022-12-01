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
      formattedDescriptions =
        formattedDescriptions + "<li>" + description + "</li>";
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
  "How would you prefer this delivered?",
  [
    "No preference - can be delivered from anywhere unless physical constraints to the work (e.g., physical installation, etc.)",
    "Rullion arrange work, hours and location (in agreement with Client)",
    "Rullion responsible for selection of the team with a single ‘Client Introduction’ meeting included in the process",
  ],
  [
    "Decide how and when work is done. For example:",
    "In a fixed location",
    "Pattern of work defined by Client (e.g., number of hours, when worked)",
    "Client controls the individual task management",
  ]
);

let q3 = new Question(
  "Who can carry out the work and who decides",
  ["Rullion can provide and pay for a suitable substitution if required"],
  ["Client decides which individual will carry out the work"]
);

let q4 = new Question(
  "What level of control is required?",
  [
    "Control is provided by Rullion with little effort exerted by Client",
    "Client instruct Rullion not individuals directly",
  ],
  [
    "A significant amount of control is exerted by Client",
    "Direct reporting line into Client management",
  ],
  [
    "Who decides what work is done?",
    "Who decides HOW the work is delivered?",
    "Who has control over changing what work is done?",
  ]
);

let q5 = new Question(
  "Is supervision required?",
  [
    "Rullion Delivery Manager provides supervision",
    "Milestones agreed – Client approve / decline against the output",
  ],
  [
    "Client Management provides all supervision",
    "Client oversee all aspects of individual's work",
  ],
  [
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
    "Is specific instruction provided on how the work is delivered or does the individual determine how to deliver the outcome?",
    "Is Client coordinating how the work is being done as it is undertaken?",
  ]
);

let q7 = new Question(
  "How will they be paid?",
  [
    "Fixed Price Outcome Based",
    "Payment made once milestone completed and output accepted",
  ],
  [
    "Time & Materials",
    "Daily rate, paid for number of days work completed regardless of output",
  ]
);

let questionList = [q1, q2, q3, q4, q5, q6, q7];

let a1 = new Question("Rullion Change Delivery", null, null, [
  "Specialists",
  "Teams",
  "360",
]);

let a2 = new Question("Rullion Managed Teams", null, null, [
  "Contingent Labour",
  "FTC Resource",
]);

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
  numberqs = questionList.length - 1;
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

    document.getElementById("title").innerHTML = "Your recommended product is";
    $("#btnRestart").show();
    $("#title").show();
    $("#question").hide();
    $("#questionDesc").hide();
    $("#ansYes").hide();
    $("#ansNo").hide();
  } else {
    step++;

    $("#question").html(questionList[step].question);
    document.getElementById("questionDesc").innerHTML =
      questionList[step].getDesc();
    document.getElementById("ansYes").innerHTML = questionList[step].getYes();
    document.getElementById("ansNo").innerHTML = questionList[step].getNo();
  }
}

function start() {
  $("#ansYes").show();
  $("#ansNo").show();
  $("#title").hide();
  $("#btnStart").hide();
  next();
}
