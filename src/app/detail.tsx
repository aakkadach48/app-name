import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

const App = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Detailจ้าาา💟</Text>
    <Text style={styles.subtitle}>ยินดีต้อนรับสู่หน้ารายละเอียด</Text>
    <Image
      source={require('../../assets/img3.jpg')}
      style={styles.image}
    />
    <Link href="/"style={styles.link}>เข้าสู้หน้าหลัก </Link>
        </View>
  )}

export default App

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#dce4ffff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:3
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    color:'#333'
  },
  subtitle:{
    fontSize:14,
    color:'#777777ff',
  },
  subtitle2:{
    fontSize:12,
    alignContent:'center',
    color:'#353535ff',
    marginBottom:10,
    borderColor:'#9fb5ffff',
    borderRadius:10,
    borderWidth:5,
    width:360,
    padding:15
  },
  image:{
    width:200,
    height:200,
    borderRadius:90,
    borderWidth:4,
    borderColor:'#9fb5ffff',
    margin:15,
  },
  link:{
    width:200,
    fontSize:15,
    fontWeight:'bold',
    color:'#2c2c2cff',
    textAlign:'center',
    alignContent:'center',
    borderRadius:20,
    borderWidth:4,
    borderColor:'#9fb5ffff',
    backgroundColor:'#c5d3ffff',
    padding:10
  }
});
