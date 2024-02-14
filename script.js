function greatDay() {
    document.getElementById('greatSection').style.display = 'block';
    document.getElementById('notGreatSection').style.display = 'none';
}

function notGreatDay() {
    document.getElementById('notGreatSection').style.display = 'block';
    document.getElementById('greatSection').style.display = 'none';
}

function backToStart() {
    document.getElementById('notGreatSection').style.display = 'none';
    document.getElementById('greatSection').style.display = 'none';
}

function askQuestion() {
    document.getElementById('questionSection').style.display = 'block';
    document.getElementById('greatSection').style.display = 'none';
}

function yesClicked() {
    alert("I am the luckiest boyfriend in this world XDD. Love YOUUUU.");
}

function noClicked() {
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('greatSection').style.display = 'block';
}
function noClicked() {
    alert("You are mean >:("); // Display a warning message
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('greatSection').style.display = 'block';
}
function greatDay() {
    document.getElementById('initialQuestionSection').style.display = 'none';
    document.getElementById('greatSection').style.display = 'block';
}

function notGreatDay() {
    document.getElementById('initialQuestionSection').style.display = 'none';
    document.getElementById('notGreatSection').style.display = 'block';
}
function backToStart() {
    document.getElementById('notGreatSection').style.display = 'none';
    document.getElementById('initialQuestionSection').style.display = 'block';
}
