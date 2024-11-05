import { createOpenAI } from '@ai-sdk/openai';
import { streamText, StreamData } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export const config = {
  runtime: 'edge',
};

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey:'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',
});

export default async function POST(req: Request) {

  const { messages } = await req.json();
  console.log(messages);

  const result = await streamText({
    model: groq('gemma-7b-it'),
    messages,

  });

  return result.toDataStreamResponse();
}