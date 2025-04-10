import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LeadFormSection from "./components/LeadFormSection";
import CampaignSection from "./components/CampaignSection";
import ThankYou from "./components/ThankYou";
import OAuthCallback from "./components/OAuthCallback";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LeadFormSection />
              <CampaignSection />
            </>
          }
        />
        <Route path="/oauth/callback" element={<OAuthCallback />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
