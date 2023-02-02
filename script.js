const morseAlphabetV1 = {

    // Characters to transform Text in Morse code
    "0" : "-----",
    "1" : ".----", "2" : "..---", "3" : "...--",
    "4" : "....-", "5" : ".....", "6" : "-....",
    "7" : "--...", "8" : "---..", "9" : "----.",

    "A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
    "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
    "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
    "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
    "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
    "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
    "Y" : "-.--", "Z" : "--..",

    " " : "/", "!" : "-.-.--", "." : ".-.-.-", "," : "--..--",
    "&" : ".-...", "'" : ".----.", "@" : ".--.-.", "(" : "-.--.",
    ")" : "-.--.-" 

}

const morseAlphabetV2 = {

    // Characters to transform Morse code in Text
    ".-":"A", "-...":"B", "-.-.":"C", "-..":"D",
    ".":"E", "..-.":"F", "--.":"G", "....":"H",
    "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
    "--":"M", "-.":"N", "---":"O", ".--.":"P",
    "--.-":"Q", ".-.":"R", "...":"S", "-":"T",
    "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
    "-.--":"Y", "--..":"Z", "/" : " ", 

}

function paste_morse(){
    var paste = document.getElementById('text')
    navigator.clipboard.readText().then((clipText) => (paste.innerText = clipText));
}

function paste_text(){
    var paste = document.getElementById('morse')
    navigator.clipboard.readText().then((clipText) => (paste.innerText = clipText));
}

function copy_morse(){
    var copy = document.getElementById("converted_morse")
    copy.select()
    copy.setSelectionRange(0, 999)
    navigator.clipboard.writeText(copy.value);
}

function copy_text(){
    var copy = document.getElementById("converted_text")
    copy.select()
    copy.setSelectionRange(0, 999)
    navigator.clipboard.writeText(copy.value);
}

function TexttoMorse() {
    var MorsetoConvert = document.getElementById('text').value
    MorsetoConvert = MorsetoConvert.toUpperCase()
    let split = MorsetoConvert.split("")
    let map = split.map(x => {
        if (morseAlphabetV1[x]) {
            return morseAlphabetV1[x]
        } else {
            return x
        }
    })
    var finalMessage = map.join(" ")
    document.getElementById('converted_morse').value = finalMessage
}

function MorsetoText() {
    var textToConvert = document.getElementById('morse').value
    textToConvert = textToConvert.toUpperCase()
    var ConvertedText = textToConvert.replace(/([-/\./.-]+[-./\./-]*)/g, (_, el) =>morseAlphabetV2 [el]);
    document.getElementById('converted_text').value = ConvertedText
}
