import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/csssheet'
import { MaterialIcon } from '../Icons'
import { View, Text, TouchableOpacity } from 'react-native'

interface IProps {
  title: string
  dream_type?: string
  navigation: any
}

const Header: React.FC<IProps> = ({ title, dream_type, navigation }) => {
  return (
    <View style={tw`flex flex-row items-center justify-between w-full px-2 py-3 bg-[#023047]`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity
          style={tw`mr-2`}
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <MaterialIcon name="chevron-left" size="large" color="#EAF5FB" />
        </TouchableOpacity>
        <Text style={[tw`text-[20px] text-[#EAF5FB]`, fonts.fontPoppinsBold]}>{ title }</Text>
      </View>
      {dream_type && (
        <View style={[tw`flex flex-row items-center justify-center w-auto px-2 py-1 rounded-md bg-[#FFB703]`]}>
          <Text style={[tw`text-[10px] text-[#023047]`, fonts.fontPoppinsLight]}>{ dream_type }</Text>
        </View>
      )}
    </View>
  )
}

export default Header