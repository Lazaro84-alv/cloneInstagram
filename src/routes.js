import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feed from './pages/Feed';

const Stack = createNativeStackNavigator();


export default function Routes(){
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
                name="Feed" 
                component={Feed} 
                options={{ 
                    title: 'Feed', 
                    headerTitleAlign: 'center', 
                    headerStyle: {
                        backgroundColor: '#F5F5F5',
                    },
                }} 
            />
          </Stack.Navigator>
      </NavigationContainer>
    )
}