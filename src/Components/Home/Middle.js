import React, { useContext } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { AuthContext } from '../../context/AuthContext';

const Middle = ({navigation}) => {
  const { userNfts } = useContext(AuthContext);
  return (
    <View style={{alignItems:'center'}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <>
        {userNfts[0] != null ? userNfts.map((nft, index) => (
          <ImageBackground
            source={{ uri: nft.imageUrl }}
            style={{
              height: 220,
              width: 390,
            }}
          />
        )) : <View style={{height: 220,
            width: 390,}}>
            </View>}
      </>
    </ScrollView>
        <Text style={{color: '#FF5E0E', fontSize: 40, fontWeight: '900', paddingTop: 40}}>
            RIDE TO EARN
        </Text>
        <Text style={{paddingTop: 30, color:'white', fontSize: 25, fontWeight: '900', paddingBottom: 20}}>
            0/0 Km
        </Text>
        <View style={{height: 10, width:'80%', backgroundColor: '#3b3c36', borderRadius: 5,}}>
        <View style={{height: 10, width:'10%', backgroundColor: '#FF5E0E', borderRadius: 100, paddingBottom: 10}}>
        </View>
        </View>
        <View style={{height: 40, width: '70%', backgroundColor:'#FF5E0E', marginTop: 40, alignItems:'center', borderRadius: 50, marginBottom: 70 }}> 
        <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Riding')
                  }>
            <Text style={{fontSize: 20, fontWeight: '900', color: 'white', paddingTop: 5}}>
                START RIDING NOW
            </Text>
        </TouchableOpacity>
        </View>

    </View>
  );
};

export default Middle;
