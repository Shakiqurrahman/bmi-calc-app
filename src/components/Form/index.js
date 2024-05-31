import React, {useState} from "react"
import { TextInput, View, Text, TouchableOpacity} from "react-native";
import styles from "./style"
import ResultImc from "./ResultImc/";

export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("fill in the weight and height");
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calculate")

function imcCalculator(){
  return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
  if(weight != null && height != null){
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Your BMI ")
    setTextButton("Calculate Again")
    return
  }
  setImc(null)
  setTextButton("Calculate")
  setMessageImc("fill in the weight and height")
}

  return (
    <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Height</Text>
            <TextInput style={styles.input} 
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />
            
            <Text style={styles.formLabel}>Weight</Text>
            <TextInput style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.356"
            keyboardType="numeric" 
            />
           <TouchableOpacity style={styles.buttonCalculator}
           onPress={() =>{
            validationImc()
           }}
           >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>

           </TouchableOpacity>

           
        </View>
        <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
    </View>
  );
}

