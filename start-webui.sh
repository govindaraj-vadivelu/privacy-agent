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

# Start backend in background
echo "🔧 Starting backend server..."
node backend/server.js &
BACKEND_PID=$!
echo "✅ Backend running (PID: $BACKEND_PID) on http://localhost:3001"
echo ""

# Wait a bit for backend to start
sleep 2

# Start frontend
echo "🎨 Starting frontend..."
cd frontend
npm run dev -- --host 0.0.0.0 &
FRONTEND_PID=$!
echo "✅ Frontend starting (PID: $FRONTEND_PID)"
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
