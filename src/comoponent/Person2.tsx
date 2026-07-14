import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
type employee={
    id:number;
    name:string;
    dept:string;
};
type Props = {
    onSelectEmployee:(name:string)=>void;
};

export default function Person2({onSelectEmployee}:Props) { 
    const [employee] = useState<any>([  
        {id:1,name:"Somchai",dept:"IT"},
        {id:2,name:"Madee",dept:"Finance"},
        {id:3,name:"Pladaw",dept:"Store"}
    ]);
    const [show, setShow] = useState(true);
    const toggleShow = () => {
    setShow(!show);
    };

  return (
    <View style={styles.container}>
      <View style={styles.maincard}>
        <Text style={styles.header}>
          Number of employee: {employee.length} Persons
        </Text>

        <View style={styles.button}>
          <Button
            title={show ? "Hide" : "Show"}
            onPress={toggleShow}
          />
        </View>

        <View style={styles.maintable}>
          <Text style={styles.id}>ID</Text>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.dept}>Dept</Text>
        </View>

        {show &&
          employee.map((emp:any) => (
            <View style={styles.table} key={emp.id}>
              <Text>{emp.id}</Text>
              <Text>{emp.name}</Text>
              <Text>{emp.dept}</Text>
              <Button title="เลือกพนักงาน" onPress={()=>onSelectEmployee(emp.name)} />
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6efff",
    alignItems: "center",
    gap: 3,
  },

  maincard: {
    marginTop: 20,
    paddingBottom: 25,
    borderWidth: 2,
    width: 350,
    padding: 10,
    backgroundColor: "#e3ffff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    margin: 5,
  },

  maintable: {
    borderWidth: 1,
    width: 250,
    padding: 5,
    flexDirection: "row",
    gap: 60,
    backgroundColor: "#73beff",
    borderRadius: 5,
  },

  table: {
    borderWidth: 1,
    width: 250,
    flexDirection: "row",
    padding: 5,
    gap: 60,
    backgroundColor: "#e4faff",
    borderRadius: 5,
  },

  button: {
    marginTop: 20,
    width: 120,
    marginBottom: 15,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#465969ff",
    backgroundColor: "#d8edffff",
  },

  id: {
    fontWeight: "bold",
  },

  name: {
    fontWeight: "bold",
  },

  dept: {
    fontWeight: "bold",
  },
});