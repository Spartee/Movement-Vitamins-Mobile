/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import VitaminList from './src/VitaminList.js';
import VitaminInfo from './src/VitaminInfo.js';
import Homescreen from './src/Homescreen.js';
import ScreeningList from "./src/ScreeningList.js";
import {createStackNavigator} from 'react-navigation';



const App = createStackNavigator({
    
    Home: {screen: Homescreen},
    Screening: {screen: ScreeningList},
    AllVitamins: {screen: VitaminList},
    VitaminInfo: {screen: VitaminInfo}
});

export default App;

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
