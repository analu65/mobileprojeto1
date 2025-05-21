import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Test from './screens/home';
import Feed from './screens/feed';
import Counter from './screens/counter';
import { ProviderCart } from './components/ProviderCart';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import Product from './screens/Product';
import Produto from './screens/Product';
import Cadastro from './screens/cadastro';
import CadastroProduto from './screens/cadastroprod';
import Carrinho from './screens/carrinho';


function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
  <BottomTab.Navigator screenOptions={{
    animation: 'shift',
    tabBarActiveTintColor: '#003366',
    tabBarInactiveTintColor:'#003366',
    tabBarInactiveBackgroundColor: '#ffffff',
    tabBarActiveBackgroundColor: '#d3d3d3',
    headerStyle: {
      backgroundColor:'#003366'
    },
    headerTintColor: '#ffffff',
    //headerTitleAlign: 'center'

    //tint é letra tabbarinactivetintcolor
  }}>
    <BottomTab.Screen name='Home' component={Test} options={{tabBarIcon: () => (<MaterialCommunityIcons name="home" size={22} color="#003366" />)}}></BottomTab.Screen>
    <BottomTab.Screen name='Feed' component={Feed} options={{tabBarIcon: () => (<MaterialCommunityIcons name="tooth-outline" size={22} color="#003366" />)}}></BottomTab.Screen>
    <BottomTab.Screen name='Carrinho' component={Carrinho} options={{tabBarIcon: () => (<MaterialCommunityIcons name="cart-variant" size={24} color="#003366" />)}}></BottomTab.Screen>
    <BottomTab.Screen name='Produtos' component={Produto} options={{tabBarIcon: () => (<MaterialCommunityIcons name="tshirt-crew-outline" size={25} color="#003366" />)}}></BottomTab.Screen>
    <BottomTab.Screen name='Cadastro de Produto' component={CadastroProduto} options={{tabBarIcon: () => (<MaterialCommunityIcons name="card-account-details-outline" size={22} color="#003366" />)}}></BottomTab.Screen>
  </BottomTab.Navigator>
  )
}


export default function App() {
  const Stack = createStackNavigator();
  return (
    <ProviderCart>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
          <Stack.Screen name='Cadastro' component={Cadastro}></Stack.Screen>
          <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderCart>

  );
}
