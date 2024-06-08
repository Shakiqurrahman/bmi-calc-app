import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Resultbmi from "./ResultImc/";
import styles from "./style";

export default function Form() {
    const [feet, setFeet] = useState(null);
    const [inches, setInches] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageBmi, setMessageBmi] = useState("");
    const [bmi, setBmi] = useState(null);
    const [textButton, setTextButton] = useState("Calculate");

    function bmiCalculator() {
        const feetInMeters = parseFloat(feet) * 0.3048;
        const inchesInMeters = (parseFloat(inches) || 0) * 0.0254;
        const heightInMeters = feetInMeters + inchesInMeters;
        return setBmi((weight / (heightInMeters * heightInMeters)).toFixed(2));
    }

    function validationBmi() {
        if (weight != null && feet != null) {
            bmiCalculator();
            setFeet(null);
            setInches(null);
            setWeight(null);
            setMessageBmi("");
            setTextButton("Calculate");
            return;
        }
        setBmi(null);
        setTextButton("Calculate Again");
        setMessageBmi("Please fill in the weight & height!");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Weight</Text>
                <View style={styles.inputContainer}>
                    {!weight && (
                        <Text style={styles.placeholder}>
                            Enter your Weight (KG)
                        </Text>
                    )}
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        keyboardType="numeric"
                    />
                </View>
                <Text style={styles.formLabel}>Height</Text>
                <View style={styles.feetNInch}>
                    <View style={styles.inputContainerFI}>
                        {!feet && <Text style={styles.placeholder}>Feet</Text>}
                        <TextInput
                            style={styles.inputFI}
                            onChangeText={setFeet}
                            value={feet}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputContainerFI}>
                        {!inches && (
                            <Text style={styles.placeholder}>Inches</Text>
                        )}
                        <TextInput
                            style={styles.inputFI}
                            onChangeText={setInches}
                            value={inches}
                            keyboardType="numeric"
                        />
                    </View>
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
