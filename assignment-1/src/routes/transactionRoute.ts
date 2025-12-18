import { Router } from "express";
import { createTransaction, deleteTransaction, getTransactionById, getTransactions, restoreTransaction, updateTransaction } from "../controllers/transactionController";

const router = Router();

router.post("/", createTransaction)
router.get("/", getTransactions)
router.get("/:id", getTransactionById)
router.put("/:id", updateTransaction)
router.delete("/:id", deleteTransaction)
router.patch("/:id/restore", restoreTransaction)

export default router;