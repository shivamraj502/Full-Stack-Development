/**
Day 58 – Mini Project: React Portfolio

Task:
Sections: About Projects Contact
Add Tailwind styling
Deploy live
 */
// Enhanced React + Tailwind Portfolio Features



import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: 'Student Performance Dashboard',
      desc: 'Interactive dashboard using React and Tailwind CSS.',
      tech: ['React', 'Tailwind', 'Charts'],
    },
    {
      title: 'Pomodoro Timer App',
      desc: 'Productivity app for focused study sessions.',
      tech: ['React', 'JavaScript'],
    },
    {
      title: 'Weather App',
      desc: 'Weather forecasting app using APIs.',
      tech: ['API', 'React', 'CSS'],
    },
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white transition duration-500">

        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold tracking-wide text-indigo-600">
              Shivam Raj
            </h1>

            <div className="hidden md:flex items-center gap-4 font-medium">
              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white transition duration-300 shadow">
                <a href="#about">About</a>
              </button>

              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white transition duration-300 shadow">
                <a href="#skills">Skills</a>
              </button>

              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white transition duration-300 shadow">
                <a href="#projects">Projects</a>
              </button>

              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-600 hover:text-white transition duration-300 shadow">
                <a href="#contact">Contact</a>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:scale-105 transition"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="text-center max-w-5xl">
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm mb-6 animate-pulse">
              Computer Science Engineering Student
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I'm <span className="text-indigo-600">Shivam Raj</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Passionate Full Stack Developer learning React, Tailwind CSS,
              Node.js, and building modern web applications.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
              <a
                href="#projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-600 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <img
                src="https://via.placeholder.com/500"
                alt="Profile"
                className="rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 text-indigo-600">
                About Me
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  I am Shivam Raj, a Computer Science Engineering student passionate
                  about Full Stack Development and modern technologies.
                </p>

                <p>
                  I enjoy building responsive websites, solving coding problems,
                  and learning new frameworks and tools.
                </p>

                <p>
                  Currently focusing on React, Tailwind CSS, JavaScript,
                  Node.js, MongoDB, and Git.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white dark:bg-gray-800 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-14 text-indigo-600">
              Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'React',
                'JavaScript',
                'Tailwind CSS',
                'Node.js',
                'MongoDB',
                'Git',
                'HTML',
                'CSS',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 p-6 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                >
                  <h3 className="font-bold text-lg">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-indigo-600">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-500"
                >
                  <div className="h-56 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition">
                        Live Demo
                      </button>

                      <button className="flex-1 border border-gray-300 dark:border-gray-600 py-3 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white dark:bg-gray-800 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-indigo-600">
              Get In Touch
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Open to internships, collaborations, and exciting opportunities.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-5 mb-12">
              <a
                href="mailto:shivam@example.com"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition"
              >
                Send Email
              </a>

              <a
                href="https://github.com"
                className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-600 hover:text-white transition"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex justify-center gap-8 text-4xl">
              <a href="#" className="hover:scale-125 transition">...</a>
              <a href="#" className="hover:scale-125 transition">...</a>
              <a href="#" className="hover:scale-125 transition">...</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          © 2026 Shivam Raj • Built using React + Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default App;
