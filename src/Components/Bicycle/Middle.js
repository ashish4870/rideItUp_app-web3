/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const Middle = (props) => {
  const { nftImage, level, bikeId, durability, performance } = props.route.params;
  return (
    <View>
      <View>
        <ImageBackground
          source={{uri: nftImage}}
          style={{
            height: 250,
            width: '100%',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <View style={{alignItems:'center'}}>
            <Text style={{color: 'white'}}>Bicycle ID</Text>
            <Text style={{color: 'white', fontWeight: '900'}}>{bikeId}</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{color: 'white'}}>Durability</Text>
            <Text style={{color: 'white', fontWeight: '900'}}>{durability}</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{color: 'white'}}>Performance</Text>
            <Text style={{color: 'white', fontWeight: '900'}}>{performance}</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{color: 'white'}}>Level</Text>
            <Text style={{color: 'white', fontWeight: '900'}}>{level}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Middle;
