var famous = [{
	title:'Basketball Player',
	name:'Michael Jordan',
	bio:"Michael Jordan was born on February 17, 1963, in Brooklyn, New York, one of James and Deloris Jordan's five children. The family moved to WilmingtonNorth Carolina when Michael was very young.",
	url:"http://sneakerhistory.com/wp-content/uploads/2015/02/Michael-Jordan-1988-Dunk-Contest-in-Air-Jordan-3-White-Cements-4.jpg",
	birth:1963,
	death:"Still alive"
	},
	{
	title:'Football Player',
	name:'Marcus Mariota',
	bio:"Quarterback who won the 2014 Heisman Trophy after leading the University of Oregon to a Pac-12 Championship. He was also named the Tostitos Fiesta Bowl MVP in 2013. In 2015, he was selected second overall in the NFL Draft by the Tennessee Titans.",
	url:"https://usatftw.files.wordpress.com/2016/10/gty_613612102_85865008.jpg?w=1000&h=600&crop=1",
	birth:1993,
	death:"Still alive"
	},
	{
	title:'Actor',
	name:'Denzel Washington',
	bio:"Born in Mount Vernon, New York, on December 28, 1954, Denzel Washington first studied journalism at Fordham University but then discovered an interest in acting. He made his feature film debut in the comedy A Carbon Copy (1981) and was cast on the hit TV medical drama St. Elsewhere (1982-8).",
	url:"https://www.thefamouspeople.com/profiles/images/denzel-washington-4.jpg",
	birth:1954,
	death:"Still Alive"
	},
	{
	title:'Actress',
	name:'Halle Berry',
	bio:"Born on August 14, 1966, in Cleveland, Ohio, Halle Berry is an award-winning actress and former beauty queen. For her performance in Monster's Ball in 2001, she was nominated for a BAFTA Award and won an Academy Award for best actress—becoming the first African-American woman to win the honor.",
	url:"http://www.celebritytonic.com/wp-content/uploads/2013/02/halle-maria-berry.jpg",
	birth:1966,
	death:"Still Alive"
	},  
	{
	title:'Comedian',
	name:'Kevin Hart',
	bio:"Kevin Hart was born in Philadelphia, Pennsylvania, on July 6, 1979. Raised by his mother, Hart began working as a stand-up comedian shortly after graduating from high school, eventually migrating to bigger clubs in New York and Los Angeles.",
	url:"http://blog.godreports.com/wp-content/uploads/2017/03/kevin-hart-what-now-teaser-trailer-00.jpg",
	birth:1979,
	death:"Still Alive"
	}	
];

var textBox = document.getElementById("inputField");
var personContainer = document.getElementById("person-container");
var counter = 0;

// for(; counter < 5; counter++){
// 	personContainer.innerHTML += `<div class="famousBox" id="famousBox--${counter}"></div>`;
// }

var selectedBox;

function addEventListenerMaker (){
	var containerEl = document.getElementsByClassName("famousBox");
	console.log("containerEl", containerEl);
	for (var i = 0; i < containerEl.length; i++){
		containerEl[i].addEventListener("click", function(e){
			console.log(e.target.classList.value);
			if(e.target.classList.value === "famousBox"){
				selectedBox = e.target;
			} else {
				selectedBox = e.target.parentNode;
			}
			
			for(var j=0; j<containerEl.length; j++){
				containerEl[j].classList.remove("borderz");
			};

			selectedBox.classList.add("borderz");
			textBox.focus();

		});
	}
}

function toDom (e){
	personContainer.innerHTML = e;
	addEventListenerMaker();
}

function domString(objects) {
	var famousString = '';
	for (var i=0; i<objects.length; i++){
		var famousBox = objects[i];		
		famousString += `<div class="famousBox" id="famousBox-${i}">
		 <div class="famousTitle">${objects[i].title}</div>
		 <div class="famousName">${objects[i].name}</div>
		 <div class="famousBio">${objects[i].bio}</div>
		 <img class="famousImage" src="${objects[i].url}">
		 <div class="famousBirth">${objects[i].birth}</div>
		 <div class="famousDeath">${objects[i].death}</div></div>`
	}
	toDom(famousString);
	
};
	domString(famous);

	inputField.addEventListener("keypress", function(e){
		if(e.key === 'Enter'){
			inputField.value = "";
		}
	})
	
	textBox.addEventListener("keypress", function(e){
		var text = document.getElementById('inputField').value;
		for(var i = 0; i < selectedBox.children.length; i++){
			currentBox = selectedBox.children[i];
			if(currentBox.classList.contains("famousBio")){
				currentBox.innerHTML = text + e.key;
			}
		}
	})
	























