import React, { useState } from 'react';
import { View, Text, Button, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import useStockDetails from '../../hooks/useStockDetails';
import { StockDetailScreenProps } from '../../interfaces/type';
import styles from './styles';

const StockDetailScreen: React.FC<StockDetailScreenProps> = ({ route }) => {
  const { symbol } = route.params;
  const [interval, setInterval] = useState('1day'); // Default interval

  const { chartData, loading, error } = useStockDetails(symbol, interval);

  const getFilteredLabels = (labels:string[]) => {
    const step = Math.ceil(labels.length / 5); // Mostrar 1 de cada 5 etiquetas, ajusta este valor según sea necesario
    return labels.filter((_, index) => index % step === 0);
  };

  // Si hay error, mostrar un mensaje
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalles de {symbol}</Text>

      {/* Botones para cambiar el intervalo */}
      <View style={styles.buttonContainer}>
        <Button title="Diario" onPress={() => setInterval('1day')} />
        <Button title="Semanal" onPress={() => setInterval('1week')} />
        <Button title="Mensual" onPress={() => setInterval('1month')} />
        <Button title="Anual" onPress={() => setInterval('1year')} />
      </View>

       {loading ? (
        <ActivityIndicator size="large" color="#fb8c00" />
      ) : (
        chartData?.length > 0 ?  (
          <LineChart
            data={{
              labels: getFilteredLabels(chartData?.map(item => item.date)),
              datasets: [
                {
                  data: chartData?.map(item => item.value),
                },
              ],
            }}
            width={Dimensions.get('window').width - 20} // Ancho de la ventana menos padding
            height={220}
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chart}
          />
        ) :  (
            <View style={styles.emptyStateContainer}>
              <Text style={styles.emptyStateText}>
                No hay datos disponibles para mostrar en este intervalo.
              </Text>
            </View>
          )
      )}
    </View>
  );
};

export default StockDetailScreen;