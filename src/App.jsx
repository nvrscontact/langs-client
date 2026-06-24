import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/layout/layout.css';

import Dashboard from "./pages/private/dashboard/Dashboard";
import CFER_Aligned from "./pages/private/metrics/CFERAligned/CFERAligned";
import Methodology from "./pages/public/info/Methodology/Methodology";
import ProgressChart from "./pages/private/metrics/ProgressChart/ProgressChart";

import UserProfile from "./pages/private/UserProfile/UserProfile";
import Register from "./pages/public/auth/Register/Register";
import Home from "./pages/public/home/Home"
import MainLayout from './components/MainLayout/MainLayout';
import NoNavbarLayout from './components/MainLayout/NoNavbarLayout';

import SocialChat from "./pages/private/SocialChat/SocialChat";
import WordsLearned from "./pages/private/metrics/WordsLearned/WordsLearned";
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
            <Route path="/cfer-aligned" element={<CFER_Aligned />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/progress-chart" element={<ProgressChart />} />
            <Route path="/words-learned" element={<WordsLearned />} />
            <Route path="/training" element={<TrainingCards />} />
            <Route path="/config" element={<Config />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
