import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
import Login from "./screens/Login";
import Regis from "./screens/Regis";
import Cart from "./screens/Cart";

import { store } from './screens/Store'
import { Provider } from 'react-redux'



// import Navigation from "./components/Navigation";
// import {AuthProvider} from "./context/";



const Stack = createNativeStackNavigator();

export default function App() {
  return (<Provider store={store}>
    
    <TailwindProvider>  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options= {{ headerShown: false}} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="Regis" component={Regis} options= {{ headerShown: false}} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider> 
    </Provider>
  );
}

