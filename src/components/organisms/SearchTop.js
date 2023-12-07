import React from 'react'
import { Image, TextInput, Dimensions } from 'react-native';
import ProfileAndNotification from '../molecules/ProfileAndNotification';
import View from '../atoms/View.atom';
import Text from '../atoms/Text.atom';
import Tailwind from '../../libs/tailwind/Tailwind.lib';

const SearchTop = () => {
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height
    return (
        <View className="bg-blue--primary py-4 px-[18px]">
            <View className=" flex-row items-center justify-between">
                <Image source={require('../../assets/logo2.png')} style={Tailwind`w-24 h-9 `} />
                <ProfileAndNotification />
            </View>
            <View className="flex-row items-center justify-between mt-3">
                <Text className="font-semibold text-base text-white">Find events as easily as{`\n`}you snap your fingers</Text>
                <View className="flex-row items-center">
                    <Image source={require('../../assets/location.png')} style={Tailwind`w-4 h-4 mr-2`} />
                    <Text className="text-xs font-normal text-white">Location{`\n`}<Text className="text-sm	font-medium text-white">London, UK</Text></Text>
                </View>
            </View>
            <View className="w-full h-[50px] bg-blue--tertiary rounded-lg px-3.5 py-3.5 mt-3 flex-row items-center jusify-between">
                <TextInput style={Tailwind`w-${width * 0.185} h-${height * 0.02} mr-2 text-sm font-normal text-white`} placeholder='Search here' placeholderTextColor={"#64748B"} />
                <Image source={require('../../assets/search.png')} style={Tailwind`w-5 h-5`} />
            </View>
        </View>
    )
}

export default SearchTop