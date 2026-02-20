# Privacy Agent Demo

Quick demo of the privacy agent in action.

## Scenario: Personal Privacy Audit

**User:** "I want to know what data Google, Facebook, and Amazon have on me."

**Agent workflow:**

### Step 1: Find Privacy Policy URLs
```
web_search("Google privacy policy")
→ https://policies.google.com/privacy

web_search("Facebook privacy policy")
→ https://www.facebook.com/privacy/policy

web_search("Amazon privacy policy")
→ https://www.amazon.com/gp/help/customer/display.html?nodeId=468496
```

### Step 2: Fetch Policy Text
```
web_fetch("https://policies.google.com/privacy")
→ [Markdown content, ~5000 words]
```

### Step 3: Analyze with LLM
```
Prompt: "Analyze this privacy policy. Extract: data collection, sharing, retention, user rights, risk score."

Response:
{
  "dataCollection": ["Email", "Location", "Browsing history", "Search queries", "Voice recordings"],
  "dataSharing": "Shared with advertisers and Google subsidiaries",
  "dataRetention": "Kept indefinitely unless user deletes manually",
  "userRights": {
    "canDelete": true,
    "canExport": true,
    "canOptOut": false
  },
  "riskScore": 7,
  "keyConcerns": [
    "Location tracking enabled by default",
    "Data shared with third-party advertisers",
    "No automatic data deletion"
  ]
}
```

### Step 4: Generate Report
```markdown
## Google Privacy Analysis

**Risk Score:** 7/10 🟡

**Data Collection:**
- Email
- Location
- Browsing history
- Search queries
- Voice recordings

**Data Sharing:**
Shared with advertisers and Google subsidiaries

**Key Concerns:**
⚠️ Location tracking enabled by default
⚠️ Data shared with third-party advertisers
⚠️ No automatic data deletion

**Your Rights:**
✅ You can delete your data
✅ You can export your data
❌ You cannot opt out of tracking

[View full policy](https://policies.google.com/privacy)
```

### Step 5: Draft GDPR Request (optional)
```
Subject: GDPR Article 15 Data Export Request

Dear Google Privacy Team,

I am writing to request a copy of all personal data you hold about me under Article 15 of the GDPR (Right of Access).

Please provide:
1. All personal data you have collected about me
2. The purposes of processing
3. Categories of data and recipients
4. Retention periods
5. Information about automated decision-making

Email associated with my account: user@example.com

I expect a response within 30 days as required by law.

Best regards
```

## Expected Output

User receives:
1. A summary report for each service
2. Risk scores (visual indicators: 🟢 🟡 🔴)
3. GDPR data request templates (ready to send)

**Time saved:** ~1 hour of reading → 2 minutes

## Technical Flow

```
User Input (services list)
   ↓
Agent Planner
   ↓
For each service:
   ├─ web_search (find URL)
   ├─ web_fetch (extract text)
   ├─ LLM analysis (structured extraction)
   └─ Report generation
   ↓
Aggregate Results
   ↓
Return to User
```

## Running the Demo

1. Start backend: `node backend/server.js`
2. Start frontend: `cd frontend && npm run dev`
3. Open: http://localhost:5173
4. Enter: "Google, Facebook, Amazon"
5. Click "Analyze Privacy Policies"

(Note: Current implementation uses mock data. Full integration requires OpenClaw tool system.)
