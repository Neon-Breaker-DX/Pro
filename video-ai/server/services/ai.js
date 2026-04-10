async function generateInsights(transcript) {
  // TODO: Call your LLM with prompts/masterPrompt.js
  return { summary: `AI summary placeholder for transcript: ${transcript.slice(0, 60)}` };
}

module.exports = { generateInsights };
