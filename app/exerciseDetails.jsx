import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();
    console.log('item gotten:',item)
    
    return (
    <View className="flex flex-1">
        <StatusBar style="dark"/>
        <View className="shadow-md bg-neutral-200 rounded-b-[40px>">
            <Image
                source={{uri: item.gifUrl}}
                contentFit='cover'
                style={{width: wp(100), height: wp(100)}}
                className="rounded-b-[40px]"
            />
        </View>

        <TouchableOpacity
            onPress={() => router.back()}
            className="mx-2 absolute rounded-full mt-6 right-0" 
        >
            <Anticons name="closecircle" size={hp(4.5)} color="purple" /> 
        </TouchableOpacity>
      
      {/* details */}

      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
        <Animated.Text style={{fontSize: hp(3.5)}} className="font-semibold text-neutral-800 tracking-wide"
            entering={FadeInDown.duration(300).springify()}
        >
            {item.name}
        </Animated.Text>

        <Animated.Text style={{fontSize: hp(2)}} className=" text-neutral-700 tracking-wide"
            entering={FadeInDown.duration(300).springify().delay(100)}
        >
            Equipment <Text className="font-bold text-neutral-800"> {item?.equipment} </Text>
        </Animated.Text>

        <Animated.Text style={{fontSize: hp(2)}} className=" text-neutral-700 tracking-wide"
            entering={FadeInDown.duration(300).springify().delay(200)}
        >
            Secondary Muscles <Text className="font-bold text-neutral-800"> {item?.secondaryMuscles} </Text>
        </Animated.Text>

        <Animated.Text style={{fontSize: hp(2)}} className=" text-neutral-700 tracking-wide"
            entering={FadeInDown.duration(300).springify().delay(300)}
        >
            Target <Text className="font-bold text-neutral-800"> {item?.target} </Text>
        </Animated.Text>

        <Animated.Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-800 tracking-wide"
            entering={FadeInDown.duration(300).springify().delay(400)}
        >
            Instructions
        </Animated.Text>

        { item.instructions ? (
                    item.instructions.split(',').map((instruction, index) => (
                        <Animated.Text
                            key={instruction}
                            style={{ fontSize: hp(1.7) }}
                            className="text-neutral-800"
                            entering={FadeInDown.duration(300).springify().delay((index + 6) * 100)}
                        >
                            {instruction}
                        </Animated.Text>
                    ))
                ) : (
                    <View>
                        <Text className="text-center font-semibold tracking-wider pt-4 text-neutral-500" 
                        style={{fontSize:hp(2.5)}}> oops! No instructions available </Text>
                            <View>
                              <Text className=" text-purple-800 text-center  font-semibold tracking-wider" style={{fontSize:hp(2)}}> check back later </Text>
                            </View>
                    </View>
            )
        }

      </ScrollView>
    </View>
  )
}