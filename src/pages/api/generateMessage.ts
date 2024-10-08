import { NextResponse } from 'next/server';
export const runtime = 'edge';

const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


export default async function handler(req: Request) {
  try {
    const { name, hiringManager, profileInfo, keySellingPoints } = await req.json();

    const prompt = `
      My name is ${name}. I'm reaching out to ${hiringManager}, ${profileInfo}.
      Here are my key selling points:
      - ${keySellingPoints}
      Write a personalized and professional LinkedIn message of up to 250 characters where I
       introduce myself to ${hiringManager}, compliment their achievements, and subtly showcase my relevant s
       kills and experience. The message should be
       engaging and tailored to connect my key selling points to ${hiringManager}'s accomplishments.
    `;

    console.log("Generated prompt:", prompt);

    const result = await model.generateContent(prompt);
    console.log("Result from generateContent:", result);

    const response = await result.response;
    console.log("Response text:", response);
    
    const text = await response.text();
    console.log("Generated text:", text);
    return Response.json({ "content": text });
    
    

  } catch (error: any) {
    console.error('Error:', error);
    return new Response(error.message || 'Something went wrong!', {
      status: 500
    });
  }
}
