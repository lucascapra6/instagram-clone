import React, {Component} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image
                        source={require('../src/img/logo.png')}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../src/img/send.png')}
                        style={styles.send}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height:55,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth: 0.2,
        shadowColor:'#000',
        elevation:1,
        alignItems:'center'
    },
    logo: {
        height:35
    },
    send: {
        width:35,
        height:35
    }
});
