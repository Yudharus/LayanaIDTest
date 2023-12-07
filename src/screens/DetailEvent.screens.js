import React, { useState } from 'react'
import View from '../components/atoms/View.atom'
import Text from '../components/atoms/Text.atom'
import { ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native';
import Tailwind from '../libs/tailwind/Tailwind.lib';
import CardDetailEvent from '../components/organisms/CardDetailEvent.organisms';
import ModalTicket from '../components/molecules/ModalTicket.molecules';

const DetailEvent = ({ navigation, route }) => {
    const item = route.params
    const [showModal, setShowModal] = useState(false)

    function showModalTicket() {
        setShowModal(true)
    }

    function closeModalTicket() {
        setShowModal(false)
    }
    return (
        <ScrollView style={Tailwind`flex-1 bg-blue--primary`} showsVerticalScrollIndicator={false}>
            <View>
                <StatusBar
                    backgroundColor="#001D3D"
                    barStyle={'light-content'}
                />
                <ModalTicket
                    visible={showModal}
                    closeModal={closeModalTicket}
                />
                <View className="px-[18px] py-[18px]">
                    <View className="flex-row items-center justify-between">
                        <TouchableOpacity style={Tailwind`flex-row items-center`} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/leftArrow.png')} style={Tailwind`w-5 h-4 mr-4`} />
                            <Text className="font-bold text-base text-white">Details</Text>
                        </TouchableOpacity>
                        <View className="flex-row items-center">
                            <TouchableOpacity>
                                <Image source={require('../assets/share.png')} style={Tailwind`w-4.5 h-5 mr-5`} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../assets/moreMenu.png')} style={Tailwind`w-5 h-5`} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="flex-row items-center mt-8">
                        <Image source={require('../assets/usersGroup.png')} style={Tailwind`w-5 h-5 mr-2`} />
                        <Text className="text-sm font-medium text-white">Live Events</Text>
                    </View>
                    <Text className="text-2xl font-semibold text-white mt-4">{item.title}</Text>
                    <Text className="text-sm font-normal text-white mt-4">Back in 2023 thanks to overwhelming public demand - it’s the Football Weekly Live tour.</Text>
                    <View className="bg-black w-full h-[180px] mt-6 mb-6">
                        <Image source={item.image} style={Tailwind`w-full h-full  rounded-lg`} />
                    </View>
                </View>
                <CardDetailEvent
                    onPressGetTicket={showModalTicket}
                    location={item.location}
                    date={item.date}
                    time={item.time}
                    price={item.price}
                    ticket={item.ticket}
                />
            </View>
        </ScrollView>
    )
}

export default DetailEvent