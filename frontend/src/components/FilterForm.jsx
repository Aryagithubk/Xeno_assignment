import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [recency, setRecency] = useState('');
  const [frequency, setFrequency] = useState('');
  const [monetary, setMonetary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ recency, frequency, monetary });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col">
          <input type="number" placeholder="Recency (days <)" className="form-control"
            value={recency} onChange={(e) => setRecency(e.target.value)} />
        </div>
        <div className="col">
          <input type="number" placeholder="Frequency (visits >)" className="form-control"
            value={frequency} onChange={(e) => setFrequency(e.target.value)} />
        </div>
        <div className="col">
          <input type="number" placeholder="Monetary (spend >)" className="form-control"
            value={monetary} onChange={(e) => setMonetary(e.target.value)} />
        </div>
        <div className="col">
          <button className="btn btn-primary w-100">Filter Customers</button>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
