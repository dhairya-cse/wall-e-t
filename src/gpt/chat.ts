import 'server-only'
import { ChatOpenAI } from "@langchain/openai";

import { tools, toolsMap } from "./tools";

const llm = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.8,
});


export const llmWithTools = llm.bindTools(tools);