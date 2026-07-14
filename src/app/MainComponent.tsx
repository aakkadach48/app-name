import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Person from "../comoponent/Person";

export default function MainComponent() {
    const [employee,setEmpt] = useState([  
        {id:1,name:"Somchai",dept:"IT"},
        {id:2,name:"Madee",dept:"Finance"},
        {id:3,name:"Pladaw",dept:"Store"}
    ]);

    return(
        <View style={styles.container}>
            <Text> This is Mom!!!</Text>
            <Person employee={employee}></Person>
        </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6efff",
  },
});