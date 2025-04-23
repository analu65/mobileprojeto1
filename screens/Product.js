import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import Card from "../components/card";
export default function Produto(){
    const [produto,setProduto] = useState([
            {id:1, nome: 'Camiseta', valor: 49.99, imagem: 'https://images.tcdn.com.br/img/img_prod/722594/camiseta_misfits_masculino_157_1_e61efbcd7c7f5e66692f76b715f6bd90.jpg' },
            {id: 2, nome: 'Moletom', valor: 89.99, imagem: 'https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/moletom_misfits_logo_bomber_com_capuz.jpg'},
            {id: 3, nome: 'Tênis', valor: 150.99, imagem: 'https://acdn-us.mitiendanube.com/stores/003/259/692/products/1-f6eeaf6efa35dd381a17217667901846-1024-1024.png'}
        ])
    return(
        
        <View style = {styles.container}>
            
            {/* <View style = {styles.text}>
            Produtos
        </View>
        {produto.map((item) => 
        <Text>
            {item.nome} - R$ {item.valor}
        </Text>)}  */}
        <Text style={styles.text}>
            Produtos
        </Text>
        <FlatList
        data= {produto}
        renderItem={({item}) => (    
        <Card nome={item.nome}
        valor={item.valor}
        imagem={item.imagem}></Card>

        )}
        keyExtractor={item => item.id}></FlatList>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontFamily: 'Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif'

    },
    text: {
        fontSize: 30,
        color: '#003366'
    }
})