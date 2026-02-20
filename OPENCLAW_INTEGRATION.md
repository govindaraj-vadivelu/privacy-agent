# OpenClaw Integration Guide

This privacy agent is designed to run **inside OpenClaw** as a skill or sub-agent.

## Architecture

```
User → OpenClaw Session → Privacy Agent Skill → Tools (web_search, web_fetch) → Report
```

## Integration Steps

### 1. As an OpenClaw Skill

Create a skill that can be invoked from the main agent:

**Location:** `/usr/lib/node_modules/openclaw/skills/privacy-agent/SKILL.md`

```markdown
# Privacy Agent Skill

Analyzes privacy policies and generates reports.

## Usage

User: "Analyze the privacy policy for Google and Facebook"

Agent:
1. Extracts service names
2. Calls privacy agent functions
3. Returns structured report

## Tools Required
- web_search
- web_fetch
- LLM (for analysis)
```

### 2. As a Sub-Agent Session

Spawn the privacy agent as an isolated session:

```javascript
// From main OpenClaw session
const result = await sessions_spawn({
  task: "Analyze privacy policies for Google, Facebook, and Amazon. Generate a report.",
  agentId: "privacy-agent",
  cleanup: "keep"
});
```

### 3. Direct Tool Integration

The agent can be called directly from OpenClaw's main session:

```javascript
// Example invocation from AGENTS.md context
const { runPrivacyAudit } = require('./privacy-agent/backend/agent');

const tools = {
  web_search: (params) => { /* call OpenClaw web_search */ },
  web_fetch: (params) => { /* call OpenClaw web_fetch */ }
};

const reports = await runPrivacyAudit(['Google', 'Facebook'], 'user@example.com', tools);
```

## Current Implementation

For now, this is a **standalone prototype**:
- Backend: Express server (REST API)
- Frontend: React app (Vite)
- Integration: Manual (not yet hooked into OpenClaw's tool system)

## Next Steps

To fully integrate with OpenClaw:

1. **Create a skill definition** in `/usr/lib/node_modules/openclaw/skills/privacy-agent/`
2. **Wrap agent logic** in OpenClaw-compatible tool calls
3. **Use OpenClaw's LLM** for analysis (instead of external API)
4. **Deploy frontend** to be served by OpenClaw's web interface
5. **Add cron jobs** for policy monitoring

## Testing

Run the backend:
```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent
node backend/server.js
```

Run the frontend:
```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent/frontend
npm install
npm run dev
```

Access: http://localhost:5173

## Example OpenClaw Usage

Once integrated, users can simply say:

- "Analyze Google's privacy policy"
- "Check if TikTok is safe for my kid"
- "Monitor my subscriptions for privacy changes"

The agent will autonomously handle everything.
