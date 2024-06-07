import { StyleSheet } from "react-native";
const styles = StyleSheet.create ({
    resultImc:{
        flex:1,
        marginTop: 15,
        borderRadius:50,
        alignItems: "center",
        width: "100%",
       

    },
    numberImc:{
        fontSize: 30,
        color: "#83B4FF",
        fontWeight: "bold",
    },
    bmiTitle:{
        fontSize:18,
        color: "#000000",
        fontWeight: "bold",

    },
    information:{
        fontSize:16,
        color: "#000000",
        // fontWeight: "bold",
        marginBottom: 30,

    },
    error :{
        fontSize:18,
        color: "#E70909",
        fontWeight: "bold",
    }
});

export default styles