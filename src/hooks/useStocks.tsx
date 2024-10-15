import { useState, useEffect } from 'react';
import StockService from '../services/stockService';

function useStocks() {
    const [stocks, setStocks] = useState([]);
    const [filteredStocks, setFilteredStocks] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchSymbol, setSearchSymbol] = useState('');
  
    useEffect(() => {
      const fetchStocks = async () => {
        try {
          const response = await StockService.getTable();
          setStocks(response.data.data);
          setFilteredStocks(response.data.data);
        } catch (error) {
          console.error('Error fetching stocks:', error);
        }
      };
  
      fetchStocks();
    }, []);
  
    // Filtrar las acciones según el nombre y símbolo
    useEffect(() => {
      const filtered = stocks.filter(stock =>
        stock.name.toLowerCase().includes(searchName.toLowerCase()) &&
        stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
      );
      setFilteredStocks(filtered);
    }, [searchName, searchSymbol, stocks]);
  
    return {
      filteredStocks,
      searchName,
      setSearchName,
      searchSymbol,
      setSearchSymbol
    };
  };
  
  export default useStocks;