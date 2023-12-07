import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import View from '../components/atoms/View.atom'
import Text from '../components/atoms/Text.atom'
import Tailwind from '../libs/tailwind/Tailwind.lib';
import SearchTop from '../components/organisms/SearchTop';
import Title from '../components/molecules/Title.molecules';
import CardEvent from '../components/molecules/CardEvent.molecules';
import CardPopularEvent from '../components/molecules/CardPopularEvent.molecules';
import CardSearch from '../components/organisms/CardSearch.organisms';
import BottomNavigation from '../components/organisms/BottomNavigation.organisms';
import Spacer from '../components/atoms/Spacer.atom';

const Home = ({ navigation, route }) => {
    const name = route.params.name


    return (
        <SafeAreaView style={Tailwind`flex-1 bg-white-6`}>
            <ScrollView >
                <StatusBar
                    backgroundColor="#001D3D"
                    barStyle={'light-content'}
                />
                <SearchTop />
                <View className="py-4 px-[18px]">
                    <View>
                        <Text className="font-medium text-base text-gray">Hi, {name}.</Text>
                        <Title text="You have 2 upcoming events today 🗓" className="text-lg font-semibold text-black--primary mb-4" />
                        <CardEvent />
                        <View className="rounded-[100px] bg-white-7 items-center h-11 mt-6 p-1 flex-row">
                            <View className="rounded-[100px] w-39 h-[35px] bg-white items-center justify-center shadow-sm">
                                <Text className="text-sm font-medium text-black--primary">Live Event</Text>
                            </View>
                            <View className="rounded-[100px] w-40 h-[35px] bg-white-7 items-center justify-center">
                                <Text className="text-sm font-medium text-gray">Online Event</Text>
                            </View>
                        </View>
                    </View>
                    <View className="mt-6">
                        <Title text="🥤 Popular Event" className="text-lg font-semibold text-black--primary mb-4" />
                        <CardPopularEvent />
                    </View>
                    <View className="mt-6">
                        <Title text="🔍 Based on Your Searches" className="text-lg font-semibold text-black--primary mb-4" />
                        <CardSearch />
                    </View>
                    <View className="mt-6">
                        <Title text="👍🏻 Editor Picks" className="text-lg font-semibold text-black--primary mb-4" />
                        <CardSearch />
                    </View>
                    <Spacer width={"full"} height={"20"} />
                </View>
            </ScrollView>
            <BottomNavigation />

        </SafeAreaView>
    )
}

export default Home