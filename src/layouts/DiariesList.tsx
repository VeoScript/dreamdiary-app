import React from 'react'
import MainModal from '../components/Modals/MainModal'
import Toast from '../components/Toast'
import moment from 'moment'
import tw from 'twrnc'
import { fonts } from '../styles/csssheet'
import { MaterialIcon } from '../components/Icons'
import { View, Text, TouchableOpacity } from 'react-native'

import { DiariesModel } from '../database/models'
import { getDBConnection, createTable, getDiary } from '../database/schema'

interface IProps {
  navigation: any
}

const DiariesList: React.FC<IProps> = ({ navigation }) => {

  // for modal states and data
  const [modalVisible, setModalVisible] = React.useState(false)
  const [modalData, setModalData] = React.useState([])

  // for toaster states
  const [visibleToast, setVisibleToast] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState('')

  // state for getting the data from the database
  const [diaries, setDiaries] = React.useState<DiariesModel[]>([])

  // function for data fetching
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
    setInterval(() => loadDataCallback(), 1000) // refresh data from database (for realtime function)
    setVisibleToast(false) // automatically hide the toast display
    return () => {
      setDiaries([])
    }
  }, [loadDataCallback, setDiaries, visibleToast])

  // get the archive diaries
  const getUnarchivesDiary = diaries.filter((diary) => diary.archive === 'false')

  return (
    <React.Fragment>
      <Toast
        visible={visibleToast}
        message={toastMessage}
      />
      <MainModal
        navigation={navigation}
        modalData={modalData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setVisibleToast={setVisibleToast}
        setToastMessage={setToastMessage}      
      />
      {(diaries.length === 0 || getUnarchivesDiary.length === 0 ) && (
        <View style={tw`flex flex-col items-center justify-center w-full h-[40rem]`}>
          <View style={tw`mb-3`}>
            <MaterialIcon name="auto-awesome" size="ultraLarge" color="#FB8500" />
          </View>
          <Text style={[tw`text-base text-[#023047] text-opacity-80 mb-3`, fonts.fontPoppinsLight]}>You don't have a diary yet.</Text>
          <TouchableOpacity
            style={tw`mr-3`}
            activeOpacity={0.8}
            onPress={() => {
              navigation.push('CreateDiary', { name: 'Jerome Villaruel' })
            }}
          >
            <Text style={[tw`p-3 rounded-md w-[15rem] text-center text-[#EAF5FB] bg-[#FB8500]`, fonts.fontPoppins]}>Create New</Text>
          </TouchableOpacity>
        </View>
      )}
      {diaries.map((diary: any, i: number) => (
        <React.Fragment key={i}>
          {diary.archive === 'false' && (
            <TouchableOpacity
              style={tw`flex flex-row items-center justify-between px-3 py-2 border-b border-[#BEE1F3] bg-[#DDEFF9]`}
              activeOpacity={0.8}
              onPress={() => {
                navigation.push('Diary', {
                  date: diary.date,
                  dream_type: diary.dream_type,
                  title: diary.title,
                  description: diary.description,
                  story: diary.story,
                  archive: diary.archive,
                  name: 'Jerome Villaruel'
                })
              }}
            >
              <View style={tw`flex flex-col w-[18rem]`}>
                <View style={tw`flex flex-row items-center`}>
                  <Text style={[tw`text-[20px] text-[#023047] mr-2`, fonts.fontPoppinsBold]}>{ diary.title }</Text>
                  {diary.dream_type === 'Normal Dream' && (
                    <View style={[tw`flex flex-row items-center justify-center w-auto px-2 py-1 rounded-md bg-[#8ECAE6]`]}>
                      <Text style={[tw`text-[10px] text-[#023047]`, fonts.fontPoppinsLight]}>{ diary.dream_type }</Text>
                    </View>
                  )}
                  {diary.dream_type === 'Day Dream' && (
                    <View style={[tw`flex flex-row items-center justify-center w-auto px-2 py-1 rounded-md bg-[#FFB703]`]}>
                      <Text style={[tw`text-[10px] text-[#023047]`, fonts.fontPoppinsLight]}>{ diary.dream_type }</Text>
                    </View>
                  )}
                  {diary.dream_type === 'Lucid Dream' && (
                    <View style={[tw`flex flex-row items-center justify-center w-auto px-2 py-1 rounded-md bg-[#023047]`]}>
                      <Text style={[tw`text-[10px] text-[#EAF5FB]`, fonts.fontPoppinsLight]}>{ diary.dream_type }</Text>
                    </View>
                  )}
                  {diary.dream_type === 'False Awakening Dream' && (
                    <View style={[tw`flex flex-row items-center justify-center w-auto px-2 py-1 rounded-md bg-[#FC3030]`]}>
                      <Text style={[tw`text-[10px] text-[#EAF5FB]`, fonts.fontPoppinsLight]}>{ diary.dream_type }</Text>
                    </View>
                  )}
                  {diary.dream_type === 'Nightmares' && (
                    <View style={[tw`flex flex-row items-center justify-center w-auto px-2 py-1 rounded-md bg-[#1E1E1E]`]}>
                      <Text style={[tw`text-[10px] text-[#EAF5FB]`, fonts.fontPoppinsLight]}>{ diary.dream_type }</Text>
                    </View>
                  )}
                </View>
                <Text
                  style={[tw`text-[13px] text-[#023047]`, fonts.fontPoppinsLight]}
                  numberOfLines={2}
                  ellipsizeMode='tail'
                >
                  { diary.description }
                </Text>
                <Text style={[tw`text-[10px] text-[#023047]`, fonts.fontPoppinsLight]}>{moment(new Date(diary.date)).fromNow()}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setModalVisible(true)
                  setModalData(diary)
                }}
              >
                <MaterialIcon name="more-horiz" size="large" color="#333" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default DiariesList