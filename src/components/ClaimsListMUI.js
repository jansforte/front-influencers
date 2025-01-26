import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    Typography,
    Grid2 as Grid
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import DonutChart from './DonutChart';

const calculateAveragesDynamic = (data) => {
    const totals = data.reduce((acc, { confidence, score }) => {
      const key = confidence; // Puede ser un string si es necesario
      if (!acc[key]) acc[key] = { total: 0, count: 0 };
      acc[key].total += score;
      acc[key].count += 1;
      return acc;
    }, {});
  
    // Calcular promedios dinámicamente
    return Object.keys(totals).reduce((averages, key) => {
      averages[key] = totals[key].count
        ? totals[key].total / totals[key].count
        : 0;
      return averages;
    }, {});
  };

const ClaimsList = ({ claims }) => {
    
    const [page,setPage] = useState(0);
    const [rowxPage,setRowxPage] = useState(5);

    if (claims?.count === 0 || claims.length === 0) {
        return <Typography variant="h6" align="center">No se encontraron resultados.</Typography>;
    }

    
    
    const changePage = (e, newPage)=>{
        setPage(newPage);
    }

    const handleRowxPage = (e)=>{
        setRowxPage(+e.target.value);
        setPage(0);
    }

    const calculateAverages = calculateAveragesDynamic(claims.data);

    const dataInfluencer = {
        verified: calculateAverages['1'],
        questionable: calculateAverages['2'],
        debunked: calculateAverages['3']
    }

    return (
        <Grid container spacing={0} direction="row" wrap='nowrap'
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}>
            <Grid size="auto">
                <DonutChart dataInfluencer={dataInfluencer}/>
            </Grid>
            <Grid size='8'>
                <TableContainer component={Paper} sx={{ marginTop: 4,maxHeight: 415, minHeight:415 }}>
                    <Table stickyHeader >
                        <TableHead >
                            <TableRow>
                                <TableCell sx={{backgroundColor:deepPurple[500], color:'white'}}>Influencer</TableCell>
                                <TableCell sx={{backgroundColor:deepPurple[500], color:'white'}}>Tweet</TableCell>
                                <TableCell sx={{backgroundColor:deepPurple[500], color:'white'}}>Estado</TableCell>
                                <TableCell sx={{backgroundColor:deepPurple[500], color:'white'}}>Confianza</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{backgroundColor:deepPurple[100], color:'white'}}>
                            {claims.data
                            .slice(page * rowxPage, page * rowxPage + rowxPage)
                            .map((claim) => (
                                <TableRow hover key={claim._id}>
                                    <TableCell>{claim.influencer}</TableCell>
                                    <TableCell>{claim.tweet}</TableCell>
                                    <TableCell>{claim.confidence === 1 ? "Verified" : claim.confidence === 2 ? "Questionable" : "Debunked"}</TableCell>
                                    <TableCell>{claim.score}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={claims.data.length}
                    rowsPerPage={rowxPage}
                    page={page}
                    onPageChange={changePage}
                    onRowsPerPageChange={handleRowxPage}
                    sx={{backgroundColor:deepPurple[500], color:'white'}}
                />
            </Grid>
        </Grid>
    );
};

export default ClaimsList;
