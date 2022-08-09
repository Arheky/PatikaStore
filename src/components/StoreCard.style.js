import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "eceff1",
        width: Dimensions.get('window').width /2.4,
        margin: 5,
        borderRadius: 10,
    },
    image: {
        marginTop: 15,
        marginLeft: 10,
        aspectRatio: 0.5,
        resizeMode: 'contain',
        borderRadius: 3,
    },
    title: {
        color: '525252',
        marginTop: 10,
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        color: '525252',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        marginBottom: 8,
    },
    inStock: {
        textTransform: 'uppercase',
        color: 'red',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 8,
        marginBottom: 10,
    },
});