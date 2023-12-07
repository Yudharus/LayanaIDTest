import React from 'react'
import { Image, Dimensions, FlatList } from 'react-native';
import Tailwind from '../../libs/tailwind/Tailwind.lib'
import View from '../atoms/View.atom'
import Text from '../atoms/Text.atom'

const CardEvent = () => {
    const width = Dimensions.get("window").width

    const data = [
        {
            id: 1,
            image: require('../../assets/rock.png'),
            type: "Live Event",
            title: "Rocktober Music Fest 2023",
            location: "Wembley Stadium, London",
            date: "Oct 04",
            time: "04.00 PM"
        },
        {
            id: 1,
            image: require('../../assets/rock.png'),
            type: "Online Event",
            title: "Freelance Coaching from Beginner to Expert!",
            location: "Sunday Edutech",
            date: "Oct 04",
            time: "08.00 AM"
        },
    ]

    const renderData = ({ item }) => {
        return (
            <View className="bg-blue--primary w-75 h-32 px-4 py-4 rounded-2xl flex-row mr-4">
                <Image source={require('../../assets/rock.png')} style={Tailwind`w-14 h-14 rounded-lg mr-3`} />
                <View>
                    <Text className="text-[10px] font-normal text-yellow--primary">{item.type}</Text>
                    <Text className={`font-semibold text-base text-white mt-1 w-${width * 0.14}`} numberOfLines={1} >{item.title} </Text>
                    <View className="flex-row items-center mt-2">
                        <Image source={item.type == "Live Event" ? require('../../assets/location.png') : require('../../assets/suitcase.png')} style={Tailwind`w-4 h-4 mr-2`} />
                        <Text className={`text-xs font-normal text-white w-${width * 0.13}`} numberOfLines={1}>{item.location}</Text>
                    </View>
                    <View className="flex-row items-center mt-2">
                        <Image source={require('../../assets/calendar.png')} style={Tailwind`w-4 h-4 mr-2`} />
                        <Text className="text-xs font-normal text-white">{item.date}  {'\u2B24'}  Start at {item.time}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                snapToAlignment={"center"}
                decelerationRate="fast"
                pagingEnabled={true}
                horizontal
                data={data}
                renderItem={renderData}
            />
        </View>
    )
}

export default CardEvent