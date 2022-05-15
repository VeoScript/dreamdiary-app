import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/csssheet'
import { MaterialIcon } from '../Icons'
import { View, Text, Pressable } from 'react-native'

interface IProps {
  title: string
  navigation: any
}

const Header: React.FC<IProps> = ({ title, navigation }) => {
  return (
    <View style={tw`flex flex-row items-center w-full px-3 py-5 bg-[#023047]`}>
      <Pressable
        style={tw`mr-3`}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <MaterialIcon name="chevron-left" size="extraLarge" color="#EAF5FB" />
      </Pressable>
      <Text style={[tw`text-[20px] text-[#EAF5FB]`, fonts.fontPoppinsBold]}>{ title }</Text>
    </View>
  )
}

export default Header