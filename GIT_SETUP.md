# Git Repository Setup Guide

## ✅ Local Git Repository Initialized!

Your privacy-agent project is now a Git repository with all files committed.

```
Repository: /home/ubuntu/.openclaw/workspace/privacy-agent
Commit: 28efbbb - "Initial commit: Privacy Agent - OpenClaw Skill"
Files: 36 files, 6735 lines of code
```

---

## 📤 Push to GitHub

### Step 1: Create GitHub Repository

**Option A: Via GitHub Web Interface**

1. Go to https://github.com/new
2. **Repository name:** `privacy-agent`
3. **Description:** "AI-powered privacy policy analyzer - OpenClaw skill"
4. **Visibility:** Public or Private (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

**Option B: Via GitHub CLI (if installed locally)**

```bash
gh repo create privacy-agent --public --description "AI-powered privacy policy analyzer - OpenClaw skill"
```

---

### Step 2: Connect and Push

After creating the GitHub repo, GitHub will show you commands. Use these:

**From your OpenClaw instance:**

```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent

# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/privacy-agent.git

# Rename branch to main (modern convention)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Create one at: https://github.com/settings/tokens
  - Select scopes: `repo` (full control)

---

### Step 3: Verify

Visit your repository:
```
https://github.com/YOUR_USERNAME/privacy-agent
```

You should see all your files!

---

## 🔐 Authentication Methods

### Method 1: HTTPS with Personal Access Token (Recommended)

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Select scopes: `repo`
4. Copy the token
5. Use it as password when pushing

### Method 2: SSH Key

**Generate SSH key (on OpenClaw instance):**

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
cat ~/.ssh/id_ed25519.pub
```

**Add to GitHub:**
1. Copy the public key
2. Go to https://github.com/settings/keys
3. Click **"New SSH key"**
4. Paste and save

**Change remote to SSH:**
```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent
git remote set-url origin git@github.com:YOUR_USERNAME/privacy-agent.git
git push -u origin main
```

---

## 📝 Update skill.json

Once your repo is on GitHub, update the metadata:

```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent
```

Edit `skill.json`:
```json
{
  "homepage": "https://github.com/YOUR_USERNAME/privacy-agent",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/privacy-agent"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/privacy-agent/issues"
  }
}
```

**Commit and push the update:**
```bash
git add skill.json
git commit -m "Update repository URLs in skill.json"
git push
```

---

## 🚀 Quick Push Commands

**After initial setup, future updates are simple:**

```bash
cd /home/ubuntu/.openclaw/workspace/privacy-agent

# Stage changes
git add .

# Commit
git commit -m "Your commit message"

# Push
git push
```

---

## 🔄 Common Git Commands

### Check status
```bash
git status
```

### View commit history
```bash
git log --oneline
```

### Create a new branch
```bash
git checkout -b feature/new-feature
```

### Push a branch
```bash
git push -u origin feature/new-feature
```

### Pull latest changes
```bash
git pull
```

---

## 📦 GitHub Repository Settings

After pushing, consider:

1. **Add topics:** `privacy`, `gdpr`, `openclaw`, `agentic-ai`, `policy-analysis`
2. **Enable Issues:** For bug reports and feature requests
3. **Add a license:** MIT is common for open-source
4. **Create releases:** Tag versions for ClawHub

---

## 🎯 Next Steps

### 1. Push to GitHub
- Create repo on GitHub
- Add remote origin
- Push your code

### 2. Update README
- Add GitHub badges (build status, license)
- Add installation instructions
- Add screenshots/demo

### 3. Publish to ClawHub
```bash
clawhub publish
```

### 4. Share
- Post on Twitter/LinkedIn
- Share in OpenClaw Discord
- Add to your portfolio

---

## 📋 Example: Complete Push Workflow

```bash
# 1. Create repo on GitHub (via web interface)

# 2. Connect and push
cd /home/ubuntu/.openclaw/workspace/privacy-agent
git remote add origin https://github.com/YOUR_USERNAME/privacy-agent.git
git branch -M main
git push -u origin main

# 3. Update skill.json with GitHub URLs
# (edit the file manually)

# 4. Commit and push update
git add skill.json
git commit -m "Add GitHub repository URL"
git push
```

---

## 🐛 Troubleshooting

**"fatal: remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/privacy-agent.git
```

**Authentication failed**
- Use Personal Access Token, not password
- Or set up SSH keys

**Large files warning**
- Already handled with .gitignore
- node_modules are excluded

**Push rejected**
```bash
git pull --rebase origin main
git push
```

---

## ✅ Repository Checklist

- [x] Git initialized
- [x] All files committed
- [x] .gitignore configured
- [ ] GitHub repository created
- [ ] Remote origin added
- [ ] Code pushed to GitHub
- [ ] skill.json updated with repo URL
- [ ] README badges added
- [ ] Topics/tags added
- [ ] License added (optional)

---

**Ready to push?** Create your GitHub repo and follow the steps above!

Let me know your GitHub username and I can provide the exact commands.
