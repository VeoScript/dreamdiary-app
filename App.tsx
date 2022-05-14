import React from 'react'
import Welcome from './src/pages/Welcome'
import tw from 'twrnc'
import { fonts } from './src/styles/csssheet'
import { SafeAreaView, View } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={tw`flex items-center justify-center w-full h-full`}>
      <View>
        <Welcome />
      </View>
    </SafeAreaView>
  )
}

export default App