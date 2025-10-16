import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Movie from "./components/pages/Movie";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardsSection from "./components/CardsSection";

// Layout with Navbar + Footer only
function Layout({ children }) {
  return (
    <>
      <Navbar />       {/* only once */}
      {children}       {/* page content */}
      <Footer />       {/* only once */}
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
            <CardsSection />  {/* only on Home page */}
          </Layout>
        }
      />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/movie" element={<Layout><Movie /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
