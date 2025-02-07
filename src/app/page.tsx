import { get_accounts } from "./server-functions";

export default async function Home() {
  const accounts = await get_accounts();
  return <>
    {accounts.map(({ id, name, balance }) => (
      <AccountComponent key={id} id={id} name={name} balance={balance} />
    ))}
  </>;
}


type AccountComponentsProps = {
  id: number;
  name: string;
  balance: number;
}

export function AccountComponent({ id, name, balance }: AccountComponentsProps) {
return <a key={id} href={`/${id}`}>
  <b>{name}</b>
  <p>Balance: {balance}</p>
</a>
}