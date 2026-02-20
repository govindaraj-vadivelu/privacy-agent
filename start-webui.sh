#!/bin/bash
# Privacy Agent - Start WebUI

echo "🚀 Starting Privacy Agent Web UI"
echo "================================"
echo ""

cd "$(dirname "$0")"

# Check if in correct directory
if [ ! -f "backend/server.js" ]; then
    echo "❌ Error: backend/server.js not found"
    echo "Please run this script from the privacy-agent directory"
    exit 1
fi

echo "📍 Current directory: $(pwd)"
echo ""

# Install backend deps if needed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    (cd backend && npm install)
    echo ""
fi

# Start backend in background (from backend dir so it finds node_modules)
echo "🔧 Starting backend server..."
(cd backend && node server.js) &
BACKEND_PID=$!
echo "✅ Backend running (PID: $BACKEND_PID) on http://localhost:3001"
echo ""

# Wait a bit for backend to start
sleep 2

# Install frontend deps if needed
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    (cd frontend && npm install)
    echo ""
fi

# Start frontend (from frontend dir so it finds node_modules)
echo "🎨 Starting frontend..."
(cd frontend && npm run dev) &
FRONTEND_PID=$!
echo "✅ Frontend starting (PID: $FRONTEND_PID)"
echo "   Waiting for Vite to be ready..."
sleep 3
echo ""

echo "================================"
echo "🎉 Privacy Agent is running!"
echo ""
echo "📍 Backend:  http://localhost:3001"
echo "📍 Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo "================================"

# Handle Ctrl+C
trap "echo 'Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT

# Wait for processes
wait
