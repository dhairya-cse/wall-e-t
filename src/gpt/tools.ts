import 'server-only'
import { DynamicStructuredTool, tool } from "@langchain/core/tools";
import { depositSchema, withdrawSchema, transactionsSchema, transferSchema } from "./schema";
import { depositAmount, withdrawAmount, transferAmount, getTransactions } from "./actions";
import { ToolCall } from "@langchain/core/messages/tool";

export const depositTool = tool(
    depositAmount,
    {
        name: "DepositMoney",
        description: "Deposits amount into an account that is logged in",
        schema: depositSchema,
    }
);

export const withdrawalTool = tool(
    withdrawAmount,
    {
        name: "WithdrawMoney",
        description: "Withdraws amount from an account that is logged in",
        schema: withdrawSchema,
    }
);

export const transferTool = tool(
    transferAmount,
    {
        name: "TransferMoney",
        description: "Transfers the amount from account that is logged in to the given account",
        schema: transferSchema,
    }
);

export const transactionsTool = tool(
    getTransactions,
    {
        name: "GetTransactions",
        description: "Returns the transactions of the account that is logged in",
        schema: transactionsSchema,
    }
);

export const tools = [depositTool, withdrawalTool, transferTool, transactionsTool];

export const toolsMap: Record<string, DynamicStructuredTool<any>> = Object.freeze(
    tools.reduce((map, _tool) => {
        if (_tool?.name) {
            map[_tool.name] = _tool;
        }
        return map;
    }, {} as Record<string, DynamicStructuredTool<any>>)
);

export async function callTool(tool_call: ToolCall) {
    return await toolsMap[tool_call.name].invoke(tool_call.args);
}