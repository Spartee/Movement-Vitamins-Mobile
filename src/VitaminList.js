// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SearchBar, List, ListItem } from "react-native-elements";
import * as Papa from "papaparse";


export default class VitaminList extends Component {
    static navigationOptions = {
        title: "Recommended Vitamins"
    }
    
    constructor() {
	super(...arguments);

	this.state = {
	    loading: false,
	    data: [],
	    page: 1,
	    seed: 1,
	    error: null,
	    refreshing: false,
	};

    }

    async getData() {
        // Temporary
        const url = "https://raw.githubusercontent.com/Spartee/Movement-Vitamins-Web/master/web/instance/MovementVitamins.csv";
	this.setState({ loading: true });
	var res = await (await fetch(url)).text();
        var parsed = Papa.parse(res, {header:true});
        //debugger;
        
	try {
	    this.setState({
		data: parsed.data,
		error: parsed.errors.length == 0 ? parsed.errors : null,
		loading: false,
		refreshing: false
	    });
	}
	catch(error) {
	    this.setState({error, loading:false});
	}
    }

    componentDidMount() {
	this.getData();
    }

    renderSeparator = () => {
        return (
            <View
            style={{
                height: 1,
                width:"86%",
                backgroundColor:"#FF0000",
                marginLeft:"14%"
            }}
            />
        );
    }
    
    render() {
        const {navigate} = this.props.navigation;
	return (
	    <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
	      <FlatList
		data={this.state.data}
        	keyExtractor={item => item.Name}
                //ItemSeparatorComponent={this.renderSeparator}
		renderItem={({item}) => (
		    <ListItem
		      title={item.Name}
                      //hideChevron
		    //subtitle={item.email}
		    //avatar={{ uri: item.picture.thumbnail }}
                      onPress={() => {console.log("navigating"); navigate('VitaminInfo');}}
		    />
		)}
	      />
	    </List>
	);
    }
};
