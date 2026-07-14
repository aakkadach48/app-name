import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const App = () => {
  // const myname: string = "Aakkadach";
  const artistname: string = "SekLoSo";
  const money: number = 10;
  // const learnhappy: boolean = true;
  const [Name, setName] = useState<string>("Aakkadach");
  const [Age, setAge] = useState<number>(21); 
  const  [Status, setStatus] = useState<boolean>(true); 
  return(
    <View style={styles.container}>
    <Text>สวัสดี {Name} ศิลปินที่ชอบ {artistname}</Text>
    <Text>Hello Mama!</Text>
    <Text>เพิ่งเปิดเทอมเงินเหลือ {money} Baht</Text>
    <Text>วันนี้เรียนง่ายจัง {Status.toString()}</Text>
    <Text>อายุ {Age}</Text>
    <Button
      title="Change the name"
      onPress={()=>setName("Boat")}
    />
    <Button
      title="Change Learnhappy"
      onPress={()=>setStatus(false)}
    />
    <Button
    title="+"
    onPress={()=>setAge(Age+1)}
    />
    <Button
    title="-"
    onPress={()=>setAge(Age-1)}
    />
    <Button
    title='reset'
    onPress={()=>{
    setAge(21)
    setStatus(true)
    setName('Akkadach')
    }}
    />
    </View>
  )}

export default App

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
