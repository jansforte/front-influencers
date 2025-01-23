import React, { useState } from 'react';
import ClaimSearch from './components/ClaimSearch';
import ClaimsList from './components/ClaimsList';
import { fetchClaims } from './api';

const App = () => {
    const [claims, setClaims] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (influencer, startDate, endtDate) => {
        setLoading(true);
        try {
            const results = await fetchClaims(influencer, startDate, endtDate);
            setClaims(results);
        } catch (error) {
            console.error('Error fetching claims:', error);
            alert('Error al obtener resultados');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{width:"100%"}}>
            <h1>Buscar Claims de Influencers</h1>
            <ClaimSearch onSearch={handleSearch} />
            {loading ? <p>Cargando...</p> : <ClaimsList claims={claims} />}
        </div>
    );
};

export default App;
