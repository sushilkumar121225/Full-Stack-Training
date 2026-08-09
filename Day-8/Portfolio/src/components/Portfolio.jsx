import React from "react";
import "./Portfolio.css";
import profile from "../assets/images/profile.jpeg";

function Portfolio() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav>
        <h2>Sushil Kumar</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="home">

        <div className="home-text">
          <h1>Hello, I'm <span>Sushil Kumar</span></h1>

          <h2>Computer Engineering Student</h2>

          <p>
            I am a motivated Computer Engineering student interested in
            software development, web development, databases and
            programming.
          </p>

          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>

        <div>
          <img
            src={profile}
            alt="Sushil Kumar"
            className="profile"
          />
        </div>

      </section>

      {/* About */}
      <section id="about">
        <h2 className="title">About Me</h2>

        <p>
          I am pursuing Bachelor of Technology in Computer Engineering
          from Marwadi University, Rajkot, Gujarat.
        </p>

        <p>
          I enjoy learning new technologies, coding, problem solving
          and developing useful software applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">

        <h2 className="title">My Skills</h2>

        <div className="skills">

          <div>
            <h3>Programming</h3>
            <p>C, Java, Python, Kotlin, JavaScript</p>
          </div>

          <div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, ReactJS, Node.js</p>
          </div>

          <div>
            <h3>Database</h3>
            <p>MySQL, MongoDB, SQLite, PostgreSQL</p>
          </div>

          <div>
            <h3>Other</h3>
            <p>DSA, SQL, JSP, Servlets</p>
          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects">

        <h2 className="title">My Projects</h2>

        <div className="projects">

          <div>
            <h3>Digital Banking System</h3>
            <p>
              A Java banking application for accounts, balances,
              fund transfers and transactions.
            </p>
          </div>

          <div>
            <h3>Color Dot Matching Game</h3>
            <p>
              A web-based game where users match colored dots
              under time constraints.
            </p>
          </div>

          <div>
            <h3>Science Learning Website</h3>
            <p>
              An educational website containing tutorials,
              quizzes, facts, simulations and animations.
            </p>
          </div>

          <div>
            <h3>Movie Ticket Booking</h3>
            <p>
              A web application for browsing movies, viewing
              shows and booking tickets.
            </p>
          </div>

          <div>
            <h3>QR Craft All in One</h3>
            <p>
              An Android application for generating and scanning
              QR codes and barcodes.
            </p>
          </div>

          <div>
            <h3>StudentTrack</h3>
            <p>
              A role-based Student Information System developed
              using ASP.NET, C# and SQL Server.
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact">

        <h2 className="title">Contact Me</h2>

        <p>
          Email:
          <a href="mailto:sushilkumar.121225@marwadiuniversity.ac.in">
            {" "}
            sushilkumar.121225@marwadiuniversity.ac.in
          </a>
        </p>

        <p>
          Location: Rajkot, Gujarat
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/sushil-kumar-471614289"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          {" | "}

          <a
            href="https://github.com/sushilkumar121225"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Sushil Kumar | Portfolio</p>
      </footer>

    </div>
  );
}

export default Portfolio;