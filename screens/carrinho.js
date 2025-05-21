import { View, Text, Image, FlatList } from "react-native-web";
import { StyleSheet } from "react-native";
import { useCarrinho } from "../components/ProviderCart";

export default function Carrinho() {
  const { carrinho } = useCarrinho();
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Carrinho
      </Text>
      <FlatList 
        data={carrinho}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.nome}</Text>
            <Image
              style={styles.img}
              source={{ uri: item.imagem }}
              resizeMode="cover"
            />
            <Text style={styles.text}>R$ {item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  texto: {
    fontSize: 30,
    color: '#003366',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 1.0,
  },
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