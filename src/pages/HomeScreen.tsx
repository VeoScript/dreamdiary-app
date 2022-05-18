import React from 'react'
import HeaderMain from '../components/Headers/HeaderMain'
import DiariesList from '../layouts/DiariesList'
import tw from 'twrnc'
import { SafeAreaView, ScrollView } from 'react-native'

interface NavigationProps {
  navigation: any
}

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderMain
        title="DreamDiary"
        hasImage={true}
        navigation={navigation}
      />
      <ScrollView>
        <DiariesList
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen