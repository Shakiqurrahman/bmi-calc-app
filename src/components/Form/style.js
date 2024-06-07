import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,


    },
    form:{
        width:"100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: "95%",
        borderRadius: 10,
        backgroundColor: "#f6f6f6",
        height:50,
        margin: 12,
        paddingLeft: 20,
    },
    buttonCalculator:{
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        backgroundColor: '#2C4E80',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 10
    },
    error : {
        marginTop:10,
        fontSize: 16,
        color: "#E90F0F",
        textAlign: "center"
    },

    textButtonCalculator:{
        fontSize:20,
        color: "#ffffff",
    }
})

export default styles