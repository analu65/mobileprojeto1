import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { banco } from "../controller";
import { collection,addDoc } from "firebase/firestore";

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const addProduto = async () => {
        try {
            await addDoc(collection(banco, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome('');
            setValor(''),
            setImagem('')
        }
        catch (error) {
            console.log("Erro no cadastro do produto.", error);
        }
    }
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="tshirt-crew-outline" size={25} color="#003366" />
            <Text style={styles.textotitulo}>Cadastro de Produtos</Text>
            
            <Text style={styles.text}>Insira os dados dos produtos que deseja cadastrar.</Text>
            <TextInput 
                style={styles.input}
                placeholder="Insira o nome do produto"
                keyboardType="default"
                value={nome}
                onChangeText={setNome}
                
            />
            <TextInput 
                style={styles.input}
                placeholder="Insira o valor do produto"
                keyboardType="default"
                value={valor}
                onChangeText={setValor}
            />
            <TextInput 
                style={styles.input}
                placeholder="Insira o link da imagem"
                keyboardType="default"
                value={imagem}
                onChangeText={setImagem}
            />

            <Button 
                title="Cadastrar"
                color="#003366" 
                onPress={addProduto}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        fontFamily: 'Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
        margin: 10
    },
    text:{
        textAlign:'center',
        color:'#4e4e4e',
        fontSize:17,
        margin: 17
    },
    textotitulo:{
        fontSize: 30,       
        color: '#003366',   
        fontWeight: 'bold',   
        textAlign: 'center',   
        letterSpacing: 1.0, 
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 20,
    },
});