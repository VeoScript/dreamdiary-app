import React from 'react'
import HeaderPage from '../components/Headers/HeaderPage'
import FormCreateDiary from '../components/Forms/FormCreateDiary'
import tw from 'twrnc'
import { SafeAreaView, View, Text } from 'react-native'

interface NavigationProps {
  navigation: any
  route: any
}

const CreateDiary: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderPage
        title="Create Diary"
        navigation={navigation}
      />
      <FormCreateDiary />
    </SafeAreaView>
  )
}

export default CreateDiary