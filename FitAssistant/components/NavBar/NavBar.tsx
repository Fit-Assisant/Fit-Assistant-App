import { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function NavBar()
{
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>NavBar</Text>
            <View style={styles.viewWrapper}>
                <View style={styles.buttonWrapper1}>
                    <Button title="Home" color={"red"}></Button>
                    <Button title="All Exercises"></Button>                
                </View>
                <View style={styles.buttonWrapper2}>
                    <Button title="Add Exercise"></Button>
                    <Button title="Add Workout"></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height : "15%",
        backgroundColor: 'purple',
        bottom: 0,
        position: "absolute",
        width: "100%",
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
    },
    buttonWrapper1:{
        flex: 1,
        width:"50%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    buttonWrapper2: {
        flex: 1,
        width:"50%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    viewWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    }
})