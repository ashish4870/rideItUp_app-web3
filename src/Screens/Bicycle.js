/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../Components/Bicycle/Header';
import Middle from '../Components/Bicycle/Middle';
import Bottom from '../Components/Bicycle/Bottom';

const Bicycle = ({route}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
      <View>
        <Header route={route}/>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          <Middle route={route}/>
          <Bottom route={route}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Bicycle;
