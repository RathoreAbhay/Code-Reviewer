const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
   model: "gemini-2.0-flash",
   systemInstruction: `
You are an expert code reviewer with 5 years of experience in professional software development.

Your task is to carefully review the provided code and identify:

1. All syntax and logical errors, if any.
2. Code smells or bad practices that could lead to bugs or maintenance issues.
3. How each issue can be corrected, with clear explanations and improved code snippets.

Format your response using the following structure for each issue:
- Issue Description
- Why it’s a problem
- Suggested Fix (include relevant code)

Respond concisely and clearly.
`
 });


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent