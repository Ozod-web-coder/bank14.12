import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";


export function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.text}>My Bank</Text>
            <Image style={styles.image} source={{uri: 'https://i.pinimg.com/474x/c2/29/cf/c229cf2dbc25e25fd91a48848488ec9c.jpg'}} />

        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height:70,
        backgroundColor: '#505050',
        justifyContent: "space-between",

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft:'3%'
    },
    image: {
        width:50,
        height:50,
        borderRadius:100,
        marginRight:'4%'
    }
})