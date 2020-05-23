/*Typing.js*/
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #000 }";
  document.body.appendChild(css);
};
/*Typing.js*/

/*Full Page JS*/
$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#fff'],
  });
});

$('.arrowDown').click(function(){
    $.fn.fullpage.moveSectionDown();
});

/*Full Page JS*/

/*Feedback*/
function $$(selector, context) {
  var context = context || document;
  var elements = context.querySelectorAll(selector);
  var nodesArr = [].slice.call(elements);
  return nodesArr.length === 1 ? nodesArr[0] : nodesArr;
};

var $emotesArr = $$('.fb-emote');
var numOfEmotes = $emotesArr.length;

var $dragCont = $$('.fb-cont__drag-cont');
var $activeEmote = $$('.fb-active-emote');
var $leftEye = $$('.fb-active-emote__eye--left');
var $rightEye = $$('.fb-active-emote__eye--right');
var $smile = $$('.fb-active-emote__smile');

var emoteColors = {
  terrible: '#f8b696',
  bad: '#f9c686',
  default: '#ffd68c'
}

var animTime = 0.5;

$emotesArr.forEach(function($emote, i) {
  var progressStep = i / (numOfEmotes - 1);
  $emote.dataset.progress = progressStep;
  
  $emote.addEventListener('click', function() {
    var progressTo = +this.dataset.progress;
    var type = this.dataset.emote;
    var $target = document.querySelector('#fb-emote-' + type);
    var $lEye = $target.querySelector('.fb-emote__eye--left');
    var $rEye = $target.querySelector('.fb-emote__eye--right');
    var leftEyeTargetD = $lEye.getAttribute('d');
    var rightEyeTargetD = $rEye.getAttribute('d');
    var smileTargetD = $target.querySelector('.fb-emote__smile').getAttribute('d');
    var bgColor = emoteColors[type];
    if (!bgColor) bgColor = emoteColors.default;
    
    $$('.fb-emote.s--active').classList.remove('s--active');
    this.classList.add('s--active');
    
    TweenMax.to($activeEmote, animTime, {backgroundColor: bgColor});
    TweenMax.to($dragCont, animTime, {x: progressTo * 100 + '%'});
    TweenMax.to($leftEye, animTime, {morphSVG: $lEye});
    TweenMax.to($rightEye, animTime, {morphSVG: $rEye});
    TweenMax.to($smile, animTime, {attr: {d: smileTargetD}});
  });
});

/*Feedback*/

/*Subject for the letter*/
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

/*Subject for the letter*/