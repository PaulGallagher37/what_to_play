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
            model: "gpt-4o-mini",
            messages: [
                { 
                  role: "system", 
                  content: [ {type: "text", text: "You are a video game recommendation engine."} ] 
                },
                { 
                  role: "user", 
                  content: [ {type: "text", text: prompt} ] 
                },
            ],
            temperature: 0.8,
        });

        res.json({ result: response.choices[0].message.content });
    } catch (err) {
        console.error("OpenAI API error:", err);
        res.status(500).json({ error: err.message || String(err) });
    }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
