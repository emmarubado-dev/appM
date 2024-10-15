import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
      },
      headerText: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',  
      }, 
})

export default styles;
