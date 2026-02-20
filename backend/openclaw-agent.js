/**
 * Privacy Agent - OpenClaw Native Version
 * 
 * Uses OpenClaw's built-in tools (web_search, web_fetch)
 */

/**
 * Find privacy policy URL for a given service
 */
async function findPrivacyPolicyURL(serviceName, openclaw) {
  console.log(`Searching for ${serviceName} privacy policy...`);
  
  const searchQuery = `${serviceName} privacy policy`;
  const result = await openclaw.web_search({ query: searchQuery, count: 5 });
  
  if (!result || !result.length) {
    throw new Error(`No search results found for ${serviceName}`);
  }
  
  // Look for official privacy policy URL
  for (const item of result) {
    const url = item.url.toLowerCase();
    if (url.includes('privacy') || url.includes('terms')) {
      return item.url;
    }
  }
  
  // Fallback to first result
  return result[0].url;
}

/**
 * Fetch and extract privacy policy text
 */
async function fetchPolicyText(url, openclaw) {
  console.log(`Fetching policy from ${url}...`);
  
  const result = await openclaw.web_fetch({ 
    url, 
    extractMode: 'markdown',
    maxChars: 20000 // Limit to 20k chars
  });
  
  return result;
}

/**
 * Analyze privacy policy using LLM
 * (This will be executed by OpenClaw's LLM in the session)
 */
function buildAnalysisPrompt(policyText) {
  return `Analyze this privacy policy and extract key information. Respond in JSON format ONLY.

Privacy Policy:
---
${policyText.substring(0, 15000)}
---

Extract:
1. What personal data is collected? (list of data types)
2. Is data shared with third parties? (yes/no and details)
3. How long is data retained? (specific timeframe or "indefinite")
4. Can users delete their data? (yes/no)
5. Can users export their data? (yes/no)
6. Risk score (1-10, where 1=excellent privacy, 10=severe privacy concerns)
7. Key concerns (list of specific privacy issues)

Respond with ONLY this JSON structure:
{
  "dataCollection": ["email", "location", "..."],
  "dataSharing": "Shared with advertisers and partners" or "No third-party sharing",
  "dataRetention": "2 years" or "indefinite" or "...",
  "userRights": {
    "canDelete": true/false,
    "canExport": true/false
  },
  "riskScore": 7,
  "keyConcerns": ["Location tracking without opt-out", "..."]
}`;
}

/**
 * Parse LLM analysis response
 */
function parseAnalysis(responseText) {
  // Try to extract JSON from response
  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Could not parse analysis response');
  }
  
  try {
    return JSON.parse(jsonMatch[0]);
  } catch (err) {
    throw new Error(`Invalid JSON in analysis: ${err.message}`);
  }
}

/**
 * Generate summary report
 */
function generateReport(serviceName, analysis, policyURL) {
  const riskEmoji = analysis.riskScore <= 3 ? '🟢' : analysis.riskScore <= 6 ? '🟡' : '🔴';
  
  let report = `## ${serviceName} Privacy Analysis\n\n`;
  report += `**Risk Score:** ${analysis.riskScore}/10 ${riskEmoji}\n\n`;
  report += `**Policy URL:** ${policyURL}\n\n`;
  
  report += `**Data Collection:**\n`;
  if (analysis.dataCollection && analysis.dataCollection.length > 0) {
    for (const item of analysis.dataCollection) {
      report += `- ${item}\n`;
    }
  } else {
    report += `- Not specified\n`;
  }
  report += `\n`;
  
  report += `**Data Sharing:**\n${analysis.dataSharing || 'Not specified'}\n\n`;
  
  report += `**Data Retention:**\n${analysis.dataRetention || 'Not specified'}\n\n`;
  
  report += `**Your Rights:**\n`;
  report += `- Delete data: ${analysis.userRights?.canDelete ? '✅ Yes' : '❌ No'}\n`;
  report += `- Export data: ${analysis.userRights?.canExport ? '✅ Yes' : '❌ No'}\n\n`;
  
  if (analysis.keyConcerns && analysis.keyConcerns.length > 0) {
    report += `**Key Concerns:**\n`;
    for (const concern of analysis.keyConcerns) {
      report += `⚠️ ${concern}\n`;
    }
  }
  
  return report;
}

/**
 * Draft GDPR data export request
 */
function draftGDPRRequest(serviceName, userEmail) {
  return `Subject: GDPR Article 15 Data Export Request

Dear ${serviceName} Privacy Team,

I am writing to request a copy of all personal data you hold about me under Article 15 of the GDPR (Right of Access).

Please provide:
1. All personal data you have collected about me
2. The purposes of processing
3. Categories of data and recipients
4. Retention periods
5. Information about automated decision-making

Email associated with my account: ${userEmail || '[your email]'}

I expect a response within 30 days as required by law.

Best regards`;
}

module.exports = {
  findPrivacyPolicyURL,
  fetchPolicyText,
  buildAnalysisPrompt,
  parseAnalysis,
  generateReport,
  draftGDPRRequest
};
