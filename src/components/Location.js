
// Import react-native-google-location
import RNGLocation from 'react-native-google-location';

const React = require('react-native');

const {
  Component,
  // DeviceEventEmitter for registering of the Callback-Listener
  DeviceEventEmitter,
  StyleSheet,
  Text,
  View,
} = React;

export default class Location extends Component {
  constructor(props) {
    super(props);
    // Create and Reset initial State Longitude (lng) and Latitude (lat)
    this.state = {
      lng: 0.0,
      lat: 0.0,
    };

    if (!this.evEmitter) {
      // Register Listener Callback - has to be removed later
this.evEmitter = DeviceEventEmitter.addListener('updateLocation', this.onLocationChange.bind(this));
      // Initialize RNGLocation
      RNGLocation.getLocation();
    }
  }


  componentWillUnmount() {
    // Stop listening for Events
    this.evEmitter.remove();
  }
  onLocationChange(e) {
    this.setState({
      lng: e.Longitude,
      lat: e.Latitude
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.location}>
          Lng: {this.state.lng} Lat: {this.state.lat}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  location: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
