import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyDabBJ87cOSqFC2NrR2TURl50cDdkPDVK0");

let location;

Geocoder.from("77386")
		.then(json => {
			location = json.results[0].geometry.location;
		})
		.catch(error => console.warn(error));
    
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Press me" onPress={() => {console.log(location)}}/> 
    </View>
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
