import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../widgets/navbar";
import Footer from "../widgets/footer";
import Home from "../component/home";



// Lazy-loaded components
const LazyAbout = React.lazy(() => import("../component/about"));
const LazyProducts = React.lazy(() => import("../component/products"));
const LazyCareer = React.lazy(() => import("../component/career"));
const LazyMedia = React.lazy(() => import("../component/media"));
const LazyContact = React.lazy(() => import("../component/contact"));

const LazyTermsCondition = React.lazy(() =>
  import("../component/termsCondition")
);
const LazyCancellation = React.lazy(() =>
  import("../component/cancelRefundPolicy")
);
const LazyPrivacy = React.lazy(() => import("../component/privacyPolicy"));

function Index() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />


          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading About...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/Products"
            element={
              <React.Suspense fallback="Loading Products...">
                <LazyProducts />
              </React.Suspense>
            }
          />
          <Route
            path="/Careers"
            element={
              <React.Suspense fallback="Loading Careers...">
                <LazyCareer />
              </React.Suspense>
            }
          />
          <Route
            path="/Media"
            element={
              <React.Suspense fallback="Loading Media...">
                <LazyMedia />
              </React.Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <React.Suspense fallback="Loading Contact...">
                <LazyContact />
              </React.Suspense>
            }
          />
          <Route
            path="/termsCondition"
            element={
              <React.Suspense fallback="Loading Terms and Conditions...">
                <LazyTermsCondition />
              </React.Suspense>
            }
          />
          <Route
            path="/cancellation&RefundPolicy"
            element={
              <React.Suspense fallback="Loading Cancellation and Refund Policy...">
                <LazyCancellation />
              </React.Suspense>
            }
          />
          <Route
            path="/privacyPolicy"
            element={
              <React.Suspense fallback="Loading Privacy Policy...">
                <LazyPrivacy />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Index;
