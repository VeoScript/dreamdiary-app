import React from 'react'
import HeaderPage from '../components/Headers/HeaderPage'
import DiariesArchive from '../layouts/DiariesArchive'
import tw from 'twrnc'
import { SafeAreaView, ScrollView } from 'react-native'

interface NavigationProps {
  navigation: any
}

const ArchiveScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderPage
        title="Archive Diaries"
        navigation={navigation}
      />
      <ScrollView>
        <DiariesArchive
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ArchiveScreen