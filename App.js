import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import { Image } from "react-native";

import MorseToText from './src/components/MorseToText';
import TextToMorse from './src/components/TextToMorse';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#2B6ABC',
            position: "absolute",
            borderRadius: 10,
            borderTopWidth: 0,
            height: 60,
            width: "75%",
            left: 55,
            bottom: 20,
            elevation:0,
            paddingBottom: 10,
            shadowColor: "#2B6ABC",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 10,
          },
          tabBarActiveTintColor: '#141414',
        }}
      >
        <Tab.Screen 
          name="Morse to Text" 
          component={MorseToText}
          options={{
            headerShown: false,
            tabBarOptions: { showIcon: true, },
            tabBarIcon: ({ tintColor }) => {
              return (<Image
                  style={{ width: 30, height: 30 }}
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/4075/4075435.png" }}/>);}
          }}
          />
        <Tab.Screen 
          name="Text to Morse" 
          component={TextToMorse}
          options={{
            headerShown: false,
            tabBarOptions: { showIcon: true, },
            tabBarIcon: ({ tintColor }) => {
              return (<Image
                  style={{ width: 30, height: 30 }}
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/4204/4204692.png" }}/>);}
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
