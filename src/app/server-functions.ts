'use server'

import { getAccounts, getAccountById } from '@/account'
import { getBalanceInternal } from '@/gpt/actions';
import { llmWithTools } from '@/gpt/chat';
import { callTool } from '@/gpt/tools';

export async function get_accounts() {
    return (await getAccounts()).map(({ id, name, balance }, index) => ({ id, name, balance }));
}

export async function chat(message: string){
    const res = await llmWithTools.invoke(message);
    if(res.tool_calls){
        if(res.tool_calls.length==1)
        {
            //TODO: handle human in the loop
            return await callTool(res.tool_calls[0]);
        }
        else
        {
            //TODO: Handle multiple tool calls
            return "I am not sure what you are asking for, could you please rephrase your request?";
        }
    } 
    else {
        // TODO: Handle incomplete requests
        return "I am sorry, I am unable to understand your request at the moment."
    }
}

export async function getBalance(){
    return await getBalanceInternal();
}

export async function get_chat_history(account_id: string) {
    if (Number(account_id))
        return (await getAccountById(account_id)).chatHistory || [];
}