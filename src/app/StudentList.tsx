import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

type Student = {
    student_id: string;
    firstname: string;
    lastname: string;
    major: string;
};

export default function StudentList() {
    const [student, setStudent] = useState<Student[]>([]);

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        try {
            const response = await fetch(
                "http://172.21.248.89/api/getStudent.php"
            );
            const json = await response.json();
            setStudent(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={student}
                keyExtractor={(item) => item.student_id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>ID: {item.student_id}</Text>
                        <Text style={styles.text}>Name: {item.firstname} {item.lastname}</Text>
                        <Text style={styles.text}>Major: {item.major}</Text>
                    </View>
                )}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    card: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 18,
    },
});