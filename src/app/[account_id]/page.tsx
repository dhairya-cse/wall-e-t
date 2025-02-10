import { ChatBox } from '@/components/client-comps';
import { get_chat_history } from '../server-functions';
import { getAccountById } from '@/account';


export const dynamic = 'force-dynamic'
type PageProps = { params: Promise<{ account_id: string }> };

export default async function Page({ params }: PageProps) {

    const account_id: string = (await params).account_id;
    const account = await getAccountById(account_id);

    return <>
        <a href="/">Home</a>
        <p>{account.name}({account_id})</p>
        <ChatBox init_chats={await get_chat_history(account_id)} init_balance={account.balance} />
    </>;
}