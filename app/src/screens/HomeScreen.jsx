import {Text, View, StyleSheet, Dimensions} from "react-native";
import {Header} from "../components/Header";
import {Check} from "../components/Check";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <Check/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }
})