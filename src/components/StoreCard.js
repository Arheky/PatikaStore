import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({item}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.imgURL}} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            {!item.inStock && <Text style={styles.inStock}>Stokta Yok!!</Text>}
        </View>
    );
};

export default StoreCard;