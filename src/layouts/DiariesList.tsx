import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { MaterialIcon } from '../components/Icons'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { diaries } from '../mock/data'

interface IProps {
  navigation: any
}

const DiariesList: React.FC<IProps> = ({ navigation }) => {
  return (
    <React.Fragment>
      {diaries.map((diary: any, i: number) => (
        <TouchableOpacity
          key={i}
          style={tw`flex flex-row items-center justify-between px-3 py-2 bg-[#8ECAE6] border-b border-[#219EBC]`}
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('Diary', {
              title: diary.title,
              description: diary.description,
              name: 'Jerome Villaruel'
            })
          }}
        >
          <View style={tw`flex flex-col w-[18rem]`}>
            <Text style={[tw`text-[18px] text-[#023047]`, fonts.fontPoppinsBold]}>{ diary.title }</Text>
            <Text style={[tw`text-[14px] text-[#023047]`, fonts.fontPoppinsLight]}>{ diary.description }</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              Alert.alert('You clicked the More Button')
            }}
          >
            <MaterialIcon name="more-horiz" size="large" color="#333" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </React.Fragment>
  )
}

export default DiariesList