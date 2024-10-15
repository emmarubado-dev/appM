
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const TableHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Símbolo</Text>
      <Text style={styles.headerText}>Nombre</Text>
      <Text style={styles.headerText}>Moneda</Text>
      <Text style={styles.headerText}>Tipo</Text>
    </View>
  );
};

export default TableHeader;