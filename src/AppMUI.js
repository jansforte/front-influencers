import React, { useState } from 'react';
import { Container, Typography, CircularProgress, Alert, Button, Box  } from '@mui/material';
import ClaimSearch from './components/ClaimSearchMUI';
import ClaimsList from './components/ClaimsListMUI';
import { fetchClaims } from './api';

const App = () => {
    const [claims, setClaims] = useState([]);
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('es');

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
        <Container maxWidth="lg" sx={{ marginY: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
                <Button
                    variant={language === 'es' ? 'contained' : 'outlined'}
                    onClick={() => setLanguage('es')}
                >
                    Español
                </Button>
                <Button
                    variant={language === 'en' ? 'contained' : 'outlined'}
                    onClick={() => setLanguage('en')}
                    sx={{ marginLeft: 1 }}
                >
                    English
                </Button>
            </Box>
            <Typography variant="h4" align="center" gutterBottom>
                {language === 'es' ? 'Buscar Influencers' : 'Search Claims'}
            </Typography>
            <Alert severity="info" sx={{ marginBottom: 3 }}>
                <Typography variant="body1">
                {language === 'es' ? (
                    <>
                        <strong>Información Importante:</strong> La información que se mostrará incluye únicamente tweets relacionados con temas de salud publicados por el influencer indicado. Si no hay resultados, puede que no haya datos disponibles. Intenta actualizar ingresando el nombre del influencer y haciendo clic en "Actualizar".
                    </>
                ) : (
                    <>
                        <strong>Important Information:</strong> The information displayed below will include only tweets related to health topics posted by the specified influencer. If no results appear during the search, this might be because there is no data available for the influencer. Try updating by entering the influencer's name and clicking "Update."
                    </>
                )}
                </Typography>
            </Alert>
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
