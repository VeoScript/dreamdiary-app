import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { View, Text, Pressable } from 'react-native'

interface NavigationProps {
  navigation: any
}

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={tw`flex flex-col items-center justify-center h-full`}>
      <View>
        <Text style={[tw`-mb-3`, fonts.fontPoppinsLight]}>
          <Text style={[tw`text-zinc-600`, fonts.fontPoppinsMedium]}>VEOSCRIPT</Text> Presents
        </Text>
        <Text style={[tw`text-[3rem] tracking-tight text-orange-500`, fonts.fontPacifico]}>Dream Diary</Text>
      </View>
      <Pressable
        style={tw`w-[18rem] mt-2 p-3 rounded-lg bg-orange-500`}
        onPress={() => {
          navigation.navigate('Diary', { name: 'Jerome Villaruel' })
        }}
      >
        <Text style={[tw`text-white text-[16px] text-center hover:bg-opacity-50`, fonts.fontPoppins]}>Start</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen