window.pekq = [
    "Pek 1",
    "Pek 2",
    "Pek 3",
    "Pek 4",
    "Pek 5"
]
window.getQuestion = function() {
    // If there are no questions left, set it to "Slut på frågor :("
    if (window.pekq.length < 1){
        document.getElementById("question").innerHTML = "Slut på påståenden :("
        return
    }
    // Get a random one from window.knq and remove it
    const index = Math.floor(Math.random() * window.pekq.length);
    const question = window.pekq[index];
    window.pekq.splice(index, 1);
    // Set the innerHTML of the question element to the question
    document.getElementById("question").innerHTML = question;
}