import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RenderItemProps } from '../../interfaces/type';
import styles from './styles';

const RenderItem: React.FC<RenderItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.symbol)}>
      <View style={styles.row}>
        <Text style={styles.cell}>{item.symbol}</Text>
        <Text style={styles.cell}>{item.name}</Text>
        <Text style={styles.cell}>{item.currency}</Text>
        <Text style={styles.cell}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default RenderItem;
