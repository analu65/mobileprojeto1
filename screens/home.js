import {ImageBackground,Text, View, StyleSheet, Image} from 'react-native';
export default function Test() {
    return (
        <View style={styles.container}>
            <ImageBackground
                        source={require('../assets/fundobranco.jpg')} style = {styles.imagebackground} >
                <View style={styles.pngcontainer}>
                <Image style={{
                    width:155,
                    height:155,
                }} source={require('../assets/logo-odonto-prime-sf.png')}/>
                </View>
            <Text style={{
            fontSize: 24,       
            color: '#003366',   
            fontWeight: 'bold',   
            textAlign: 'center',  
            marginBottom: 25, 
            letterSpacing: 1.5,  
            }}>
            Transformando Sorrisos
            </Text>
                <View style={styles.imagensrow1}>
                <Image style={styles.imgconsult} source={require('../assets/crianca.jpg')}/>
            </View>
            <Text style={styles.texto2}>Somos um consultório odontológico especializado em Odontologia Pediátrica. Atendemos crianças de 3 até 13 anos.</Text>
            <View style={styles.pngcontainer}>
                <Image style={{
                    width: 30,
                    height:40,
                    marginTop:35,
                }} source={require('../assets/pin2.png')}></Image>
            </View>
            <Text style={styles.texto1}>Bairro Michel - Criciúma (SC)</Text>
            <Text style={styles.texto2}>Agende já sua consulta!</Text>
        </ImageBackground>
        </View>

    );
}


const styles = StyleSheet.create({
    texto1: {
        fontSize:20,
        marginBottom:20,
        color:'#273640',
        fontWeight:'bold',
        textAlign:'center',
        margin:20
    },
    texto2:{
        fontSize:17,
        color:'#273640',
        fontWeight:'bold',
        textAlign:'center',

    },
    imgconsult:{
        width: 200,
        height:140,


    },
    imagensrow1: {
        flexDirection:'row',
        justifyContent: 'space-around',
        marginBottom: 25,

    },
    pngcontainer: {
        alignItems: 'center',
        justifyContent: 'center', 
    },
    imagebackground: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    container: {
        flex: 1,
    
        justifyContent: 'center',
        alignItems: 'center',
      },



});