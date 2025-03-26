import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Test from './screens/home';

export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Login' component={Login}></BottomTab.Screen>
        <BottomTab.Screen name='Home' component={Test}></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>

  );
}

