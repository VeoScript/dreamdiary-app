import React from 'react'
import HeaderPage from '../components/Headers/HeaderPage'
import DiaryContent from '../layouts/DiaryContent'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native'

interface NavigationProps {
  navigation: any
  route: any
}

const DiaryScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderPage
        title={route.params.title}
        dream_type={route.params.dream_type}
        navigation={navigation}
        diaryData={route.params}
      />
      <DiaryContent
        route={route}
      />
    </SafeAreaView>
  )
}

export default DiaryScreen