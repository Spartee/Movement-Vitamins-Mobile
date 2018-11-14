import React, {Component} from "react";
import {Text, StyleSheet, View} from "react-native";


export default class VitaminInfo extends Component {
    static navigationOptions = {
        title: "Movement Vitamin Info"
    }

    constructor() {
	super(...arguments);
    }

    render() {
        const vitamin = this.props.navigation.state.params.vitamin;
	return (
            <View>
	      <Text style={styles.titleText}> {vitamin.name} </Text>
              <Text style={styles.description}> {vitamin.description} </Text>
            </View>
	);	
    }
};

const styles = StyleSheet.create({
    baseText: {
        fontSize: 11
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
