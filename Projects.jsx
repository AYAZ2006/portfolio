import React, { useState } from "react";

function Projects() {
  const [showDetails, setShowDetails] = useState(false);
  const [search, setSearch] = useState("");
  function toggle() {
    setShowDetails(!showDetails);
  }
  return (
    <div id="first">
      <div id="search">
        <input type="text" id="searchbox" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
      <div id="open">
        <div id="header">
          <img className="data" id="rocket" src="https://cdn-icons-png.flaticon.com/128/1356/1356479.png" alt="Rocket Icon"/>
          <div className="data" id="name">DevNexus A hub connecting all your skills and projects.</div>
        </div>
        <div id="toggle-button" onClick={toggle}>
          <p>🔽 Click to {showDetails ? "Hide" : "Show"} Details</p>
        </div>
        {showDetails && (
          <div id="details">
            <h3>Project Details</h3>
            {search.toLowerCase() === "" ||
            "portfolio".includes(search.toLowerCase()) ? (
              <>
                <p><strong>Project Name:</strong> Portfolio</p>
                <p><strong>Description:</strong> Welcome to DevNexus, a cutting-edge portfolio designed to showcase your skills, projects, and achievements in a professional yet engaging way. Whether you're a developer, designer, or tech enthusiast, this portfolio acts as a digital hub, connecting all your expertise in one place.</p>
                <p><strong>Tech Stack:</strong> React Js, HTML, CSS</p>
                <p>
                  <strong>GitHub:</strong>{""}
                  <a href="https://github.com/">View Project</a>
                </p>
                <video width="600" controls>
                  <source src="/data/website_oGac55vP.mp4" type="video/mp4"></source>
                </video>
              </>
            ) : (
              <p>No matching projects found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
