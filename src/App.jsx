import { Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import ProjectGallery from "./components/ProjectGallery";
import Office from "./views/Office";
import Media from "./views/Media";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";
import { ParallaxProvider } from "react-scroll-parallax";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <ParallaxProvider>
        <NavigationBar />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectSlug" element={<ProjectGallery />} />
          <Route path="/media/:mediaState" element={<Media />} />
          <Route path="/office" element={<Office />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
