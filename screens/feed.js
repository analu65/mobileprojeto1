
import {View, Text, Image, Button, StyleSheet} from 'react-native';
export default function Feed() {
    return (
        <View style={styles.container}>

            <View style={styles.textotitulo}>
                FEED
            </View>
            <Text>
                Notícias 
            </Text>
            <Image source={{uri: 'https://fly.metroimg.com/upload/q_85,w_1200/https://uploads.metroimg.com/wp-content/uploads/2024/04/26143641/cachorro-Snowball.jpg'}}></Image>
            <View style={styles.buttoncontainer}>
                <Button 
                        title="Saiba Mais"
                        color="#003366" 
                        />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        fontFamily:'Helvetica',
        alignItems:'center'
    },
    buttoncontainer: {
        marginHorizontal: 80
    },
    textotitulo: {
            fontSize: 30,       
            color: '#003366',   
            fontWeight: 'bold',
    },
});