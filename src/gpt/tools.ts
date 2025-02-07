import { tool } from "@langchain/core/tools";
import { depositSchema, withdrawSchema, transactionsSchema, transferSchema } from "./schema";
import { depositAmount, withdrawAmount, transferAmount, getTransactions } from "./actions";

export const depositTool = tool(
    depositAmount,
    {
        name: "DepositMoney",
        description: "Deposits amount into an account that is logged in",
        schema: depositSchema,
    }
);

export const withdrawalTool = tool(
    withdrawAmount,
    {
        name: "WithdrawMoney",
        description: "Withdraws amount from an account that is logged in",
        schema: withdrawSchema,
    }
);

export const transferTool = tool(
    transferAmount,
    {
        name: "TransferMoney",
        description: "Transfers the amount from account that is logged in to the given account",
        schema: transferSchema,
    }
);

export const transactionsTool = tool(
    getTransactions,
    {
        name: "GetTransactions",
        description: "Returns the transactions of the account that is logged in",
        schema: transactionsSchema,
    }
);