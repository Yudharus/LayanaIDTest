import React from 'react'
import { Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Tailwind from '../../libs/tailwind/Tailwind.lib'
import View from '../atoms/View.atom'
import Text from '../atoms/Text.atom'

const CardSearch = () => {
    const width = Dimensions.get("window").width

    const data = [
        {
            id: 1,
            image: require('../../assets/taylorswift.png'),
            title: "Swiftogeddon - The Taylor Swift Club Night",
            date: "Nov 17, 2023",
            people: "2300 people attended"
        },
        {
            id: 2,
            image: require('../../assets/circus.png'),
            title: "Circus Mansion & After Party 🎪",
            date: "Nov 03 , 2023",
            people: "250 people attended"
        },
        {
            id: 3,
            image: require('../../assets/figma.png'),
            title: "Figma Config: Meetup & Watch Party 🍿",
            date: "Oct 28, 2023",
            people: "1200 designers attended"
        },
    ]

    const renderData = ({ item }) => {
        return (
            <View className="w-full h-32 rounded-2xl bg-white shadow-sm p-3 flex-row mb-4">
                <View className="bg-black rounded-lg w-[100px] h-[100px] mr-2.5">
                    <Image source={item.image} style={Tailwind`w-full h-full`} resizeMethod='resize' resizeMode='contain' />
                </View>
                <View>
                    <Text className={`font-semibold text-base text-black--primary mt-1 w-${width * 0.13}`} numberOfLines={2}>{item.title} </Text>
                    <View className="flex-row items-center  mt-2">
                        <Image source={require('../../assets/calendar2.png')} style={Tailwind`w-3.5 h-3.5 mr-2`} />
                        <Text className={`text-xs font-normal text-gray`}>{item.date}</Text>
                    </View>
                    <View className="flex-row items-center  mt-2">
                        <Image source={require('../../assets/smile.png')} style={Tailwind`w-3.5 h-3.5 mr-2`} />
                        <Text className={`text-xs font-normal text-gray`}>{item.people}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderData}
            />
            <TouchableOpacity style={Tailwind`items-center justify-center`}>
                <View className={`flex-row items-center justify-center rounded-lg border-2 border-blue--secondary w-${width * 0.12} py-3`}>
                    <Text className="text-base font-bold text-blue--secondary">Explore More</Text>
                    <Image source={require('../../assets/more.png')} style={Tailwind`w-5 h-5 ml-2`} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardSearch