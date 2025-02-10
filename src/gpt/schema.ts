import { z } from "zod";

export const withdrawSchema = z.object({
    amount: z.number().describe("The amount to withdraw."),
});

export const depositSchema = z.object({
    amount: z.number().describe("The number to deposit in the account."),
});

export const transferSchema = z.object({
    toAccount: z.number().describe("The account to transfer the amount to."),
    amount: z.number().describe("The amount to transfer."),
});

export const transactionsSchema = z.object({
    fromDate: z.string().optional().describe("The beginning date of the transactions to fetch."),
    toDate: z.string().optional().describe("The end date of the transaction to fetch."),
    size: z.number().optional().describe("The number of transactions to fetch."),
    order: z.enum(['asc','desc']).optional().describe("Describes the order in which the results are returned")
});

export type WithdrawArgs = z.infer<typeof withdrawSchema>;
export type DepositArgs = z.infer<typeof depositSchema>;
export type TransferArgs = z.infer<typeof transferSchema>;
export type TransactionsArgs = z.infer<typeof transactionsSchema>;