/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../Components/Account/Header';
import MiddleView from '../Components/Account/MiddleView';
import LowerMiddleView from '../Components/Account/LowerMiddleView';
import {Divider} from 'react-native-elements';
import Tabs from '../Components/Tabs/Tabs';

const Account = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
        <Header title={'MY ACCOUNT'} marginLeft={73} navigation={navigation}/>
        <Divider width={1} />
        <ScrollView>
          <MiddleView />
          <LowerMiddleView navigation={navigation}/>
        </ScrollView>
        <Divider width={1} />
        <Tabs navigation={navigation} screen={'Account'}/>
    </SafeAreaView>
  );
};

export default Account;
