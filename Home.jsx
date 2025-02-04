import React from 'react';
function Home() {
  return (
    <div id="container">
      <div id="left">
        <div id="info">
          <h1>
            Hello, It's Me<br />
            Mohammed Ayaz Mohiuddin<br />
            And I'm a Web Developer<br />
          </h1>
          <p>
            I'm a web designer and my expertise is to<br />
            create and design a website, Frontend design, and<br />
            many more...
          </p>
        </div>
        <div id="logos">
          <a href="https://www.linkedin.com/in/mohammed-ayaz-38ba06289/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
              alt="Facebook Logo"
              className="l"
            />
          </a>
          <a href="https://github.com/AYAZ2006">
            <img
              src="https://cdn-icons-png.flaticon.com/128/270/270798.png"
              alt="GitHub Logo"
              className="l"
            />
          </a>
          <a href="https://www.linkedin.com/in/mohammed-ayaz-38ba06289/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
              alt="LinkedIn Logo"
              className="l"
            />
          </a>
        </div>
      </div>
      <div id="right">
        <div id="profile">
          <img
            src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
