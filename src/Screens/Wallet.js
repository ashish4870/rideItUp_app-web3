/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../Components/Account/Header';
import {Divider} from 'react-native-elements';
import MiddleTabs from '../Components/Wallet/MiddleTabs';

const Wallet = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
      <View style={{marginTop: 15}}>
        <Header title={'WALLET ACCOUNT'} navigation={navigation} marginLeft={45} />
        <Divider width={1} />
        <MiddleTabs />
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
