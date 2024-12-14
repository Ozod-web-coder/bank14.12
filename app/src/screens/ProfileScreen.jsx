import {StyleSheet, View, Text} from "react-native";

const data = {
    name: "John",
    email: "john@gmail.com",
    password: "password@gmail.com",
    phone:'21134214242',
    bankNumber: "1234567890"
}

export default function ProfileScreen() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Name:{data.name}</Text>
                <Text style={styles.text}>Email:{data.email}</Text>
                <Text style={styles.text}>Password:{data.password}</Text>
                <Text style={styles.text}>Phone Number:{data.phone}</Text>
                <Text style={styles.text}>Bank Number:{data.bankNumber}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'90%',
        height:700,
        borderRadius:30,
        margin:20,
        borderWidth:5,
        borderColor:'gray',
        display:'flex',

    },
    text: {
        fontSize:20,
        fontWeight:'bold',
        margin:30
    }
})