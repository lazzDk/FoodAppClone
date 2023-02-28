import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Login',
      headerShown: false
    });
  })
  return (
    <SafeAreaView>
        <View>
            <Text className="text-red-500">LoginScreen</Text>
        </View>
    </SafeAreaView>

  )
}

export default LoginScreen
