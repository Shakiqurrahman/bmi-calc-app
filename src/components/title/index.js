import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                BMI Calculator
            </Text>
            <Text style={styles.author}>
                @Adil Ahmed Sayem - 577846
            </Text>
        </View>
    )
}