import React from 'react'
import HeaderPage from '../components/Headers/HeaderPage'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

interface NavigationProps {
  navigation: any
}

const AboutScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderPage
        title="About"
        navigation={navigation}
      />
      <ScrollView style={tw`p-5`}>
        <View style={tw`mb-10`}>
          <View style={tw`flex flex-col items-start mb-3`}>
            <Text style={[tw`text-2xl text-[#FB8500] uppercase`, fonts.fontPoppinsBlack]}>System</Text>
            <Text style={[tw`text-[16px] text-[#023047]`, fonts.fontPoppinsSemiBold]}>
              Subtitle
            </Text>
          </View>
          <View style={tw`flex flex-col items-start`}>
            <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Text Here
            </Text>
            <Text style={[tw`text-xs text-zinc-500`, fonts.fontPoppinsLight]}>{new Date().getFullYear()}</Text>
          </View>
        </View>
        <View>
          <View style={tw`flex flex-col items-start mb-3`}>
            <Text style={[tw`text-2xl text-[#FB8500] uppercase`, fonts.fontPoppinsBlack]}>Developer</Text>
            <Text style={[tw`text-[16px] text-[#023047]`, fonts.fontPoppinsSemiBold]}>
              Subtitle
            </Text>
          </View>
          <View style={tw`flex flex-col items-start`}>
            <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Text Here
            </Text>
            <Text style={[tw`text-xs text-zinc-500`, fonts.fontPoppinsLight]}>{new Date().getFullYear()}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutScreen