import React from 'react'
import HomeScreen from './src/pages/HomeScreen'
import AboutScreen from './src/pages/AboutScreen'
import ArchiveScreen from './src/pages/ArchiveScreen'
import DiaryScreen from './src/pages/DiaryScreen'
import CreateDiaryScreen from './src/pages/CreateDiaryScreen'
import EditDiaryScreen from './src/pages/EditDiaryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#023047"
        barStyle="light-content"
      />
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
          name="Archive"
          component={ArchiveScreen}
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
        <Stack.Screen
          name="EditDiary"
          component={EditDiaryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App