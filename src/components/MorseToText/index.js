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

export default function MorseToText() { 

    const [text, setText] = useState(null)
    const [morse, setMorse] = useState(null)
    const [errorMessage, setErrorMesssage] = useState(null)

    const morseAlphabet = {

        // Characters to transform Morse code in Text
        "-----" : "0",
        ".----" : "1", "..---" : "2", "...--" : "3",
        "....-" : "4", "....." : "5", "-...." : "6",
        "--..." : "7", "---.." : "8", "----." : "9",
    
        ".-":"A", "-...":"B", "-.-.":"C", "-..":"D",
        ".":"E", "..-.":"F", "--.":"G", "....":"H",
        "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
        "--":"M", "-.":"N", "---":"O", ".--.":"P",
        "--.-":"Q", ".-.":"R", "...":"S", "-":"T",
        "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
        "-.--":"Y", "--..":"Z", "/" : " ",
        
        "/" : " ", "-.-.--" : "!", ".-.-.-" : ".", "--..--" : ",",
        ".-..." : "&", ".----." : "'", ".--.-." : "@", "-.--." : "(",
        "-.--.-" : ")", "..--.." : "?",

        ".--.-" : "Á", ".-.-" : "Ã", "..-.." : "É", "--.--" : "Ñ",
        "---." : "Ö", "..--" : "Ü"

    }

    const onShare = async () => {
        const result = await Share.share({
            message: text, 
        })
    }

    const Speak = () => {
        const Sound = text;
        Speech.speak(Sound);
    }

    function validation() {
        if (morse == null) {
            setErrorMesssage('This field is required*')
            Vibration.vibrate()
        } else {
            MorsetoTextConverter()
            setErrorMesssage(null)
        }
    }

    function MorsetoTextConverter() {
        var MorseToConvert = morse
        MorseToConvert = MorseToConvert.toUpperCase()
        var ConvertedMorse = MorseToConvert.replace(/([-/\./.-]+[-./\./-]*)/g, (_, el) =>morseAlphabet [el]);
        setText(ConvertedMorse)
        setMorse(null)
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
                        <Text style={styles.TitleText}>Morse to Text</Text>
                    <View style={styles.LineHead_1}/>
                    <View style={styles.LineHead_2}/>
                </View>
                <View style={styles.InputBox}>
                    <Text style={styles.Label}>Insert your Morse code here: </Text>
                    <Text style={styles.ErrorMessage}>{errorMessage}</Text>
                    <TextInput
                    style={styles.Input}
                    keyboardType='default'
                        value={morse}
                        onChangeText={(morse) => {
                            setMorse(morse)
                        }}
                    placeholder="Example: ... --- ..."
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
                        >{text}</Text>
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