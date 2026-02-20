# Privacy Agent Skill

Analyze privacy policies and generate plain-language reports with GDPR request templates.

## Description

Privacy Agent is an agentic AI assistant that autonomously:
- Fetches privacy policies from websites
- Analyzes them for data collection, sharing, and retention practices
- Generates plain-language reports with risk scores
- Creates GDPR-compliant data request templates

**What makes this agentic:**
- Autonomous data fetching (web_fetch)
- Multi-step reasoning (extract → analyze → report → action)
- Tool orchestration (OpenClaw's web tools)
- Action generation (GDPR requests)

## Usage

### Basic Analysis

Ask the agent:
```
Analyze Google's privacy policy
```

The agent will:
1. Fetch the policy from the web
2. Extract key privacy concerns
3. Generate a risk-scored report
4. Create a GDPR data request template

### Multi-Service Comparison

```
Compare privacy policies for Google, Facebook, and Amazon
```

### Specific Questions

```
Does TikTok sell user data?
Can I delete my data from Netflix?
What location data does Uber collect?
```

## Tools Required

- `web_fetch` - Fetch privacy policy content
- `web_search` - Find policy URLs (optional)

## Output

The agent generates:
- **Privacy Analysis Report** (Markdown)
  - Risk score (1-10)
  - Data collection summary
  - Data sharing practices
  - User rights (delete, export)
  - Key concerns

- **GDPR Request Template** (Text)
  - Compliant with GDPR Article 15
  - Ready to send

## Examples

### Example 1: Google Privacy Analysis

**Input:**
```
Analyze Google's privacy policy
```

**Output:**
```markdown
# Google Privacy Analysis

**Risk Score:** 7/10 🔴

**Data Collection:**
- Location data (GPS, Wi-Fi, cell towers)
- Voice and audio recordings
- Browsing history
- Search queries
- Contacts and communications

**Key Concerns:**
⚠️ Extensive data collection including precise location
⚠️ Data used for personalized advertising
⚠️ No automatic data deletion

**Your Rights:**
✅ Can delete data
✅ Can export data (Google Takeout)

**Recommendations:**
1. Disable location tracking
2. Opt out of personalized ads
3. Export your data regularly
```

### Example 2: TikTok Safety Check

**Input:**
```
My kid wants to install TikTok. Is it safe?
```

**Output:**
```
TikTok Privacy Analysis:
- Collects location data and shares with advertisers
- Minimum age: 13
- Tracks activity across third-party sites
- Risk score: 8/10 (high risk)

Recommendation: Consider age-appropriate alternatives with better privacy scores.
```

## Advanced Features

### Policy Monitoring (Planned)

Set up cron jobs to track policy changes:
```
Monitor privacy policies for Netflix, Spotify, and Dropbox
```

### Conversational Interface

Ask follow-up questions:
```
User: "Analyze Google's privacy policy"
Agent: [generates report]
User: "How do I delete my data?"
Agent: "Here's the link and what to say..."
```

## Installation

Via ClawHub:
```bash
clawhub install privacy-agent
```

Or manually:
```bash
cd ~/.openclaw/skills
git clone [privacy-agent-repo]
```

## Configuration

No configuration required. Uses OpenClaw's built-in tools.

Optional: Set up Brave API key for `web_search`:
```bash
openclaw configure --section web
```

## Real-World Use Cases

1. **Personal Privacy Audit** - Analyze multiple services at once
2. **App Vetting for Parents** - Check if apps are safe for kids
3. **GDPR Compliance** - Verify website compliance
4. **Policy Monitoring** - Track changes over time
5. **Job Seeker Due Diligence** - Check employer privacy practices

## Technical Details

**Backend:** Node.js + Express
**Frontend:** React + Vite
**Agent Framework:** OpenClaw
**Tools:** `web_fetch`, `web_search`
**AI Model:** Claude Sonnet 4.5 (via OpenClaw)

## Files

- `backend/` - Agent logic and API
- `frontend/` - React UI (optional)
- `SKILL.md` - This file
- `README.md` - Project overview
- `DEMO.md` - Examples

## License

MIT

## Author

Built with OpenClaw

## Links

- [OpenClaw Docs](https://docs.openclaw.ai)
- [ClawHub](https://clawhub.com)
- [GitHub](https://github.com/openclaw/openclaw)
