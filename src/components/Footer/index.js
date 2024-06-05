import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                @Md Rakibul Islam Bhuiyan Remon - 577900
            </Text>
        </View>
    )
}