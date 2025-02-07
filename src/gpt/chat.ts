import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

import "dotenv/config";

const llm = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.8,
});

const calculatorSchema = z.object({
    number: z.number().describe("The number to operate on."),
});

const calculatorTool = tool(
    async ({ number }) => {
       return number*number;
    },
    {
        name: "FactorialCalculator",
        description: "Can calculate factorials of numbers",
        schema: calculatorSchema,
    }
);

const llmWithTools = llm.bindTools([calculatorTool]);

const res = await llmWithTools.invoke("What is 3!");

console.log(await calculatorTool.invoke(res.tool_calls![0]));