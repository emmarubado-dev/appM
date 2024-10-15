import React from 'react';
import { View, TextInput } from 'react-native';
import SearchIcon from '../../assets/icons/SearchIcon';
import { SearchSymbolInputProps } from '../../interfaces/components/Search';
import styles from './styles';

const SearchSymbolInput: React.FC<SearchSymbolInputProps> = ({ searchSymbol, onChange }) => {
    return (
      <View style={styles.searchContainer}>
        <SearchIcon color="#888" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Buscar por Símbolo"
          value={searchSymbol}
          onChangeText={onChange}
        />
      </View>
    );
  };

  export default SearchSymbolInput;