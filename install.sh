#!/bin/bash
# Privacy Agent - Installation Script

echo "🔒 Privacy Agent - OpenClaw Skill Installation"
echo "=============================================="
echo ""

# Check if OpenClaw is installed
if ! command -v openclaw &> /dev/null; then
    echo "❌ Error: OpenClaw not found"
    echo "Please install OpenClaw first: https://openclaw.ai"
    exit 1
fi

echo "✅ OpenClaw found"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js not found"
    echo "Please install Node.js: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js found ($(node --version))"

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

echo "✅ Backend dependencies installed"

# Install frontend dependencies (optional)
if [ -d "frontend" ]; then
    echo ""
    echo "🎨 Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
    echo "✅ Frontend dependencies installed"
fi

# Create symlink to OpenClaw skills directory (optional)
SKILL_DIR="${HOME}/.openclaw/skills/privacy-agent"
if [ ! -d "${HOME}/.openclaw/skills" ]; then
    mkdir -p "${HOME}/.openclaw/skills"
fi

if [ ! -L "$SKILL_DIR" ]; then
    echo ""
    echo "🔗 Creating symlink to OpenClaw skills directory..."
    ln -s "$(pwd)" "$SKILL_DIR"
    echo "✅ Skill linked to: $SKILL_DIR"
fi

echo ""
echo "=============================================="
echo "✅ Installation complete!"
echo ""
echo "📖 Usage:"
echo "  1. Ask OpenClaw: 'Analyze Google's privacy policy'"
echo "  2. Run standalone: node live-demo.js"
echo "  3. Start web UI: node backend/server.js (backend)"
echo "                   cd frontend && npm run dev (frontend)"
echo ""
echo "📚 Documentation:"
echo "  - SKILL.md       - Skill usage guide"
echo "  - README.md      - Project overview"
echo "  - DEMO_GUIDE.md  - Full demo instructions"
echo ""
echo "🎉 Ready to analyze privacy policies!"
