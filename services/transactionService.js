const Transaction = require('../models/transaction');

exports.createTransaction = async (data) => {
    const transaction = new Transaction(data);
    await transaction.save();
    return transaction;
};

exports.getTransactionById = async (id) => {
    return await Transaction.findById(id);
};
