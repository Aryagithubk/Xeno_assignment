const Order = require('../models/Order');
const Customer = require('../models/Customer');

exports.addOrder = async (req, res) => {
  try {
    const { customerId, amount } = req.body;

    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ success: false, error: 'Customer not found' });
    }

    const newOrder = new Order({ customer: customerId, amount });
    await newOrder.save();

    // Update customer totalSpend + visits
    customer.totalSpend += amount;
    customer.visits += 1;
    customer.lastActive = new Date();
    await customer.save();

    res.status(201).json({ success: true, data: newOrder });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
