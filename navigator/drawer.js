import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/login';
import Test from './screens/home';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}></Drawer.Screen>
        <Drawer.Screen name='Home' component={Test}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

