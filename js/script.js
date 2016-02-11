!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/*window.___gcfg = {lang: 'en'};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();*/





var step = 0;
var questions = [];
var result = 0;
var numberqs = 0
var answers = [];
var talk = [];
var teams = [];

questions['ita'] = [
	'',
];

questions['eng'] = [
	'',
	'Are you making a change to the Database',
	'Are you making a change that effects the sales process',
	'Does your change require form changes',
    'Does you change have anything to do with web leads',
	
];

answers = [
    '',
    'DBA',
    'Sales',
    'Biz Ops',
    'Sales',
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
        talk.push(answers[step]);
        next();
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
        
        teams = talk.join('</br>');

        document.getElementById("talk-teams").innerHTML = teams;
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
		$('#question').html(questions[getLang()][step] + '?');
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
