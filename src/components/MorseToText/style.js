import { StyleSheet } from "react-native";

color1 = '#141414'
color2 = '#002F63'
color3 = '#003D82'
color4 = '#0C53A6'
color5 = '#2B6ABC'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        backgroundColor: color1
    },

    Title: {
        color: color2,
        alignItems: "center",
        paddingBottom: 30
    },

    LineHead_1: {
        height: 20,
        fontWeight: "bold",
        width: 200,
        borderBottomColor: color3,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    LineHead_2: {
        top: 10,
        width: 300,
        borderBottomColor: color3,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    TitleText: {
        padding: 10,
        marginBottom: -15,
        color: color4,
        fontSize: 30,
        fontWeight: "bold"
    },

    InputBox: {
        padding: 10,
        marginBottom: 70,
        alignItems: "center"
    },

    Label: {
        color: color4,
        fontSize: 17,
        fontWeight: "bold"
    },

    ErrorMessage: {
        color: color3,
        fontSize: 13,
        padding: 2
    },

    Input: {
        backgroundColor: '#1A1C20',
        width: 300,
        height: 50,
        borderRadius: 30,
        color: color5,
        textAlign: "center",
        fontSize: 18,
        borderColor: color4,
        borderWidth: 2
    },

    Button: {
        backgroundColor: color4,
        height: 60,
        width: 200,
        borderRadius: 40,
        textAlign: "center",
        alignItems: "center",
        padding: 19,
        marginTop: 20,
        shadowColor: color3,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
    },

    ButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: color1
    },

    
    ResultBox: {
        height: 150,
        width: 150,
        marginTop: 30,
        borderColor: color2,
        borderWidth: 2,
        borderRadius: 20,
    },

    Result: {
        color: color5,
        textAlign: "center",
        marginTop: 50,
        fontSize: 20,
        fontWeight: "bold"
    },
    
    FlexButton: {
        flexDirection: "row",
        padding: 10,
    },

    ShareButton: {
        backgroundColor: color4,
        height: 35,
        width: 100,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        textAlign: "center",
        alignItems: "center",
        padding: 5,
        shadowColor: color3,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
    },

    ShareText: {
        fontSize: 15,
        fontWeight: "bold"
    }
})

export default styles