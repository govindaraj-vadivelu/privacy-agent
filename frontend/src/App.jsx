import { useState } from 'react'
import './App.css'

function App() {
  const [services, setServices] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [reports, setReports] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleAnalyze = async () => {
    setLoading(true)
    setError(null)
    setReports(null)

    const serviceList = services.split(',').map(s => s.trim()).filter(Boolean)
    
    if (serviceList.length === 0) {
      setError('Please enter at least one service')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services: serviceList, userEmail })
      })

      const data = await response.json()
      
      if (data.success) {
        setReports(data.reports)
      } else {
        setError(data.error || 'Analysis failed')
      }
    } catch (err) {
      setError('Could not connect to server: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const getRiskColor = (score) => {
    if (score <= 3) return '#22c55e'
    if (score <= 6) return '#eab308'
    return '#ef4444'
  }

  return (
    <div className="container">
      <h1>🔒 Privacy Agent</h1>
      <p className="subtitle">Analyze privacy policies with AI</p>

      <div className="input-section">
        <label>
          Services (comma-separated)
          <input 
            type="text" 
            placeholder="Google, Facebook, Amazon"
            value={services}
            onChange={(e) => setServices(e.target.value)}
          />
        </label>

        <label>
          Your Email (optional, for GDPR requests)
          <input 
            type="email" 
            placeholder="you@example.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>

        <button onClick={handleAnalyze} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Privacy Policies'}
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      {reports && (
        <div className="reports">
          <h2>Analysis Results</h2>
          {reports.map((report, idx) => (
            <div key={idx} className="report-card">
              {report.error ? (
                <>
                  <h3>{report.service}</h3>
                  <p className="error">{report.error}</p>
                </>
              ) : (
                <>
                  <h3>{report.service}</h3>
                  <p className="url">
                    <a href={report.url} target="_blank" rel="noopener noreferrer">
                      View Policy
                    </a>
                  </p>
                  
                  <div className="risk-score" style={{ color: getRiskColor(report.analysis.riskScore) }}>
                    Risk Score: {report.analysis.riskScore}/10
                  </div>

                  <div className="section">
                    <strong>Data Collection:</strong>
                    <ul>
                      {report.analysis.dataCollection.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="section">
                    <strong>Data Sharing:</strong>
                    <p>{report.analysis.dataSharing || 'Not specified'}</p>
                  </div>

                  <div className="section">
                    <strong>Key Concerns:</strong>
                    <ul>
                      {report.analysis.keyConcerns.map((concern, i) => (
                        <li key={i} className="concern">⚠️ {concern}</li>
                      ))}
                    </ul>
                  </div>

                  {report.gdprRequest && (
                    <details className="gdpr-request">
                      <summary>GDPR Data Request Template</summary>
                      <pre>{report.gdprRequest}</pre>
                    </details>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
