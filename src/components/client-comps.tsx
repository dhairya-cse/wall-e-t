'use client'
import { chat, getBalance } from "@/app/server-functions";
import { useState } from "react";

export function ChatBox({ init_chats, init_balance }: { init_balance: number, init_chats?: { role: string, message: string }[] }) {
  const [chats, setChats] = useState(init_chats ?? []);
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(init_balance);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleSend = async () => {
    setChats([...chats, { role: "user", message }]);
    const response = await chat(message);
    //TODO: error handling and handling different types of responses
    setChats([...chats, { role: "bot", message: response }]);
    setBalance(await getBalance());
    setMessage('');
  }

  return <div>
    <div>Balance: {balance}</div>
    <div>
      {chats.map(({ role, message }, index) => (
        <div key={index}>
          <b>{role}:</b> {message}
        </div>
      ))}
    </div>
    <div>
      <input type="text" value={message} onChange={handleInputChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  </div>
}