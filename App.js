import React, { Component } from 'react';
import { Text, Image } from 'react-native';

/**
 * bult in prop source
 */
export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return(
      <Image source={pic} style={{width: 355, height:200}}></Image>
    )
  }
}