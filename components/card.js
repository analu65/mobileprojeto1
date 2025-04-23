import { View, Text, StyleSheet, Image } from "react-native";

export default function Card({nome, valor, imagem}){
    return(
            <View style = {styles.card}>
                    <Text style = {styles.text2}>{nome}</Text>
                    <Image styles={styles.img} source={{uri: imagem}}></Image>
                    <Text style = {styles.text2}>R$ {valor}</Text>
                    </View>
    )
}
const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#95b8db',
        borderRadius: 8,
        alignItems: 'center'


    },
    text2: {
        fontSize: 17,
        color: '#414141',
        },
    img: {
        height: 100,
        width: 100
    }
})