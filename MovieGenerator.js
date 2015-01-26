/* 

Movie Title Generator Script


*/

var generalTitleConcepts = [
			"Life",
			]
			
var generalTitleObjects = [
			"Man", "Woman", "Boy", "Girl", "Story", "Tale"
			]
			
var generalTitleAdnouns = [
			"Big", "Small", "Good", "Bad"
			]
			
var generalTitleDoubles = []

var generalSubtitleStarts = [
			"A Tale of", "A Story of"
			]

var generalSubtitleAdnouns = [
			"The Next"
			]
			
var generalSubtitleEnds = []

// Collection of action nouns that describe concepts
var	actionTitleConcepts = [ 
			"Life", "Death", "Power", "Strength", "Wisdom", "Defiance", "Truth",
			"Acceptance", "Forgiveness", "Murder", "Terror", "Liberty", "Heat",
			"Joy", "Sorrow", "Fury", "Fear", "Pain", "War", "Honor", "Duty", "Guardian"
			]

// Collection of action nouns that describe objects
var	actionTitleObjects = [	
			"Dawn", "Burn", "Story", "Legacy", "Birth", "Galaxy", "Guardian", "Hero",
			"Cop", "Shark", "Fight", "Knife", "Germany", "America", "Russia",
			"Thing", "Snake", "Gun", "Gear", "Tendency", "Sword",
			"Blade", "Godfather", "Odyssey", "Activity", "Lie",
			"Massacre", "Chainsaw", "Fist", "Werewolf", "Vampire", "Boss",
			"Crusader", "Rise", "Planet", "Ape", "Hitler", "Stalin", "Nemesis"
			]

// Collection of action adjectives
var	actionTitleAdnouns = [ 	
			"Hot", "Cold", "Light", "Gone", "Dark", "Pacific", "Bold", 
			"Horrible", "True", "Solid", "Golden", "Red", "Scary", "Paranormal",
			"Black", "Unbreakable", "American", "Russian", "Righteous", "Heroic",
			"Dangerous", "Lethal", "Global", "Viral", "Real", "Bloody", "Gory", "Deadly",
			"Deep-Space", "Violent", "Large", "Hot"
			]

// Collection of action nouns that double as adjectives, and adjectives that double as nouns
var	actionTitleDoubles = [ 	
			"Alien", "Liberty", "Hobbit", "Monster", "Robot", "American", "Russian",
			"Cyborg", "Ninja", "Machine", "Predator", "Stone", "Steel", "Space", 
			"Diamond", "Metal", "Fear", "Death", "Blood", "Fallen", 
			"Peace", "Ghost", "Phantom", "Battle", "Enemy", "Hostile", "Expendable",
			"Mutant", "Nightmare", "Texas", "Stardust", "German", "Nazi", "Communist",
			"Socialist", "Samurai"
			]

// Collection of starts to an action subtitle
var	actionSubtitleStarts = [	
			"Revenge of", "Attack of", "Return of",
			"Story of", "A Tale of", "Requiem for",
			"End of", "Eternal Sunshine of", "Call for", "Call of",
			"Death of", "Passion of", "Memories of",
			"Sons of", "Guns of ", "Prepare for",
			"The Smell of", "Enter"
			]

// Collection of adjectives that could start an action subtitle
var	actionSubtitleAdnouns = [
			"A New", "The Phantom", "The Missing", "The Lost", "A Dystopian", "A Space",
			"The Final", "The Usual", "The Big", "The Last", "The Ultimate", "Unlimited", "Grandpa's"
			]

// Collection of ends to an action subtitle
var	actionSubtitleEnds = [	
			"Strikes Back", "Menace", "Awakens",
			"Annihilation", "of Power", "of Fury", "With a Cause",
			"Again", "Justice", "in space", "3D", "With a Vengeance",
			"Wizard", "Redemption", "Vengeance", "of Liberty",
			"from Space", "from Beneath", "from Hell", "After Dark"
			]

// Collection of adverbs to an action subtitle
var	actionSubtitleAdverbs = [
			"Harder", "Better", "Faster", "Stronger"
			]

// Collection of starts to a unique name						
var	nameStarts = [	
			"Man", "Spider", "Bat", "Super", "Monster", "Über", "Ultra", "Mega", "Acid", "Aether", "Anthro",
			"Xeno", "Trans", "Shark", "Bull", "Swamp", "Octo", "Cyclops", "Aqua", "Auto", "Caust", "Space",
			"Dextro", "Dino", "Tyranno", "Extreme", "Fungus", "Geo", "Ichtyo", "Infra", "Inter", "Kilo",
			"Klepto", "Libero", "Logi", "Macro", "Mania", "Mecha", "Micro", "Necro", "Nocto", "Quad", "Arachno",
			"Termi", "Than", "Torpe", "Ultima", "Solid", "Liquid", "Psycho", "Robo", "Woman", "Male", "Female"
			]

// Collection of ends to a unique name
var	nameEnds = [		
			"man", "-Man", "woman", "-Woman", "dude", "guy", "friend", "monster", "topus", "bowski", "zilla",
			"-Thing", "mutant", " Mutant", "ator", "former", "beast", "oid", "cano", "nado", "saur", "-Male", "-Female",
			" Snake", "shark", "cop", "ninja", "samurai", "-Spider", "spider", "arachnid", "lizard", "creature", "borg"
			]
			
var	bg = document.getElementById("bg");
var	HTMLTitle = document.getElementById("Title");
var	CheckSubtitle = document.getElementById("Subtitle");

var	CheckMass = document.getElementById("Mass");
var	CheckQuick = document.getElementById("Quick");

var	CheckAction = document.getElementById("Action");
var	CheckB = document.getElementById("B");
var	AllowWrite = true;


function FontFunc(){						// Flickers font
	document.getElementById("tit").style.fontWeight = "bold";
	setTimeout(function(){document.getElementById("tit").style.fontWeight = "normal";}, 500);
	setTimeout(function(){FontFunc()}, 1000);
}
				
function Wobble(amount, direction){	// Wobbles the screen when a button is pressed
	if( amount <= 3){{bg.style.backgroundSize= "1920px 1080px"}; return;}
	
	randX = parseInt(Math.random() * amount * 2) + amount;
	randY = parseInt(Math.random() * amount) + amount/2;
	
	bg.style.backgroundSize= (1920 + (randX*direction)) + "px " + (1080 + (randY*direction)) + "px";
	setTimeout(function(){Wobble(amount/2, -direction)}, 50);
}
				
function Rand_Elem(array){				// Returns a random element from the given array
	index = Math.floor(Math.random() * array.length);
	return array.length == 0? "" : array[index];
}	

function Chance_Out_Of( x, y ){		// Has x chances out of y to return 'true'
	return ( Math.ceil(Math.random() * y) <= x );
}

function Flip_Coin(){						// Has a 1 in 2 chance of returning 'true'
	return Chance_Out_Of(1, 2);
	}

function Is_Vowel( Character ){		// Returns True if the character is a vowel
	return (["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"].indexOf(Character) != -1);
}
	
function Pluralise( String ){				// Makes the last word in the given a plural

	var index = String.length-1;
	
	if (String[index] == "y" && !(Is_Vowel(String[index-1]))){
		String = String.slice(0, index);
		String += "ies";
	} else if ( String[index] == "f") {
		String = String.slice(0, index);
		String += "ves";
	} else if ( String.slice(index-2, index+1) == "Man") {
		String = String.slice(0, index-2);
		String += "Men";		} 
	else if ( String.slice(index-3, index+1) == "oman") {
		String = String.slice(0, index-3);
		String += "omen";	
	} else if ( String.slice(index-1, index+1) == "fe") {
		String = String.slice(0, index-1);
		String += "ves";
	} else if ( String[index] == "o") {
		String += "es";
	} else if ( String[index] == "s") {
		if (Is_Vowel(String[index-1])){ String += "s";}
		String += "es";
	} else {
		String += "s";
	}
	
	return String;
}
	
function Generate_Determiner( Plural ){ 		// Returns a determiner	

	if (!Plural){
		return Rand_Elem([ "the", "the", "the", "the", "the", "a", "a", "my", "your", "his", "her", "its", "their"]) + " ";
	} else {
		return Rand_Elem([ "the", "the", "the", "the", "the", "many", "Two", "Three", "Several", "my", "your", "his", "her", "its", "their"]) + " ";
	}
}

function Generate_Noun_Phrase( Verb ){		// Generates a random noun phrase
	
	Verb = typeof Verb !== 'undefined' ? Verb : true;
	
	var Phrase = "";
	
	var New = "";
	
	Plural = Chance_Out_Of( 1, 4 );	// Whether or not the resulting phrase will be plural
	
	if( Chance_Out_Of( 3, 5 )){		// [Adjective]? [Noun]
		
		if (Chance_Out_Of(3,4)){ Phrase += Generate_Determiner( Plural );}
			if (Flip_Coin()) { New += Rand_Elem( TitleAdnouns.concat(TitleDoubles) ) + " ";}	// [Adjective] [Noun]
		 New += Rand_Elem( TitleNouns.concat(TitleDoubles) );
		if ( Phrase == "a " && Is_Vowel(New[0])){ Phrase = "an ";}
		Phrase += New;
			if (Plural) { Phrase = Pluralise(Phrase);}		// [Adjective] [Noun]s
		Phrase += " ";
		
	} else if ( Flip_Coin() && Verb ){	// [Noun] is [Adjective]
		
		if (Chance_Out_Of(3,4)){Phrase += Generate_Determiner( Plural );}
		
		New = Rand_Elem( TitleNouns.concat(TitleDoubles) );
		if ( Phrase == "a " && Is_Vowel(New[0])){ Phrase = "an ";}
		Phrase += New;
		
		if ( !Plural ){
			Phrase += " is ";
		} else {
			Phrase = Pluralise(Phrase);
			Phrase += " are ";
		}
		
		Phrase += Rand_Elem( TitleAdnouns ) + " ";
		
	}	else if ( Chance_Out_Of(1,3) ) {			// [Concept] of [Nouns]
	
		if (Chance_Out_Of(3,4)){ Phrase += Rand_Elem(["the ", "a "]);}
		New = Rand_Elem( TitleConcepts ) + " of " + Rand_Elem( TitleObjects.concat(TitleDoubles) );
		if ( Phrase == "a " && Is_Vowel(New[0])){ Phrase = "an ";}
		Phrase += New;
		Phrase = Pluralise(Phrase);
		Phrase += " ";
		
	} else if ( Flip_Coin() ) {							// [Noun] of [Concept]
		
		if (Chance_Out_Of(3,4)){ Phrase += Rand_Elem(["the ", "a "]);}
		New = Rand_Elem( TitleObjects.concat(TitleDoubles) ) + " of " + Rand_Elem( TitleConcepts ) + " ";
		if ( Phrase == "a " && Is_Vowel(New[0])){ Phrase = "an ";}
		Phrase += New;
		
	} else {													// [Noun] of [Noun]
	
		Phrase += Plural? Rand_Elem(["", "the "]) : "the ";
		Phrase += Rand_Elem( TitleObjects.concat(TitleDoubles) );
		Phrase = Plural? Pluralise(Phrase) : Phrase;
		Phrase += " of ";
		Plural = Flip_Coin();
		Phrase += Plural? Rand_Elem(["", "the "]) : "the ";
		Phrase += Rand_Elem( TitleObjects.concat(TitleDoubles) );
		Phrase = Plural? Pluralise(Phrase) : Phrase;
		Phrase += " ";
	
	}
	
	return Phrase;
}
	
function Generate_Unique_Name(){	// Generates a unique character name
	
	name = Rand_Elem(nameStarts);	
	var end = Rand_Elem(nameEnds);
	if ( Is_Vowel(name[name.length-1]) && Is_Vowel(end[0])) { name += "n"; }
	return name + end + " ";

}	

function Generate_Movie_Title(){		// Generates a movie title
	
	/* Determine which groups are used */
	
	var Action = CheckAction.checked;
	var B = CheckB.checked;
	var Unique = (Action || B);
	
	TitleConcepts 		= generalTitleConcepts.concat( 		(Action?actionTitleConcepts:[])).concat( 	(B?BTitleConcepts:[]));
	TitleObjects		= generalTitleObjects.concat( 		(Action?actionTitleObjects:[])).concat(		(B?BTitleObjects:[]));
	TitleAdnouns 		= generalTitleAdnouns.concat( 		(Action?actionTitleAdnouns:[])).concat(		(B?BTitleAdouns:[]));
	TitleDoubles		= generalTitleDoubles.concat(		(Action?actionTitleDoubles:[])).concat(		(B?BTitleDoubles:[]));
	
	SubtitleStarts		= generalSubtitleStarts.concat(		(Action?actionSubtitleStarts:[])).concat(	 	(B?BTitleStarts:[]));
	SubtitleAdnouns	= generalSubtitleAdnouns.concat( 	(Action?actionSubtitleAdnouns:[])).concat(	(B?BTitleAdnouns:[]));
	SubtitleEnds		= generalSubtitleEnds.concat( 		(Action?actionSubtitleEnds:[])).concat(		(B?BTitleEnds:[]));
	
	TitleNouns 			= TitleConcepts.concat(TitleObjects);
	
	/* Generate a movie title */
	
	var Title = "";
	var Subtitle = "";
	var Unique_Name = "";
	
	if ( Chance_Out_Of(4,5) || !Unique){ 		// [noun group] ([connector] [noun group])?
		
		Title += Generate_Noun_Phrase();
		Title = Title[0].toUpperCase() + Title.slice(1, Title.length);
		
		if ( Chance_Out_Of(1,4)){			// [noun group] [connector] [noun group]
			Title += Rand_Elem(["after", "beyond", "through", "with", "Vs", "and", "and", "&", "despite", "in"]) + " ";
			Title += Generate_Noun_Phrase(false);
		}
		
	} else {									// [original name] ([connector] [original name|noun group])?
	
		if (Flip_Coin()){Title += "The ";}
		Unique_Name = Generate_Unique_Name();
		Title += Unique_Name;
		if ( Chance_Out_Of(1,4) ){
			Title += Rand_Elem(["&", "and", "Versus", "Vs", "Vs.", "with", "featuring", "feat.", "against"]) + " "
			Title += Flip_Coin() ? Generate_Unique_Name() : Generate_Noun_Phrase(false);
		}
		
	}
	
	if (( Flip_Coin() || Title.length < 16 ) && CheckSubtitle.checked == true){
		
		Title = Title.slice(0,Title.length-1);
		Title += Flip_Coin() ? "" : " " + Rand_Elem([ "2", "3", "4", "5", "6", "II", "III", "IV", "V", "VI" ]); 
		Title += ": ";
		if ( Flip_Coin() || Unique_Name == "" ){
			if ( Chance_Out_Of(3, 4)){
				Subtitle += Flip_Coin() ? "" : Rand_Elem(SubtitleStarts) + " ";
				Subtitle += Generate_Noun_Phrase(Subtitle == "");
			} else {
				Subtitle += Rand_Elem(SubtitleAdnouns) + " " + Rand_Elem(TitleNouns.concat(TitleDoubles)) + " ";
			}
			
		} else {
			Subtitle += Flip_Coin ? "" : Rand_Elem(SubtitleStarts.concat(SubtitleAdnouns));
			Subtitle += Unique_Name;
		}
		Subtitle += (Flip_Coin() && ( Title.length + Subtitle.length) < 40) ? "" : Rand_Elem(SubtitleEnds);
		
		Subtitle = Subtitle[0].toUpperCase() + Subtitle.slice(1, Subtitle.length);
		Title += Subtitle;
		
	}

	return Title;
	
}

function Output( Title, Fast ){			// Writes the new movie title in the HTML
	if (!AllowWrite){return}
	if ( Fast ){
		HTMLTitle.innerHTML = Title;
	} else {
		HTMLTitle.innerHTML += Title[0];
		if ( Title.length > 1 ){
			Title = Title.slice(1, Title.length);
			setTimeout(function(){Output( Title, false )}, 200/(Title.length + 2));
		}
	}
}

function Generate(){						// Wrapper function

	Wobble(40, 1);
	
	CheckQuick.checked = CheckQuick.checked||CheckMass.checked;
	
	Title = Generate_Movie_Title();
	if ( CheckMass.checked ){
		for( i = 0; i < 9; i++){
			Title += "<br>" + Generate_Movie_Title();
		}
	}
	
	AllowWrite = false;
	setTimeout(function(){
		AllowWrite = true;
	HTMLTitle.innerHTML = "";
	Output( Title, CheckQuick.checked);
	},20);
	
	
}

function On_Load(){
	
	FontFunc();
	HTMLTitle.innerHTML = "";
	Output( "Tick the checkboxes and press \"Generate Title!\"", false);
	
}
















