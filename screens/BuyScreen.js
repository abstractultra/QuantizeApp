import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Button, Dimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Image, Rating } from 'react-native-elements';

const itemsForSale = [
  {
    id: 1,
    name: "Purell",
    price: 2.49,
    stock: 4,
    imageUrl: "http://sites.psu.edu/siowfa14/wp-content/uploads/sites/13467/2014/10/Purell.jpg",
    type: "Hand Sanitizer",
    seller: "Walmart"
  },
  {
    id: 2,
    name: "Face Masks",
    price: 3.49,
    stock: 3,
    imageUrl: "https://ashutterbugslife.files.wordpress.com/2013/06/medical-surgical-mask.jpg",
    type: "Mask",
    seller: "Username"
  }
];

const sellers = {
  Walmart: {
    rating: 5,
    type: "Store"
  }, 
  Username: {
    rating: 2,
    type: "User"
  }
}

function BuyScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemsForSale}
        renderItem={({ item }) => (
          <Card id={item.id} containerStyle={styles.cardStyle}>
            <View style={{alignItems: 'center'}}>
              <Image source={{uri: item.imageUrl}} style={styles.thumbnail}/>
              <Text style={{fontWeight:"bold"}}>{item.name}</Text>
            </View>
            <Text>Type: {item.type}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
            <Text>Stock: {item.stock}</Text>
            <Text>Seller: {item.seller}</Text>
            <Rating
              imageSize={20}
              readonly
              startingValue={sellers[item.seller].rating}
            />
            <View style={{padding:10}}>
              <Button title="Inquire"/>
            </View>
          </Card>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="BuyScreen"
          component={BuyScreen}
          options={{ title: 'Buy' }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  thumbnail: {
    width:100,
    height:100
  },
  cardStyle: {
    width: (Dimensions.get('window').width / 2) - (Dimensions.get('window').width / 8),
  }
});
