import React from 'react'
import HeaderPage from '../components/Headers/HeaderPage'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { SafeAreaView, View, Text } from 'react-native'

interface NavigationProps {
  navigation: any
  route: any
}

const DiaryScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderPage
        title={route.params.title}
        navigation={navigation}
      />
      <View>
        <Text style={[tw`text-sm`, fonts.fontPoppins]}>This diary is created by {route.params.name}</Text>
        <Text style={[tw`text-sm`, fonts.fontPoppins]}>{route.params.description}</Text>
      </View>
    </SafeAreaView>
  )
}

export default DiaryScreen