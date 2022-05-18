import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/csssheet'
import { MaterialIcon } from '../../components/Icons'
import { View, Modal, Pressable, TouchableOpacity, Text } from 'react-native'

import { getDBConnection, archiveDiary, unArchiveDiary, deleteDiary } from '../../database/schema'

interface IProps {
  navigation: any
  modalData: any
  modalVisible: any
  setModalVisible: any
  setVisibleToast: any
  setToastMessage: any
}

const MainModal: React.FC<IProps> = ({ navigation, modalData, modalVisible, setModalVisible, setVisibleToast, setToastMessage }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false)
      }}
    >
      <View style={tw`flex flex-row items-center justify-center h-full bg-[#023047] bg-opacity-50`}>
        <View style={tw`flex flex-col items-center w-[20rem] rounded-xl overflow-hidden bg-[#BEE1F3]`}>
          <View style={tw`flex flex-row items-center justify-between px-5 py-3`}>
            <Text style={[tw`w-full text-left text-xl text-[#023047]`, fonts.fontPoppinsBold]}>{ modalData.title }</Text>
            <Pressable
              onPress={() => setModalVisible(false)}
            >
              <MaterialIcon name="close" size="medium" color="#219EBC" />
            </Pressable>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`w-full p-4 border-t border-b border-[#8ECAE6] bg-[#DDEFF9]`}
            onPress={() => {
              setModalVisible(false)
              navigation.navigate('EditDiary', modalData)
            }}
          >
            <Text style={[tw`text-base text-[#023047]`, fonts.fontPoppins]}>Edit</Text>
          </TouchableOpacity>
          {modalData.archive === 'false' && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`w-full p-4 border-b border-[#8ECAE6] bg-[#DDEFF9]`}
              onPress={async () => {
                setToastMessage('Saved to archive')
                setModalVisible(false)
                setVisibleToast(true)
                const id = modalData.id
                const db = await getDBConnection()
                await archiveDiary(db, id)
              }}
            >
              <Text style={[tw`text-base text-[#023047]`, fonts.fontPoppins]}>Archive</Text>
            </TouchableOpacity>
          )}
          {modalData.archive === 'true' && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`w-full p-4 border-b border-[#8ECAE6] bg-[#DDEFF9]`}
              onPress={async () => {
                setToastMessage('Remove to archive')
                setModalVisible(false)
                setVisibleToast(true)
                const id = modalData.id
                const db = await getDBConnection()
                await unArchiveDiary(db, id)
                navigation.push('Home')
              }}
            >
              <Text style={[tw`text-base text-[#023047]`, fonts.fontPoppins]}>Unarchive</Text>
            </TouchableOpacity>
          )}
          <View style={tw`flex flex-row items-center justify-between px-4 py-2 bg-[#FFFFFF]`}>
            <Text style={[tw`w-full text-left text-xs text-[#023047]`, fonts.fontPoppinsLight]}>
              Delete permanently?
              This cannot be undone.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`w-full p-4 border-b border-[#FD5757] bg-[#FD8A8A]`}
            onPress={async () => {
              setToastMessage('Deleted Successfully')
              setModalVisible(false)
              const id = modalData.id
              const db = await getDBConnection()
              await deleteDiary(db, id)
            }}
          >
            <Text style={[tw`text-base text-[#023047]`, fonts.fontPoppins]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default MainModal