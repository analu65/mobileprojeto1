import { Text, View, StyleSheet, Image } from 'react-native';

export default function Test() {
  return (
    <View style={styles.container}>
      
        <Text style={styles.texto1}>lula molusco e bob esponja</Text>

        <View style={styles.imagens1}>
        <Image style={styles.img}
          source={require('../assets/molusco.jpg')}
        />

        <Image style={styles.img}
          source={require('../assets/bobesponja.jpg')}
        />
        
      </View>
      <Text style={styles.texto2}> sirigueijo e bob </Text>

      <View style={styles.imagens1}>
        <Image style={styles.img}
          source={require('../assets/sirigueijo.jpg')}
        />

        <Image style={styles.img}
          source={require('../assets/bobgif.gif')}
        />

      </View>
      <text style={styles.texto3}> créditos: ana lucia</text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50, 
  },
  imagens1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
  },
  texto1: {
    marginBottom: 20,
    fontSize:20,
  },
  texto2: {
    textAlign:'right',
    marginBottom:20,
    fontSize:20
  },
  texto3: {
    textAlign: 'center',
    fontSize:20
  }

});