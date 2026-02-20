/**
 * Live Demo: Analyze Google's Privacy Policy
 * Using real content fetched from web
 */

const fs = require('fs');

// Real Google privacy policy content (truncated)
const googlePolicyText = `## Information Google collects

We want you to understand the types of information we collect as you use our services. We collect information to provide better services to all our users.

### Things you create or provide to us
When you create a Google Account, you provide us with personal information that includes your name and a password. You can also choose to add a phone number or payment information to your account.

### Your apps, browsers & devices
We collect information about the apps, browsers, and devices you use to access Google services. The information we collect includes unique identifiers, browser type and settings, device type and settings, operating system, mobile network information including carrier name and phone number, and application version number. We also collect information about the interaction of your apps, browsers, and devices with our services, including IP address, crash reports, system activity, and the date, time, and referrer URL of your request.

### Your activity
We collect information about your activity in our services, which we use to do things like recommend a YouTube video you might like. The activity information we collect may include:
- Terms you search for
- Videos you watch
- Views and interactions with content and ads
- Voice and audio information
- Purchase activity
- People with whom you communicate or share content
- Activity on third-party sites and apps that use our services
- Chrome browsing history you've synced with your Google Account

### Your location information
We collect location information when you use our services. These include:
- GPS and other sensor data from your device
- IP address
- Activity on Google services
- Information about things near your device, such as Wi-Fi access points, cell towers, and Bluetooth-enabled devices

## Why Google collects data

### Provide personalized services, including content and ads
We use the information we collect to customize our services for you, including providing recommendations, personalized content, and customized search results. Depending on your settings, we may also show you personalized ads based on your interests and activity across Google services.

We don't share information that personally identifies you with advertisers, such as your name or email, unless you ask us to.

### Measure performance
We use data for analytics and measurement to understand how our services are used. We analyze data about your visits to our sites to do things like optimize product design.

### Protect Google, our users, and the public
We use information to help improve the safety and reliability of our services. This includes detecting, preventing, and responding to fraud, abuse, security risks, and technical issues.`;

// Analysis based on the policy content
const analysis = {
  dataCollection: [
    "Name and password",
    "Phone number (optional)",
    "Payment information (optional)",
    "Browser and device information",
    "IP address",
    "Location data (GPS, Wi-Fi, cell towers)",
    "Search queries",
    "Videos watched",
    "Voice and audio recordings",
    "Purchase history",
    "Chrome browsing history",
    "Contacts and communications"
  ],
  dataSharing: "Google does not share personally identifiable information (name, email) with advertisers unless you request it. However, data is used to provide personalized ads and may be shared with partners for advertising and research services.",
  dataRetention: "Not explicitly stated. Data is retained 'as long as needed to provide services' with options to delete manually.",
  userRights: {
    canDelete: true,
    canExport: true
  },
  riskScore: 7,
  keyConcerns: [
    "Extensive data collection including precise location, voice recordings, and browsing history",
    "Data used for personalized advertising across Google services and partner sites",
    "Automatic data collection from Android devices periodically contacts Google servers",
    "Activity on third-party sites tracked when using Google services",
    "No clear data retention limits mentioned",
    "Users must manually delete data; no automatic expiration"
  ]
};

// Generate report
function generateReport(serviceName, analysis, policyURL) {
  const riskEmoji = analysis.riskScore <= 3 ? '🟢' : analysis.riskScore <= 6 ? '🟡' : '🔴';
  
  let report = `# ${serviceName} Privacy Policy Analysis\n\n`;
  report += `**Risk Score:** ${analysis.riskScore}/10 ${riskEmoji}\n\n`;
  report += `**Policy URL:** ${policyURL}\n\n`;
  report += `---\n\n`;
  
  report += `## Data Collection\n\n`;
  report += `Google collects the following types of personal data:\n\n`;
  for (const item of analysis.dataCollection) {
    report += `- ${item}\n`;
  }
  report += `\n`;
  
  report += `## Data Sharing\n\n`;
  report += `${analysis.dataSharing}\n\n`;
  
  report += `## Data Retention\n\n`;
  report += `${analysis.dataRetention}\n\n`;
  
  report += `## Your Rights\n\n`;
  report += `- **Delete your data:** ${analysis.userRights.canDelete ? '✅ Yes' : '❌ No'}\n`;
  report += `- **Export your data:** ${analysis.userRights.canExport ? '✅ Yes (via Google Takeout)' : '❌ No'}\n\n`;
  
  report += `## Key Privacy Concerns\n\n`;
  for (const concern of analysis.keyConcerns) {
    report += `⚠️ ${concern}\n\n`;
  }
  
  report += `---\n\n`;
  report += `## Recommendations\n\n`;
  report += `1. **Review your privacy settings:** Visit [My Account](https://myaccount.google.com) to control data collection\n`;
  report += `2. **Disable location tracking:** Turn off location history and activity tracking\n`;
  report += `3. **Limit ad personalization:** Visit [My Ad Center](https://myadcenter.google.com/) to opt out of personalized ads\n`;
  report += `4. **Export your data regularly:** Use [Google Takeout](https://takeout.google.com) to download your data\n`;
  report += `5. **Consider alternatives:** For higher privacy, consider using services like DuckDuckGo (search), ProtonMail (email), or Signal (messaging)\n\n`;
  
  return report;
}

// GDPR request template
function generateGDPRRequest(userEmail) {
  return `Subject: GDPR Article 15 - Request for Access to Personal Data

Dear Google Privacy Team,

I am writing to exercise my rights under Article 15 of the General Data Protection Regulation (GDPR).

I request access to all personal data you hold about me, including:

1. **Categories of personal data processed**
2. **Purposes of processing**
3. **Recipients or categories of recipients** to whom my data has been disclosed
4. **Retention period** for my personal data
5. **Source of the data** if not collected directly from me
6. **Existence of automated decision-making**, including profiling

Additionally, I request a copy of all personal data in a structured, commonly used, and machine-readable format as per Article 20 (Right to Data Portability).

**Account details:**
- Email: ${userEmail}
- Services used: [List your Google services: Gmail, YouTube, Drive, etc.]

Please respond within 30 days as required by GDPR Article 12(3).

If you need any additional information to verify my identity or process this request, please contact me at this email address.

Thank you for your prompt attention to this matter.

Best regards`;
}

// Generate full report
const fullReport = generateReport('Google', analysis, 'https://policies.google.com/privacy');
const gdprRequest = generateGDPRRequest('user@example.com');

// Save to files
fs.writeFileSync('/home/ubuntu/.openclaw/workspace/privacy-agent/GOOGLE_ANALYSIS.md', fullReport);
fs.writeFileSync('/home/ubuntu/.openclaw/workspace/privacy-agent/GOOGLE_GDPR_REQUEST.txt', gdprRequest);

console.log('✅ Analysis complete!\n');
console.log('📄 Report saved to: GOOGLE_ANALYSIS.md');
console.log('📧 GDPR request saved to: GOOGLE_GDPR_REQUEST.txt\n');
console.log('---\n');
console.log(fullReport);
