function Navbar() {
  return (
    <nav style={{ background: "#333", color: "white", padding: "10px" }}>
      <h2>Shivam Raj</h2>
    </nav>
  );
}

function Home() {
  return (
    <section>
      <h1>Hello, I am Shivam Raj 👋</h1>
      <p>I am a computer science student</p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I have skills in Java, DSA, HTML, CSS, JavaScript, Python, Django,
        Cloud Computing and more. I enjoy working on full stack projects and
        solving real-world problems. My goal is to complete 180 days of DSA,
        full stack, and DBMS practice.
      </p>
    </section>
  );
}

function Skills() {
  let skills = [
    "HTML", "CSS", "JavaScript", "Java", "Python", "C",
    "Django", "Flutter", "Git & GitHub",
    "Cloud Computing", "Operating System", "Computer Network"
  ];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Project({ name, desc }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <Project name="Clean Water & Sanitation" desc="Awareness platform for water management" />
      <Project name="Stoxp" desc="Stock tracking app using API" />
      <Project name="File Manager" desc="Desktop file handling system" />
      <Project name="Ever Cart" desc="E-commerce simulation platform" />
      <Project name="Weather App" desc="Fetches live weather using API" />
      <Project name="To-Do App" desc="Task management app" />

    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Email: shivamraj81020051@gmail.com</p>
      <p>LinkedIn: www.linkedin.com/in/shivamraj802</p>
      <p>GitHub: shivamraj502</p>
    </section>
  );
}

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;