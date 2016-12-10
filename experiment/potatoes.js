// Generic-or
// Overview: (i) Helper Functions (ii) Parameters (iii) Control Flow

// ---------------- HELPER FUNCTIONS ------------------

// show slide function
function showSlide(id) {
	$(".slide").hide(); //jquery - all elements with class of slide - hide
	$("#" + id).show(); //jquery - element with given id - show
}

//coinFlip function (randomly returns 0 or 1)
function coinFlip() {
	return Math.floor(Math.random() * 2);
}

//array shuffle function
function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

getCurrentDate = function() {
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	return (month + "/" + day + "/" + year);
}

getCurrentTime = function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (minutes < 10) minutes = "0" + minutes;
	return (hours + ":" + minutes);
}

//preload images: 
var myimages = new Array();

function preloading() {
	for (x = 0; x < preloading.arguments.length; x++) {
		myimages[x] = new Image();
		myimages[x].src = preloading.arguments[x];
	}
}

preloading("images/ears.png", "images/ears_glasses.png", "images/ears_hair.png", "images/ears_hands.png", "images/ears_lips.png", "images/ears_pants.png", "images/glasses.png", "images/glasses_hair.png", "images/glasses_hands.png", "images/glasses_lips.png", "images/glasses_pants.png", "images/hair.png", "images/hair_hands.png", "images/hair_lips.png", "images/hair_pants.png", "images/hands.png", "images/hands_lips.png", "images/hands_pants.png", "images/lips.png", "images/lips_pants.png", "images/list.txt", "images/pants.png", "images/stanford.png");

// ---------------- PARAMETERS ------------------


//-----EXPERIMENT VARIABLES-----
var counter = 0;
//total number of test trials:
var number = 36;

//-----items and names -----
//first, load all the images and names in the same order

var items = shuffle([
	["ears", "glasses"],
	["ears", "hair"],
	["ears", "hands"],
	["ears", "lips"],
	["ears", "pants"],
	["glasses", "hair"],
	["glasses", "hands"],
	["glasses", "lips"],
	["glasses", "pants"],
	["hair", "hands"],
	["hair", "lips"],
	["hair", "pants"],
	["hands", "lips"],
	["hands", "pants"],
	["lips", "pants"],
	["ears", "glasses"],
	["ears", "hair"],
	["ears", "hands"],
	["ears", "lips"],
	["ears", "pants"],
	["glasses", "hair"],
	["glasses", "hands"],
	["glasses", "lips"],
	["glasses", "pants"],
	["hair", "hands"],
	["hair", "lips"],
	["hair", "pants"],
	["hands", "lips"],
	["hands", "pants"],
	["lips", "pants"],
	["ears", "glasses"],
	["ears", "hair"],
	["ears", "hands"],
	["ears", "lips"],
	["ears", "pants"],
	["glasses", "hair"],
	["glasses", "hands"],
	["glasses", "lips"],
	["glasses", "pants"],
	["hair", "hands"],
	["hair", "lips"],
	["hair", "pants"],
	["hands", "lips"],
	["hands", "pants"],
	["lips", "pants"],
	["ears", "glasses"],
	["ears", "hair"],
	["ears", "hands"],
	["ears", "lips"],
	["ears", "pants"],
	["glasses", "hair"],
	["glasses", "hands"],
	["glasses", "lips"],
	["glasses", "pants"],
	["hair", "hands"],
	["hair", "lips"],
	["hair", "pants"],
	["hands", "lips"],
	["hands", "pants"],
	["lips", "pants"],
	["ears", "glasses"],
	["ears", "hair"],
	["ears", "hands"],
	["ears", "lips"],
	["ears", "pants"],
	["glasses", "hair"],
	["glasses", "hands"],
	["glasses", "lips"],
	["glasses", "pants"],
	["hair", "hands"],
	["hair", "lips"],
	["hair", "pants"],
	["hands", "lips"],
	["hands", "pants"],
	["lips", "pants"]
])

var trialTypes = shuffle([
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"],
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"],
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"],
	["and", "and/or"],
	["and", "and/noun"],
	["and", "or/noun"],
	["or", "and/or"],
	["or", "and/noun"],
	["or", "or/noun"],
	["noun", "and/or"],
	["noun", "and/noun"],
	["noun", "or/noun"]
])

// ---------------- MAIN EXPERIMENT ------------------
//Show the first instructions slide 
//Enter subject ID and list #
showSlide("instructions");

//The button is disabled until all of the images are preloaded
//Button is also disabled if turk is in preview mode
$("#startButton").attr("disabled", true);
if (turk.previewMode != true) {
	$("#pleaseWait").html("Please wait...");
	$(window).load(function() {
		$("#startButton").attr("disabled", false);
		$("#pleaseWait").html("");
	})
}
//Start the experiment
var experiment = {

	demo: {
		subid: turk.workerId,
		gender: [],
		age: "",
		english: "",
		nativeLanguage: "",
		comments: ""
	},

	start: function() {
		subjectID = turk.workerId;

		showSlide("startGame");
	},

	// test trials
	next: function() {
		document.body.style.background = "black";
		$("#stage").css("background-color", "black");

		//get trial images and trial words
		var item1 = items[[counter]][0];
		var item2 = items[[counter]][1];
		var trialItems = item1 + "." + item2;
		var shuffleItems = shuffle(items[[counter]]);
		var wordType = trialTypes[counter][0];
		var imType = trialTypes[counter][1];
		var imSides = shuffle(imType.split("/"));

		//alert(item1 + "," + item2 + "," + shuffleItems[0] + "/" + shuffleItems[1])

		//Name cdiv based on image type
		$('[name="left"]').attr("id", imSides[0]);
		$('[name="right"]').attr("id", imSides[1]);

		//pictures
		var pic1 = "images/" + item1 + ".png";
		var pic2 = "images/" + item2 + ".png";
		var picboth = "images/" + item1 + "_" + item2 + ".png";

		//books
		var leftBook
		if (imSides[0] == "or") {
			leftBook = shuffle([pic1, pic2]);
		} else if (imSides[0] == "and") {
			leftBook = shuffle([picboth, picboth]);
		} else if (imSides[0] == "noun") {
			leftBook = shuffle([pic1, pic1]);
		}

		var rightBook
		if (imSides[1] == "or") {
			rightBook = shuffle([pic1, pic2]);
		} else if (imSides[1] == "and") {
			rightBook = shuffle([picboth, picboth]);
		} else if (imSides[1] == "noun") {
			rightBook = shuffle([pic1, pic1]);
		}

		//fill & show left books
		$("#left1").attr("src", leftBook[0]).show();
		$("#left2").attr("src", leftBook[1]).show();

		//fill & show right books
		$("#right1").attr("src", rightBook[0]).show();
		$("#right2").attr("src", rightBook[1]).show();

		var sentence
		if (wordType == "or") {
			sentence = "Find the potatoes with " + shuffleItems[0] + " or " + shuffleItems[1] + "."
		} else if (wordType == "and") {
			sentence = "Find the potatoes with " + shuffleItems[0] + " and " + shuffleItems[1] + "."
		} else if (wordType == "noun") {
			sentence = "Find the potatoes with " + item1 + "."
		}

		//place sentence text
		$("#sentenceText").html(sentence);

		//prompt text
		var prompt = ""
		$("#promptText").html(prompt);

		//Get time
		var startTime = (new Date()).getTime();

		//allow clicks 
		var clickDisabled = false;

		//show divs
		$(".cdiv").show()
		showSlide("stage");

		//when image is clicked
		$(".cdiv").on('click touchstart', function(event) {

			//get time
			var endTime = (new Date()).getTime()

			//disable clicks
			if (clickDisabled) return;
			clickDisabled = true;

			//highlight selection in red
			$(this).attr('class', 'selectedDiv');

			//collect data
			var trialNum = counter + 1;

			//what type of image did they choose
			var response = $(this).attr("id");

			//record if chosen pic was left or right
			var side = $(this).attr("name");

			var rt = endTime - startTime;

			var nowdate = getCurrentDate();

			var nowtime = getCurrentTime();

			//data
			var result_string = subjectID + "," + trialNum + "," + trialItems + "," + item1 + "," + item2 + "," + wordType + "," + imType + "," + side + "," + response + "," + rt + "," + nowdate + "," + nowtime + "\n";

			//data collection
			if (subjectID == "debug") {
				alert(result_string); // debug mode 
			} else {
				$.post("https://langcog.stanford.edu/cgi-bin/AEN/potatoes/potato_process.php", {
					postresult_string: result_string
				})
			}

			//update counter
			counter++;

			//clear everything
			setTimeout(function() {
				//hide images and sentences
				$("#sentenceText").html("");
				$("#promptText").html("");
				$(".selectedDiv").attr('class', 'cdiv');
				$(".cdiv").hide();

				setTimeout(function() {
					if (counter == number) {
						experiment.background(); //if experiment is over, finish
					} else {
						experiment.next(); //otherwise pull up next trial
					}
				}, 500)

			}, 500)
		})
	},

	background: function() {
		document.body.style.background = "white";

		//undo spacebar disable
		window.onkeydown = function(e) {}

		$("#gender").trigger("reset");
		$("#age").trigger("reset");
		$("#langCheck").trigger("reset");
		$("#language").trigger("reset");
		$("#comments").trigger("reset");

		var gen = "";
		var ag = "";
		var eng = "";
		var lan = "";
		var comm = "";

		showSlide("askInfo");

		$("#endButton").click(function() {
			var gen = $("input:radio[name=genderButton]:checked").val();
			var ag = $("#ageRange").val();
			var eng = $("input:radio[name=languageButton]:checked").val();
			var lan = $("#primaryLanguage").val();
			var comm = $("#commentQ").val();

			if (gen === undefined | ag === undefined | lan === undefined | eng === undefined) {
				alert("Please answer all of the questions");
			} else {

				experiment.demo.gender = gen;
				experiment.demo.age = ag;
				experiment.demo.english = eng;
				experiment.demo.nativeLanguage = lan;
				experiment.demo.comments = comm;

				experiment.end();
			}
		})
	},


	end: function() {
		turk.submit(experiment.demo, true);
		showSlide("This is a demo version - no data was collected");
	}
}