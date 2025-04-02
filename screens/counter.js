import {View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useState } from 'react';


export default function Counter() {
    const [contador, setContador] = useState(0)
    if(contador<0){
        setContador(0);
    }

    function Aumentar(){
    setContador(contador+1);
    };

    function Diminuir(){
        setContador(contador-1);
    }


    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                CONTADOR
            </View>
            <View style={styles.textocinza}>
            contador: {contador}
            </View>
            <View style={styles.row}>
            <TouchableOpacity style= {styles.botao} onPress={Aumentar}>
            <Text style={styles.txtbotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.botao} onPress={Diminuir}>
            <Text style={styles.txtbotao}>-</Text>
            </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-evenly',
        fontFamily: 'Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif'
    },
    titulo:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        color:'#003366'
    },
    row:{
        width: '30%',
        flexDirection:'row',
        justifyContent:'space-around'

    },
    botao: {
        width:'10%',
        borderRadius:'5%',
        backgroundColor: '#003366'
    },
    txtbotao:{
        textAlign:'center',
        color:'white'
    },
    textocinza:{
        color:'#646464',
        textAlign: 'center'
    }

});