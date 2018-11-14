import React, {Component} from "react";
import {Text, StyleSheet, View} from "react-native";
import YouTube from 'react-native-youtube';

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
              <YouTube
                apiKey={"AIzaSyCfgHrVK0IY8mb0C-URaV4WOBVaOnQtvyk"}
                videoId={idFromURL(vitamin.youtubeLink)}
                rel={false}
                play
                style={styles.youtube}
                //onReady={() => {this.setState({play:false});}}
            //                controls={2}
                modestbranding
              />
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
    youtube: {
        height:200,

    }
});


function idFromURL(url){
    //https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    var result = (match&&match[7].length==11)? match[7] : false;
    console.log(result);
    return result;
}
