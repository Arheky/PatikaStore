import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const SearchBar = props => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Ara..."
                onChangeText={props.onChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 12,
        paddingLeft: 12,
        marginHorizontal: 6,
        marginTop: 7,
        marginBottom: 15,
    },
});

export default SearchBar;