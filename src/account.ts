import 'server-only';
import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator';

type Account = {
    id: number;
    balance: number;
    name: string;
    transactions: Transaction[];
}

type Transaction = {
    id: string;
    amount: number;
    date: Date;
    type: "credit" | "debit";
    description: string;
}

export const accounts = createAccounts(10);

function createAccounts(n: number): Account[] {
    const accounts = [];
    for (let i = 0; i < n; i++) {
        accounts.push(createAccount(i));
    }
    return accounts;
}

function createAccount(i: number): Account {
    const balance = Math.round(Math.random() * 10000);

    return {
        id: i,
        balance: balance,
        name: generateRandomAccountName(),
        transactions: createInitialTransaction(i)
    }
}

function createInitialTransaction(amount: number) {
    return [
        {
            amount: amount,
            date: new Date(),
            type: 'credit',
            description: "Initial deposit"
        } as Transaction
    ];
}


export function generateRandomAccountName(): string {
    return uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: " ",
        length: 2,
        style: "capital",
    });
}