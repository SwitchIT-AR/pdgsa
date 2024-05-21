import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:5001/landing');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from server:', error);
        return {};
    }
};
