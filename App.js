/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import VitaminList from './src/screens/VitaminList.js';
import VitaminInfo from './src/screens/VitaminInfo.js';
import HomeScreen from './src/screens/HomeScreen.js';
import ScreeningList from "./src/screens/ScreeningList.js";
import LoginScreen from "./src/screens/LoginScreen.js";
import { createStackNavigator } from 'react-navigation';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import MainTabNavigator from './src/navigation/MainTabNavigator';

// export default createStackNavigator({

//     Home: { screen: HomeScreen },
//     Screening: { screen: ScreeningList },
//     AllVitamins: { screen: VitaminList },
//     VitaminInfo: { screen: VitaminInfo },
//     Login: { screen: LoginScreen }
// });


var TestStack = createStackNavigator({
    Login: LoginScreen
});
// export default TestStack;

export default AppNavigator;

// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//               {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//               <TestStack/>
//               <AppNavigator />
//             </View>
//         );
//     }
// }


//export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
