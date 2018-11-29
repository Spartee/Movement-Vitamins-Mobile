import React, {Component} from "react";
import {ScrollView, Text, StyleSheet, View} from "react-native";
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
            <ScrollView>
              <View style={styles.title}>
	        <Text style={styles.titleText}> {vitamin.name} </Text>
              </View>
              <View style={styles.videoAndDescTitle}>
                <YouTube 
                  apiKey={"AIzaSyCfgHrVK0IY8mb0C-URaV4WOBVaOnQtvyk"}
                  videoId={idFromURL(vitamin.youtubeLink)}
                  rel={false}
                  style={styles.youtube}
                  play
                  onError={() => {console.log("Youtube Error");}}
            //onReady={() => {this.setState({play:false});}}
            //                controls={2}
                  modestbranding
                />
                <View style={styles.descriptionTitle}>
                  <Text style={styles.titleText}>Description:</Text>
                </View>
              </View>
              <Text style={styles.descriptionText}> {vitamin.description} </Text>
            </ScrollView>
	);
    }
};

const styles = StyleSheet.create({
    baseText: {
        fontSize: 11
    },
    title: {
        padding:20
    },        
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    youtube: {
        height:210,
        width:"100%",
        alignSelf:"center"
    },
    videoAndDescTitle: {
        paddingHorizontal:40
    },
    descriptionTitle: {
        paddingTop: 20
    },
    descriptionText: {
        paddingTop: 10,
        paddingHorizontal:40,
        width:"100%",
        alignSelf:"center"
    }    
});


function idFromURL(url){
    //https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    console.log(url);
    var result = (match&&match[7].length==11)? match[7] : false;
    if (result === false ) {
        throw new Error("Bad video url");
    }
    console.log(result);
    return result;
}
