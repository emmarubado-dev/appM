import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      cell: {
          flex: 1,
          textAlign: 'center',  // Centrar el contenido de cada celda
        },
});

export default styles;