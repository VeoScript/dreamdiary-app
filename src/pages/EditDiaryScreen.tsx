import React from 'react'
import HeaderPage from '../components/Headers/HeaderPage'
import FormEditDiary from '../components/Forms/FormEditDiary'
import tw from 'twrnc'
import { SafeAreaView, View, Text } from 'react-native'

interface NavigationProps {
  navigation: any
  route: any
}

const EditDiaryScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderPage
        title="Edit Diary"
        navigation={navigation}
      />
      <FormEditDiary
        navigation={navigation}
        diaryData={route.params}
      />
    </SafeAreaView>
  )
}

export default EditDiaryScreen