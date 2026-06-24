import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/layout/layout.css';

import Dashboard from "./pages/private/dashboard/Dashboard";
import AlignmentMCER from "./pages/private/info/AlignmentMCER/AlignmentMCER";
import Methodology from "./pages/private/info/Methodology/Methodology";
import ProgressChart from "./pages/private/metrics/ProgressChart/ProgressChart";
import MCERChart from "./pages/private/metrics/MCERChart/MCERChart";

import UserProfile from "./pages/private/UserProfile/UserProfile";
import Register from "./pages/public/auth/Register/Register";
import Home from "./pages/public/home/Home"
import MainLayout from './components/MainLayout/MainLayout';
import NoNavbarLayout from './components/MainLayout/NoNavbarLayout';

import SocialChat from "./pages/private/SocialChat/SocialChat";
import WordsChart from "./pages/private/metrics/WordsChart/WordsChart";
import TrainingCards from "./pages/private/TrainingCards/TrainingCards";
import Config from './pages/private/Config/Config';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NoNavbarLayout />}>
          
            <Route path="/user-profile" element={<UserProfile />} /> {/* private */}
            <Route path="/social-chat" element={<SocialChat />} /> {/* private */}
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} /> {/* public */}
            <Route path="/register" element={<Register />} /> {/* public */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alignment-mcer" element={<AlignmentMCER />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/progress-chart" element={<ProgressChart />} />
            <Route path="/words-chart" element={<WordsChart />} />
            <Route path="/mcer-chart" element={<MCERChart />} />
            <Route path="/training" element={<TrainingCards />} />
            <Route path="/config" element={<Config />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
