import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampaignLogs = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load campaigns');
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Campaign Logs</h2>

      {campaigns.length === 0 ? (
        <p>No campaigns found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Customer Count</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(c => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.customerIds.length}</td>
                <td>{new Date(c.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CampaignLogs;
