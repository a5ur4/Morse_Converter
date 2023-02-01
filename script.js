const morseAlphabet = {
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
}

function paste_morse() {
    var paste = document.getElementById('text')
    navigator.clipboard.readText().then((clipText) => (paste.innerText = clipText));
}

function paste_text() {
    var paste = document.getElementById('morse')
    navigator.clipboard.readText().then((clipText) => (paste.innerText = clipText));
}

function copy_morse() {
    var copy = document.getElementById("converted_morse")
    copy.select()
    copy.setSelectionRange(0, 999)
    navigator.clipboard.writeText(copy.value);
}

function copy_text() {
    var copy = document.getElementById("converted_text")
    copy.select()
    copy.setSelectionRange(0, 999)
    navigator.clipboard.writeText(copy.value);
}

function MorsetoText() {
    var textToConvert = document.getElementById('morse').value
    textToConvert = textToConvert.toUpperCase()
    var ConvertedText = textToConvert.replace(/([.-]+[-.]*)/g, (_, el) =>morseAlphabet [el]);
    document.getElementById('converted_text').value = ConvertedText
}
