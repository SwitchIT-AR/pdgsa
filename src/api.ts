import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:8080/landing');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from server:', error);
        return {};
    }
};
