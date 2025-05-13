import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CampaignPage from './pages/CampPage';
import CampaignLogs from './pages/CampaignLogs';  // <-- 1. Import this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CampaignPage />} />
        <Route path="/campaign-logs" element={<CampaignLogs />} />  {/* <-- 2. Add this */}
      </Routes>
    </Router>
  );
}

export default App;
