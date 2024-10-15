import React from 'react';
import { View, FlatList  } from 'react-native';
import useStocks from '../../hooks/useStocks';
import SearchNameInput from '../../components/SearchName/SearchName';
import SearchSymbolInput from '../../components/SearchSymb';
import TableHeader from '../../components/TableHeader';
import RenderItem from '../../components/RenderItem';
import { HomeScreenProps } from '../../interfaces/type';

import styles from './styles';


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const {
    filteredStocks,   // Lista de acciones filtradas
    searchName,       // Estado del input de búsqueda por nombre
    setSearchName,    // Función para actualizar búsqueda por nombre
    searchSymbol,     // Estado del input de búsqueda por símbolo
    setSearchSymbol   // Función para actualizar búsqueda por símbolo
  } = useStocks();
  
  const handlePress = (symbol: string) => {
    navigation.navigate('StockDetail', { symbol });
  };

  return (
    <View style={styles.container}>
       <SearchNameInput searchName={searchName} onChange={setSearchName} />
       <SearchSymbolInput searchSymbol={searchSymbol} onChange={setSearchSymbol} />
      <FlatList
        data={filteredStocks}
        renderItem={({ item }) => <RenderItem item={item} onPress={handlePress} />}
        keyExtractor={(item) => item.symbol}
        style={styles.list}
        ListHeaderComponent={<TableHeader />} 
      />
    </View>
  );
};



export default HomeScreen;