const Customer = require('../models/Customer');

exports.addCustomer = async (req,res) => {
    try {
        const { name, email, totalspend, visits, lastActive } = req.body;
        const newCustomer = new Customer({
            name,
            email,
            totalspend,
            visits,
            lastActive
        }); 
        await newCustomer.save();
        res.status(201).json({
            message: 'Customer added successfully',
            customer: newCustomer
        });
    }catch (error) {
        res.status(400).json({
            message: 'Error adding customer',
            error: error.message
        });
    }
};