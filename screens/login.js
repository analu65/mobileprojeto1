import {ImageBackground,Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import Test from './home';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';
import { useState } from 'react';

export default function Login({navigation}) {
    const [email,setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const verificaUser = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log('Usuário logado', userCredential.user.email);
            navigation.navigate('HomeTab')
          })
          .catch((error) => {
            console.log('Erro ao logar',error.message);
          });
        
    }
    return (
      <View style={styles.container}>
        <ImageBackground
            source={require('../assets/fundobranco.jpg')} style = {styles.imagebackground} >
                <Text style={styles.textologin}>
                    Login
                </Text>
                <MaterialCommunityIcons name="login" size={24} color="#003366" />
                <Text style={styles.textocinza}>
                Faça o seu login ou crie uma conta caso ainda não possua cadastro
                </Text>
                <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                keyboardType="default"
                value={email}
                onChangeText={setEmail} >
                </TextInput>
                <TextInput style={styles.input}
                placeholder="Digite sua senha"
                keyboardType="default"
                value={senha}
                onChangeText={setSenha} >
                </TextInput>
                <View style={styles.buttoncontainer}>
                    <Button 
                    title="Enviar"
                    color="#003366" 
                    onPress={verificaUser}
                    
                    />
                    <Button 
                    title="Cadastrar"
                    color="#003366" 
                    onPress={() => navigation.navigate('Cadastro')}
                    />
                </View>
        </ImageBackground>
      </View>  
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
    },
    textocinza:{
        textAlign:'center',
        color:'#4e4e4e',
        fontSize:17,
        marginHorizontal: 15,
        marginTop: 15
    },
    textologin:{
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
    buttoncontainer:{
        marginTop:30,
    },
    imagebackground: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
});