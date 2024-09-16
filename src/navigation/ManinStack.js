import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../theme/ThemeProvider'; 
import {Screens} from '../navigation/index';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { theme } = useTheme(); // Access the theme

  return (
    <Stack.Navigator
      initialRouteName="Login"
      // screenOptions={{
      //   headerShown: false, 
      // }}
    >
      {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> */}
      <Stack.Screen name="Login" component={Screens.Login} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Screens.HomeScreen} />
      <Stack.Screen name="Details" component={Screens.DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
