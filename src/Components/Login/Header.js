/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={{margin: 10, marginLeft: 30, marginTop: 20}}>
      <Text style={{color: 'white', fontSize: 35, fontWeight: '900'}}>
        RideItUp
      </Text>
      <View style={{marginTop: 5}}>
        <Text style={{color: '#FF5E0E', fontSize: 20, fontWeight: '500'}}>
          RideToEarn
        </Text>
      </View>
      <View style={{marginTop: 70}}>
        <Text style={{color: 'white', fontSize: 40, fontWeight: '900'}}>
          LOGIN/SIGN UP
        </Text>
      </View>
    </View>
  );
};

export default Header;
