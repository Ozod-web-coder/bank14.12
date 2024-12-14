import {View, StyleSheet, Text, Button, TextInput} from "react-native";
import {useState} from "react";
import {BlurView} from "expo-blur";
import alert from "react-native-web/src/exports/Alert";


export function Check(){

    const [balance, setBalance] = useState(100000);
    const [plus,setPlus] = useState();
    const [minus,setMinus] = useState();
    return (
        <View blurType="extra-light" Amount={10} style={styles.container}>
            <View style={styles.check}>
                <Text>Balance:</Text>
                <Text style={styles.balance}>{balance}$</Text>
            </View>
            <View style={styles.ns}>
                <View>
                    <View style={styles.btn}>
                        <Button title="Up" color='green' onPress={()=>setBalance(Number(balance) + Number(plus))}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Down" color='red' onPress={()=>setBalance(Number(balance) - minus)}/>
                    </View>
                </View>

                <View>
                    <TextInput onChangeText={(value)=>{setPlus(value)}} value={plus} style={styles.input} placeholder={'  Enter Balance'}/>
                    <TextInput onChangeText={(value)=>{setMinus(value)}} value={minus} style={styles.input} placeholder={'  Enter Balance'}/>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width:'90%',
        height:'70%',
        borderRadius:30,
        margin:20,
        borderWidth:5,
        borderColor:'gray',
        display:'flex',

    },
    check: {
        margin:40,
        width:'50%',
        height:200,
        overflow:'hidden',
    },
    balance: {
        fontSize:46,
    },
    btn:{
        width:150,
        height:60,
        marginLeft:20,
    },
    ns:{
        fontSize:16,
        width:'90%',
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
    },
    input: {
        width:100,
        height:40,
        marginLeft:40,
        margin:2,
        fontSize:15,
        color:'gray'
    }
})