import React from 'react'
import { Image, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import View from '../atoms/View.atom';
import Text from '../atoms/Text.atom';
import Tailwind from '../../libs/tailwind/Tailwind.lib';


const ProfileAndNotification = () => {
    return (
        <View className="w-[100px] h-11 p-1 bg-blue--tertiary rounded-[100px] flex-row items-center justify-between">
            <TouchableOpacity>
                <Image source={require("../../assets/notification.png")} style={Tailwind`w-[18px] h-5 ml-2`} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../../assets/avatar.png")} style={Tailwind`w-9 h-9`} />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileAndNotification