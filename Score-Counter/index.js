let homeScores = document.getElementById("homeScores")
let guestScores = document.getElementById("guestScores")


function add1Home(){
console.log ("+1 clicked")
let currentScore = parseInt(homeScores.textContent);
homeScores.textContent = (currentScore) + 1
}

function add1Guest(){
console.log ("+1 clicked")
let currentScore = parseInt(guestScores.textContent);
guestScores.textContent = (currentScore) + 1
}

function add2Home(){
console.log ("+2 clicked")
let currentScore = parseInt(homeScores.textContent);
homeScores.textContent = (currentScore) + 2
}

function add2Guest(){
console.log ("+2 clicked")
let currentScore = parseInt(guestScores.textContent);
guestScores.textContent = (currentScore) + 2
}

function add3Home(){
    console.log ("+3 clicked")
    let currentScore = parseInt(homeScores.textContent)
    homeScores.textContent = (currentScore) + 3
}

function add3Guest(){
    console.log ("+3 clicked")
    let currentScore = parseInt(guestScores.textContent)
    guestScores.textContent = (currentScore) + 3
}

function resetScore(){
    console.log ("Reset Score")
    guestScores.textContent = 0
    homeScores.textContent = 0
}


