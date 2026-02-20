# Privacy Agent

An agentic AI assistant built with OpenClaw that analyzes privacy policies, answers questions, and takes action on behalf of users.

## Use Case: Personal Privacy Audit

**Goal:** User provides a list of services (e.g., Google, Facebook, Amazon), and the agent:
1. Finds and fetches each privacy policy
2. Analyzes what data is collected, shared, and retained
3. Generates a plain-language report
4. Optionally drafts GDPR data export requests

## Architecture

```
User Input (list of services)
   ↓
OpenClaw Agent (orchestrator)
   ↓
├─ web_search (find privacy policy URLs)
├─ web_fetch (extract policy text)
├─ LLM analysis (structured extraction)
├─ Report generation (summary + risk scores)
└─ Action executor (draft requests)
```

## Tech Stack

- **Agent Framework:** OpenClaw (native)
- **Backend:** Node.js
- **Frontend:** React (Vite)
- **AI:** Claude Sonnet 4.5 (via OpenClaw)
- **Tools:** `web_search`, `web_fetch`, `exec` (for scripts)

## Project Structure

```
privacy-agent/
├── backend/           # OpenClaw agent logic
│   ├── agent.js       # Main agent orchestrator
│   ├── tools/         # Custom tools (policy fetcher, analyzer)
│   └── prompts/       # LLM prompts for analysis
├── frontend/          # React UI
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── api/
│   └── package.json
├── scripts/           # Utility scripts
└── README.md
```

## Next Steps

1. Build backend agent logic
2. Create React frontend
3. Test with real privacy policies
4. Add caching and rate limiting
5. Deploy
