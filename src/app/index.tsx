import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return(
    <View style={styles.container}>
    
    <Text style={styles.title}>HELLO👋</Text>
    <Text style={styles.subtitle}>ยินดีต้อนรับสู่แอปของฉัน</Text>
    <Image
      source={require('../../assets/img1.jpg')}
      style={styles.image}
    />
    {/* <Text style={styles.subtitle2}>แอปช้อปปิ้งสำหรับคนรักแมว รวมอาหารแมวคุณภาพสูง{'\n'}ขนม ของเล่น ทรายแมว และอุปกรณ์ดูแลน้องแมวครบจบในที่เดียว{'\n'}เลือกซื้อสินค้าง่าย สะดวก รวดเร็ว พร้อมบริการจัดส่งถึงหน้าบ้าน{'\n'}เพื่อให้เจ้านายตัวน้อยของคุณได้รับสิ่งที่ดีที่สุดในทุกวัน</Text> */}
    <Link href="/" style={styles.link}>เข้าสู้หน้าหลัก 🏘</Link>
    <Link href="/about" style={styles.link}>เข้าสู้หน้าเกี่ยวกับ 📚</Link>
    <Link href="/detail" style={styles.link}>เข้าสู้หน้ารายละเอียด 💌</Link>
    <Link href="/MainComponent" style={styles.link}>เข้าสู้หน้า MainComponent</Link>
    </View>
  )}

export default App

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#ffe0cbff',
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
    borderColor:'#ffb27eff',
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
    borderColor:'#ffb27eff',
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
    borderColor:'#ffb27eff',
    backgroundColor:'#ffdbbaff',
    padding:5,
    margin:2
  }
});
