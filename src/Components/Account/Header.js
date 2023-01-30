/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{margin: 15}}>
        <TouchableOpacity
        onPress = {()=> props.navigation.navigate('MarketPlace')}>
          <AntDesign name="left" size={20} color="#F0EAD6" />
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginLeft: props.marginLeft}}>
        <HeaderButton text={props.title} />
      </View>
    </View>
  );
};

const HeaderButton = props => (
  <View style={{alignSelf: 'center'}}>
    <Text
      style={{
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        fontFamily: 'Cochin',
      }}>
      {props.text}
    </Text>
  </View>
);

export default Header;
