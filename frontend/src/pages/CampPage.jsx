import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SegmentBuilder from '../components/SegmentBuilder';
import CustomerList from '../components/CustomerList';
import CampaignForm from '../components/CampForm';

const CampaignPage = () => {
  const [segmentRules, setSegmentRules] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [allCustomers, setAllCustomers] = useState([]);

  // Fetch all customers once on page load
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/customers');
        setAllCustomers(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load customers');
      }
    };
    fetchCustomers();
  }, []);

  const handleRulesChange = (rules) => {
    setSegmentRules(rules);
    applyRulesToCustomers(rules, allCustomers);
  };

  const applyRulesToCustomers = (rules, customers) => {
    if (rules.length === 0) {
      setFilteredCustomers([]);
      return;
    }

    const matched = customers.filter(customer => {
      return rules.every(rule => {
        const { field, operator, value } = rule;
        const customerValue = customer[field];

        if (operator === 'gt') {
          return customerValue > value;
        } else if (operator === 'lt') {
          return customerValue < value;
        } else if (operator === 'eq') {
          return customerValue === value;
        }
        return false;
      });
    });

    setFilteredCustomers(matched);
  };

  const refreshPage = () => {
    setSegmentRules([]);
    setFilteredCustomers([]);
  };

  return (
    <div className="container mt-4">
      <h2>Create New Campaign</h2>

      <SegmentBuilder onRulesChange={handleRulesChange} />

      <CustomerList customers={filteredCustomers} />

      <CampaignForm
        selectedCustomers={filteredCustomers.map(c => c._id)}
        onSuccess={refreshPage}
      />
    </div>
  );
};

export default CampaignPage;
