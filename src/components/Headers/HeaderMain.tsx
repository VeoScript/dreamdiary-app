import React from 'react'
import tw from 'twrnc'
import { MaterialIcon } from '../Icons'
import { fonts } from '../../styles/csssheet'
import { View, Text, Image, TouchableOpacity } from 'react-native'

interface IProps {
  title: string
  navigation: any
  hasImage?: Boolean
}

const Header: React.FC<IProps> = ({ title, navigation, hasImage }) => {
  return (
    <View style={tw`flex flex-row items-center justify-between w-full p-3 bg-[#023047]`}>
      <View style={tw`flex flex-row items-center`}>
        {hasImage && (
          <Image
            source={require('../../assets/images/logo.png')}
            style={tw`mr-2 w-[2rem] h-[2rem]`}
          />
        )}
        <Text style={[tw`mt-1 text-[18px] text-[#EAF5FB]`, fonts.fontPoppinsBold]}>{ title }</Text>
      </View>
      <View style={tw`flex flex-row mr-1`}>
        <TouchableOpacity
          style={tw`mr-2`}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('CreateDiary')
          }}
        >
          <MaterialIcon name="add" size="large" color="#EAF5FB" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`mr-2`}
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('Archive')
          }}
        >
          <MaterialIcon name="archive" size="large" color="#EAF5FB" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('About')
          }}
        >
          <MaterialIcon name="info-outline" size="large" color="#EAF5FB" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header