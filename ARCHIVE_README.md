# Privacy Agent - Project Archive

## 📦 What's Included

This archive contains the complete Privacy Agent project built with OpenClaw.

### Project Structure

```
privacy-agent/
├── README.md                   # Project overview
├── DEMO_GUIDE.md               # How to run the demo
├── STATUS.md                   # Current project status
├── TODO.md                     # Future improvements
├── OPENCLAW_INTEGRATION.md     # OpenClaw integration guide
├── DEMO.md                     # Example walkthrough
│
├── backend/
│   ├── agent.js                # Core agent logic
│   ├── openclaw-agent.js       # OpenClaw-integrated version
│   ├── server.js               # Express REST API
│   └── test.js                 # Unit tests
│
├── frontend/                   # React UI (Vite)
│   ├── src/
│   │   ├── App.jsx            # Main React component
│   │   └── App.css            # Styling
│   └── package.json
│
├── GOOGLE_ANALYSIS.md          # Example: Google privacy analysis
├── GOOGLE_GDPR_REQUEST.txt     # Example: GDPR request template
├── live-demo.js                # Standalone demo script
├── setup-demo.sh               # Demo setup script
│
└── package.json                # Node.js dependencies
```

### What This Agent Does

**Privacy Agent** is an agentic AI assistant that:
- ✅ Fetches privacy policies from websites automatically
- ✅ Analyzes them for key privacy concerns
- ✅ Generates plain-language reports with risk scores
- ✅ Creates GDPR data request templates
- ✅ Can monitor policy changes over time (future)

### Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** React (Vite)
- **Agent Framework:** OpenClaw
- **Tools:** `web_fetch`, `web_search` (via OpenClaw)
- **AI:** Claude Sonnet 4.5 (via OpenClaw)

### Quick Start

1. **Extract the archive:**
   ```bash
   tar -xzf privacy-agent.tar.gz
   cd privacy-agent
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd frontend && npm install && cd ..
   ```

3. **Run the demo:**
   
   **Option A: Standalone script (real analysis)**
   ```bash
   node live-demo.js
   ```
   
   **Option B: Full web app**
   ```bash
   # Terminal 1: Start backend
   node backend/server.js
   
   # Terminal 2: Start frontend
   cd frontend && npm run dev
   ```
   
   Then open: http://localhost:5173

### Files Generated (Examples)

- `GOOGLE_ANALYSIS.md` - Privacy analysis for Google
  - Risk score: 7/10 🔴
  - Data collected: location, voice, browsing history, etc.
  - Key concerns and recommendations

- `GOOGLE_GDPR_REQUEST.txt` - GDPR data request template
  - Compliant with GDPR Article 15
  - Ready to send

### Real-World Use Cases

1. **Personal Privacy Audit** - Analyze Google, Facebook, Amazon
2. **App Vetting for Parents** - Check if TikTok is safe
3. **GDPR Compliance** - Check business website compliance
4. **Policy Monitoring** - Track changes in subscriptions
5. **Browser Extension** - Real-time privacy warnings

### Integration with OpenClaw

This project uses OpenClaw's tools:
- `web_fetch` - Fetch privacy policy content
- `web_search` - Find policy URLs (requires Brave API key)
- LLM - Analyze policies and extract data

See `OPENCLAW_INTEGRATION.md` for details on:
- Creating an OpenClaw skill
- Using as a sub-agent
- Deploying to production

### Next Steps

1. **Test with more services** - Analyze Facebook, TikTok, Amazon
2. **Integrate real LLM analysis** - Replace mock data with OpenClaw's LLM
3. **Add cron monitoring** - Track policy changes automatically
4. **Deploy** - Host backend + frontend publicly
5. **Package as skill** - Publish to ClawHub

### Documentation

- **DEMO_GUIDE.md** - Full demo instructions
- **OPENCLAW_INTEGRATION.md** - How to integrate with OpenClaw
- **STATUS.md** - Current progress and roadmap
- **TODO.md** - Future improvements

### Support

For questions or issues:
- OpenClaw docs: https://docs.openclaw.ai
- Discord: https://discord.com/invite/clawd
- GitHub: https://github.com/openclaw/openclaw

### License

This is a prototype/demo project. Use it as a starting point for your own privacy tools.

---

**Built with OpenClaw** 🤖  
An agentic AI framework for autonomous assistants.
