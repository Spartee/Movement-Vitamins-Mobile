// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SearchBar, List, ListItem } from "react-native-elements";
import * as Papa from "papaparse";

class VitaminList extends Component {
    constructor(props) {
	super(props);

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
	return (
	    <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
	      <FlatList
		data={this.state.data}
        	keyExtractor={item => item.Name}
                ItemSeparatorComponent={this.renderSeparator}
		renderItem={({item}) => (
		    <ListItem
		      title={item.Name}
		      //subtitle={item.email}
		      //avatar={{ uri: item.picture.thumbnail }}
		    />
		)}
	      />
	    </List>
	);
    }
}

export {VitaminList};
