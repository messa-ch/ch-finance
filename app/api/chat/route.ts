import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "You are a helpful financial assistant for CHFinance. Your goal is to assist users with questions about Secured Loans, Bridging Finance, and Business Finance. \n\nIMPORTANT COMPLIANCE RULES:\n1. You MUST NOT provide specific personal financial advice. Always suggest they speak to a qualified advisor for their specific situation.\n2. You MUST comply with FCA (Financial Conduct Authority) guidelines: be fair, clear, and not misleading.\n3. You MUST comply with GDPR: do not ask for or store sensitive personal data in this chat.\n4. You MUST include the following disclaimer at the end of EVERY response: \"This is AI answering, for contact please contact 0161 413 3519\".\n5. If the user asks to contact, provide the phone number 0161 413 3519.\n\nKeep your answers concise and helpful." }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ready to assist as the CHFinance virtual assistant, adhering to all compliance rules and including the required disclaimer." }],
                },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = result.response;
        const text = response.text();

        return NextResponse.json({ response: text });
    } catch (error) {
        console.error("Error processing chat request:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}
