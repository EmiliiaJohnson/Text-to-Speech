const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;

    if(!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }
    if(text.length > 50) {
        if (synth.speaking && isSpeaking) {
            button.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
        } else {
            button.innerText = "Play";
            synth.pause();
            isSpeaking = true;
        }
    } else {
        isSpeaking = false;
        button.innerText = "Speaking";
        console.log(text)
    }

    setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
            isSpeaking = true;
            button.innerText = "Convert to speech";
        }
    });
}

button.addEventListener("click", textToSpeech);
