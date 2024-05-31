import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function ResultImc(props){
    let message = "";
    if (props.ResultImc) {
        const BMIValue = parseFloat(props.ResultImc);
        if (BMIValue < 16.9) {
            message = "Very Under Weight.";
        } else if (BMIValue < 18.5) {
            message = "Under Weight.";
        } else if (BMIValue < 24.9) {
            message = "Normal weight.";
        } else if (BMIValue < 29.9) {
            message = "Overweight.";
        } else {
            message = "Obesity.";
        }
    }

    return(
        <View style={styles.ResultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>
            {message !== "" && (
                <Text style={styles.information}>{message}</Text>
            )}
        </View>
    )
}
