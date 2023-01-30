/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const MiddleView = () => {
  const {userName} = useContext(AuthContext);
  return (
    <View style={{alignItems: 'center', marginTop: 40}}>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 1000,
          borderColor: 'white',
          borderWidth: 2,
          overflow: 'hidden',
        }}
        source={require('../../Assets/images/lo2.png')}
      />
      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '900',
            fontFamily: 'Cochin',
            marginBottom: 20,
          }}>
          {userName}
        </Text>
      </View>
    </View>
  );
};
export default MiddleView;
