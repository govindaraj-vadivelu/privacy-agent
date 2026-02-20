#!/bin/bash
# Privacy Agent - Full Demo Runner

echo "🚀 Privacy Agent - Full Demo"
echo "============================"
echo ""

# Check Node.js version
echo "📦 Checking Node.js..."
node --version
npm --version
echo ""

# Setup backend
echo "🔧 Setting up backend..."
cd /home/ubuntu/.openclaw/workspace/privacy-agent
if [ ! -d "node_modules" ]; then
  echo "Installing backend dependencies..."
  npm install
fi
echo "✅ Backend ready"
echo ""

# Setup frontend
echo "🎨 Setting up frontend..."
cd frontend
if [ ! -d "node_modules" ]; then
  echo "Installing frontend dependencies..."
  npm install
fi
echo "✅ Frontend ready"
echo ""

# Instructions
echo "===================="
echo "🎯 How to Run the Demo"
echo "===================="
echo ""
echo "Terminal 1 - Start Backend:"
echo "  cd /home/ubuntu/.openclaw/workspace/privacy-agent"
echo "  node backend/server.js"
echo ""
echo "Terminal 2 - Start Frontend:"
echo "  cd /home/ubuntu/.openclaw/workspace/privacy-agent/frontend"
echo "  npm run dev"
echo ""
echo "Then open: http://localhost:5173"
echo ""
echo "OR run the standalone demo:"
echo "  node live-demo.js"
echo ""
