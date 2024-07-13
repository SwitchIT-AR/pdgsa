import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://pdgsa.switchit.com.ar/AB');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from server:', error);
        return error as Error;
    }
};
