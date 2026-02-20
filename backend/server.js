/**
 * Privacy Agent - Express Server
 * 
 * REST API for the privacy agent
 */

const express = require('express');
const cors = require('cors');
const agent = require('./agent');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

/**
 * POST /api/analyze
 * Body: { services: ['Google', 'Facebook'], userEmail: 'user@example.com' }
 */
app.post('/api/analyze', async (req, res) => {
  const { services, userEmail } = req.body;
  
  if (!services || !Array.isArray(services) || services.length === 0) {
    return res.status(400).json({ error: 'Invalid services list' });
  }
  
  try {
    // Mock tools for now (in production, these would call OpenClaw's tool system)
    const tools = {
      web_search: async (params) => {
        // This would call OpenClaw's web_search tool
        console.log('web_search:', params);
        return { results: [] };
      },
      web_fetch: async (params) => {
        // This would call OpenClaw's web_fetch tool
        console.log('web_fetch:', params);
        return { content: '' };
      }
    };
    
    const reports = await agent.runPrivacyAudit(services, userEmail, tools);
    res.json({ success: true, reports });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Analysis failed', message: error.message });
  }
});

/**
 * GET /api/health
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Privacy Agent API listening on port ${PORT}`);
});
