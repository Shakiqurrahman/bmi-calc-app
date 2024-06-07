import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "120%",
        bottom: 0,
        backgroundColor: "#200E3A",
        alignItems: "center",
        marginTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    form:{
        width:"100%",
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: "#fff",
        fontSize: 18,
        paddingLeft: 20,
    },
    inputContainer: {
        position: 'relative',
      },
      placeholder: {
        position: 'absolute',
        left: 10,
        top: 27,
        color: '#736E81', 
        paddingLeft: 20,
      },
    input:{
        width: "95%",
        borderRadius: 50,
        backgroundColor: "200E3A",
        borderColor: "white",
        borderWidth: 1,
        color:'white',
        height:50,
        margin: 12,
        paddingLeft: 20,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        backgroundColor: '#57C5B6',
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