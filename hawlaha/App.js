import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "HomeScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}  
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: "#222f3e"
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TaskFormScreen")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })}
          />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App