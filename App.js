import React, {Component} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/header'
import Feed from './components/feed'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <View style={styles.container}>
          <Header/>
          <Feed/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,
    padding:5
  },
});
