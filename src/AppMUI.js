import React, { useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import ClaimSearch from './components/ClaimSearchMUI';
import ClaimsList from './components/ClaimsListMUI';
import { fetchClaims } from './api';

const App = () => {
    const [claims, setClaims] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (influencer, startDate, endtDate,type) => {
        setLoading(true);
        try {
            const results = await fetchClaims(influencer, startDate, endtDate,type);
            setClaims(results);
        } catch (error) {
            console.error('Error fetching claims:', error);
            alert('Error al obtener resultados');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Buscar Influencers
            </Typography>
            <ClaimSearch onSearch={handleSearch} />
            <br/>
            {loading ? (
                <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
            ) : (
                <ClaimsList claims={claims} />
            )}
        </Container>
    );
};

export default App;
