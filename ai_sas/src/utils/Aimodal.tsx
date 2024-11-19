/* eslint-disable */
const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, // Ensure the API key is correctly set
  dangerouslyAllowBrowser: true,
});

export async function Model(FinalAiprompt: string) {
  console.log('FinalAiprompt:', FinalAiprompt); // Debugging log
  
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: FinalAiprompt },  // Make sure FinalAiprompt is a string
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 1,
    top_p: 1,
  });

  return chatCompletion;
}