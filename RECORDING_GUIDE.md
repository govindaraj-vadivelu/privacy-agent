# Privacy Agent - Quick Recording Guide

## 🎥 How to Record Your 2-Minute Demo

### Tools You'll Need (Free Options)

**Screen Recording:**
- **Mac:** QuickTime Player (built-in) or OBS Studio
- **Windows:** OBS Studio or Xbox Game Bar
- **Linux:** OBS Studio or SimpleScreenRecorder

**Video Editing:**
- **Beginner:** iMovie (Mac), Clipchamp (Windows), or Shotcut (cross-platform)
- **Advanced:** DaVinci Resolve (free, professional)

**Voiceover:**
- **Record:** Audacity (free) or your phone's voice recorder
- **AI Voice (optional):** ElevenLabs, Play.ht, or use TTS

---

## 🎬 Step-by-Step Recording

### Part 1: Prepare Your Environment

```bash
# 1. Start the frontend (if not already running)
cd /home/ubuntu/.openclaw/workspace/privacy-agent/frontend
npm run dev

# 2. Open browser to: http://52.200.145.207:5173
# Or: http://localhost:5173
```

**Browser setup:**
- Use Chrome or Firefox
- Set window size to 1920x1080 (or fullscreen)
- Hide bookmarks bar
- Close unnecessary tabs
- Turn off notifications

---

### Part 2: Record Screen Captures

#### Clip 1: Problem (10 seconds)
1. Navigate to https://policies.google.com/privacy
2. Scroll slowly through the endless text
3. Zoom out to show how long it is
4. **Save as:** `01_problem_privacy_policy.mp4`

#### Clip 2: Input (10 seconds)
1. Show Privacy Agent homepage (clean, simple)
2. Type "Google" into search box (slowly, clearly)
3. Hover over "Analyze" button
4. Click it
5. **Save as:** `02_input_google.mp4`

#### Clip 3: Processing (10 seconds)
1. Show loading screen
2. If you have backend logs, show those briefly
3. **Save as:** `03_processing.mp4`

#### Clip 4: Results (30 seconds)
1. Show the risk score (7/10 🔴)
2. Scroll through key findings
3. Highlight:
   - Data collected (location, voice, etc.)
   - Who they share with (advertisers)
   - Retention policy (no limits)
4. **Save as:** `04_results_risk_score.mp4`

#### Clip 5: GDPR Request (15 seconds)
1. Show the generated GDPR request file
2. Highlight key sections
3. Show how easy it is (pre-written, ready to send)
4. **Save as:** `05_gdpr_request.mp4`

---

### Part 3: Record Voiceover

**Option A: Record Yourself**

1. Open Audacity
2. Click red record button
3. Read the script from `VIDEO_DEMO_SCRIPT.md`
4. Keep energy up, speak clearly
5. Export as MP3

**Option B: Use AI Voice (ElevenLabs)**

1. Go to https://elevenlabs.io
2. Paste script sections
3. Choose a professional voice (e.g., "Adam" or "Rachel")
4. Generate and download

**Tips:**
- Record in a quiet room
- Use headphones to monitor
- Do multiple takes
- Keep consistent pacing

---

### Part 4: Edit the Video

#### Using iMovie (Mac)

1. **Import clips:**
   - Drag all MP4 files into iMovie
   - Import voiceover MP3

2. **Arrange timeline:**
   - Place clips in order
   - Trim dead space
   - Total length: 2:00

3. **Add text overlays:**
   - "5,000 words" (Scene 1)
   - "Risk Score: 7/10 🔴" (Scene 6)
   - "Try it now: github.com/..." (Scene 11)

4. **Add transitions:**
   - Use simple fades between scenes
   - Don't overdo it

5. **Add music:**
   - Download from YouTube Audio Library
   - Volume: 20-30% (voice should be louder)

6. **Export:**
   - File → Share → File
   - Quality: High (1080p)
   - Format: MP4

#### Using DaVinci Resolve (Free, Advanced)

1. Create new project
2. Import media to Media Pool
3. Drag clips to timeline
4. Add voiceover track
5. Add text overlays (Fusion)
6. Color grade (optional)
7. Add music
8. Export → MP4 → H.264

---

### Part 5: Add Graphics (Optional)

**Simple graphics you can create:**

1. **Risk Score Graphic:**
   ```
   Create in Canva:
   - Circle with "7/10"
   - Red background
   - Bold text: "HIGH RISK"
   ```

2. **Before/After Comparison:**
   ```
   Split screen:
   Left: "30 minutes" + confused emoji
   Right: "30 seconds" + happy emoji
   ```

3. **Logo/Branding:**
   ```
   Privacy Agent logo
   OpenClaw logo
   GitHub link
   ```

---

## 🎯 Quick Recording Method (30 Minutes Total)

If you're short on time, here's the fastest way:

### Method: Single Take + AI Voice

1. **Record full demo (5 min):**
   - Start frontend
   - Record entire flow: input → processing → results
   - Don't worry about perfection

2. **Generate AI voiceover (5 min):**
   - Use ElevenLabs
   - Paste full script
   - Download MP3

3. **Edit in Descript (15 min):**
   - Import video + audio
   - Descript auto-transcribes
   - Edit by editing text
   - Add overlays
   - Export

4. **Review and publish (5 min)**

---

## 📊 Recording Specs

### Video Settings
- **Resolution:** 1920x1080 (1080p)
- **Frame rate:** 30 fps
- **Bitrate:** 8-10 Mbps
- **Format:** MP4 (H.264)

### Audio Settings
- **Sample rate:** 48 kHz
- **Bitrate:** 192 kbps
- **Format:** AAC or MP3
- **Channels:** Stereo

---

## ✅ Pre-Recording Checklist

- [ ] Frontend running and accessible
- [ ] Browser set to 1920x1080
- [ ] Notifications disabled
- [ ] Bookmarks bar hidden
- [ ] Demo data ready (service names)
- [ ] Screen recorder tested
- [ ] Audio tested (if recording voice live)
- [ ] Quiet recording environment
- [ ] Script printed or on second screen

---

## 🎬 Recording Commands (Quick Reference)

### Start Frontend
```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent/frontend
npm run dev
```

### Start Backend (if needed)
```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent
node backend/server.js
```

### Access URLs
- Frontend: http://52.200.145.207:5173
- Backend API: http://52.200.145.207:3001

---

## 🚀 After Recording

### Export Settings
- **YouTube:** 1080p, 30fps, MP4
- **Social Media:** 720p, 30fps, MP4 (smaller file)
- **Website:** 1080p, compressed

### File Naming
- `privacy-agent-demo-full-2min.mp4`
- `privacy-agent-demo-social-60sec.mp4`
- `privacy-agent-demo-short-30sec.mp4`

### Upload To
1. YouTube (public or unlisted)
2. Drive/Dropbox (for sharing)
3. GitHub README (embed YouTube link)

---

## 🎨 Thumbnail Creation

Use Canva or Photoshop:

**Elements:**
- Privacy Agent logo
- "AI Privacy Analysis"
- Risk score visual (7/10 🔴)
- Bright colors, high contrast

**Dimensions:**
- YouTube: 1280x720
- Social media: 1200x628

---

## 📝 Video Description Template

```
Privacy Agent - AI-Powered Privacy Policy Analyzer

Turn 30 minutes of legal jargon into 30 seconds of clarity.

🔍 What it does:
• Automatically fetches privacy policies
• Analyzes risks using AI
• Generates plain-language reports
• Creates GDPR data requests

🚀 Try it now:
github.com/YOUR_USERNAME/privacy-agent

Powered by OpenClaw
Open Source

#privacy #AI #GDPR #OpenSource #DataProtection
```

---

## ⏱️ Time Estimates

- **Recording screen captures:** 20-30 minutes
- **Recording voiceover:** 15-20 minutes
- **Editing:** 30-60 minutes
- **Exporting & uploading:** 10-15 minutes

**Total:** 1.5-2 hours (first time)
**After practice:** 30-45 minutes

---

**Need help with recording tools?** Let me know which OS you're on and I can provide specific instructions!
