/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Filter = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
      }}>
      <View
        style={{
          height: 40,
          width: 130,
          backgroundColor: '#333333',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', paddingRight: 5 }}>Sort: Latest</Text>
          <View style={{ paddingTop: 3 }}>
            <AntDesign name="down" size={15} color="#F0EAD6" />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 40,
          width: 130,
          backgroundColor: '#333333',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', paddingRight: 5 }}>Filter</Text>
          <View style={{ paddingTop: 3 }}>
            <AntDesign name="filter" size={15} color="#F0EAD6" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
