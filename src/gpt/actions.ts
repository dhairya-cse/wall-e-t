import 'server-only'
import type { DepositArgs, WithdrawArgs, TransferArgs, TransactionsArgs } from "./schema";
import { cookies } from 'next/headers'
import { getAccountById } from '@/account';

export async function depositAmount({ amount }: DepositArgs) {
    const account = await getLoggedInAccount();
    account.balance += amount;
    return `Deposited £${amount}`;
}

export async function withdrawAmount({ amount }: WithdrawArgs) {
    const account = await getLoggedInAccount();
    if (amount >= account.balance) {
        return `Your account balance:${account.balance} is not sufficient for withdrawing ${amount}`;
    }
    account.balance -= amount;
    return `Withdrew £${amount}`;
}

export async function transferAmount({ toAccount, amount }: TransferArgs) {
    const account = await getLoggedInAccount();
    if (amount >= account.balance) {
        return `Your account balance:${account.balance} is not sufficient for withdrawing ${amount}`;
    }

    const destAccount = await getAccountById(toAccount);

    if (!destAccount) {
        return "The destination account doesn't exist";
    }
    // This is done in a transaction.
    account.balance -= amount;
    destAccount.balance += amount;
    return `Transferred £${amount} to ${destAccount.name}`;

}

export async function getTransactions({ fromDate, toDate, size, order }: TransactionsArgs) {
    const account = await getLoggedInAccount();
    //TODO: implement this
}

export async function getLoggedInAccount() {
    const cookieStore = await cookies();
    const accountId = cookieStore.get('account-id');
    //TODO:  handle unauthenticated request
    return await getAccountById(accountId!.value);
}

export async function getBalanceInternal() {
    const account = await getLoggedInAccount();
    return account.balance;
}