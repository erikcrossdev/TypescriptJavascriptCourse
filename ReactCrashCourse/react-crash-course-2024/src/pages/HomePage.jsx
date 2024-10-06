import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

function HomePage() {
  return (
    <>
      <Hero title="Become a React Dev" subtitle="Made by Erik Cruz" />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
