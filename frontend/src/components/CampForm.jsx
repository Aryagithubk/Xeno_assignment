import React, { useState } from 'react';
import axios from 'axios';

const CampaignForm = ({ selectedCustomers, onSuccess }) => {
  const [campaignName, setCampaignName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!campaignName || selectedCustomers.length === 0) {
      alert('Please enter campaign name and select at least one customer.');
      return;
    }

    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/campaigns', {
        name: campaignName,
        customerIds: selectedCustomers,
      });

      alert('Campaign created successfully!');
      setCampaignName('');
      onSuccess();  
    } catch (error) {
      console.error(error);
      alert('Failed to create campaign.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Campaign Name</label>
        <input
          type="text"
          className="form-control"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Creating...' : 'Create Campaign'}
      </button>
    </form>
  );
};

export default CampaignForm;
