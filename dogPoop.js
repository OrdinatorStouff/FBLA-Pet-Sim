var NUM_CIRCLES = 1;
var MIN_RADIUS = 50;
var MAX_RADIUS = 50;
var DELAY = 1000;

function start(){
	createCircles();
	
	setTimer(createCircles, DELAY);
	
}

function createCircles() {
    
    removeAll();
    for (let i = 0; i < NUM_CIRCLES; i++) {
        createRandomCircle();
        
    }
}



function createRandomCircle() {
    var randRadius = Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS);
    
    let poopEmoji = new WebImage("https://images.vexels.com/media/users/3/236374/isolated/preview/c5a60ab0500a663785ee20364abef437-simple-poop-emoji-filled-stroke.png");
    poopEmoji.setSize(randRadius, randRadius);
    let x = Randomizer.nextInt(randRadius, getWidth() - poopEmoji.getWidth());
    let y = Randomizer.nextInt(randRadius, getHeight() - poopEmoji.getHeight());
   
    poopEmoji.setPosition(x, y);
    
    add(poopEmoji);   
}