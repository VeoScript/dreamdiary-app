import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/csssheet'
import { MaterialIcon } from '../Icons'
import { View, Text, TouchableOpacity } from 'react-native'

interface IProps {
  title: string
  navigation: any
}

const Header: React.FC<IProps> = ({ title, navigation }) => {
  return (
    <View style={tw`flex flex-row items-center w-full px-2 py-3 bg-[#023047]`}>
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
  )
}

export default Header