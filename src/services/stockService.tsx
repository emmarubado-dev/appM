import apiClient from "../helpers/apiClient";


const stockService = {
    getTable: async () => {
        try {
            const response = await apiClient.get('stocks?source=docs&exchange=NYSE');

            return response;
        } catch (error) {
            console.log('ERROR: ',error)
            throw error;
        }
    },

    getStockDetails: async (symbol, interval) => {
        try {

            const API_KEY = '65edfffb9a9e495a99f02f6e87ae8936';
            const API_URL = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`;
            const response = await apiClient.get(API_URL);

            const data = response?.data?.values?.map((item) => ({
                date: item.datetime,
                value: parseFloat(item.close),
            }));

            return data;
        } catch (error) {
            console.log('ERROR: ', error);
            throw error;
        }
    }

}

export default stockService;