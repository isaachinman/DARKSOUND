// MAIN LOOP //
var mainloopSource;
var mainloop = new Audio();
mainloop.src = './sounds/mainloop.mp3';
mainloop.autoplay = false;
mainloop.loop = true;
mainloopSource = context.createMediaElementSource(mainloop);
var filter = context.createBiquadFilter();
filter.type = filter.LOWPASS;
filter.frequency.value = 20000;
mainloopSource.connect(filter);
filter.connect(context.destination);
// MAIN LOOP //

// MAIN THEME //
var maintheme = new Audio();
maintheme.src = './sounds/maintheme.mp3';
maintheme.autoplay = false;
maintheme.loop = true;
mainthemeSource = context.createMediaElementSource(maintheme);
var mainthemeGain = context.createGain();
mainthemeGain.gain.value = 0.1;
mainthemeSource.connect(mainthemeGain);
mainthemeGain.connect(context.destination);
// MAIN THEME //

// ROOMTONE //
var analyser = context.createAnalyser();
var roomtone = new Audio();
roomtone.src = './sounds/roomtone.mp3';
roomtone.autoplay = false;
roomtone.loop = true;
roomtoneSource = context.createMediaElementSource(roomtone);
var roomtoneGain = context.createGain();
roomtoneGain.gain.value = 1.25;
roomtoneSource.connect(roomtoneGain);
roomtoneGain.connect(context.destination);
// ROOMTONE//

// PARTY //
var party = new Audio();
party.src = './sounds/party.mp3';
party.autoplay = false;
party.loop = true;
partySource = context.createMediaElementSource(party);
var partyFilter = context.createBiquadFilter();
partyFilter.type = filter.LOWPASS;
partyFilter.frequency.value = 500;
var partyGain = context.createGain();
partyGain.gain.value = 0.5;
partySource.connect(partyGain);
partyGain.connect(partyFilter);
partyFilter.connect(context.destination);
// PARTY //

// GAMING //
var gamingSource;
var gaming = new Audio();
gaming.src = './sounds/gaming.mp3';
gaming.autoplay = false;
gaming.loop = true;
gamingSource = context.createMediaElementSource(gaming);
var gamingGain = context.createGain();
gamingGain.gain.value = 1.0;
gamingSource.connect(gamingGain);
gamingGain.connect(context.destination);
// GAMING //

// DISHES //
var dishesSource;
var dishes = new Audio();
dishes.src = './sounds/dishes.mp3';
dishes.autoplay = false;
dishes.loop = true;
dishesSource = context.createMediaElementSource(dishes);
var dishesGain = context.createGain();
dishesGain.gain.value = 0.1;
dishesSource.connect(dishesGain);
dishesGain.connect(context.destination);
// DISHES //

// TEETH //
var teethSource;
var teeth = new Audio();
teeth.src = './sounds/teeth.mp3';
teeth.autoplay = false;
teeth.loop = true;
teethSource = context.createMediaElementSource(teeth);
var teethGain = context.createGain();
teethGain.gain.value = 0.15;
teethSource.connect(teethGain);
teethGain.connect(context.destination);
// TEETH //

// DINNER //
var dinner = new Audio();
dinner.src = './sounds/dinner.mp3';
dinner.autoplay = false;
dinner.loop = true;
source = context.createMediaElementSource(dinner);
var dinnerFilter = context.createBiquadFilter();
dinnerFilter.type = filter.LOWPASS;
dinnerFilter.frequency.value = 0;
source.connect(dinnerFilter);
dinnerFilter.connect(context.destination);
// DINNER //

// WALK //
var analyser = context.createAnalyser();
var source;
var walk = new Audio();
walk.src = './sounds/walk.mp3';
walk.autoplay = false;
walk.loop = true;
walkSource = context.createMediaElementSource(walk);
var walkFilter = context.createBiquadFilter();
walkFilter.type = filter.LOWPASS;
walkFilter.frequency.value = 20000;
walkSource.connect(walkFilter);
walkFilter.connect(context.destination);

// WALK //

// SLEEP //
var sleep = new Audio();
sleep.src = './sounds/sleep.mp3';
sleep.autoplay = false;
sleep.loop = true;
sleepSource = context.createMediaElementSource(sleep);
var sleepFilter = context.createBiquadFilter();
sleepFilter.type = filter.LOWPASS;
sleepFilter.frequency.value = 0;
sleepSource.connect(sleepFilter);
sleepFilter.connect(context.destination);
// SLEEP //

// FIRE //
var fireSource;
var fire = new Audio();
fire.src = './sounds/fire.mp3';
fire.autoplay = false;
fire.loop = true;
fireSource = context.createMediaElementSource(fire);
var fireGain = context.createGain();
fireGain.gain.value = 1.5;
fireSource.connect(fireGain);
fireGain.connect(context.destination);
// FIRE //

// FLAT 1 SOUNDS //
var flat1_sound_1 = new Audio ();
flat1_sound_1.src = './sounds/flat1_sound_1.mp3';
flat1_sound_1.autoplay = false;
flat1_sound_1.loop = false;
flat1_sound_1Source = context.createMediaElementSource(flat1_sound_1);
var flat1_sound_1Filter = context.createBiquadFilter();
flat1_sound_1Filter.type = filter.LOWPASS;
flat1_sound_1Filter.frequency.value = 2000;
flat1_sound_1Source.connect(flat1_sound_1Filter);
flat1_sound_1Filter.connect(context.destination);

var flat1_sound_2 = new Audio ();
flat1_sound_2.src = './sounds/flat1_sound_2.mp3';
flat1_sound_2.autoplay = false;
flat1_sound_2.loop = false;
flat1_sound_2Source = context.createMediaElementSource(flat1_sound_2);
var flat1_sound_2Filter = context.createBiquadFilter();
flat1_sound_2Filter.type = filter.LOWPASS;
flat1_sound_2Filter.frequency.value = 2000;
flat1_sound_2Source.connect(flat1_sound_2Filter);
flat1_sound_2Filter.connect(context.destination);

var flat1_sound_3 = new Audio ();
flat1_sound_3.src = './sounds/flat1_sound_3.mp3';
flat1_sound_3.autoplay = false;
flat1_sound_3.loop = false;
flat1_sound_3Source = context.createMediaElementSource(flat1_sound_3);
var flat1_sound_3Filter = context.createBiquadFilter();
flat1_sound_3Filter.type = filter.LOWPASS;
flat1_sound_3Filter.frequency.value = 2000;
flat1_sound_3Source.connect(flat1_sound_3Filter);
flat1_sound_3Filter.connect(context.destination);

var flat1_sound_4 = new Audio ();
flat1_sound_4.src = './sounds/flat1_sound_4.mp3';
flat1_sound_4.autoplay = false;
flat1_sound_4.loop = false;
flat1_sound_4Source = context.createMediaElementSource(flat1_sound_4);
var flat1_sound_4Filter = context.createBiquadFilter();
flat1_sound_4Filter.type = filter.LOWPASS;
flat1_sound_4Filter.frequency.value = 2000;
flat1_sound_4Source.connect(flat1_sound_4Filter);
flat1_sound_4Filter.connect(context.destination);
// FLAT 1 SOUNDS //

// FLAT 2 SOUNDS //
var flat2_sound_1 = new Audio ();
flat2_sound_1.src = './sounds/flat2_sound_1.mp3';
flat2_sound_1.autoplay = false;
flat2_sound_1.loop = false;
flat2_sound_1Source = context.createMediaElementSource(flat2_sound_1);
var flat2_sound_1Filter = context.createBiquadFilter();
flat2_sound_1Filter.type = filter.LOWPASS;
flat2_sound_1Filter.frequency.value = 2000;
flat2_sound_1Source.connect(flat2_sound_1Filter);
flat2_sound_1Filter.connect(context.destination);

var flat2_sound_2 = new Audio ();
flat2_sound_2.src = './sounds/flat2_sound_2.mp3';
flat2_sound_2.autoplay = false;
flat2_sound_2.loop = false;
flat2_sound_2Source = context.createMediaElementSource(flat2_sound_2);
var flat2_sound_2Filter = context.createBiquadFilter();
flat2_sound_2Filter.type = filter.LOWPASS;
flat2_sound_2Filter.frequency.value = 2000;
flat2_sound_2Source.connect(flat2_sound_2Filter);
flat2_sound_2Filter.connect(context.destination);

var flat2_sound_3 = new Audio ();
flat2_sound_3.src = './sounds/flat2_sound_3.mp3';
flat2_sound_3.autoplay = false;
flat2_sound_3.loop = false;
flat2_sound_3Source = context.createMediaElementSource(flat2_sound_3);
var flat2_sound_3Filter = context.createBiquadFilter();
flat2_sound_3Filter.type = filter.LOWPASS;
flat2_sound_3Filter.frequency.value = 2000;
flat2_sound_3Source.connect(flat2_sound_3Filter);
flat2_sound_3Filter.connect(context.destination);

var flat2_sound_4 = new Audio ();
flat2_sound_4.src = './sounds/flat2_sound_4.mp3';
flat2_sound_4.autoplay = false;
flat2_sound_4.loop = false;
flat2_sound_4Source = context.createMediaElementSource(flat2_sound_4);
var flat2_sound_4Filter = context.createBiquadFilter();
flat2_sound_4Filter.type = filter.LOWPASS;
flat2_sound_4Filter.frequency.value = 2000;
flat2_sound_4Source.connect(flat2_sound_4Filter);
flat2_sound_4Filter.connect(context.destination);

var flat2_sound_5 = new Audio ();
flat2_sound_5.src = './sounds/flat2_sound_5.mp3';
flat2_sound_5.autoplay = false;
flat2_sound_5.loop = false;
flat2_sound_5Source = context.createMediaElementSource(flat2_sound_5);
var flat2_sound_5Filter = context.createBiquadFilter();
flat2_sound_5Filter.type = filter.LOWPASS;
flat2_sound_5Filter.frequency.value = 2000;
flat2_sound_5Source.connect(flat2_sound_5Filter);
flat2_sound_5Filter.connect(context.destination);

var flat2_sound_6 = new Audio ();
flat2_sound_6.src = './sounds/flat2_sound_6.mp3';
flat2_sound_6.autoplay = false;
flat2_sound_6.loop = false;
flat2_sound_6Source = context.createMediaElementSource(flat2_sound_6);
var flat2_sound_6Filter = context.createBiquadFilter();
flat2_sound_6Filter.type = filter.LOWPASS;
flat2_sound_6Filter.frequency.value = 2000;
flat2_sound_6Source.connect(flat2_sound_6Filter);
flat2_sound_6Filter.connect(context.destination);

var flat2_sound_7 = new Audio ();
flat2_sound_7.src = './sounds/flat2_sound_7.mp3';
flat2_sound_7.autoplay = false;
flat2_sound_7.loop = false;
flat2_sound_7Source = context.createMediaElementSource(flat2_sound_7);
var flat2_sound_7Filter = context.createBiquadFilter();
flat2_sound_7Filter.type = filter.LOWPASS;
flat2_sound_7Filter.frequency.value = 2000;
flat2_sound_7Source.connect(flat2_sound_7Filter);
flat2_sound_7Filter.connect(context.destination);
// FLAT 2 SOUNDS //

// FLAT 3 SOUNDS //
var flat3_sound_1 = new Audio ();
flat3_sound_1.src = './sounds/flat3_sound_1.mp3';
flat3_sound_1.autoplay = false;
flat3_sound_1.loop = false;
flat3_sound_1Source = context.createMediaElementSource(flat3_sound_1);
var flat3_sound_1Filter = context.createBiquadFilter();
flat3_sound_1Filter.type = filter.LOWPASS;
flat3_sound_1Filter.frequency.value = 2000;
flat3_sound_1Source.connect(flat3_sound_1Filter);
flat3_sound_1Filter.connect(context.destination);

var flat3_sound_2 = new Audio ();
flat3_sound_2.src = './sounds/flat3_sound_2.mp3';
flat3_sound_2.autoplay = false;
flat3_sound_2.loop = false;
flat3_sound_2Source = context.createMediaElementSource(flat3_sound_2);
var flat3_sound_2Filter = context.createBiquadFilter();
flat3_sound_2Filter.type = filter.LOWPASS;
flat3_sound_2Filter.frequency.value = 2000;
flat3_sound_2Source.connect(flat3_sound_2Filter);
flat3_sound_2Filter.connect(context.destination);

var flat3_sound_3 = new Audio ();
flat3_sound_3.src = './sounds/flat3_sound_3.mp3';
flat3_sound_3.autoplay = false;
flat3_sound_3.loop = false;
flat3_sound_3Source = context.createMediaElementSource(flat3_sound_3);
var flat3_sound_3Filter = context.createBiquadFilter();
flat3_sound_3Filter.type = filter.LOWPASS;
flat3_sound_3Filter.frequency.value = 2000;
flat3_sound_3Source.connect(flat3_sound_3Filter);
flat3_sound_3Filter.connect(context.destination);

var flat3_sound_4 = new Audio ();
flat3_sound_4.src = './sounds/flat3_sound_4.mp3';
flat3_sound_4.autoplay = false;
flat3_sound_4.loop = false;
flat3_sound_4Source = context.createMediaElementSource(flat3_sound_4);
var flat3_sound_4Filter = context.createBiquadFilter();
flat3_sound_4Filter.type = filter.LOWPASS;
flat3_sound_4Filter.frequency.value = 2000;
flat3_sound_4Source.connect(flat3_sound_4Filter);
flat3_sound_4Filter.connect(context.destination);

var flat3_sound_5 = new Audio ();
flat3_sound_5.src = './sounds/flat3_sound_5.mp3';
flat3_sound_5.autoplay = false;
flat3_sound_5.loop = false;
flat3_sound_5Source = context.createMediaElementSource(flat3_sound_5);
var flat3_sound_5Filter = context.createBiquadFilter();
flat3_sound_5Filter.type = filter.LOWPASS;
flat3_sound_5Filter.frequency.value = 2000;
flat3_sound_5Source.connect(flat3_sound_5Filter);
flat3_sound_5Filter.connect(context.destination);

var flat3_sound_6 = new Audio ();
flat3_sound_6.src = './sounds/flat3_sound_6.mp3';
flat3_sound_6.autoplay = false;
flat3_sound_6.loop = false;
flat3_sound_6Source = context.createMediaElementSource(flat3_sound_6);
var flat3_sound_6Filter = context.createBiquadFilter();
flat3_sound_6Filter.type = filter.LOWPASS;
flat3_sound_6Filter.frequency.value = 2000;
flat3_sound_6Source.connect(flat3_sound_6Filter);
flat3_sound_6Filter.connect(context.destination);

var flat3_sound_7 = new Audio ();
flat3_sound_7.src = './sounds/flat3_sound_7.mp3';
flat3_sound_7.autoplay = false;
flat3_sound_7.loop = false;
flat3_sound_7Source = context.createMediaElementSource(flat3_sound_7);
var flat3_sound_7Filter = context.createBiquadFilter();
flat3_sound_7Filter.type = filter.LOWPASS;
flat3_sound_7Filter.frequency.value = 2000;
flat3_sound_7Source.connect(flat3_sound_7Filter);
flat3_sound_7Filter.connect(context.destination);

var flat3_sound_8 = new Audio ();
flat3_sound_8.src = './sounds/flat3_sound_8.mp3';
flat3_sound_8.autoplay = false;
flat3_sound_8.loop = false;
flat3_sound_8Source = context.createMediaElementSource(flat3_sound_8);
var flat3_sound_8Filter = context.createBiquadFilter();
flat3_sound_8Filter.type = filter.LOWPASS;
flat3_sound_8Filter.frequency.value = 2000;
flat3_sound_8Source.connect(flat3_sound_8Filter);
flat3_sound_8Filter.connect(context.destination);
// FLAT 3 SOUNDS //

// FLAT 4 SOUNDS //
// FLAT 4 SOUNDS //

// FLAT 5 SOUNDS //
// FLAT 5 SOUNDS //

// FLAT 6 SOUNDS //
var flat6_sound_1 = new Audio ();
flat6_sound_1.src = './sounds/flat6_sound_1.mp3';
flat6_sound_1.autoplay = false;
flat6_sound_1.loop = false;
flat6_sound_1Source = context.createMediaElementSource(flat6_sound_1);
var flat6_sound_1Filter = context.createBiquadFilter();
flat6_sound_1Filter.type = filter.LOWPASS;
flat6_sound_1Filter.frequency.value = 2000;
flat6_sound_1Source.connect(flat6_sound_1Filter);
flat6_sound_1Filter.connect(context.destination);

var flat6_sound_2 = new Audio ();
flat6_sound_2.src = './sounds/flat6_sound_2.mp3';
flat6_sound_2.autoplay = false;
flat6_sound_2.loop = false;
flat6_sound_2Source = context.createMediaElementSource(flat6_sound_2);
var flat6_sound_2Filter = context.createBiquadFilter();
flat6_sound_2Filter.type = filter.LOWPASS;
flat6_sound_2Filter.frequency.value = 2000;
flat6_sound_2Source.connect(flat6_sound_2Filter);
flat6_sound_2Filter.connect(context.destination);

var flat6_sound_3 = new Audio ();
flat6_sound_3.src = './sounds/flat6_sound_3.mp3';
flat6_sound_3.autoplay = false;
flat6_sound_3.loop = false;
flat6_sound_3Source = context.createMediaElementSource(flat6_sound_3);
var flat6_sound_3Filter = context.createBiquadFilter();
flat6_sound_3Filter.type = filter.LOWPASS;
flat6_sound_3Filter.frequency.value = 2000;
flat6_sound_3Source.connect(flat6_sound_3Filter);
flat6_sound_3Filter.connect(context.destination);

var flat6_sound_4 = new Audio ();
flat6_sound_4.src = './sounds/flat6_sound_4.mp3';
flat6_sound_4.autoplay = false;
flat6_sound_4.loop = false;
flat6_sound_4Source = context.createMediaElementSource(flat6_sound_4);
var flat6_sound_4Filter = context.createBiquadFilter();
flat6_sound_4Filter.type = filter.LOWPASS;
flat6_sound_4Filter.frequency.value = 2000;
flat6_sound_4Source.connect(flat6_sound_4Filter);
flat6_sound_4Filter.connect(context.destination);

var flat6_sound_5 = new Audio ();
flat6_sound_5.src = './sounds/flat6_sound_5.mp3';
flat6_sound_5.autoplay = false;
flat6_sound_5.loop = false;
flat6_sound_5Source = context.createMediaElementSource(flat6_sound_5);
var flat6_sound_5Filter = context.createBiquadFilter();
flat6_sound_5Filter.type = filter.LOWPASS;
flat6_sound_5Filter.frequency.value = 2000;
flat6_sound_5Source.connect(flat6_sound_5Filter);
flat6_sound_5Filter.connect(context.destination);

var flat6_sound_6 = new Audio ();
flat6_sound_6.src = './sounds/flat6_sound_6.mp3';
flat6_sound_6.autoplay = false;
flat6_sound_6.loop = false;
flat6_sound_6Source = context.createMediaElementSource(flat6_sound_6);
var flat6_sound_6Filter = context.createBiquadFilter();
flat6_sound_6Filter.type = filter.LOWPASS;
flat6_sound_6Filter.frequency.value = 2000;
flat6_sound_6Source.connect(flat6_sound_6Filter);
flat6_sound_6Filter.connect(context.destination);
// FLAT 6 SOUNDS //

// FLAT 7 SOUNDS //
var flat7_sound_1 = new Audio ();
flat7_sound_1.src = './sounds/flat7_sound_1.mp3';
flat7_sound_1.autoplay = false;
flat7_sound_1.loop = false;
flat7_sound_1Source = context.createMediaElementSource(flat7_sound_1);
var flat7_sound_1Filter = context.createBiquadFilter();
flat7_sound_1Filter.type = filter.LOWPASS;
flat7_sound_1Filter.frequency.value = 2000;
flat7_sound_1Source.connect(flat7_sound_1Filter);
flat7_sound_1Filter.connect(context.destination);

var flat7_sound_2 = new Audio ();
flat7_sound_2.src = './sounds/flat7_sound_2.mp3';
flat7_sound_2.autoplay = false;
flat7_sound_2.loop = false;
flat7_sound_2Source = context.createMediaElementSource(flat7_sound_2);
var flat7_sound_2Filter = context.createBiquadFilter();
flat7_sound_2Filter.type = filter.LOWPASS;
flat7_sound_2Filter.frequency.value = 2000;
flat7_sound_2Source.connect(flat7_sound_2Filter);
flat7_sound_2Filter.connect(context.destination);

var flat7_sound_3 = new Audio ();
flat7_sound_3.src = './sounds/flat7_sound_3.mp3';
flat7_sound_3.autoplay = false;
flat7_sound_3.loop = false;
flat7_sound_3Source = context.createMediaElementSource(flat7_sound_3);
var flat7_sound_3Filter = context.createBiquadFilter();
flat7_sound_3Filter.type = filter.LOWPASS;
flat7_sound_3Filter.frequency.value = 2000;
flat7_sound_3Source.connect(flat7_sound_3Filter);
flat7_sound_3Filter.connect(context.destination);

var flat7_sound_4 = new Audio ();
flat7_sound_4.src = './sounds/flat7_sound_4.mp3';
flat7_sound_4.autoplay = false;
flat7_sound_4.loop = false;
flat7_sound_4Source = context.createMediaElementSource(flat7_sound_4);
var flat7_sound_4Filter = context.createBiquadFilter();
flat7_sound_4Filter.type = filter.LOWPASS;
flat7_sound_4Filter.frequency.value = 2000;
flat7_sound_4Source.connect(flat7_sound_4Filter);
flat7_sound_4Filter.connect(context.destination);

var flat7_sound_5 = new Audio ();
flat7_sound_5.src = './sounds/flat7_sound_5.mp3';
flat7_sound_5.autoplay = false;
flat7_sound_5.loop = false;
flat7_sound_5Source = context.createMediaElementSource(flat7_sound_5);
var flat7_sound_5Filter = context.createBiquadFilter();
flat7_sound_5Filter.type = filter.LOWPASS;
flat7_sound_5Filter.frequency.value = 2000;
flat7_sound_5Source.connect(flat7_sound_5Filter);
flat7_sound_5Filter.connect(context.destination);
// FLAT 7 SOUNDS //

// FLAT TIMEOUTS //
var timeouts_flat1 = [];
function clearTimeouts_flat1() {
	for (var i = 0; i < timeouts_flat1.length; i++) {
    clearTimeout(timeouts_flat1[i]);
}
}

var timeouts_flat2 = [];
function clearTimeouts_flat2() {
	for (var i = 0; i < timeouts_flat2.length; i++) {
    clearTimeout(timeouts_flat2[i]);
}
}

var timeouts_flat3 = [];
function clearTimeouts_flat3() {
	for (var i = 0; i < timeouts_flat3.length; i++) {
    clearTimeout(timeouts_flat3[i]);
}
}

var timeouts_flat4 = [];
function clearTimeouts_flat4() {
	for (var i = 0; i < timeouts_flat4.length; i++) {
    clearTimeout(timeouts_flat4[i]);
}
}

var timeouts_flat5 = [];
function clearTimeouts_flat5() {
	for (var i = 0; i < timeouts_flat5.length; i++) {
    clearTimeout(timeouts_flat5[i]);
}
}

var timeouts_flat6 = [];
function clearTimeouts_flat6() {
	for (var i = 0; i < timeouts_flat6.length; i++) {
    clearTimeout(timeouts_flat6[i]);
}
}

var timeouts_flat7 = [];
function clearTimeouts_flat7() {
	for (var i = 0; i < timeouts_flat7.length; i++) {
    clearTimeout(timeouts_flat7[i]);
}
}

var timeouts_stairs = [];
function clearTimeouts_stairs() {
	for (var i = 0; i < timeouts_stairs.length; i++) {
    clearTimeout(timeouts_stairs[i]);
}
}
// FLAT TIMEOUTS //









