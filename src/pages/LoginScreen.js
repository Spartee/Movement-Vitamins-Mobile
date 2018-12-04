// https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView
} from 'react-native';


export default class LoginScreen extends Component {
    static navigationOptions = {
        title: "Login"
    }

    constructor() {
	super(...arguments);
    }

    render() {
	const { navigate } = this.props.navigation;
        return (
            <View>
              <Text>Login Page</Text>
            </View>
        );
    }
}