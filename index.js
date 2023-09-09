const reasons = [
	"You are the most delicious Hot Blondie :P",
	"You cook the best meals ^.^",
	"No challenge is too hard for you :D",
    "You look cute, when you are angry ᕦ(ò_óˇ)ᕤ",
    "You deeply care for your friends and family :)",
    "You are hardworking and smart :>",
    "You laugh at my silly jokes ^-^",
    "You showed me how life on the greener side feels :)",
    "You never judge someone by their passions :o",
    "I never get lost in a new city with you :V",
    "You don't value the opinion of unimportant people :>",
    "You are well read and know stuff ^_^",
    "You know how to get along with a crowd ^-^",
    "I can talk about my emotions without being judged :o"
];

var currentIndex = 0;

function shuffleReasons(){
    for (let i = reasons.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
    
        // Swap the elements at i and j
        [reasons[i], reasons[j]] = [reasons[j], reasons[i]];
      }
}

function updateReason(){
    if(currentIndex === 0){
        shuffleReasons()
    }
    clearOldReason()
    addNewReason()
    incrementIndex()
    triggerApi()
}

function getReasonElement(){
    return document.getElementById("reason");
}

function clearOldReason(){
    var element = getReasonElement()
	for(var child of element.childNodes){
        element.removeChild(child)
	}
}

function addNewReason(){
    var text = document.createTextNode(reasons[currentIndex]);
	getReasonElement().appendChild(text);
}

function incrementIndex(){
    currentIndex++;
    if(currentIndex === reasons.length){
        currentIndex = 0;
    }
}

function triggerApi(){
    fetch("http://jrohatsch.pythonanywhere.com/trigger");
}