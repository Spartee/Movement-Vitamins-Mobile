import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SearchBar, List, ListItem } from "react-native-elements";


export default class ScreeningList extends Component {
    static navigationOptions = {
        title: "Screening"
    }

    constructor() {
	super(...arguments);
        this.state = {
            loading: false,
            data: [],
        };

        this.state.data.push({
            name:"example boolean input",
            type:"boolean"
        });

        this.state.data.push({
            name:"example number input",
            type:"number"
        });
    }

    render() {
        const {navigate} = this.props.navigation;
	
        return (
            <List>
	      <FlatList
	        data={this.state.data}
                keyExtractor={item => item.name}
            //ItemSeparatorComponent={this.renderSeparator}
	        renderItem={getListEntry.bind(this)}
	      />
            </List>
	);
    }
}


function updateState(index, val) {
    this.setState(previousState => {
        var newData = [...previousState.data];
        newData[index].value = val;
        console.log(val);
        return {data:newData};
    });
}

function getListEntry({item, index}) {
    var props = {
        title: item.name,
        hideChevron:true,

    };


    if (item.type == "boolean") {
        props.switchButton = true;
        props.switched = item.value || false;
        props.onSwitch = updateState.bind(this, index);
    }
    else if (item.type == "number") {
        props.textInput = true;
        props.textInputStyle = {
            paddingTop: 0,
            paddingBottom: 0,
            marginVertical: 3.5
        };
        props.textInputSelectTextOnFocus = true;
        props.textInputKeyboardType = "numeric";
        props.textInputPlaceholder = "Number";
        props.textInputValue = typeof item.value == "undefined" ? "" : ""+item.value;
        props.textInputOnChangeText = (val) => {
            // Stupid hacky
            var sanitized = val.match(/[0-9]*(.[0-9]*)?/g)[0];
            updateState.call(this, index, sanitized);

        };
    }
    return React.createElement(ListItem, props);
};
