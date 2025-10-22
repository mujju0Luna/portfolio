import { Mail, Phone, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, Code, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">MA</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#certifications" className="text-slate-600 hover:text-blue-600 transition-colors">Certifications</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Available for Opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                Mohammed Mujtaba Akthar
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Computer Science Engineering Student | Full Stack Developer | AI Enthusiast
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="mailto:mujtabamd398@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail size={20} />
                  <span>mujtabamd398@gmail.com</span>
                </a>
                <a href="tel:+918801361879" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Phone size={20} />
                  <span>+91 88013 61879</span>
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/mujtaba-a-29284b2a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mujtabamd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-8xl font-bold text-white">MA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-800">Education</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Bachelor of Technology in Computer Science Engineering</h3>
            <p className="text-lg text-slate-600 mb-2">Vignana Bharathi Institute of Technology, Hyderabad</p>
            <div className="flex items-center gap-4 text-slate-600">
              <span className="font-semibold">2022 – 2026</span>
              <span className="px-4 py-1 bg-blue-600 text-white rounded-full font-semibold">CGPA: 7.8 / 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-800">Projects</h2>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">Automating Personalized Learning Through Voice and AI</h3>
                <span className="text-sm text-slate-500 font-medium">2025</span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Developed a real-time role-based web application for students and faculty to manage rooms, generate AI-powered quizzes from PDFs, and provide interactive study assistance using Gemini API with secure storage and live performance tracking.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Firebase Firestore', 'Cloudinary', 'PDF.js', 'Google Gemini API', 'REST APIs', 'React+Vite', 'Real-time Sync'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">ClubEase – Club Automation Tool</h3>
                <span className="text-sm text-slate-500 font-medium">2025</span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Developed a multi-portal AI-powered college club management system enabling automated event approvals, recruitment filtering, and real-time data management.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Firebase Firestore', 'Cloudinary', 'PDF.js', 'Google Gemini API', 'REST APIs', 'React+Vite', 'Real-time Sync'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">EmailAutomation System</h3>
                <span className="text-sm text-slate-500 font-medium">2025</span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Created an intelligent email management system with AI-powered summarization, priority detection, auto-reply generation, and voice-based interactions using Gmail API, Firebase, and Gemini AI.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase Firestore & Auth', 'Gmail API (OAuth 2.0)', 'Google Gemini API', 'PDF.js', 'REST APIs'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Internships Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-800">Virtual Internships</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'AWS Data Engineering Virtual Internship',
              'Java Full Stack Developer Virtual Internship',
              'Alteryx Data Analytics Process Automation Virtual Internship'
            ].map(internship => (
              <div key={internship} className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
                <p className="text-slate-700 font-medium">{internship}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-800">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillCategory
              title="Programming"
              skills={['C', 'Java', 'Python']}
            />
            <SkillCategory
              title="Frontend"
              skills={['HTML', 'CSS', 'JavaScript']}
            />
            <SkillCategory
              title="Backend"
              skills={['Flask', 'Servlet', 'Gradio (Prompting)']}
            />
            <SkillCategory
              title="Web Tools & APIs"
              skills={['REST API', 'Firebase Firestore', 'Supabase', 'Postman']}
            />
            <SkillCategory
              title="Databases"
              skills={['SQL', 'MySQL', 'Firebase', 'Supabase']}
            />
            <SkillCategory
              title="Design Tools"
              skills={['Bolt AI', 'Canva']}
            />
            <SkillCategory
              title="AI & ML"
              skills={['Fundamentals of AI, ML', 'Prompt Engineering']}
            />
            <SkillCategory
              title="AI Libraries/Platforms"
              skills={['scikit-learn', 'Hugging Face', 'Transformers']}
            />
            <SkillCategory
              title="Data Analysis"
              skills={['NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'Altair', 'Tableau']}
            />
            <SkillCategory
              title="Concepts"
              skills={['Data Structures', 'Algorithms', 'Software Engineering (Agile, SDLC)']}
            />
            <SkillCategory
              title="Soft Skills"
              skills={['Communication', 'Problem-Solving', 'Leadership', 'Time Management', 'Strategic Thinking']}
            />
            <SkillCategory
              title="Languages"
              skills={['English (Fluent)', 'Hindi (Fluent)', 'Telugu', 'Urdu (Native)']}
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-800">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'NDG Linux Essentials',
              'CLP – Advanced Programming in C',
              'PCAP – Programming Essentials in Python',
              'Software Engineering Fundamentals – Software Development and Testing',
              'Continuous Integration and Delivery – DevOps',
              'Hadoop Architecture and HDFS',
              'Networking Essentials',
              'Database Management System – Science Graduates'
            ].map(cert => (
              <div key={cert} className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-slate-50 p-4 rounded-xl border border-blue-100">
                <Award className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-slate-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
          <a
            href="https://drive.google.com/drive/folders/your-folder-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={20} />
            View All Certificates
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always open to discussing new opportunities, projects, or collaborations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="mailto:mujtabamd398@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://linkedin.com/in/mujtaba-a-29284b2a6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors shadow-lg">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/mujtabamd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors shadow-lg">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-slate-950 text-slate-400 text-center">
        <p>Last Updated: October 2025 | Mohammed Mujtaba Akthar</p>
      </footer>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
