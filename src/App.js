import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPages/AboutPage";
import AboutPage2 from "./pages/aboutPages/AboutPage2";
import AboutPage3 from "./pages/aboutPages/AboutPage3";
import AboutLastPage from "./pages/aboutPages/AboutLastPage";

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/AboutPage" element={<AboutPage/>}/>
            <Route path="/AboutPage2" element={<AboutPage2/>}/>
            <Route path="/AboutPage3" element={<AboutPage3/>}/>
            <Route path="/AboutLastPage" element={<AboutLastPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
