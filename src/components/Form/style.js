import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "120%",
        bottom: 0,
        backgroundColor: "#000",
        opacity: 0.9,
        alignItems: "center",
        marginTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    form:{
        width:"100%",
        marginTop: 10,
        padding: 10,
    },

    formLabel: {
        color: "#fff",
        fontSize: 18,
        paddingLeft: 20,
        marginTop: 20,
    },
    inputContainer: {
        position: 'relative',
      },
    inputContainerFI: {
        position: 'relative',
        width: "45%",
      },
      placeholder: {
        position: 'absolute',
        left: 10,
        top: 27,
        color: '#736E81', 
        paddingLeft: 15,
      },
    input:{
        width: "95%",
        // borderRadius: 50,
        // backgroundColor: "#200E3A",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        color:'white',
        height:50,
        margin: 12,
        paddingLeft: 15,
    },
    inputFI :{
        width: "100%",
        // borderRadius: 50,
        // backgroundColor: "#200E3A",
        borderBottomColor: "white", 
        borderBottomWidth: 1,
        color:'white',
        height:50,
        margin: 12,
        paddingLeft: 15,
    },

    feetNInch : {
        flexDirection: "row",
        // alignItems: "center",
        paddingBottom: 14,
        // marginLeft: 12,
        // marginTop: 10,
        gap: 16,
    },
    buttonCalculator:{
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        backgroundColor: 'white',
        // borderColor: 'white',
        paddingTop: 12,
        paddingBottom: 12,
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
        color: "black",
    }
})

export default styles