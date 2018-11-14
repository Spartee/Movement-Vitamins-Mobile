import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Homescreen extends Component {
    static navigationOptions = {
        title: "Home"
    }

    constructor() {
	super(...arguments);

    }

    render() {
	const { navigate } = this.props.navigation;
        return (
            <View>
              <Button
                height="50"
                title="All Vitamins"
                onPress={() =>
                         navigate('AllVitamins')
                        }
              />
              <Button
                title="Screening"
                onPress={() =>
                         navigate('Screening')
                        }
              />
            </View>
        );
    }


}
