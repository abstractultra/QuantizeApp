import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Button, Dimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Image, Rating } from 'react-native-elements';

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
  const [itemsForSale, setItems] = React.useState([]);
  async function fetchData() {
    const response = await fetch("https://cathacks.herokuapp.com/get_item_data");
    const json = await response.json();
    setItems(json);
  }
  React.useEffect(() => {
    fetchData();
  }, []);
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
              startingValue={sellers[item.seller] ? sellers[item.seller].rating : 0}
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
