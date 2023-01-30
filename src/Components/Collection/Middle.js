/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const Middle = ({navigation}) => {
  const { userNfts } = useContext(AuthContext);
  return (
    userNfts[0] != null ? userNfts.map((nft, index) => (
    <View>
      <Cycles
        image={nft.imageUrl}
        bikeName={nft.bikeType}
        bikeId={nft.bikeId}
        bikeLevel={nft.level}
        bikePrice={nft.price}
        navigation={navigation}
        nftPurchaseUrl={nft.nftPurchaseUrl}
        owner={nft.ownerId}
        performance={nft.performance}
        durability={nft.durability}
        distanceNft={nft.distanceNft}
      />
    </View>
    )): <View>
      
    </View>
  );
};

const Cycles = props => {
 return (
  <TouchableOpacity
  onPress = {()=> props.navigation.navigate('Bicycle',  {
    nftImage: props.image,
    bikeId: props.bikeId,
    level: props.bikeLevel,
    performance: props.performance,
    durability: props.durability,
    distanceNft: props.distanceNft,
    owner: props.owner,
    status: 'SELL',
  })}>
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          backgroundColor: '#333333',
          height: 110,
          width: 165,
          marginLeft: 15,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          marginBottom: 15,
        }}>
        <Image
          source={{uri: props.image}}
          style={{
            height: 110,
            width: 165,
            backgroundColor: 'black',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#f1e1cc',
          height: 110,
          width: 165,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 7,
          paddingBottom: 7,
        }}>
        <Text style={{color: '#FF5E0E', fontWeight: '500'}}>
          {props.bikeName}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 30, fontWeight: '900'}}>
            {props.bikeId}
          </Text>
          <View style={{backgroundColor: '#00FF7F', borderRadius: 5, flexDirection:'row'}}>
            <Text
            style={{
              color: 'white',
              padding: 2,
              paddingLeft: 5,
              paddingRight: 5,
              fontWeight: '500',
            }}>
              LEVEL
            </Text>
            <Text
              style={{
                color: 'white',
                padding: 2,
                paddingLeft: 5,
                paddingRight: 5,
                fontWeight: '500',
              }}>
              {props.bikeLevel}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#FF5E0E',
              flexDirection: 'row',
              padding: 10,
              borderRadius: 20,
            }}
            onPress={() =>
              props.buyNft(props.bikeId)
            }>
            <Text
              style={{
                fontWeight: '900',
                color: 'white',
                paddingLeft: 30,
                paddingRight: 30,
              }}>
              {props.bikePrice}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);};

export default Middle;
