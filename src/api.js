import axios from 'axios';

const API_URL = 'https://server-influencers.onrender.com'; // Cambia a la URL de tu backend

export const fetchClaims = async (username, start_time, end_time, type=1) => {
    const filter = {
        username
    }

    if(start_time){
        filter.start_time = start_time;
    }
    if(end_time){
        filter.end_time = end_time;
    }

    let response = [{data:[]}];
    if(type===1){
        response = await axios.get(`${API_URL}/api/influencer/process-influencer`, {  
            params: filter,
        });
    }
    else{
        response = await axios.get(`${API_URL}/api/influencer/update-influencer`, {  
            params: filter,
        });
    }
    return response.data;
};
