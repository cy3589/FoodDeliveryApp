import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Ing from '@/screens/Ing';
import Complete from '@/screens/Complete';

const Stack = createNativeStackNavigator();

const Delivery = () => (
  <Stack.Navigator initialRouteName="Ing">
    <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
    <Stack.Screen
      name="Complete"
      component={Complete}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Delivery;
