import React, { useState } from 'react'
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import View from '../atoms/View.atom';
import Text from '../atoms/Text.atom';
import Tailwind from '../../libs/tailwind/Tailwind.lib';


const CardDetailEvent = ({ location, date, time, price, ticket, onPressGetTicket }) => {
    const [isShow, setIsShow] = useState(true)
    const width = Dimensions.get("window").width

    return (
        <View className="h-full bg-white rounded-3xl px-[18px] py-8">
            <View className="w-full h-20 bg-white-6 p-4 flex-row items-center justify-between rounded-3xl">
                <View className="flex-row items-center">
                    <Image source={require('../../assets/guardian.png')} style={Tailwind`w-11 h-11  rounded-full`} />
                    <View className="flex-col ml-3">
                        <Text className="text-sm font-semibold text-black--primary">By: The Guardian Live</Text>
                        <Text className="font-normal text-xs text-gray">United Kingdom</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View className="w-20 h-10 border-2 border-blue--secondary rounded-lg items-center justify-center">
                        <Text className="text-sm font-bold text-blue--secondary">Detail</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View className="bg-white-6 p-4 mt-4 rounded-3xl">
                <View className="flex-row">
                    <Image source={require('../../assets/location2.png')} style={Tailwind`w-4 h-5 mr-4`} />
                    <View className="flex-col">
                        <Text className="font-semibold text-sm text-black--primary">{location}</Text>
                        <Text className={`text-xs font-normal text-gray w-${width * 0.17} mt-2`} numberOfLines={1}>490 Commercial Road London E1 0HX United Kingdom</Text>
                        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
                            <View className="flex-row items-center  mt-2">
                                <Text className={`text-xs font-normal text-gray mr-2`}>{isShow ? "Hide" : "Show"} Maps</Text>
                                <Image source={require('../../assets/arrowUp.png')} style={Tailwind`w-2.5 h-2.5`} />
                            </View>
                        </TouchableOpacity>
                        {
                            isShow ?
                                <Image source={require('../../assets/map.png')} style={Tailwind`w-full h-44 mt-4 rounded-lg border border-white-7`} /> :
                                null
                        }
                    </View>

                </View>
            </View>
            <View className="bg-white-6 p-4 mt-4 rounded-3xl">
                <Text className="text-base font-semibold text-black--primary">Event Time</Text>
                <View className="flex-row items-center mt-2">
                    <Image source={require('../../assets/calendar2.png')} style={Tailwind`w-6 h-6 mr-3`} />
                    <Text className="text-sm font-normal text-gray">Monday, {date}</Text>
                </View>
                <View className="flex-row items-center mt-3">
                    <Image source={require('../../assets/clock.png')} style={Tailwind`w-5 h-5 ml-1 mr-3`} />
                    <Text className="text-sm font-normal text-gray">Start at {time}</Text>
                </View>
            </View>
            <View className="bg-white-6 p-4 mt-4 rounded-3xl">
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-sm font-semibold text-black--primary">220 people are going</Text>
                        <Text className="text-xs font-normal text-gray mt-2">See all</Text>

                    </View>
                    <Image source={require('../../assets/arrowRight.png')} style={Tailwind`w-6 h-6 `} />
                </View>
                <Image source={require('../../assets/memoji.png')} style={Tailwind`h-10 w-${width * 0.22} mt-4`} />
            </View>
            <View className="bg-white-6 p-4 mt-4 rounded-3xl">
                <Text className="text-base font-semibold text-black--primary">About This Event</Text>
                <Text className={`font-normal text-sm text-gray mt-2`} numberOfLines={7}>This November, witness Max, Barry and a host of your regular Football Weekly favourites across the UK and Ireland.
                    Each show will feature the podcast’s unique take on the world of football - plus, audience interaction, special guests and stories the lawyers don’t let us tell on the podcast.
                    Last year’s tour featured Mark Langdon’s Meat Raffle, Barry Glendenning’s rendition of Call Me Maybe and Steve Claridge eating industrial quantities of fruit in his parent’s kitchen. This time around we promise, per show, at least 2 original, never seen before ideas and 5 anecdotes you’ve all heard before.
                    A little more about the hosts:
                    Max Rushden
                    Despite moving to Australia, Max has been able to seamlessly continue hosting duties of Football Weekly with only a minor drop off in quality. He repeatedly assures bosses at the Guardian that his references will remain UK-centric so expect no mention of Stan Laziridis, Skippy or fairy bread.
                    Barry Glendenning
                    Death, taxes and Barry telling an all-too-revealing story on a Football Weekly live show. These are the only guarantees in life. He lives in a state of constant irritation that Max stereotypes him as the pod ‘clown’ who no-one takes seriously. Barry cannot wait for this live tour, despite rejecting every idea proposed for it so far.
                    J oining Max and Barry on stage, will be Troy Townsend and Philippe Auclair.
                    You can join this event in-person at Troxy, London or in a host of other cities or via a livestream. You can find details about the other events here.
                    Alongside your ticket, you can also purchase The Football Weekly Book and some special Football Weekly merchandise.
                </Text>
                <TouchableOpacity>
                    <Text className="text-sm font-medium text-black--primary underline mt-2">Read more</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center justify-between mt-8">
                <View className="flex-col">
                    <Text className="text-base font-semibold text-black--primary">${price} / person</Text>
                    <Text className="text-sm font-normal text-yellow--primary">{ticket}</Text>
                </View>
                <TouchableOpacity style={Tailwind`w-40 h-14 bg-blue--secondary items-center justify-center rounded-lg flex-row`} onPress={onPressGetTicket}>
                    <Image source={require('../../assets/ticket2.png')} style={Tailwind`h-6 w-6 mr-4`} />
                    <Text className="text-base font-bold text-white ">Get Ticket</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardDetailEvent