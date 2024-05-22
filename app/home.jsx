import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/imageSLider';
import BodyParts from '../components/bodyParts';

export default class home extends Component {
  render() {
    return (
      <SafeAreaView className="flex-1 bg-white flex space-y-5 " edges={['top']}>
        <StatusBar style="dark"/>

        {/* punchline and avatar */}
        <View className="flex-row justify-between items-center mx-5">
            <View className="space-y-2">
                <Text
                    style={{fontSize:hp(4.5) }}
                    className="font-bold tracking-wider text-neutral-700"
                >
                    READY TO
                </Text>
                <Text
                    style={{fontSize:hp(4.5) }}
                    className="font-bold tracking-wider text-purple-500"
                >
                    WORKOUT
                </Text>
            </View>
            <View className="flex justify-center items-cente space-y-2">
                <Image source={require('../assets/images/avatare.png')} style={{height: hp(6), width: hp(6)}} className="rounded-full"/>
                <View className="bg-white rounded-full justify-center flex items-center border-[3px] border-neutral-300"
                    style={{height: hp(5.5), width:hp(5.5)}}
                >
                    <Ionicons name="notifications" size={30} color="gray" />                      
                    
                </View>
            </View>
        </View>

        {/* image sliders */}
        <View >
            <ImageSlider />
        </View>

        {/* body parts lists */}
        <View className="flex-1">
            <BodyParts />
        </View>
      </SafeAreaView>
    )
  }
}