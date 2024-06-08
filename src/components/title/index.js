import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculate Your BMI</Text>
            <Text style={styles.author}>Shakiqur Rahman ( 577860 ) / B1</Text>
        </View>
    );
}
