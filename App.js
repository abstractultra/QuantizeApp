import * as React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import SellScreen from "./screens/SellScreen.js";
import BuyScreen from "./screens/BuyScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Buy" component={BuyScreen} />
        <Tab.Screen name="Sell" component={SellScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
