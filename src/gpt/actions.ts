import type { DepositArgs, WithdrawArgs, TransferArgs, TransactionsArgs } from "./schema";

export async function depositAmount({ amount }: DepositArgs) {
    return "Deposited " + amount;
}

export async function withdrawAmount({ amount }: WithdrawArgs) {
    return "Withdrew " + amount;
}

export async function transferAmount({ toAccount, amount }: TransferArgs) {
    return `Transferred ${amount} to ${toAccount}`;
}

export async function getTransactions({ fromDate, toDate, size }: TransactionsArgs) {
    //TODO: implement this
}