# Privacy Agent - TODO

## Phase 1: Core Prototype ✅
- [x] Project structure
- [x] Backend agent logic (orchestrator)
- [x] Express API server
- [x] React frontend (basic UI)
- [x] Documentation (README, DEMO, INTEGRATION)

## Phase 2: OpenClaw Integration
- [ ] Hook into OpenClaw's `web_search` tool
- [ ] Hook into OpenClaw's `web_fetch` tool
- [ ] Use OpenClaw's LLM for analysis (instead of external API)
- [ ] Create OpenClaw skill definition (`SKILL.md`)
- [ ] Test as a sub-agent session (`sessions_spawn`)
- [ ] Add to ClawHub for easy installation

## Phase 3: Real Analysis
- [ ] Implement actual LLM analysis (replace mock data)
- [ ] Test with 10 real privacy policies
- [ ] Refine prompts for better extraction
- [ ] Handle edge cases (missing policies, non-standard formats)
- [ ] Add caching (avoid re-analyzing same policy)

## Phase 4: Advanced Features
- [ ] Policy change monitoring (cron job)
- [ ] Multi-language support
- [ ] Legal framework lookup (GDPR, CCPA, etc.)
- [ ] GDPR request submission (auto-fill forms)
- [ ] Browser extension (real-time warnings)
- [ ] Export reports (PDF, JSON)

## Phase 5: Deployment
- [ ] Deploy backend (AWS Lambda / Vercel)
- [ ] Deploy frontend (Vercel / Netlify)
- [ ] Add rate limiting
- [ ] Add authentication (optional)
- [ ] Add payment (for high usage)
- [ ] Scale to 1000+ users

## Known Issues
- Backend currently uses mock tools (not real OpenClaw tools)
- Frontend has no error handling for network issues
- No caching (re-fetches policies every time)
- LLM analysis is placeholder (needs implementation)

## Next Steps
1. Integrate with OpenClaw's tool system
2. Test with real privacy policies
3. Refine UX based on user feedback
