
import {Text, View, StyleSheet, Image} from 'react-native';

export function Profile(){
    return(
        <View style={styles.profile}> 
            <Text>Oi pessoal profile!</Text>
            <Image style={styles.img} source={{uri:'https://media.tenor.com/Fhms4-y8QDgAAAAM/pibble-pibble-dog.gif'}}/>
        </View>
    )
}

export function Favorites(){
    return(
        <View style={styles.favorites}> 
            <Text>Favoritos</Text>
            <Image style={styles.img} source={require('../assets/gmail-pibble.gif')}/>
        </View>
    )
}

export default function Gallery(){
    return(
        <View style={styles.container}>
        <Text>Gallery</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center'
    },
    profile:{
      flex: 1,
      backgroundColor: 'blue',
      alignItems:'center',
      justifyContent: 'space-evenly'
  
    },
    favorites: {
      flex: 1,
      backgroundColor: 'blue'
    },
    img: {
        width: 200,
        height: 200,
    }
  
  
  })