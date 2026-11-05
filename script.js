function coach() {

    let name = document.getElementById("name").value;
    let goal = document.getElementById("goal").value;
    let coachType =
    document.getElementById("coachType").value;

let responses = [];

if (coachType === "friendly") {

    responses = [
        `${name}, you're doing great. Keep moving toward ${goal}.`,
        `${name}, every step counts.`,
        `${name}, stay positive and keep working.`,
        `${name}, your future self will thank you.`
    ];

}

else if (coachType === "military") {

    responses = [
        `${name}, excuses don't get results.`,
        `${name}, stop negotiating and start working.`,
        `${name}, discipline beats motivation.`,
        `${name}, today's effort determines tomorrow's success.`
    ];

}

else if (coachType === "beast") {

    responses = [
        `${name}, attack the workout.`,
        `${name}, champions are built today.`,
        `${name}, pain is temporary. Strength is forever.`,
        `${name}, somebody is outworking you right now.`
    ];

}
    let response =
    responses[Math.floor(Math.random() * responses.length)];

    document.getElementById("output").innerText = response;

    let speech = new SpeechSynthesisUtterance(response);

    let voices = speechSynthesis.getVoices();

    let selectedVoice =
    document.getElementById("voiceSelect").value;

    if (voices.length > 0) {
        speech.voice = voices[selectedVoice];
    }

    speech.rate = 0.9;
    speech.pitch = 0.8;

    speechSynthesis.speak(speech);
}

const exercises = [
{
    name: "Pushups",
    image: "images/pushup.jpg"
},
{
    name: "Squats",
    image: "images/squat.jpg"
},
{
    name: "Plank",
    image: "images/plank.jpg"
}
];

let randomExercise =
exercises[Math.floor(Math.random() * exercises.length)];

document.getElementById("exerciseImage").src =
randomExercise.image;

document.getElementById("exerciseName").innerText =
"Today's Exercise: " + randomExercise.name;

