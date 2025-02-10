import { getAccountById } from '@/account';
import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation';

export async function GET(request: Request,
    { params }: { params: Promise<{ account_id: string }> }) {
    const account_id: string = (await params).account_id;
    const res = await login(account_id);
    if (!res) {
        return notFound();
    }
    else {
        return redirect(`/${account_id}`);
    }
}

async function login(account_id: string) {
    const cookieStore = await cookies();
    cookieStore.set('account-id', account_id);
    return await getAccountById(account_id);
}