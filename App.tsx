import React from 'react'
import HomeScreen from './src/pages/HomeScreen'
import AboutScreen from './src/pages/AboutScreen'
import DiaryScreen from './src/pages/DiaryScreen'
import CreateDiaryScreen from './src/pages/CreateDiaryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Diary"
          component={DiaryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateDiary"
          component={CreateDiaryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App