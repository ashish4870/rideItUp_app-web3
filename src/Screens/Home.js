/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../Components/MarketPlace/Header';
import {Divider} from 'react-native-elements';
import Tabs from '../Components/Tabs/Tabs';
import Middle from '../Components/Home/Middle'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
        <Header navigation={navigation} screenName={'MY HOME'}/>
        <Divider width={1} style={{marginTop: 15, marginBottom: 10}} />
        <Middle navigation={navigation}/>
        <Divider width={1} />
        <Tabs navigation={navigation} screen={'Home'}/>
        </SafeAreaView>
  );
};

export default Home;
