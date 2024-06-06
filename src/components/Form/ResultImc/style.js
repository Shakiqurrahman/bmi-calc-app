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
        fontSize: 48,
        color: "#FF869C",
        fontWeight: "bold",
    },
    bmiTitle:{
        fontSize:18,
        color: "#000000",
        fontWeight: "bold",

    },
    information:{
        fontSize:18,
        color: "#000000",
        fontWeight: "bold",
        marginBottom: 20,

    },
    error :{
        fontSize:18,
        color: "#E70909",
        fontWeight: "bold",
    }
});

export default styles