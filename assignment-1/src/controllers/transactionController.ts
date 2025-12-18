import { Transaction } from "../models/transaction";
import { Request, Response } from "express";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { type, amount, description, date } = req.body

    if (!type || !amount) {
      return res.status(400).json({ message: "type and amount are required" });
    }

    const transaction = new Transaction({
      type,
      amount,
      description,
      date: date
    });

    const saved = await transaction.save();
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const { type } = req.query

    const filter: any = { isDeleted: false };
    if (type) filter.type = type;

    const transactions = await Transaction.find(filter).sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id);
    if (!transaction || transaction.isDeleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, amount, description, date } = req.body;

    const transaction = await Transaction.findById(id);
    if (!transaction || transaction.isDeleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (type) transaction.type = type;
    if (amount !== undefined) transaction.amount = amount;
    if (description !== undefined) transaction.description = description;
    if (date) transaction.date = new Date(date);

    const updated = await transaction.save();
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id);
    if (!transaction || transaction.isDeleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    transaction.isDeleted = true;
    await transaction.save();

    res.status(200).json({ message: "Transaction soft deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const restoreTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id);
    if (!transaction || !transaction.isDeleted) {
      return res.status(404).json({ message: "Transaction not found or not deleted" });
    }

    transaction.isDeleted = false;
    await transaction.save();

    res.status(200).json({ message: "Transaction restored", transaction });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};