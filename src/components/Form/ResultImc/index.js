import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  let message = "";
  if (props.Resultbmi) {
    const BMIValue = parseFloat(props.Resultbmi);
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

  return (
    <View style={styles.resultImc}>
      <Text style={styles.bmiTitle}>{props.Resultbmi && "Your BMI"}</Text>
      <Text style={styles.numberImc}>{props.Resultbmi}</Text>
      {message !== "" && <Text style={styles.information}>{message}</Text>}
      {message !== "" && <Text style={styles.idealWeight}>Ideal Weight Range: {props.idealWeightRange.min} kg - {props.idealWeightRange.max} kg</Text>}
    </View>
  );
}
