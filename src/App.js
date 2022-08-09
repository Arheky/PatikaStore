import React from "react";
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import data from './patikastore_data.json';
import StoreCard from './components/StoreCard';
import {useState} from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
    const renderItems = ({item}) => <StoreCard item={item} />
    const [store, setStore] = useState(data)

    const search = text => {
        const filteredList = data.filter(store => {
            const searchedText = text.toLowerCase();
            const currentTitle = store.title.toLowerCase();
            return currentTitle.indexOf(searchedText) > -1;
        });
        setStore(filteredList);
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>PATIKASTORE</Text>
            <SearchBar onChange={search} />
            <FlatList data={store} renderItem={renderItems} numColumns={2} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#800080',
        fontSize: 30,
        fontWeight: '800',
        marginLeft: 5,
    },
});

export default App;