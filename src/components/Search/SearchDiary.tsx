import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/csssheet'
import { MaterialIcon } from '../Icons'
import { View, TextInput } from 'react-native'

interface IProps {
  searchTerm: any
  setSearchTerm: any
}

const SearchDiary: React.FC<IProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <View style={tw`flex flex-row items-center w-full px-3 bg-[#FFFFFF]`}>
      <MaterialIcon name="search" size="extraLarge" color="#DADCDA" />
      <TextInput
        style={[tw`w-full text-base text-[#023047] bg-[#FFFFFF]`, fonts.fontPoppins]}
        placeholder="Search"
        keyboardType="default"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  )
}

export default SearchDiary