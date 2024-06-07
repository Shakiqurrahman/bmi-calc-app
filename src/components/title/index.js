import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.author}>
            Jonayed Tanvir Rafi - 577874
            </Text>
            <Text style={styles.textTitle}>
            BMI App
            </Text>
        </View>
    )
}