import React, {useState} from "react"
import { TextInput, View, Text, TouchableOpacity} from "react-native";
import styles from "./style"
import Resultbmi from "./ResultImc/"

export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageBmi, setmessageBmi]= useState("");
const [bmi, setBmi]= useState(null)
const [textButton, setTextButton]= useState("Calculate")

function bmiCalculator(){
  return setBmi((weight/(height*height)).toFixed(2))
}

function validationBmi(){
  if(weight != null && height != null){
    bmiCalculator()
    setHeight(null)
    setWeight(null)
    setmessageBmi("")
    setTextButton("Calculate Again")
    return
  }
  setBmi(null)
  setTextButton("Calculate")
  setmessageBmi("Fill in the weight and height!")
}

  return (
    <View style={styles.formContext}>
        <View style={styles.form}>
        <Text style={styles.formLabel}>Weight</Text>
            <TextInput style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Enter Your Weight"
            keyboardType="numeric" 
            />
            <Text style={styles.formLabel}>Height</Text>
            <TextInput style={styles.input} 
            onChangeText={setHeight}
            value={height}
            placeholder="Enter Your Height"
            keyboardType="numeric"
            />
           <TouchableOpacity style={styles.buttonCalculator}
           onPress={() =>{
            validationBmi()
           }}
           >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>

           </TouchableOpacity>

           <Text style={styles.error}>{messageBmi !== null && messageBmi}</Text>
        </View>
        <Resultbmi messageResultBmi={messageBmi} Resultbmi={bmi}/>
    </View>
  );
}

