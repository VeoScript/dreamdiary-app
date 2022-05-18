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
        <View style={tw`mb-5`}>
          <View style={tw`flex flex-col items-start mb-3`}>
            <Text style={[tw`text-2xl text-[#FB8500] uppercase`, fonts.fontPoppinsBlack]}>System</Text>
            <Text style={[tw`text-[16px] text-[#023047]`, fonts.fontPoppinsSemiBold]}>
              Apps & Data
            </Text>
          </View>
          <View style={tw`flex flex-col items-start`}>
            <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              DreamDiary® is a personal diary of your dream, so you can remember all your dreams, and to help your mental health.
              Your dreams are captured your life.
            </Text>
            <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Write your dreams in one place, so you won't forget.
            </Text>
            <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Your data will stored to your local devices. Be careful for deleting this app data.
              It will cause permanent loss of your diaries.
            </Text>
          </View>
        </View>
        <View>
          <View style={tw`flex flex-col items-start mb-3`}>
            <Text style={[tw`text-2xl text-[#FB8500] uppercase`, fonts.fontPoppinsBlack]}>Developer</Text>
            <Text style={[tw`text-[16px] text-[#023047]`, fonts.fontPoppinsSemiBold]}>
              Designed & Developed
            </Text>
          </View>
          <View style={tw`flex flex-col items-start`}>
            <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              This app is dedicated to the person who has depressions or anxiety.
              I will continue to add some features to this app for the better user experience.
            </Text>
            <Text style={[tw`text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Proudly created with ❤️ by VEOSCRIPT.
            </Text>
            <Text style={[tw`text-xs text-zinc-500 mt-3`, fonts.fontPoppinsLight]}>
              DreamDiary®. All rights reserved {new Date().getFullYear()}.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutScreen