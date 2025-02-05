import { get_accounts } from "./server-functions";

export default async function Home() {
  const accounts = await get_accounts();
  return <>
    {accounts.map(({ id, name, balance }) => (
      <div key={id}>
        <b>{name}</b>
        <p>Balance: {balance}</p>
      </div>
    ))}
  </>;
}
