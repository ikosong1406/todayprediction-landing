import React, { useEffect } from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Sports from "../components/Sports";
import Sample from "../components/Sample";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Cta from "../components/Cta";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Today Prediction 365",
    url: "https://todayprediction365.com/",
    description: "Daily sports predictions, football tips and match analysis.",
  };
  return (
    <>
      <SEO
        title="Today's Sports Predictions & Football Tips | Today Prediction 365"
        description="Explore today's football predictions, match previews, betting tips and statistical analysis at Today Prediction 365."
        path="/"
        structuredData={websiteSchema}
      />

      <main>
        <Hero />
        <Features />
        <Sports />
        <Sample />
        <Pricing />
        <FAQ />
        <Cta />
      </main>
    </>
  );
};

export default Home;
