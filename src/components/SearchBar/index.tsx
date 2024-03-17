import React from 'react';
import {View, TextInput} from 'react-native';
import { styles } from './styles';
import useSearchBar from './hooks/useSearchBar';

const SearchBar = () => {
    const {onChangeText, searchText} = useSearchBar();
    return (
        <View style={styles.conatiner}>
            <TextInput 
                style={styles.inputStyle} 
                onChangeText={onChangeText}
                value={searchText}
                placeholder='Search'
            />
        </View>
        
    );
};

export default SearchBar;