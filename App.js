import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Test from './screens/home';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Login' screenOptions={{
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
        <BottomTab.Screen name='Login' component={Login} options={{tabBarIcon: () => (<MaterialCommunityIcons name="login" size={22} color="#003366" />)}}></BottomTab.Screen>
        <BottomTab.Screen name='Home' component={Test} options={{tabBarIcon: () => (<MaterialCommunityIcons name="home" size={22} color="#003366" />)}}></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>

  );
}
