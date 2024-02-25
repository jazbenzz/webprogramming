

function showAlert() {
    alert('Hello, this is a bigger alert!');
}

function changeFontSize() {
    var textarea = document.getElementById("myTextarea");
    if (textarea) {
        textarea.style.fontSize = "24pt";
    }
}

function toggleStyles() {
    var textarea = document.getElementById("myTextarea");
    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");

    if (textarea && fancyShmancyRadio) {
        if (fancyShmancyRadio.checked) {
            // Apply styles for FancyShmancy
            textarea.style.fontWeight = "bold";
            textarea.style.color = "blue";
            textarea.style.textDecoration = "underline";
        } else {
            // Remove styles for BoringBetty
            textarea.style.fontWeight = "normal";
            textarea.style.color = "black";
            textarea.style.textDecoration = "none";
        }
    }
}

function uppercaseText() {
    var textarea = document.getElementById("myTextarea");
    if (textarea) {
        var text = textarea.value;
        var newText = text.toUpperCase();
        newText = newText.replace(/([.])\s*/g, "-Moo$1 "); // Add -Moo to the last word of each sentence
        textarea.value = newText;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var biggerButton = document.getElementById('biggerButton');
    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");
    var boringBettyRadio = document.getElementById("boringBettyRadio");
    var mooButton = document.getElementById("mooButton");

    if (biggerButton) {
        biggerButton.addEventListener('click', showAlert);
        biggerButton.addEventListener('click', changeFontSize);
    }

    if (fancyShmancyRadio && boringBettyRadio) {
        fancyShmancyRadio.addEventListener('change', toggleStyles);
        boringBettyRadio.addEventListener('change', toggleStyles);
    }

    if (mooButton) {
        mooButton.addEventListener('click', uppercaseText);
    }
});
