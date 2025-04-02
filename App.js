import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Test from './screens/home';
import Feed from './screens/feed';
import Counter from './screens/counter';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
  <BottomTab.Navigator screenOptions={{
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
    <BottomTab.Screen name='Counter' component={Counter} options={{tabBarIcon: () => (<MaterialCommunityIcons name="counter" size={22} color="#003366" />)}}></BottomTab.Screen>
  </BottomTab.Navigator>
  )
}


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    

  );
}
