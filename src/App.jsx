import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/layout/layout.css';

import Dashboard from "./pages/private/dashboard/Dashboard";
import Methodology from "./pages/public/info/Methodology/Methodology";

import UserProfile from "./pages/private/UserProfile/UserProfile";
import Register from "./pages/public/auth/Register/Register";
import Home from "./pages/public/home/Home"
import MainLayout from './components/MainLayout/MainLayout';
import NoNavbarLayout from './components/MainLayout/NoNavbarLayout';

import SocialChat from "./pages/private/SocialChat/SocialChat";
import WordsLearned from "./pages/private/metrics/WordsLearned/WordsLearned";
import TrainingCards from "./pages/private/TrainingCards/TrainingCards";
import Config from './pages/private/Config/Config';
import ScienceBased from './pages/public/info/ScienceBased/ScienceBased';
import RealLifeSituations from './pages/private/metrics/RealLifeSituations/RealLifeSituations';
import GrammarLearned from './pages/private/metrics/GrammarLearned/GrammarLearned';
import CEFRAlignment from './pages/private/metrics/CEFRAlignment/CEFRAlignment';
import Login from './pages/public/auth/Login/Login';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NoNavbarLayout />}>
            <Route path="/" element={<Home />} /> {/* public */}

            <Route path="/user-profile" element={<UserProfile />} /> {/* private */}
            <Route path="/social-chat" element={<SocialChat />} /> {/* private */}
            <Route path="/register" element={<Register />} /> {/* public */}
            <Route path="/login" element={<Login />} /> {/* public */}
            <Route path="/training" element={<TrainingCards />} />
            
          </Route>

          <Route element={<MainLayout />}>


            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cefr-aligned" element={<CEFRAlignment />} />
            <Route path="/real-life-situations" element={<RealLifeSituations />} />
            <Route path="/grammar-learned" element={<GrammarLearned />} />
            <Route path="/words-learned" element={<WordsLearned />} />
            <Route path="/config" element={<Config />} />

            <Route path="/methodology" element={<Methodology />} />
            <Route path="/science-based" element={<ScienceBased />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
