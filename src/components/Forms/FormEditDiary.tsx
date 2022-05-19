import React from 'react'
import tw from 'twrnc'
import { customStyle, fonts } from '../../styles/csssheet'
import { useForm, Controller } from 'react-hook-form'
import { Dropdown } from 'react-native-element-dropdown'
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'

import { getDBConnection, updateDiary } from '../../database/schema'

interface IProps {
  navigation: any
  diaryData: any
}

interface FormData {
  title: string
  description: string
  story: string
}

const FormEditDiary: React.FC<IProps> = ({ navigation, diaryData }) => {

  const [dreamTypeValue, setDreamTypeValue] = React.useState(diaryData.dream_type)
  const [dreamTypeError, setDreamTypeError] = React.useState(false)

  const dreamTypes = [
    { label: 'Normal Dream', value: 'Normal Dream' },
    { label: 'Day Dream', value: 'Day Dream' },
    { label: 'Lucid Dream', value: 'Lucid Dream' },
    { label: 'False Awakening Dream', value: 'False Awakening Dream' },
    { label: 'Nightmares', value: 'Nightmares' }
  ];

  const defaultValues = {
    title: diaryData.title,
    description: diaryData.description,
    story: diaryData.story
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues })

  const onCreateDiary = async (formData: FormData) => {
    const dream_type = dreamTypeValue
    const title = formData.title
    const description = formData.description
    const story = formData.story

    if (dreamTypeValue === null) return setDreamTypeError(true)

    const db = await getDBConnection()
    const id = parseInt(diaryData.id)

    await updateDiary(db, id, [{
      date: String(new Date()),
      dream_type: String(dream_type),
      title: String(title),
      description: String(description),
      story: String(story)
    }])

    navigation.navigate('Home')
  }

  return (
    <ScrollView>
      <View style={tw`flex flex-col p-3`}>
        <View style={tw`flex flex-col mb-2`}>
          <Text style={[tw`text-xl text-[#023047]`, fonts.fontPoppinsBold]}>Diary: { diaryData.title }</Text>
          <Text style={[tw`text-sm text-[#023047]`, fonts.fontPoppinsLight]}>Change anything about your dreams.</Text>
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Dropdown
            style={tw`p-2 rounded-md text-base border border-[#023047] bg-[#FFFFFF]`}
            placeholderStyle={[tw`text-base text-zinc-400`, fonts.fontPoppins]}
            selectedTextStyle={[tw`text-base text-[#023047]`, fonts.fontPoppins]}
            data={dreamTypes}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder="Type of Dream"
            value={dreamTypeValue}
            onChange={item => {
              setDreamTypeValue(item.value)
              setDreamTypeError(false)
            }}
          />
          {dreamTypeError && <Text style={tw`mt-1 text-xs text-red-500`}>Dream type is required.</Text>}
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Controller
            control={control}
            name="title"
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[tw`p-3 rounded-md text-base text-[#023047] border border-[#023047] bg-[#FFFFFF]`, fonts.fontPoppins]}
                placeholder="Title"
                keyboardType="default"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.title && <Text style={tw`mt-1 text-xs text-red-500`}>Title is required.</Text>}
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Controller
            control={control}
            name="description"
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[tw`px-3 rounded-md text-base text-[#023047] border border-[#023047] bg-[#FFFFFF]`, fonts.fontPoppins, customStyle.alignTop]}
                placeholder="Description"
                numberOfLines={4}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.description && <Text style={tw`mt-1 text-xs text-red-500`}>Description is required.</Text>}
        </View>
        <View style={tw`flex flex-col mb-2`}>
          <Controller
            control={control}
            name="story"
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[tw`p-3 rounded-md text-base text-[#023047] border border-[#023047] bg-[#FFFFFF]`, fonts.fontPoppins, customStyle.alignTop]}
                placeholder="Type here your story today..."
                numberOfLines={10}
                multiline={true}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.story && <Text style={tw`mt-1 text-xs text-red-500`}>Story is required.</Text>}
        </View>
        <TouchableOpacity
          style={tw`flex flex-row justify-center p-3 rounded-md bg-[#FB8500]`}
          onPress={handleSubmit(onCreateDiary)}
          activeOpacity={0.8}
        >
          <Text style={[tw`text-[#EAF5FB] text-base`, fonts.fontPoppins]}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default FormEditDiary