window.knq = [
    "Jag har aldrig 1",
    "Jag har aldrig 2",
    "Jag har aldrig 3",
    "Jag har aldrig 4",
    "Jag har aldrig 5",
]
window.getQuestion = function() {
    // If there are no questions left, set it to "Slut på frågor :("
    if (window.knq.length < 1){
        document.getElementById("question").innerHTML = "Slut på frågor :("
        return
    }
    // Get a random one from window.knq and remove it
    const index = Math.floor(Math.random() * window.knq.length);
    const question = window.knq[index];
    window.knq.splice(index, 1);
    // Set the innerHTML of the question element to the question
    document.getElementById("question").innerHTML = question;
}