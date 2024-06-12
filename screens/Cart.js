import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'



const Cart = (cartItem) => {

  const cart = useSelector((state) => state.cart.travel)




  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        <View>
          {cart.map((item, index) => <View key={index}>

            <SafeAreaView className="relative flex-1 bg-white">
              <ScrollView className="flex-1 px-4 py-6">
                <View className="relative bg-white shadow-lg">
                  <Image
                    source={{
                      uri: item?.photo?.images?.large?.url
                        ? item?.photo?.images?.large?.url
                        : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
                    }}
                    className="object-cover w-full h-72 rounded-2xl"
                  />
                  <View className="absolute inset-x-0 flex-row justify-between px-6 top-5">



                  </View >

                  <View className="absolute inset-x-0 flex-row justify-between px-6 bottom-5" >
                    <View className="flex-row items-center space-x-2">

                    </View>
                    <View className="px-2 py-1 bg-teal-100 rounded-md">
                      <Text>{item?.open_now_text}</Text>
                    </View>

                  </View>
                </View>

                <View className="mt-6">
                  <Text className="text-[#428288] text-[24px] font-bold">
                    {item?.name}
                  </Text>
                  <View className="flex-row items-center mt-2 space-x-2">
                    <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                    <Text className="text-[#8C9EA6] text-[20px] font-bold">
                      {item?.location_string}
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-between mt-4">
                  {item?.rating && (
                    <View className="flex-row items-center space-x-2 ">
                      <View className="items-center justify-center w-12 h-12 bg-red-100 shadow-md rounded-2xl">
                        <FontAwesome name="star" size={24} color="#D58574" />
                      </View>
                      <View>
                        <Text className="text-[#515151]">{item?.rating}</Text>
                        <Text className="text-[#515151]">Ratings</Text>
                      </View>
                    </View>
                  )}

                  {item?.price_level && (
                    <View className="flex-row items-center space-x-2 ">
                      <View className="items-center justify-center w-12 h-12 bg-red-100 shadow-md rounded-2xl">
                        <MaterialIcons name="attach-money" size={24} color="black" />
                      </View>
                      <View>
                        <Text className="text-[#515151]">{item?.price_level}</Text>
                        <Text className="text-[#515151]">Price Level</Text>
                      </View>
                    </View>
                  )}
                  {item?.bearing && (
                    <View className="flex-row items-center space-x-2 ">
                      <View className="items-center justify-center w-12 h-12 bg-red-100 shadow-md rounded-2xl">
                        <FontAwesome5 name="map-signs" size={24} color="black" />
                      </View>
                      <View>
                        <Text className="text-[#515151] capitalize">
                          {item?.bearing}
                        </Text>
                        <Text className="text-[#515151]">Bearing</Text>
                      </View>
                    </View>
                  )}
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>)}

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart