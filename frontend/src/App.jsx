import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { CreateEventPage } from "./pages/CreateEventPage.jsx";
import { JoinEventPage } from "./pages/JoinEventPage.jsx";
import { EventResultsPage } from "./pages/EventResultsPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/pull/:code" element={<JoinEventPage />} />
        <Route path="/pull/:code/results" element={<EventResultsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
