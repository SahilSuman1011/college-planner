import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load components for better performance
const CourseSelectionPage = lazy(
  () => import("./components/CourseSelectionPage"),
);
const CollegeListingPage = lazy(
  () => import("./components/CollegeListingPage"),
);
const CollegeDetailPage = lazy(() => import("./components/CollegeDetailPage"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseSelectionPage />} />
          <Route path="/colleges/:courseId" element={<CollegeListingPage />} />
          <Route path="/college/:collegeId" element={<CollegeDetailPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
