import React, { useState, useEffect } from 'react'
import { Image, TextInput, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import View from '../components/atoms/View.atom'
import Text from '../components/atoms/Text.atom'
import Tailwind from '../libs/tailwind/Tailwind.lib';
import ButtonActive from '../components/molecules/ButtonActive.molecules';
import SQLite from 'react-native-sqlite-storage'
import ButtonNonActive from '../components/molecules/ButtonNonActive.molecules';



const Login = ({ navigation }) => {
    const width = Dimensions.get("window").width
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isHide, setIsHide] = useState(true)


    useEffect(() => {
        createUserTable()
    }, [])

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

    const createUserTable = () => {
        db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR, email VARCHAR, phone VARCHAR, password VARCHAR)", [], (result) => {
            console.log("Table created successfully", result);
        }, (error) => {
            console.log("Create table error", error)
        })
    }

    const listUsers = async () => {
        let sql = "SELECT * FROM users WHERE email = ?";
        let params = [email]
        db.transaction((tx) => {
            tx.executeSql(sql, params, (tx, resultSet) => {
                var length = resultSet.rows.length;
                if (length == 0) {
                    setError("Email / password Not Correct")
                } else {
                    setError("")
                    for (var i = 0; i < length; i++) {
                        let passwordDb = resultSet.rows.item(i).password
                        if (password == passwordDb) {
                            let name = resultSet.rows.item(i).name
                            navigation.replace("Home", {
                                name: name
                            })
                            setError("")
                        } else {
                            setError("Password Incorrect")

                        }
                    }
                }
            }, (error) => {
                console.log("List user error", error);
            })
        })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex-1 bg-blue--primary">
                <StatusBar
                    backgroundColor="#001D3D"
                    barStyle={'light-content'}
                />
                <View className="items-center justify-center mb-16 mt-[117px]">
                    <Image source={require('../assets/logo.png')} style={Tailwind`w-24 h-24 `} />
                </View>
                <View className="h-full bg-white rounded-t-[28px] py-6 px-6">
                    <Text className="text-black--primary text-[28px] font-semibold">Welcome back 👋</Text>
                    <Text className="text-white--secondary text-sm font-normal mt-2">Please enter your login information below to access your account</Text>
                    <View className="mt-6">
                        <View>
                            <Text className="text-black--secondary text-sm font-normal">Email</Text>
                            <View className="w-full h-14 rounded-lg border border-white-4 px-3 py-3 flex-row mt-3">
                                <Image source={require('../assets/mail.png')} style={Tailwind`w-6 h-6 mt-1`} />
                                <TextInput style={Tailwind`h-9 w-${width * 0.17} ml-2 text-black--secondary`}
                                    placeholder='Joesamanta@gmail.com'
                                    placeholderTextColor={"#9CA3AF"}
                                    value={email}
                                    onChangeText={value => setEmail(value)} />
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
                    </View>
                    <View>
                        {
                            error !== "" ?
                                <Text className="font-normal text-xs text-red mt-2 text-center">{error}</Text> :
                                null
                        }
                        <Text className="text-sm font-semibold text-blue--secondary text-right mt-4">Forgot password?</Text>
                        {
                            email == "" || password == "" ?
                                (
                                    <ButtonNonActive
                                        className="items-center justify-center bg-white-4 py-4 rounded-lg mt-6"
                                        text="Login"
                                        classNameText="font-bold text-base text-white"
                                    />
                                ) :
                                (
                                    <ButtonActive
                                        className="items-center justify-center bg-blue--secondary py-4 rounded-lg mt-6"
                                        text="Login"
                                        classNameText="font-semibold text-base text-white"
                                        onPress={() => listUsers()}
                                    />
                                )
                        }
                        <View className="flex-row items-center justify-center mt-6">
                            <Text className="text-sm font-semibold text-white--secondary text-center ">Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push("Register")}>
                                <Text className="text-sm font-semibold text-blue--secondary"> Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login