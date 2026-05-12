import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminRoute from "./components/AdminRoute";

import AiChatbot from "./components/AiChatbot";

import NotificationPopup from "./components/NotificationPopup";

import MatrixBackground from "./components/MatrixBackground";

import Home from "./pages/Home";

import About from "./pages/About";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Complaint from "./pages/Complaint";

import Dashboard from "./pages/Dashboard";

import UserDashboard from "./pages/UserDashboard";

import AdminPanel from "./pages/AdminPanel";

import MyComplaints from "./pages/MyComplaints";

import ThreatDetection from "./pages/ThreatDetection";

import EmailDetector from "./pages/EmailDetector";

import ThreatHistory from "./pages/ThreatHistory";

import Profile from "./pages/Profile";

import OcrScanner from "./pages/OcrScanner";

import TrackComplaint from "./pages/TrackComplaint";
import CyberQuiz from "./pages/CyberQuiz";
import CyberChatbot from "./pages/CyberChatbot";
function App() {

  return (

    <BrowserRouter>

      <MatrixBackground />

      <div className="bg-black min-h-screen text-green-400 overflow-x-hidden w-full">

        <Navbar />

        <AiChatbot />

        <NotificationPopup />

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/cyber-quiz"
            element={<CyberQuiz />}
          />
          <Route
            path="/cyber-chatbot"
            element={<CyberChatbot />}
          />
          {/* LOGIN */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* REGISTER */}

          <Route
            path="/register"
            element={<Register />}
          />

          {/* TRACK COMPLAINT */}

          <Route
            path="/track-complaint"
            element={<TrackComplaint />}
          />

          {/* OCR */}

          <Route
            path="/ocr-scanner"
            element={<OcrScanner />}
          />

          {/* PROTECTED COMPLAINT */}

          <Route
            path="/complaint"
            element={
              <ProtectedRoute>

                <Complaint />

              </ProtectedRoute>
            }
          />

          {/* USER DASHBOARD */}

          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute>

                <UserDashboard />

              </ProtectedRoute>
            }
          />
          <Route
            path="/threat-history"
            element={<ThreatHistory />}
          />
          {/* ADMIN PANEL */}

          <Route
            path="/admin"
            element={
              <AdminRoute>

                <AdminPanel />

              </AdminRoute>
            }
          />

          {/* DASHBOARD */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>
            }
          />

          {/* PROFILE */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute>

                <Profile />

              </ProtectedRoute>
            }
          />

          {/* OTHER FEATURES */}

          <Route
            path="/my-complaints"
            element={<MyComplaints />}
          />

          <Route
            path="/threat-detection"
            element={<ThreatDetection />}
          />

          <Route
            path="/email-detector"
            element={<EmailDetector />}
          />

          <Route
            path="/threat-history"
            element={<ThreatHistory />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;