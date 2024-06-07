import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
            BMI App
            </Text>
            <Text style={styles.author}>
            Farjana Islam Tahmina ( 577938 )
            </Text>
        </View>
    )
}