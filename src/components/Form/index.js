import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Resultbmi from "./ResultImc/";
import styles from "./style";

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageBmi, setmessageBmi] = useState("");
    const [bmi, setBmi] = useState(null);
    const [textButton, setTextButton] = useState("Calculate");

    function bmiCalculator() {
        return setBmi((weight / (height * height)).toFixed(2));
    }

    function validationBmi() {
        if (weight != null && height != null) {
            bmiCalculator();
            setHeight(null);
            setWeight(null);
            setmessageBmi("");
            setTextButton("Calculate");
            return;
        }
        setBmi(null);
        setTextButton("Calculate");
        setmessageBmi("Fill in the weight and height!");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Weight</Text>
                <View style={styles.inputContainer}>
                {!weight && <Text style={styles.placeholder}>Enter your Weight</Text>}
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    keyboardType="numeric"
                />
                </View>
                <Text style={styles.formLabel}>Height</Text>
                <View style={styles.inputContainer}>
                    {!height && (
                        <Text style={styles.placeholder}>
                            Enter your height
                        </Text>
                    )}
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationBmi();
                    }}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.error}>
                    {messageBmi !== null && messageBmi}
                </Text>
            </View>
            <Resultbmi messageResultBmi={messageBmi} Resultbmi={bmi} />
        </View>
    );
}
