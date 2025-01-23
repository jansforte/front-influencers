import React from 'react';

const ClaimsList = ({ claims }) => {
    
    if (claims.count === 0 || claims.length === 0) {
        return <p>No se encontraron resultados.</p>;
    }
    
    return (
        <table className='table table-dark table-hover' width={100}>
            <thead>
                <tr>
                    <th>Influencer</th>
                    <th>Tweet</th>
                    <th>Estado</th>
                    <th>Confianza</th>
                </tr>
            </thead>
            <tbody>
                {claims.data.map((claim) => (
                    <tr key={claim._id}>
                        <td>{claim.influencer}</td>
                        <td>{claim.tweet}</td>
                        <td>{claim.confidence === 1 ? "Verified" : claim.confidence === 2 ? "Questionable" : "Debunked" }</td>
                        <td>{claim.score}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ClaimsList;
