import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiDetailPage from "./pages/ApiDetailPage";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/api/:id" element={<ApiDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
