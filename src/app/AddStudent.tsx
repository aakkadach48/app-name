import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View,} from 'react-native';

export default function AddStudent() {

  const [studentId, setStudentId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [major, setMajor] = useState("");

  const saveStudent = async () => {
    try {
      const response = await fetch(
        "http://172.21.248.89/api/ins_std.php",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body:
            "student_id=" + encodeURIComponent(studentId) +
            "&firstname=" + encodeURIComponent(firstname) +
            "&lastname=" + encodeURIComponent(lastname) +
            "&major=" + encodeURIComponent(major),
        }
      );

      const json = await response.json();
      Alert.alert(json.message);
      if (json.status === "success") {
        setStudentId("");
        setFirstname("");
        setLastname("");
        setMajor("");
      }
    } catch (error) {
      Alert.alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <View>
      <Text style={styles.title}>เพิ่มข้อมูลนักศึกษา</Text>
      <TextInput placeholder="รหัสนักศึกษา :" value={studentId} onChangeText={setStudentId} />
      <TextInput placeholder="ชื่อ :" value={firstname} onChangeText={setFirstname} />
      <TextInput placeholder="นามสกุล :" value={lastname} onChangeText={setLastname} />
      <TextInput placeholder="สาขาวิชา :" value={major} onChangeText={setMajor} />
      <Button title="บันทึกข้อมูล" onPress={saveStudent} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});