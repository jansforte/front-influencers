import React, { useState } from 'react';

const ClaimSearch = ({ onSearch }) => {
    const [influencer, setInfluencer] = useState('');
    const [startDate, setStartDate] = useState('2025-01-01');
    const [endtDate, setEndtDate] = useState('2025-01-01');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(influencer, startDate,endtDate);
    };

    return (
        <div className="col-6 align-self-start">
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Influencer:</label>
                <div className="col-sm-10">
                <input
                    className="form-control"
                    type="text"
                    value={influencer}
                    onChange={(e) => setInfluencer(e.target.value)}
                    placeholder="Nombre del influencer"
                    style={{ marginLeft: '10px' }}
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">start date:</label>
                <div className="col-sm-10">
                <input
                    className="form-control"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder="Fecha Inicio"
                    style={{ marginLeft: '10px' }}
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">end date:</label>
                <div className="col-sm-10">
                <input
                    className="form-control"
                    type="date"
                    value={endtDate}
                    onChange={(e) => setEndtDate(e.target.value)}
                    placeholder="Fecha Fin"
                    style={{ marginLeft: '10px' }}
                />
                </div>
            </div>
            <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
        </form>
        </div>
    );
};

export default ClaimSearch;
