import { Text, TextInput, Image, View, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { 
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon, 
 } from "react-native-heroicons/outline";
import { ScrollView } from 'react-native-gesture-handler';
import Categories from '../components/Categories';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Home",
            headerShown: false
        });
    }, [navigation])

    return (
        <SafeAreaView className="bg-white pt-5">
                {/* Header */}
                <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru',
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />

                    {/* Body */}
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Levering nu!
                        </Text>
                        <Text className="font-bold text-xl">
                            Min lokation
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <View className="flex-4">
                        <UserIcon size={35} color="#00CCBB" />
                    </View>
                </View>

                {/* Search */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <MagnifyingGlassIcon color="gray" size={20}/>
                        <TextInput 
                            placeholder="Søg efter restauranter"
                            keyboardType="default" 
                        />
                    </View>
                    
                    <AdjustmentsVerticalIcon color="00CCBB" />
                </View>

                {/*  BODY */}
                <ScrollView className="bg-gray-100">
                    {/* Categories */}
                    <Categories />

                    {/* Featured rows */}
                </ScrollView>

       {/*
            <View>
                <Button title='Goto login' onPress={() => navigation.navigate('Login')}></Button>
            </View>

        */}
        </SafeAreaView>
    )
}

export default HomeScreen