import { Modal as ModalRn } from "react-native";
import { Pressable } from "react-native";
import Tailwind from "../../libs/tailwind/Tailwind.lib";
import View from "../atoms/View.atom";


function ModalTop({ children, visible, closeModal, className, animationType = "slide" }) {
    return (
        <ModalRn visible={visible} animationType={animationType} transparent>
            <Pressable
                style={Tailwind`flex-1 bg-black--primary/50 relative opacity-70`}
                onPress={closeModal}></Pressable>
            <View className="absolute w-[100%] top-[32%]">
                <View className="bg-white px-[18px] py-6 rounded-t-3xl">{children}</View>
            </View>
        </ModalRn>
    );
}

export default ModalTop;