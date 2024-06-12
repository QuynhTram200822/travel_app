import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Hotels, Attractions, Restaurants, NotFound } from '../assets';
import MenuContainer from "../components/MenuContainer";

import { FontAwesome } from "@expo/vector-icons"
import ItemCarDontainer from "../components/ItemCarDontainer";
import { getPlacesData } from "../api";


const Discover = () => {

  const navigation = useNavigation();

  const handleGoToCart = () => {
    navigation.navigate('Cart');
  };


  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      console.log(data.id);
      setMainData(data);
      setInterval(() => {
        setIsLoading(false)
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="flex-row items-center justify-between px-5">
        <View>
          <Text className="text-[35px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">The beauty today</Text>
        </View>
        <View className="items-center justify-center w-12 h-12 rounded-md shadow-lg">
          <TouchableOpacity onPress={handleGoToCart}>
            <View style={{ padding: 2, borderRadius: 5, marginTop: 5 }}>
              <FontAwesome name="user" size={30} color="#0B646B" />
            </View>
          </TouchableOpacity>
        </View>
      </View >

      <View className="flex-row items-center px-4 py-1 mx-4 mt-4 bg-white shadow-lg rounded-xl">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: 'AIzaSyARkobzL4ReKd1kML3_jhL1kWS6PTYuVN4',
            language: 'en',
          }}
        />
      </View>

      {isLoading ? (
        <View className="items-center justify-center flex-1 ">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-5 mt-8">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap items-center px-4 pt-8 justify-evenly">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCarDontainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>) : (<>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className="object-cover w-32 h-32 "
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Opps...No Data Found
                    </Text>
                  </View>
                </>)}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default Discover