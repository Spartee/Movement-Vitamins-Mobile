import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
            <Image
              source={ require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    resizeMode: 'stretch'
  },
  
  welcomeImage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
