import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/csssheet'
import { View, Text } from 'react-native'

interface IProps {
  title: string
}

const Header: React.FC<IProps> = ({ title }) => {
  return (
    <View style={tw`flex flex-row w-full px-3 py-5 bg-[#023047]`}>
      <Text style={[tw`text-[20px] text-[#EAF5FB]`, fonts.fontPoppinsBold]}>{ title }</Text>
    </View>
  )
}

export default Header