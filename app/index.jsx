import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../components/Auth';

const Stack = createNativeStackNavigator();

function App() {
  return (

      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
 
  );
}

export default App;
