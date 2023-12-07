import React, { useState } from "react"
import { Text, TouchableOpacity, View, Image, Dimensions } from "react-native"
import Tailwind from "../../libs/tailwind/Tailwind.lib"
import { HomeIcon, CurrencyDollarIcon, CreditCardIcon, UserIcon } from "react-native-heroicons/outline"
import { useRoute, useNavigation } from "@react-navigation/native"


const BottomNavigation = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const height = Dimensions.get('window').height;

    return (
        <View style={[{ height: 65, marginTop: height - 66 }, Tailwind`bg-white w-full flex flex-row items-center justify-between px-6 absolute z-50 shadow shadow-sm`]}>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "Home" ? null : navigation.replace("Home")}>
                <Image source={require('../../assets/home.png')} style={Tailwind`w-5 h-5`} resizeMethod="resize" resizeMode="contain" />
                <Text style={Tailwind`${route.name === "Home" ? "text-blue--secondary" : "text-gray"} font-normal text-xs mt-1`}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "Explore" ? null : navigation.replace("Explore")}>
                <Image source={require('../../assets/explore.png')} style={Tailwind`w-5 h-5`} resizeMethod="resize" resizeMode="contain" />
                <Text style={Tailwind`${route.name === "Explore" ? "text-blue--secondary" : "text-gray"} font-normal text-xs mt-1`}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "Ticket" ? null : navigation.replace("Ticket")}>
                <Image source={require('../../assets/ticket.png')} style={Tailwind`w-5 h-5`} resizeMethod="resize" resizeMode="contain" />
                <Text style={Tailwind`${route.name === "Ticket" ? "text-blue--secondary" : "text-gray"} font-normal text-xs mt-1`}>Ticket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "Profile" ? null : navigation.replace("Profile")}>
                <Image source={require('../../assets/profile.png')} style={Tailwind`w-5 h-5`} resizeMethod="resize" resizeMode="contain" />
                <Text style={Tailwind`${route.name === "Profile" ? "text-blue--secondary" : "text-gray"} font-normal text-xs mt-1`}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavigation