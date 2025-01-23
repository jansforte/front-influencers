import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Cambia a la URL de tu backend

export const fetchClaims = async (username, start_time, end_time) => {
    const filter = {
        username
    }

    if(start_time){
        filter.start_time = start_time;
    }
    if(end_time){
        filter.end_time = end_time;
    }

    const response = await axios.get(`${API_URL}/api/influencer/process-influencer`, {
        params: filter,
    });
    return response.data;
};
