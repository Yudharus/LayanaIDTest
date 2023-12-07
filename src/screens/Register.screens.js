import React, { useState } from 'react'
import { Image, TextInput, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import View from '../components/atoms/View.atom'
import Text from '../components/atoms/Text.atom'
import Tailwind from '../libs/tailwind/Tailwind.lib';
import ButtonActive from '../components/molecules/ButtonActive.molecules';
import ButtonNonActive from '../components/molecules/ButtonNonActive.molecules';
import SQLite from 'react-native-sqlite-storage'

const Register = ({ navigation }) => {
    const width = Dimensions.get("window").width
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isHide, setIsHide] = useState(true)
    const [isHide2, setIsHide2] = useState(true)
    const [loading, setLoading] = useState(false)

    const db = SQLite.openDatabase(
        {
            name: 'MainDB',
            location: 'default',
        },
        () => {
            console.log("success connect")
        },
        error => {
            console.log("error connect DB", error)
        }
    )

    const createUser = () => {
        if (validEmail == false || password !== confirmPassword) {
            setErrorEmail("Format email tidak valid")
            setErrorPassword(true)
        } else {
            setLoading(true)
            try {
                setErrorEmail("")
                setErrorPassword(false)
                db.transaction(tx => {
                    tx.executeSql(
                        'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
                        [name, email, phone, password],
                        (tx, result) => {
                            navigation.navigate("Login")
                            setLoading(false)
                            console.log(`Account ${email} has been created`);
                        },
                        err => {
                            setLoading(false)
                            console.log(err);
                        },
                    );
                });
            } catch (error) {
                setLoading(false)
            }
        }
    }

    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputEmail);

        setValidEmail(isValid);
    };

    return (
        <ScrollView style={Tailwind`flex-1 bg-white`}>
            <View className="py-6 px-[18px]">
                <StatusBar
                    backgroundColor="#FFF"
                    barStyle={'dark-content'}
                />
                <View className="mb-6">
                    <Text className="text-black--primary text-[28px] font-semibold">Register here</Text>
                    <Text className="text-white--secondary text-sm font-normal mt-2">Please enter your data to complete your account registration process</Text>
                </View>
                <View>
                    <View>
                        <Text className="text-black--secondary text-sm font-normal">Name</Text>
                        <View className="w-full h-14 rounded-lg border border-white-4 px-3 py-3 flex-row mt-3">
                            <Image source={require('../assets/user.png')} style={Tailwind`w-6 h-6 mt-1`} />
                            <TextInput style={Tailwind`h-9 w-${width * 0.17} ml-2 text-black--secondary`}
                                placeholder='Joe Samanta'
                                placeholderTextColor={"#9CA3AF"}
                                value={name}
                                onChangeText={value => setName(value)} />
                        </View>
                    </View>
                    <View className="mt-[18px]">
                        <Text className="text-black--secondary text-sm font-normal">email</Text>
                        <View className={`w-full h-14 rounded-lg border ${errorEmail !== "" ? "border-red" : "border-white-4"} px-3 py-3 flex-row mt-3`}>
                            <Image source={require('../assets/mail.png')} style={Tailwind`w-6 h-6 mt-1`} />
                            <TextInput style={Tailwind`h-9 w-${width * 0.17} ml-2 text-black--secondary`}
                                placeholder='Joesamanta@gmail.com'
                                placeholderTextColor={"#9CA3AF"}
                                value={email}
                                onChangeText={(value) => {
                                    setEmail(value)
                                    validateEmail(value)
                                }}
                            />
                        </View>
                        {
                            validEmail == false ?
                                <Text className="font-normal text-xs text-red mt-2">{errorEmail}</Text> :
                                null
                        }
                    </View>
                    <View className="mt-[18px]">
                        <Text className="text-black--secondary text-sm font-normal">Phone number</Text>
                        <View className="w-full h-14 rounded-lg border border-white-4 flex-row mt-3">
                            <View className="w-20 ml--1 bg-white-4 items-center justify-center flex-row rounded-l-lg border-r-2 border-white-8">
                                <Text className="text-sm font-normal text-white--third">+62</Text>
                                <Image source={require('../assets/arrowDown.png')} style={Tailwind`w-4 h-4 ml-2`} />
                            </View>
                            <View className="px-3 py-3">
                                <TextInput style={Tailwind`h-9 w-${width * 0.145} ml-2 text-black--secondary`}
                                    placeholder='0813-1341-1515'
                                    placeholderTextColor={"#9CA3AF"}
                                    value={phone}
                                    keyboardType='number-pad'
                                    onChangeText={value => setPhone(value)} />

                            </View>
                        </View>
                    </View>
                    <View className="mt-[18px]">
                        <Text className="text-black--secondary text-sm font-normal">Password</Text>
                        <View className="w-full h-14 rounded-lg border border-white-4 px-3 py-3 flex-row mt-3">
                            <Image source={require('../assets/password.png')} style={Tailwind`w-5 h-5 ml-1 mt-1`} />
                            <TextInput style={Tailwind`h-9 w-${width * 0.155} ml-2 mr-2 text-black--secondary`}
                                placeholder='Joesamanta@gmail.com'
                                placeholderTextColor={"#9CA3AF"}
                                value={password}
                                onChangeText={value => setPassword(value)}
                                secureTextEntry={isHide}
                            />
                            <TouchableOpacity onPress={() => setIsHide(!isHide)}>
                                {
                                    isHide ?
                                        <Image source={require('../assets/eyeClosed.png')} style={Tailwind`w-6 h-6 mt-1`} /> :
                                        <Image source={require('../assets/eyeOpen.png')} style={Tailwind`w-6 h-6 mt-1`} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="mt-[18px]">
                        <Text className="text-black--secondary text-sm font-normal">Confirm Password</Text>
                        <View className="w-full h-14 rounded-lg border border-white-4 px-3 py-3 flex-row mt-3">
                            <Image source={require('../assets/password.png')} style={Tailwind`w-5 h-5 ml-1 mt-1`} />
                            <TextInput style={Tailwind`h-9 w-${width * 0.155} ml-2 mr-2 text-black--secondary`}
                                placeholder='Joesamanta@gmail.com'
                                placeholderTextColor={"#9CA3AF"}
                                value={confirmPassword}
                                onChangeText={value => setConfirmPassword(value)}
                                secureTextEntry={isHide2}
                            />
                            <TouchableOpacity onPress={() => setIsHide2(!isHide2)}>
                                {
                                    isHide2 ?
                                        <Image source={require('../assets/eyeClosed.png')} style={Tailwind`w-6 h-6 mt-1`} /> :
                                        <Image source={require('../assets/eyeOpen.png')} style={Tailwind`w-6 h-6 mt-1`} />
                                }
                            </TouchableOpacity>
                        </View>
                        {
                            errorPassword == true ?
                                <Text className="font-normal text-xs text-red mt-2">Password tidak sesuai</Text> :
                                null
                        }
                    </View>
                    {
                        name == "" || email == "" || phone == "" || password == "" || confirmPassword == "" ?
                            (
                                <ButtonNonActive
                                    className="items-center justify-center bg-white-4 py-4 rounded-lg mt-6"
                                    text="Register"
                                    classNameText="font-bold text-base text-white"
                                />
                            ) :
                            (
                                <ButtonActive
                                    className="items-center justify-center bg-blue--secondary py-4 rounded-lg mt-6"
                                    text="Register"
                                    classNameText="font-semibold text-base text-white"
                                    onPress={() => createUser()}
                                    isLoading={loading}
                                />
                            )
                    }
                    <View className="flex-row items-center justify-center mt-6">
                        <Text className="text-sm font-semibold text-white--secondary text-center ">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text className="text-sm font-semibold text-blue--secondary"> Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default Register