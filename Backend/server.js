const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/recommend", async (req, res) => {
    try { 
        let { prompt } = req.body;

        if (Array.isArray(prompt)){
            prompt = prompt.join(" ");
        }

        const response = await client.chat.completions.create({
            model: "gpt-4o-2024-08-06",
            messages: [
                {
                  role: "system",
                  content: 'You are a video game recommendation engine. Respond with recommendations in the following format: {"recommendations": [{ "title": "Game Name", "description": "Brief description", "image": "https://image-url" }]}'},

                { 
                  role: "user", 
                  content: `Provide 5 game recommendations based on the following: ${prompt}`
                },
            ],
            temperature: 0.8,
            max_tokens: 600,
        });
        const raw = response?.choices?.[0]?.message?.content;
        let parsed;
        try {
            parsed = typeof raw == "string" ? JSON.parse(raw) : raw;
        } catch (err) {
            console.error("OpenAI API error:", err, raw);
            return res.status(500).json({ error: "Invalid response format from AI" });
        }
        res.json({ result : parsed});
    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
