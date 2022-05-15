import React from 'react'
import HeaderMain from '../components/Headers/HeaderMain'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { MaterialIcon } from '../components/Icons'
import { SafeAreaView, ScrollView, View, Text, Pressable, Alert } from 'react-native'

import { diaries } from '../mock/data'

interface NavigationProps {
  navigation: any
}

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex flex-col h-full`}>
      <HeaderMain
        title="Dream Diary"
      />
      <ScrollView>
        {diaries.map((diary: any, i: number) => (
          <Pressable
            key={i}
            style={tw`flex flex-row items-center justify-between px-3 py-2 bg-[#8ECAE6] border-b border-[#219EBC]`}
            onPress={() => {
              navigation.push('Diary', {
                title: diary.title,
                name: 'Jerome Villaruel'
              })
            }}
          >
            <View style={tw`flex flex-col w-[18rem]`}>
              <Text style={[tw`text-[18px] text-[#023047]`, fonts.fontPoppinsBold]}>{ diary.title }</Text>
              <Text style={[tw`text-[14px] text-[#023047]`, fonts.fontPoppinsLight]}>{ diary.description }</Text>
            </View>
            <Pressable
              onPress={() => {
                Alert.alert('You clicked the More Button')
              }}
            >
              <MaterialIcon name="more-horiz" size="large" color="#333" />
            </Pressable>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen