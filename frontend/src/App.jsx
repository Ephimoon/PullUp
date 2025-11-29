// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { CreateTypePage } from "./pages/CreateTypePage.jsx";
import { CreateEventPage } from "./pages/CreateEventPage.jsx";
import { CreateRsvpPage } from "./pages/CreateRsvpPage.jsx";
import { JoinEventPage } from "./pages/JoinEventPage.jsx";
import { EventResultsPage } from "./pages/EventResultsPage.jsx";
import { AuthLoginPage } from "./pages/AuthLoginPage.jsx";
import { AuthSignupPage } from "./pages/AuthSignupPage.jsx";
import { WherePullUpPage } from "./pages/WherePullUpPage.jsx";
import { EditMyPullUpPage } from "./pages/EditMyPullUpPage.jsx"; // if you created this one too

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* helper + host tools */}
        <Route path="/where" element={<WherePullUpPage />} />
        <Route path="/edit" element={<EditMyPullUpPage />} />

        {/* create flow */}
        <Route path="/create" element={<CreateTypePage />} />
        <Route path="/create/availability" element={<CreateEventPage />} />
        <Route path="/create/rsvp" element={<CreateRsvpPage />} />

        {/* auth */}
        <Route path="/auth/login" element={<AuthLoginPage />} />
        <Route path="/auth/signup" element={<AuthSignupPage />} />

        {/* guest + results */}
        <Route path="/pull/:code" element={<JoinEventPage />} />
        <Route path="/pull/:code/results" element={<EventResultsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
