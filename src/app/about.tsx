import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

const App = () => {
  return(
    <View style={styles.container}>
    
    <Text style={styles.title}>หวัดดีเจ้านุด😼</Text>
    <Text style={styles.subtitle}>สั่งซื้อเปียกให้เจ้านายของพวกแกด้วย</Text>
    <Image
      source={require('../../assets/img2.png')}
      style={styles.image}
    />
    <Text style={styles.subtitle2}>เราเป็นแอปช้อปปิ้งสำหรับคนรักแมว{'\n'}รวมอาหารแมว ขนม ของเล่น ทรายแมว น้องแมวไว้ในที่เดียว{'\n'}คัดสรรสินค้าคุณภาพ เพื่อให้เจ้านายตัวน้อยของคุณได้รับสิ่งที่ดีที่สุด{'\n'}เพราะแมวไม่ใช่แค่สัตว์เลี้ยง แต่เป็นสมาชิกในครอบครัว</Text>
    <Link href="/detail"style={styles.link}>เข้าสู้หน้ารายละเอียด 💌</Link>
        </View>
  )}

export default App

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#ffcbcbff',
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
    borderColor:'#ff7e7eff',
    borderRadius:10,
    borderWidth:5,
    width:360,
    padding:10
  },
  image:{
    width:200,
    height:200,
    borderRadius:90,
    borderWidth:4,
    borderColor:'#ff7e7eff',
    margin:15,
  },
  link:{
    width:200,
    height:40,
    fontSize:15,
    fontWeight:'bold',
    color:'#2c2c2cff',
    textAlign:'center',
    alignContent:'center',
    borderRadius:20,
    borderWidth:4,
    borderColor:'#ff7e7eff',
    backgroundColor:'#ffbabaff',
    padding:5
  }
});

