import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Auth from "./Auth/Auth"; // Auth component

import User from "./User/User";
import SignalRHub from "./SignalR";
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
function App() {
  return (
    <div>
      <SignalRHub />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/quiz" element={<InfoQuiz />} />
        <Route path="/quiztrade" element={<TradeQuiz />} />
        <Route path="/dashboard" element={<DashboardTemplate />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/friends" element={<Friends />} />

        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/kanban" element={<Kanban />} />

        <Route path="/viewProfile/:email" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
