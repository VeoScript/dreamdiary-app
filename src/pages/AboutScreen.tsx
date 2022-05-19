import React from 'react'
import HeaderPage from '../components/Headers/HeaderPage'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native'

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
      <ScrollView>
        <View style={tw`flex flex-col items-center w-full p-5`}>
          <Image
            source={require('../assets/images/logo.png')}
            style={tw`w-[11rem] h-[11rem]`}
          />
          <Text style={[tw`text-3xl p-3 text-[#023047]`, fonts.fontPoppins]}>
            DreamDiary®
          </Text>
        </View>
        <View style={tw`flex flex-col items-center w-full -mt-5 p-5`}>
          <View style={tw`flex flex-col items-center mb-3`}>
            <Text style={[tw`text-2xl text-[#FB8500] uppercase`, fonts.fontPoppinsBlack]}>System</Text>
            <Text style={[tw`text-[16px] text-[#023047]`, fonts.fontPoppinsSemiBold]}>
              Apps & Data
            </Text>
          </View>
          <View style={tw`flex flex-col items-center`}>
            <Text style={[tw`text-center text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              DreamDiary® is a personal diary of your dreams so that your dreams will always be remembered and help your mental health.
            </Text>
            <Text style={[tw`text-center text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Your dreams are captured in your life.
              Write your dreams in one place so that you won't forget.
            </Text>
            <Text style={[tw`text-center text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Your data will be stored on your local devices. Be careful about deleting this app data.
              It will cause permanent loss of your diaries.
            </Text>
          </View>
        </View>
        <View style={tw`flex flex-col items-center w-full -mt-5 px-5 pb-5`}>
          <View style={tw`flex flex-col items-center p-5`}>
            <Text style={[tw`text-2xl text-[#FB8500] uppercase`, fonts.fontPoppinsBlack]}>Developer</Text>
            <Text style={[tw`text-[16px] text-[#023047]`, fonts.fontPoppinsSemiBold]}>
              Designed & Developed
            </Text>
          </View>
          <View style={tw`flex flex-col items-center`}>
            <Text style={[tw`text-center text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              This app is dedicated to the person who has depression or anxiety.
              I will continue to add some features to this app for a better user experience.
            </Text>
            <Text style={[tw`text-center text-base text-[#333333] mb-2`, fonts.fontPoppins]}>
              Proudly created with ❤️ by VEOSCRIPT.
            </Text>
            <Text style={[tw`text-center text-xs text-zinc-500 mt-3`, fonts.fontPoppinsLight]}>
              DreamDiary®. All rights reserved {new Date().getFullYear()}.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutScreen
