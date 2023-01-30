/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Linking, Alert} from 'react-native';

const Bottom = (props) => {
  const { nftPurchaseUrl, performance, durability, owner, distanceNft, status } = props.route.params;
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Please install metamask wallet from play/app store !!!');
    }
  }
  const ownerNft = owner !== null ? owner : 'RideItUp';
  return (
    <View style={{marginTop: 20}}>
      <BalanceContent name={'Performance'} value={performance} />
      <BalanceContent name={'Durability'} value={durability} />
      <BalanceContent name={'Owner'} value={ownerNft} />
      <BalanceContent name={'Distance'} value={distanceNft} />
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#FF5E0E',
            borderRadius: 30,
            margin: 20,
            marginLeft: 50,
            marginRight: 50,
          }}
          onPress={() =>
            handlePress(nftPurchaseUrl)
          }>
          <Text
            style={{
              color: '#e5e5e5',
              fontSize: 20,
              fontWeight: '800',
              fontFamily: 'Cochin',
              paddingTop: 9,
              paddingBottom: 9,
              paddingLeft: 100,
              paddingRight: 100,
            }}>
            {status}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BalanceContent = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
      marginBottom: 2,
      marginTop: 0,
      backgroundColor: '#333333',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderWidth: 0.2,
    }}>
    <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Cochin'}}>
      {props.name}
    </Text>
    <Text style={{color: 'white', marginRight: 10, fontFamily: 'Cochin'}}>
      {props.value}
    </Text>
  </View>
);

export default Bottom;
