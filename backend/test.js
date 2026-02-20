/**
 * Privacy Agent - Test Script
 * 
 * Tests the privacy agent with a real service using OpenClaw tools
 */

const agent = require('./openclaw-agent');

// Mock OpenClaw tools for testing
// In production, these would be replaced with actual OpenClaw tool calls
const mockOpenClaw = {
  web_search: async (params) => {
    console.log('[MOCK] web_search:', params.query);
    // Return mock search results
    return [
      { url: 'https://policies.google.com/privacy', title: 'Privacy Policy – Google' }
    ];
  },
  
  web_fetch: async (params) => {
    console.log('[MOCK] web_fetch:', params.url);
    // Return mock policy text
    return `# Google Privacy Policy

Google collects information to provide better services to all our users.

## Information we collect
- Your name and email address
- Your location data
- Your browsing history on Google services
- Voice and audio information when you use audio features

## How we use information
We use the information we collect to:
- Provide our services
- Maintain and improve our services
- Develop new services
- Provide personalized services including content and ads

## Information we share
We do not share your personal information with companies, organizations, or individuals outside of Google except:
- With your consent
- With domain administrators
- For external processing (with Google affiliates)
- For legal reasons

You can export your data using Google Takeout. You can delete your data at any time.

Data is retained for as long as your account is active or as needed to provide services.`;
  }
};

async function testPrivacyAgent() {
  console.log('=== Privacy Agent Test ===\n');
  
  const serviceName = 'Google';
  const userEmail = 'test@example.com';
  
  try {
    // Step 1: Find privacy policy URL
    console.log('Step 1: Finding privacy policy URL...');
    const policyURL = await agent.findPrivacyPolicyURL(serviceName, mockOpenClaw);
    console.log(`Found: ${policyURL}\n`);
    
    // Step 2: Fetch policy text
    console.log('Step 2: Fetching policy text...');
    const policyText = await agent.fetchPolicyText(policyURL, mockOpenClaw);
    console.log(`Fetched ${policyText.length} characters\n`);
    
    // Step 3: Build analysis prompt
    console.log('Step 3: Building analysis prompt...');
    const prompt = agent.buildAnalysisPrompt(policyText);
    console.log('Prompt built (would be sent to LLM)\n');
    
    // Step 4: Simulate LLM analysis (in production, this would be done by OpenClaw)
    console.log('Step 4: Analyzing policy (mock)...');
    const mockAnalysisResponse = `{
  "dataCollection": ["Name and email", "Location data", "Browsing history", "Voice recordings"],
  "dataSharing": "Shared with Google affiliates and for legal reasons",
  "dataRetention": "As long as account is active",
  "userRights": {
    "canDelete": true,
    "canExport": true
  },
  "riskScore": 6,
  "keyConcerns": [
    "Broad data collection including location and voice",
    "Data shared with affiliates without explicit opt-in",
    "Indefinite retention while account is active"
  ]
}`;
    
    const analysis = agent.parseAnalysis(mockAnalysisResponse);
    console.log('Analysis complete\n');
    
    // Step 5: Generate report
    console.log('Step 5: Generating report...');
    const report = agent.generateReport(serviceName, analysis, policyURL);
    console.log('\n' + report);
    
    // Step 6: Draft GDPR request
    console.log('\nStep 6: Drafting GDPR request...');
    const gdprRequest = agent.draftGDPRRequest(serviceName, userEmail);
    console.log('\n' + gdprRequest);
    
    console.log('\n=== Test Complete ===');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run test
testPrivacyAgent();
