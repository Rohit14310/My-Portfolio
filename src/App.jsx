// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import About from "./Components/About/About";
// import Services from "./Components/Services/Services";
// import MyWork from "./Components/MyWork/MyWork";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
// import { Route, Routes, useLocation } from "react-router";
// import MoreWork from "./Components/MoreWork/MoreWork";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <MyWork />
//       <Contact />
//       <Footer />

//       <Routes>
//         <Route path="/morework" element={<MoreWork />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
// import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import MoreWork from "./Components/MoreWork/MoreWork";

const App = () => {
  const location = useLocation();

  const isMoreWorkPage = location.pathname === "/morework";

  return (
    <div className="main_container">
      {/* only render these on home page */}
      {!isMoreWorkPage && (
        <>
          <Navbar />
          <Hero />
          <About />
          {/* <Services /> */}
          <MyWork />
          <Contact />
          <Footer />
        </>
      )}

      <Routes>
        <Route path="/morework" element={<MoreWork />} />
      </Routes>
    </div>
  );
};

export default App;
