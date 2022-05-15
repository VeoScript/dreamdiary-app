import React from 'react'
import { View, Text } from 'react-native'

interface NavigationProps {
  navigation: any
  route: any
}

const DiaryScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>This diary is created by {route.params.name}</Text>
    </View>
  )
}

export default DiaryScreen