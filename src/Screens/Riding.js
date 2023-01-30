import React from 'react';
import {View, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import Header from '../Components/Account/Header';
import {Divider} from 'react-native-elements';

const Riding = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
        <Header title={'RIDING'} marginLeft={73} navigation={navigation}/>
        <Divider width={1} />
        <ImageBackground
          source={require('../Assets/images/riding.png')}
          style={{
            height: "100%",
            width: '100%',
          }}
        />
        </SafeAreaView>
    )
}

export default Riding;