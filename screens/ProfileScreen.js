import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';

function ProfileScreen() {
  const [verificationStatus, setVerification] = React.useState(false);
  return (
    <View style={styles.container}>
    { !verificationStatus ?
      <Button title={"Verify"} onPress={()=>{
        ImagePicker.getCameraPermissionsAsync()
        .then(()=>ImagePicker.launchCameraAsync())
        .then(()=>setVerification(true));
      }}/>
      :
      <Text>Account verified!</Text>
    }
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
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
