import { RouteProp } from '@react-navigation/native';

export interface RenderItemProps {
    item: {
      symbol: string;
      name: string;
      currency: string;
      type: string;
    };
    onPress: (symbol: string) => void;
  }

export interface HomeScreenProps {
    navigation: {
      navigate: (screen: string, params: { symbol: string }) => void;
    };
  }

export interface StockDetail {
    date: string;
    value: number;
}
  
export interface UseStockDetailsReturn {
    chartData: StockDetail[];
    loading: boolean;
    error: Error | null;
}

interface StockDetailRouteParams {
  symbol: string;
}

export interface StockDetailScreenProps {
  route: RouteProp<{ params: StockDetailRouteParams }, 'params'>;
}