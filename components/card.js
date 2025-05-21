import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function Card({nome, valor, imagem, comprar}) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{nome}</Text>
      <Image 
        style={styles.img} 
        source={{uri: imagem}}
        resizeMode="cover"
      />
      <Text style={styles.text}>R$ {valor}</Text>
      <Button title="Comprar" onPress={comprar} color="#1d65ae"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: '#95b8db',
    borderRadius: 8,
    alignItems: 'center',
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 17,
    color: '#414141',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 4,
    marginVertical: 10,
  }
});