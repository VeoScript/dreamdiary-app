import React from 'react'
import moment from 'moment'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { MaterialIcon } from '../components/Icons'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { DiariesModel } from '../database/models'
import { getDBConnection, createTable, getDiary, deleteTable, saveDiary } from '../database/schema'

interface IProps {
  navigation: any
}

const DiariesList: React.FC<IProps> = ({ navigation }) => {

  const [diaries, setDiaries] = React.useState<DiariesModel[]>([])

  const loadDataCallback = React.useCallback(async () => {
    try {
      const db = await getDBConnection()
      await createTable(db)
      const storedDiaries = await getDiary(db)
      setDiaries(storedDiaries)
    } catch (error) {
      console.error(error)
    }
  }, [])

  React.useEffect(() => {
    setInterval(() => loadDataCallback(), 1000)
  }, [loadDataCallback])

  return (
    <React.Fragment>
      {diaries.map((diary: any, i: number) => (
        <TouchableOpacity
          key={i}
          style={tw`flex flex-row items-center justify-between px-3 py-2 bg-[#DDEFF9] border-b border-[#BEE1F3]`}
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('Diary', {
              date: diary.date,
              dream_type: diary.dream_type,
              title: diary.title,
              description: diary.description,
              story: diary.story,
              name: 'Jerome Villaruel'
            })
          }}
        >
          <View style={tw`flex flex-col w-[18rem]`}>
            <View style={tw`flex flex-row items-center`}>
              <Text style={[tw`text-[20px] text-[#023047] mr-2`, fonts.fontPoppinsBold]}>{ diary.title }</Text>
              <View style={[tw`flex flex-row items-center justify-center w-auto px-2 py-1 rounded-md bg-[#FFB703]`]}>
                <Text style={[tw`text-[10px] text-[#023047]`, fonts.fontPoppinsLight]}>{ diary.dream_type }</Text>
              </View>
            </View>
            <Text style={[tw`text-[16px] text-[#023047]`, fonts.fontPoppinsLight]}>{ diary.description }</Text>
            <Text style={[tw`text-[10px] text-[#023047]`, fonts.fontPoppinsLight]}>{moment(new Date(diary.date)).fromNow()}</Text>
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