import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Auth from "./Auth/Auth"; // Auth component
import { useState } from "react";

import User from "./User/User";
import InfoQuiz from "./QuizForm/InfoQuiz/InfoQuiz";
import TradeQuiz from "./QuizForm/TradeQuiz/TradeQuiz";
import DashboardTemplate from "./Dashboard/Dashboard";
import Project from "./Project/Project";
import Profile from "./Profile/Profile";
import AboutPage from "./Components/AboutPage";
import Message from "./Message/Message";
import Error from "./Error/Error";
import Friends from "./Friends/Friends";
import UserProfile from "./ViewProfile/UserProfile";
import Kanban from "./Kanban/Kanban";
import Tasks from "./Task/Task";
import Calendar from "./Calendar/Calendar";
import AddTaskModel from "./Kanban/CreateTaskForMember";
import ProjectDetail from "./Project/ProjectDetail";

import ProtectedRoutes from "./utils/ProtectedRoutes";
import { AuthProvider } from "./utils/AuthProvider";
import ProtectedRoutes1 from "./utils/ProtectedRoutes1";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<Error />} />

          {/* Public route for the homepage */}
          <Route
            path="/"
            element={<HomePage setIsAuthenticated={setIsAuthenticated} />}
          />

          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/kanban/:projectId" element={<Kanban />} />
          <Route path="/projectDetail/:projectId" element={<ProjectDetail />} />
          <Route
            path="/auth"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Auth />
              </ProtectedRoutes>
            }
          />
          <Route path="/quiztrade" element={<TradeQuiz />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/quiz" element={<InfoQuiz />} />
          <Route element={<ProtectedRoutes1 />}>
            <Route path="/dashboard" element={<DashboardTemplate />} />
          </Route>

          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/message" element={<Message />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />

          <Route path="/viewProfile/:email" element={<UserProfile />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
