import React from 'react';
import { View, TextInput } from 'react-native';
import SearchIcon from '../../assets/icons/SearchIcon';
import { SearchNameInputProps } from '../../interfaces/components/Search';
import styles from './styles';
  
const SearchNameInput: React.FC<SearchNameInputProps> = ({ searchName, onChange }) => {
    return (
      <View style={styles.searchContainer}>
        <SearchIcon color="#888" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Buscar por Nombre"
          value={searchName}
          onChangeText={onChange}
        />
      </View>
    );
  };
  
  export default SearchNameInput;