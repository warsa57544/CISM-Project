const transactionService = require('../services/transactionService');

exports.createTransaction = async (req, res, next) => {
    try {
        const transaction = await transactionService.createTransaction(req.body);
        res.status(201).json(transaction);
    } catch (err) {
        next(err);
    }
};

exports.getTransactionById = async (req, res, next) => {
    try {
        const transaction = await transactionService.getTransactionById(req.params.id);
        res.json(transaction);
    } catch (err) {
        next(err);
    }
};
