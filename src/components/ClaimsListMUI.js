import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';

const ClaimsList = ({ claims }) => {
    
    if (claims?.count === 0 || claims.length === 0) {
        return <Typography variant="h6" align="center">No se encontraron resultados.</Typography>;
    }
    
    return (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Influencer</TableCell>
                        <TableCell>Tweet</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Confianza</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {claims.map((claim) => (
                        <TableRow key={claim._id}>
                            <TableCell>{claim.influencer}</TableCell>
                            <TableCell>{claim.tweet}</TableCell>
                            <TableCell>{claim.confidence === 1 ? "Verified" : claim.confidence === 2 ? "Questionable" : "Debunked"}</TableCell>
                            <TableCell>{claim.confidence}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ClaimsList;
