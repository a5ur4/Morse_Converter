import React, { useState } from "react";
import { SafeAreaView, 
    StatusBar, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration, 
    Share, 
    Pressable, 
    Keyboard } from "react-native";
    import * as Speech from 'expo-speech';

import styles from './style'

export default function TextToMorse(){

    const [text, setText] = useState(null)
    const [morse, setMorse] = useState('')
    const [errorMessage, setErrorMesssage] = useState(null)
    
    const morseAlphabet = {

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
        ")" : "-.--.-", "?" : "..--..",

        "Á" : ".--.-", "Ã" : ".-.-", "É" : "..-..", "Ñ" : "--.--",
        "Ö" : "---.", "Ü" : "..--"

    }

    const onShare = async () => {
        const result = await Share.share({
            message: morse, 
        })
    }

    const Speak = () => {
        const Sound = morse;
        Speech.speak(Sound);
    }

    function validation() {
        if (text == null) {
            setErrorMesssage('This field is required*')
            Vibration.vibrate()
        } else {
            TexttoMorse()
            setErrorMesssage(null)
        }
    }

    function TexttoMorse() {
        var MorsetoConvert = text
        MorsetoConvert = MorsetoConvert.toUpperCase()
        let split = MorsetoConvert.split("")
        let map = split.map(x => {
            if (morseAlphabet[x]) {
                return morseAlphabet[x]
            } else {
                return x
            }
        })
        var finalMessage = map.join(" ")
        setMorse(finalMessage)
        setText(null)
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <SafeAreaView >
                    <StatusBar
                        backgroundColor='#003D82'
                        barStyle='dark-content'
                    />
                    <View style={styles.Title}>
                        <View style={styles.LineHead_2}/>
                        <View style={styles.LineHead_1}/>
                            <Text style={styles.TitleText}>Text to Morse</Text>
                        <View style={styles.LineHead_1}/>
                        <View style={styles.LineHead_2}/>
                    </View>
                    <View style={styles.InputBox}>
                        <Text style={styles.Label}>Insert your Text here: </Text>
                        <Text style={styles.ErrorMessage}>{errorMessage}</Text>
                        <TextInput
                        style={styles.Input}
                        keyboardType='default'
                            value={text}
                            onChangeText={(text) => {
                                setText(text)
                            }}
                        placeholder="Example: hello world"
                        placeholderTextColor={'#002F63'}
                        />
                        
                        <TouchableOpacity
                            style={styles.Button}
                            onPress={() => {
                                validation()
                            }}
                        >
                            <Text style={styles.ButtonText}>Convert</Text>
                        </TouchableOpacity>
                        <View style={styles.ResultBox}>
                            <Text
                                style={styles.Result}
                                selectable={true}
                            >{morse}</Text>
                        </View>
                        <View style={styles.FlexButton}>
                            <TouchableOpacity 
                                onPress={onShare}
                                style={styles.ShareButton}
                                >
                                <Text style={styles.ShareText}>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={Speak} 
                                style={styles.ShareButton}
                                > 
                                <Text style={styles.ShareText}>Sound</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </SafeAreaView>
        </Pressable>
    )
}