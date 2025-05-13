import React, { useState } from 'react';

const SegmentBuilder = ({ onRulesChange }) => {
  const [rules, setRules] = useState([]);

  const [newRule, setNewRule] = useState({
    field: 'age',
    operator: 'gt',
    value: ''
  });

  const addRule = () => {
    if (newRule.value === '') {
      alert('Please enter a value');
      return;
    }

    const updatedRules = [...rules, newRule];
    setRules(updatedRules);
    onRulesChange(updatedRules);

    
    setNewRule({ field: 'age', operator: 'gt', value: '' });
  };

  const removeRule = (index) => {
    const updatedRules = rules.filter((_, i) => i !== index);
    setRules(updatedRules);
    onRulesChange(updatedRules);
  };

  return (
    <div className="card p-3 mb-4">
      <h5>Segment Builder</h5>

      <div className="row align-items-end">
        <div className="col">
          <label>Field</label>
          <select
            className="form-control"
            value={newRule.field}
            onChange={(e) => setNewRule({ ...newRule, field: e.target.value })}
          >
            <option value="age">Age</option>
            <option value="city">City</option>
            <option value="gender">Gender</option>
          </select>
        </div>

        <div className="col">
          <label>Operator</label>
          <select
  className="form-control"
  value={newRule.operator}
  onChange={(e) => setNewRule({ ...newRule, operator: e.target.value })}
>
  <option value="gt">Greater than ( &gt; )</option>
  <option value="lt">Less than ( &lt; )</option>
  <option value="eq">Equal to ( = )</option>
</select>

        </div>

        <div className="col">
          <label>Value</label>
          <input
            type="text"
            className="form-control"
            value={newRule.value}
            onChange={(e) => setNewRule({ ...newRule, value: e.target.value })}
          />
        </div>

        <div className="col-auto">
          <button className="btn btn-primary" onClick={addRule}>
            Add Rule
          </button>
        </div>
      </div>

      <ul className="list-group mt-3">
        {rules.map((rule, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {`${rule.field} ${rule.operator} ${rule.value}`}
            <button className="btn btn-sm btn-danger" onClick={() => removeRule(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SegmentBuilder;
