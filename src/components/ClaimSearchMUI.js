import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const ClaimSearch = ({ onSearch }) => {
    const [influencer, setInfluencer] = useState('');
    const [startDate, setStartDate] = useState('2025-01-01');
    const [endtDate, setEndtDate] = useState('2025-01-01');
    const [type, setType] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(influencer, startDate,endtDate,type);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}
        >
            <TextField
                label="Influencer"
                variant="outlined"
                value={influencer}
                onChange={(e) => setInfluencer(e.target.value)}
                fullWidth
            />
            <TextField
                label="Start Date"
                slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                type='date'
                variant="outlined"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
            />
            <TextField
                label="End Date"
                slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                type='date'
                variant="outlined"
                value={endtDate}
                onChange={(e) => setEndtDate(e.target.value)}
                fullWidth
            />
            <Button type="submit" onClick={(e)=>setType(1)} variant="contained" color="primary">
                Buscar
            </Button>
            <Button type="submit" onClick={(e)=>setType(2)} variant="contained" color="primary">
                Actualizar
            </Button>
        </Box>
    );
};

export default ClaimSearch;
