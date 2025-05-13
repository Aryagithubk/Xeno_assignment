const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  customerIds: [{
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Customer' }],
  createdAt: { 
    type: Date, 
    default: Date.now }
});

module.exports = mongoose.model('Campaign', campaignSchema);
