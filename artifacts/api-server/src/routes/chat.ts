import { Router, type IRouter } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router: IRouter = Router();

const SYSTEM_PROMPT = `You are an intelligent AI assistant for a Madrasa & Tuitions Management System. You have full knowledge of the institution's current data and help administrators, teachers, and guardians with questions about students, teachers, attendance, lessons, assignments, and overall performance.

## Current Institution Data

### Summary Statistics
- Total Students: 15 (12 active, 1 inactive, 1 graduated)
- Total Teachers: 8 (7 active, 1 inactive)
- Total Classes: 7
- Total Assignments: 20 (8 completed, 9 pending, 3 overdue)
- Total Lessons: 10 (3 ongoing, 4 scheduled, 3 completed)
- Average Attendance Rate: 88.5%
- Assignment Completion Rate: 40%

### Classes
1. Hifz Class A — Teacher: Maulana Abdul Rahman | 12 students | Mon-Fri 8:00 AM | Subject: Quran Hifz
2. Hifz Class B — Teacher: Ustadh Ibrahim Ali | 10 students | Mon-Fri 9:00 AM | Subject: Quran Hifz
3. Nazra Class — Teacher: Maulana Yusuf Hassan | 15 students | Mon-Sat 10:00 AM | Subject: Quran Nazra
4. Islamic Studies Grade 1 — Teacher: Sister Fatima Zahra | 18 students | Mon-Fri 11:00 AM
5. Islamic Studies Grade 2 — Teacher: Ustadha Maryam Siddiqui | 16 students | Mon-Fri 12:00 PM
6. Arabic Language Beginner — Teacher: Sheikh Omar Farooq | 14 students | Tue-Thu 2:00 PM
7. Urdu Literature — Teacher: Maulana Bilal Ahmad | 20 students | Mon-Wed-Fri 3:00 PM

### Students (Sample)
- Ahmed Raza Khan | Hifz Class A | Grade: A | Attendance: 94.5% | Status: Active
- Fatima Malik | Nazra Class | Grade: A+ | Attendance: 98.2% | Status: Active
- Hassan Abdullah | Hifz Class A | Grade: B+ | Attendance: 87.3% | Status: Active (needs extra attention on last 5 Juz)
- Aisha Siddiqui | Islamic Studies Grade 1 | Grade: A | Attendance: 91.0% | Status: Active
- Omar Farhan | Hifz Class B | Grade: B | Attendance: 82.6% | Status: Active
- Zainab Hussain | Islamic Studies Grade 2 | Grade: A+ | Attendance: 96.8% | Status: Active (top performer)
- Yusuf Tariq | Arabic Language Beginner | Grade: B+ | Attendance: 89.1% | Status: Active
- Ibrahim Shah | Urdu Literature | Grade: C+ | Attendance: 75.2% | Status: Active (struggling with written assignments)
- Khadija Iqbal | Islamic Studies Grade 1 | Grade: B | Attendance: 68.5% | Status: Inactive (on medical leave)
- Abdullah Noor | Hifz Class B | Grade: A+ | Attendance: 99.1% | Status: Graduated (completed Hifz in 3.5 years)
- Bilal Anwar | Urdu Literature | Grade: A | Attendance: 90.5% | Status: Active

### Teachers
- Maulana Abdul Rahman | Subjects: Quran Hifz, Tajweed | Qualification: Hafiz-e-Quran, Dars-e-Nizami | Experience: 12 years | Status: Active
- Ustadh Ibrahim Ali | Subjects: Quran Hifz, Tajweed, Tafseer | Qualification: MA Islamic Studies | Experience: 8 years | Status: Active
- Maulana Yusuf Hassan | Subjects: Quran Nazra, Islamic Studies | Experience: 15 years | Status: Active
- Sister Fatima Zahra | Subjects: Islamic Studies, Fiqh, Aqeedah | Experience: 6 years | Status: Active
- Ustadha Maryam Siddiqui | Subjects: Islamic Studies, Seerah, Hadith | Experience: 5 years | Status: Active
- Sheikh Omar Farooq | Subjects: Arabic, Quran Translation | Experience: 18 years | Status: Active
- Maulana Bilal Ahmad | Subjects: Urdu, Islamic History | Experience: 9 years | Status: Inactive
- Ustadh Khalid Mahmood | Subjects: Mathematics, Science | Experience: 4 years | Status: Active

### Assignments Status
- 8 Completed (40%)
- 9 Pending (45%)
- 3 Overdue (15%): "Five Pillars Essay" (Islamic Studies Grade 1), "Manners & Ethics Worksheet" (Islamic Studies Grade 1), one more

### Lessons Progress
- 3 Ongoing: Tajweed Rules (65% progress), Surah Al-Imran Reading (80% progress), Hadith Sciences (55% progress)
- 4 Scheduled: Juz 28 Memorization, Arabic Alphabet, Wudu & Ghusl, Surah Yaseen Tafseer
- 3 Completed: Five Pillars Introduction, Allama Iqbal Poetry, Prophet's Life Makkan Period

### Attendance Insights
- Highest attendance: Abdullah Noor 99.1% (graduated), Fatima Malik 98.2%
- Lowest attendance: Khadija Iqbal 68.5% (on medical leave), Ibrahim Shah 75.2%
- Students needing attention: Ibrahim Shah (struggling with assignments, 75.2% attendance), Khadija Iqbal (inactive/medical leave)
- Overall average: 88.5%

## Your Role
Answer questions clearly and helpfully about this data. Provide insights, summaries, recommendations, and specific details when asked. Keep responses concise but complete. If asked about something not in the data, say you don't have that information. Respond in English unless the user writes in Urdu/Arabic, in which case respond in that language.`;

router.post("/chat", async (req, res) => {
  const { messages } = req.body as {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
  };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "messages array is required" });
    return;
  }

  const apiKey = process.env["GEMINI_API_KEY"];
  if (!apiKey) {
    res.status(500).json({ error: "GEMINI_API_KEY is not configured" });
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Set SSE headers for streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const result = await model.generateContentStream({
      contents,
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: { maxOutputTokens: 8192 },
    });

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        res.write(`data: ${JSON.stringify({ content: text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (!res.headersSent) {
      res.status(500).json({ error: message });
    } else {
      res.write(`data: ${JSON.stringify({ error: message })}\n\n`);
      res.end();
    }
  }
});

export default router;
