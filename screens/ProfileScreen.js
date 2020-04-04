import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function SellScreen() {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="SellScreen"
          component={SellScreen}
          options={{ title: 'Sell' }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20
  },
});
