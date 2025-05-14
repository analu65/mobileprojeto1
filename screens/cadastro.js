import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../controller";

export default function Cadastro({navigation}){
    const[email,setEmail] = useState("");
    const[senha,setSenha] = useState("");
    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log('Cadastrado!', userCredential.user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('Erro', error.message)
            // ..
          });
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.texto}>
                CADASTRO
            </View>
            <TextInput style = {styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}>
            </TextInput>
            <TextInput style = {styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}>

            </TextInput>
            <Button color={'#003366'} title="Cadastrar" onPress={cadastroUser}></Button>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'space-evenly',
        alignItems: 'center',
        fontFamily: 'Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif'
    },
    texto:{
        fontSize: 30,       
        color: '#003366',   
        fontWeight: 'bold',   
        textAlign: 'center',  
        marginBottom: 15, 
        letterSpacing: 1.0, 
    },
    input: {
        width: '80%', 
        height: 50, 
        borderColor: '#ccc', 
        borderWidth: 1, 
        borderRadius: 5,
        paddingLeft: 20, 
        marginHorizontal: 37,
        marginTop:30,
        fontSize: 16,
    },
})