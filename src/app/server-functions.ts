'use server'

import { accounts } from '@/account'

export async function get_accounts() {
    return accounts.map(({ id, name, balance }, index) => ({ id, name, balance }));
}