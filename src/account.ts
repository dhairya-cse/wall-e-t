import 'server-only'
import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator';

type Account = {
    id: number;
    balance: number;
    name: string;
    transactions: Transaction[];
    chatHistory: { role: "user" | "bot", message: string }[];
}

type Transaction = {
    id: string;
    amount: number;
    date: Date;
    type: "credit" | "debit";
    description: string;
}


let accounts:Account[];

export async function getAccounts(): Promise<Account[]> {

    if(accounts)
    {
        return accounts;    
    }

    accounts = [];
    for (let i = 0; i < 10; i++) {
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
        transactions: createInitialTransaction(i),
        chatHistory:[]
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
export async function getAccountById(account_id: number | string) {
    return (await getAccounts())[Number(account_id)];
}
