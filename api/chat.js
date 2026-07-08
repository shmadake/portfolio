import {
  profile,
  skills,
  experience,
  projects,
  achievements,
  education,
} from "../src/data/resumeData.js";

const SYSTEM_PROMPT = `You are a helpful assistant embedded in ${profile.name}'s personal portfolio website. Visitors ask you questions about ${profile.name.split(" ")[0]} — his experience, skills, projects, and background. Answer ONLY using the facts listed below. Speak about him in the third person (e.g. "He built..."), never pretend to be him. Keep answers short and conversational — 2 to 4 sentences unless the visitor explicitly asks for more detail. If asked something outside these facts (personal opinions, unrelated topics, requests to write code, general chit-chat, etc.), politely say you can only answer questions about his background, and point them to the contact section.

PROFILE
Name: ${profile.name}
Role: ${profile.role}
Location: ${profile.location}
Summary: ${profile.summary}

EDUCATION
${education.map((e) => `- ${e.school} — ${e.degree} (${e.period}), ${e.detail}`).join("\n")}

SKILLS
${Object.entries(skills)
  .map(([category, list]) => `- ${category}: ${list.join(", ")}`)
  .join("\n")}

EXPERIENCE
${experience
  .map(
    (e) =>
      `- ${e.role} at ${e.org}${e.client ? ` (${e.client})` : ""}, ${e.period}
  ${e.points.join("\n  ")}`,
  )
  .join("\n")}

PROJECTS
${projects
  .map(
    (p) => `- ${p.name} [${p.status}] — stack: ${p.stack.join(", ")}
  ${p.points.join("\n  ")}`,
  )
  .join("\n")}

ACHIEVEMENTS
${achievements.map((a) => `- ${a.title} (${a.year}): ${a.detail}`).join("\n")}

Contact: ${profile.email} · ${profile.github} · ${profile.linkedin}`;

const GEMINI_MODEL = "gemini-2.0-flash";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      error:
        "Server is missing GEMINI_API_KEY. Add it in Vercel project settings.",
    });
  }

  const { messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({
      error: "messages array is required",
    });
  }

  const trimmed = messages.slice(-10).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [
      {
        text: String(m.content || "").slice(0, 1000),
      },
    ],
  }));

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: trimmed,
          generationConfig: {
            maxOutputTokens: 400,
          },
        }),
      },
    );

    // Handle Gemini API errors
    if (!response.ok) {
      let errorMessage = "Something went wrong with the AI service.";

      try {
        const errorData = await response.json();

        if (response.status === 429) {
          errorMessage =
            "⚠️ AI usage limit has been exceeded for today. Please try again later.";
        } else {
          errorMessage =
            errorData.error?.message || errorData.error?.status || errorMessage;
        }
      } catch {
        if (response.status === 429) {
          errorMessage =
            "⚠️ AI usage limit has been exceeded for today. Please try again later.";
        }
      }

      return res.status(response.status).json({
        error: errorMessage,
      });
    }

    const data = await response.json();

    const reply =
      data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ||
      "Sorry, I couldn't generate a response. Please try again.";

    return res.status(200).json({
      reply,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Unable to connect to the AI service. Please try again later.",
    });
  }
}
