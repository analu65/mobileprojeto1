import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import Card from "../components/card";
import { collection, getDocs } from "firebase/firestore";
import { banco } from "../controller";
import { useCarrinho } from "../components/ProviderCart";
export default function Produto({navigation}) {
    const [produto, setProduto] = useState([]);
    const{adicionarProduto} = useCarrinho('');
    
    useEffect(() => {
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(banco, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data()});
                });
                setProduto(lista);
            } catch (error) {
                console.log("Erro ao buscar produtos.", error);
            }
        }
        carregarProdutos();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Produtos
            </Text>
            <FlatList
                data={produto}
                renderItem={({item}) => (
                    <Card 
                        nome={item.nome}
                        valor={item.valor}
                        imagem={item.imagem}
                        comprar={() => {
                            adicionarProduto(item);
                            navigation.navigate('Carrinho')
                        }}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
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
        color: '#003366',
        fontWeight: 'bold',
        letterSpacing: 1.0
    }
});