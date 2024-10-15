import { useState, useEffect } from 'react';
import stockService from '../services/stockService';
import { UseStockDetailsReturn, StockDetail } from '../interfaces/type';

const useStockDetails = (symbol, interval): UseStockDetailsReturn => {
    const [chartData, setChartData] = useState<StockDetail[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchStockDetails = async () => {
        try {
          setLoading(true); 
          const data = await stockService.getStockDetails(symbol, interval);
          
          setChartData(data);
          setLoading(false); 
        } catch (err) {
          setError(err);
          setLoading(false); 
        }
      };
  
      fetchStockDetails();
    }, [symbol, interval]);
  
    return { chartData, loading, error };
  };
  
  export default useStockDetails;