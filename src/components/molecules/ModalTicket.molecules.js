import React, { useState } from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import View from "../atoms/View.atom";
import Text from "../atoms/Text.atom";
import Tailwind from "../../libs/tailwind/Tailwind.lib";
import ModalTop from "./ModalTop.organisms";
import ButtonActive from "./ButtonActive.molecules";


const ModalTicket = ({ visible, closeModal }) => {
    const [id, setId] = useState("")
    const data = [
        {
            id: 1,
            type: "Early Access Regular",
            seat: "Normal seat + special price",
            typeSeat: "normal",
            price: "14",
            sold: true,
            image: require("../../assets/ticket3.png")
        },
        {
            id: 2,
            type: "Early Access VIP",
            seat: "VIP seat + special price",
            typeSeat: "vip",
            price: "24",
            sold: true,
            image: require("../../assets/ticket3.png")
        },
        {
            id: 3,
            type: "Regular",
            seat: "Normal seat + bracelete",
            typeSeat: "regular",
            price: "18",
            sold: false,
            image: require("../../assets/ticket4.png")
        },
        {
            id: 4,
            type: "VIP",
            seat: "VIP seat + bracelete + merchandise",
            typeSeat: "vip",
            price: "18",
            sold: false,
            image: require("../../assets/ticket5.png")
        },

    ]

    const handleTicket = (item) => {
        setId(item.id)
    }

    const renderData = ({ item }) => {
        return (
            <TouchableOpacity style={Tailwind`w-full h-[77px] p-4 border-2 ${item.id == id ? "border-blue--secondary bg-white-9" : "border-white-7"}   rounded-xl mt-2`} onPress={() => handleTicket(item)} disabled={item.sold == true ? true : false}>
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <View className="w-10 h-10 items-center justify-center bg-white-7 rounded-lg">
                            {
                                item.typeSeat == "vip" ?
                                    (
                                        <>
                                            <Image source={item.image} style={Tailwind`w-4	h-4`} />
                                            <Text className={`text-sm font-semibold ${item.sold == true ? "text-gray" : "text-blue--secondary"}`}>VIP</Text>
                                        </>
                                    ) :
                                    <Image source={item.image} style={Tailwind`w-6	h-6`} />
                            }
                        </View>
                        <View className="flex-col ml-3">
                            <Text className={`text-sm font-semibold ${item.sold == true ? "text-gray" : "text-blue--secondary"}`}>{item.type}</Text>
                            <Text className={`font-normal text-xs ${item.sold == true ? "text-gray" : "text-blue--secondary"}`}>{item.seat}</Text>
                        </View>
                    </View>
                    <View className="flex-col">
                        <Text className={`text-base font-semibold ${item.sold == true ? "text-gray" : "text-blue--secondary"}`}>${item.price}</Text>
                        {
                            item.sold == true ?
                                <Text className="font-normal text-xs text-gray">Sold</Text> :
                                null
                        }
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <ModalTop visible={visible} closeModal={closeModal} >
            <View>
                <Text className="font-semibold text-lg text-black--primary mb-4">Select Ticket</Text>
                <FlatList
                    data={data}
                    renderItem={renderData}
                />
                <ButtonActive
                    className="h-14 w-full bg-blue--secondary rounded-lg mt-6 items-center justify-center"
                    text="Continue"
                    classNameText="text-base font-bold text-white"
                    onPress={closeModal}
                />
            </View>
        </ModalTop>
    )
}

export default ModalTicket

