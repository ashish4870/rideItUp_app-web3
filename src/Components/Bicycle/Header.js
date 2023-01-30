/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Header = () => {
  return (
    <View>
      <PrimaryContent />
    </View>
  );
};

const PrimaryContent = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    }}>
    <TouchableOpacity style={{marginLeft: 15, marginTop: 11}}>
      <AntDesign name="left" size={20} color="#F0EAD6" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        style={{
          width: 30,
          height: 30,
          borderRadius: 1000,
          borderColor: 'white',
          borderWidth: 2,
          overflow: 'hidden',
          marginLeft: 15,
          marginTop: 8,
        }}
        source={require('../../Assets/images/lo2.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{flexDirection: 'row', marginRight: 15, marginTop: 11}}>
      <Fontisto name="wallet" size={25} color="#FF5E0E" />
    </TouchableOpacity>
  </View>
);

export default Header;
