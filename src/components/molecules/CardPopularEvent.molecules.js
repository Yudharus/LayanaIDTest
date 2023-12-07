import React, { useRef, useState } from 'react'
import { Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Tailwind from '../../libs/tailwind/Tailwind.lib'
import View from '../atoms/View.atom'
import Text from '../atoms/Text.atom'
import { useNavigation } from "@react-navigation/native"


const CardPopularEvent = ({ }) => {
    const navigation = useNavigation()
    const width = Dimensions.get("window").width
    const scrollRef = useRef();
    const [nativeEvent, setNativeEvent] = useState(null);
    const [imgActive, setImgActive] = useState(0);

    const [eventImage, setEventImage] = useState([{
        id: 1,
        image: require('../../assets/colday.png'),
        title: "Coldplay Music of The Spheres",
        location: "Tottenham Hotspurs Stadium, London",
        date: "Oct 28, 2023",
        time: "04.00 PM",
        price: "14",
        ticket: "100 ticket left"
    },
    {
        id: 2,
        image: require('../../assets/football.png'),
        title: "Football Weekly Live Tour: London ",
        location: "Troxy",
        date: "Nov 13, 2023",
        time: "04.00 PM",
        price: "14",
        ticket: "Available Ticket"
    },
    {
        id: 3,
        image: require('../../assets/run.png'),
        title: "Run the Ends 2023",
        location: "48 Olympic Steps",
        date: "Oct 13, 2023",
        time: "04.00 PM",
        price: "20",
        ticket: "Available Ticket"
    },]);

    const onChange = nativeEvent => {
        if (nativeEvent) {
            const slide = Math.ceil(
                nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
            );
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    };

    const renderData = ({ item }) => {
        return (
            <TouchableOpacity style={Tailwind`w-[300px] h-64 p-3 bg-white shadow-sm rounded-2xl mb-1 ml-px mr-2`} onPress={() => navigation.push("DetailEvent", {
                image: item.image,
                title: item.title,
                location: item.location,
                date: item.date,
                time: item.time,
                price: item.price,
                ticket: item.ticket

            })}>
                <View className="w-full h-36 rounded-lg">
                    <Image source={item.image} style={Tailwind`w-full h-full`} resizeMethod='resize' resizeMode='contain' />
                    <Text className={`text-lg font-semibold text-black--primary mt-2 w-${width * 0.2}`} numberOfLines={1}>{item.title}</Text>
                    <View className="flex-row items-center mt-2">
                        <View className="flex-row items-center">
                            <Image source={require('../../assets/calendar2.png')} style={Tailwind`w-3.5 h-3.5 mr-2`} />
                            <Text className={`text-xs font-normal text-gray mr-2`}>{item.date}</Text>
                        </View>
                        <Text className={`text-xs font-normal text-gray `}>{'\u2B24'}</Text>
                        <View className="flex-row items-center">
                            <Image source={require('../../assets/location2.png')} style={Tailwind`w-[11px] h-[14px] ml-2 mr-2`} />
                            <Text className={`text-xs font-normal text-gray  w-${width * 0.1}`} numberOfLines={1}>{item.location}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center justify-between mt-3">
                        <Text className="text-xs font-normal text-black--primary">Start from ${item.price}</Text>
                        <Text className="text-xs font-normal text-yellow--primary">{item.ticket}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                ref={scrollRef}
                key={0}
                onScroll={({ nativeEvent }) => {
                    setNativeEvent(nativeEvent);
                    onChange(nativeEvent);
                }}
                // snapToInterval={width}
                snapToAlignment={"center"}
                decelerationRate="fast"
                pagingEnabled={true}
                horizontal
                data={eventImage}
                renderItem={renderData}
            />
            <View className="items-center justify-center flex-row">
                {eventImage.map((item, index) => (
                    <Text
                        key={item}
                        style={
                            imgActive == index
                                ? { margin: 3, color: '#FFC300' }
                                : { margin: 3, color: '#BDBDBD' }
                        }>
                        ●
                    </Text>
                ))}
            </View>

        </View>
    )
}

export default CardPopularEvent