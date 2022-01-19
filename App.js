import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import DetailScreen from './screens/DetailsScreen';
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initiolRoutename="Home">
        <Stack.Screen name="Home" component={HomeScreen}
                      options={{title:'홈',
                    headerStyle:{backgroundColor:'red'}}}
                      ></Stack.Screen>
        <Stack.Screen name="detail" component={DetailScreen}
                      ></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 