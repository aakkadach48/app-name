import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Person from "../comoponent/Person2";

export default function MainC2() {
    const [empName,setEmpName]=useState("");
    const receiveData = (name:string)=>{
        setEmpName(name);
    };

    return(
        <View style={styles.container}>
            <Text> This is Mom!!!</Text>
            <Text>พนักงานที่เลือก: {empName}</Text>
            <Person onSelectEmployee={receiveData}></Person>
        </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6efff",
  },
});
