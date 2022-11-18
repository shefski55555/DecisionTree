!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

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
var numberqs = 0
var answers = [];
var talk = [];
var responsesYes = [];
var responsesNo = [];
var teams = [];

questions['ita'] = [
	'',
];

questions['eng'] = [
	'',
	'Reason for demand?',
	'How would you prefer this delivered?',
	'Who can carry out the work and who decides?',
    '<h1>What level of control is required?</h1><br>Who Decides what work is done?<br>Who Decides How the work is delivered?<br>Who has control over changing what work is done?',
	'<h1>Is supervision required?</h1><br>Is work under constant review or does the eview take place when the agreed output is delivered?<br>Is the indicidual self reliant or are they being mentored / Developed?',
	'<h1>Do they need direction?</h1><br>Is specific instruction provided on how the work is delivered or does the individual determine how to deliver the outcome?<br>Is client coordingating how the work is being done as it is undertaken?',
	'How will they be paid?',
];

responsesYes['yesAnswers'] = [
	'',
	'A clear project with a defined outcome\nDefined milestones to be met by Rullion',
	'Are you making a change that effects the sales process',
	'Does your change require form changes',
    'Does you change have anything to do with web leads',
	'',
	'',
	'',
	
];

responsesNo['noAnswers'] = [
	'',
	'Reason for demand?',
	'Are you making a change that effects the sales process',
	'Does your change require form changes',
    'Does you change have anything to do with web leads',
	'',
	'',
	'',
	
];

answers = [
    'Rullion Change Delivery',
	'Recruitment',
];

function getLang() {
	var userLang = navigator.language || navigator.userLanguage;
	var lang = userLang.split('-');

	if (lang[0] == 'it')
		return 'ita';
	else
		return 'eng';
}

function answer(res) {
	if (res == 'yes') {
        score = score + 1;
        next();
		//talk.push(answers[step]);
		//$('#buttons-box').hide();
		//$('#drop-msg').show();
		//$('#share-button').show();
       // talk.push(answers[step])

		//ga('send', 'event', 'test', 'completed', 'no');
	}
	else
		next();
}

function next() {
    numberqs = questions.eng.length - 1
	if (step == numberqs) {
		result = 1;
        
        //teams = talk.join('</br>');
		if(score > 3){
			document.getElementById("talk-teams").innerHTML = answers[0];
		}
		else{
			document.getElementById("talk-teams").innerHTML = answers[1];
		}
		
        
        $('#step').hide();
        $('#question').hide();
		$('#buttons-box').hide();
		$('#talk-msg').show();
		//$('#share-button').show();

		//ga('send', 'event', 'test', 'completed', 'yes');
	}
	else {
		step++;
        
		$('#step').html(step  * numberqs / numberqs);
		document.getElementById("ansYes").innerText = responsesYes['yesAnswers'][step];
		document.getElementById("ansNo").innerText = responsesNo['noAnswers'][step];
		$('#question').html(questions['eng'][step]);
	}
}

/*function nextq() {
    numberqs = questions.eng.length - 1
	if (step == numberqs) {
		result = 1;

		$('#buttons-box').hide();
		$('#ask-msg').show();
		$('#share-button').show();

		//ga('send', 'event', 'test', 'completed', 'yes');
	}
    else  {
    step++;

		$('#step').html(step  * numberqs / numberqs);
		$('#question').html(questions[getLang()][step] + '?' + answers[step]);
        talk.push(answers[step -1]);
    }
}*/

function start() {
	$('#question-box').show();
	$('#start-box').hide();
	next();
}
