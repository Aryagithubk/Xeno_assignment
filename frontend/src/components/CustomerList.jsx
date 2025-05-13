import React from 'react';

const CustomerList = ({ customers, selectedCustomers, onSelectCustomer }) => {
  const handleCheckboxChange = (customerId) => {
    onSelectCustomer(customerId);
  };

  return (
    <div>
      <h5>Filtered Customers</h5>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Select</th>
            <th>Customer Name</th>
            <th>Recency</th>
            <th>Frequency</th>
            <th>Monetary</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCustomers.includes(customer._id)}
                  onChange={() => handleCheckboxChange(customer._id)}
                />
              </td>
              <td>{customer.name}</td>
              <td>{customer.recency}</td>
              <td>{customer.frequency}</td>
              <td>{customer.monetary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
