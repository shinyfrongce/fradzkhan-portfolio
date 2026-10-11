const projects = [
  {
    title: 'RAG Chatbot',
    category: 'AI / RAG',
    description:
      'Document-aware question answering and retrieval workflows for knowledge-base AI experiences, with a focus on contextual responses and practical RAG architecture.',
    stack: ['RAG', 'LLMs', 'Python', 'FastAPI', 'Knowledge Base'],
    github: 'https://github.com/shinyfrongce/RAG-Chatbot-k.git'
  },
  {
    title: 'AI Customer Chatbot',
    category: 'AI / Automation',
    description:
      'Conversational customer-support automation designed around intelligent response handling, API-driven workflows, and business process integration.',
    stack: ['AI Chatbot', 'Automation', 'APIs', 'LLM'],
    github: 'https://github.com/shinyfrongce/AI-Customer-Chatbot-k.git'
  },
  {
    title: 'Spotter Assessment',
    category: 'Full-Stack / Logistics',
    description:
      'A logistics-focused full-stack application covering trip planning, route workflows, driving-time logic, and practical delivery of transportation use cases.',
    stack: ['React', 'TypeScript', 'Django', 'REST API', 'Logistics'],
    github: 'https://github.com/shinyfrongce/spotter-assessment.git',
    demo: 'https://spotter-eld-trip-planner-nine.vercel.app/'
  },
  {
    title: 'Task Management App',
    category: 'Full-Stack / Productivity',
    description:
      'A task and workflow management application focused on CRUD behavior, application state, productivity flows, and reliable full-stack delivery.',
    stack: ['Full Stack', 'CRUD', 'Productivity', 'Web App'],
    github: 'https://github.com/shinyfrongce/task-management-app.git'
  },
  {
    title: 'Sitecore KnowledgeHub',
    category: 'CMS / Enterprise',
    description:
      'A Sitecore-based knowledge experience centered on structured content delivery, information organization, and enterprise-oriented CMS workflows.',
    stack: ['Sitecore', 'CMS', 'Knowledge Hub', 'Enterprise'],
    github: 'https://github.com/shinyfrongce/sitecore-knowledgehub.git'
  },
  {
    title: 'Care Direct',
    category: 'Healthcare / Platform',
    description:
      'A care-focused platform project exploring healthcare-oriented service workflows, application structure, and user experience for service delivery.',
    stack: ['Healthcare', 'Web App', 'Service Platform', 'UX'],
    github: 'https://github.com/shinyfrongce/care-direct'
  },
  {
    title: 'Ether Dice',
    category: 'Web3 / Blockchain',
    description:
      'A web3 dice-game project exploring blockchain-connected application interactions, game logic, and decentralized product concepts.',
    stack: ['Web3', 'Blockchain', 'Game Logic', 'Crypto'],
    github: 'https://github.com/shinyfrongce/ether-dice'
  },
  {
    title: 'Medical CV Template',
    category: 'Document / Healthcare',
    description:
      'A professional medical CV template focused on structured healthcare resume content and clear presentation for clinical or medical profiles.',
    stack: ['CV', 'Resume', 'Healthcare', 'Document Design'],
    github: 'https://github.com/shinyfrongce/medical-cv-template-k.git'
  }
];

const aiSkills = ['LLMs', 'RAG', 'AI Agents', 'PyTorch', 'TensorFlow', 'CatBoost', 'NLP'];
const fullStackSkills = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'Django', 'PostgreSQL'];
const cloudSkills = ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'];

function ProjectCard({ project, index }) {
  return (
    <article className="projectCard" style={{ '--delay': `${index * 55}ms` }}>
      <div className="projectMeta">{project.category}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="projectTags">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="projectLinks">
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>}
        <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </article>
  );
}

function SkillPanel({ title, items }) {
  return (
    <div className="skillPanel">
      <div className="panelLabel">{title}</div>
      <div className="skillTags">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="logo" href="#top" aria-label="Back to top">
          <span className="logoMark">F<span>.</span></span>
          <span className="logoName">FRADZKHAN <em>/ DEV</em></span>
        </a>
        <nav className="navLinks" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="talkButton" href="mailto:fradzkhanulao64@gmail.com">Let's talk <span>↗</span></a>
      </header>

      <section className="hero pageSection" id="top">
        <div className="heroLeft">
          <div className="availability"><span className="pulse" /> OPEN TO COLLABORATION <i /></div>
          <p className="microTitle">HELLO, I'M FRADZKHAN ULAO</p>
          <h1>Building the <span>intelligent</span> future.</h1>
          <p className="heroLead">
            Senior Full-Stack & AI Engineer crafting scalable web platforms, secure APIs, cloud-native systems,
            automation, and production-ready AI experiences.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">Explore my work <span>↗</span></a>
            <a className="ghostButton" href="#contact">Get in touch <span>↗</span></a>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="orbit orbit1" />
          <div className="orbit orbit2" />
          <div className="orbit orbit3" />
          <div className="aiCore">
            <div className="brainIcon">
              <span className="brainLeft" />
              <span className="brainStem" />
              <span className="node n1" /><span className="node n2" /><span className="node n3" />
              <span className="wire w1" /><span className="wire w2" /><span className="wire w3" />
            </div>
          </div>
          <div className="systemBadge">⊙&nbsp;&nbsp; AI SYSTEMS <b>ACTIVE</b></div>
          <div className="scaleBadge">{'{ }'}&nbsp;&nbsp; ENGINEERED TO SCALE</div>
        </div>

        <div className="heroFoot">
          <span>⌾&nbsp; MANILA, PHILIPPINES</span>
          <span>10+ YEARS EXPERIENCE</span>
          <span>SCROLL TO EXPLORE&nbsp; ↓</span>
        </div>
      </section>

      <section className="pageSection about" id="about">
        <div className="sectionCode">01 / ABOUT</div>
        <h2>Where engineering<br />meets <span>intelligence.</span></h2>
        <div className="aboutGrid">
          <p className="aboutStatement">
            I design and build intelligent products — from the full-stack architecture behind them to the experience people interact with.
          </p>
          <div className="aboutCopy">
            <p>
              With 10+ years in full-stack engineering, I specialize in scalable React/Next.js applications,
              Node.js and Python services, high-throughput APIs, cloud systems, and AI-powered products.
            </p>
            <p>
              My work spans LLM/RAG applications, secure backend architecture, real-time workflows,
              performance optimization, private LLM infrastructure, deployment, and engineering leadership.
            </p>
            <div className="inlineLinks">
              <a href="https://linkedin.com/in/fradzkhan-ulao-797759428" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            </div>
          </div>
        </div>
        <div className="skillsGrid">
          <SkillPanel title="AI & MACHINE LEARNING" items={aiSkills} />
          <SkillPanel title="FULL-STACK DEVELOPMENT" items={fullStackSkills} />
          <SkillPanel title="CLOUD & DEVOPS" items={cloudSkills} />
        </div>
      </section>

      <section className="pageSection projects" id="projects">
        <div className="sectionCode">02 / PROJECTS</div>
        <h2>Selected work,<br /><span>built to solve real problems.</span></h2>
        <p className="sectionIntro">
          GitHub-backed projects across AI, full-stack applications, logistics, CMS, healthcare, and web3.
        </p>
        <div className="projectsGrid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
        <div className="githubStrip">
          <span>MORE CODE & EXPERIMENTS</span>
          <a href="https://github.com/shinyfrongce" target="_blank" rel="noreferrer">github.com/shinyfrongce ↗</a>
        </div>
      </section>

      <section className="pageSection experience" id="experience">
        <div className="sectionCode">03 / JOURNEY</div>
        <h2>Experience that<br /><span>builds forward.</span></h2>

        <div className="experienceList">
          <article className="experienceRow">
            <div className="expDate">APR 2021 — JUN 2026</div>
            <div className="expBody">
              <div className="expLocation">REMOTE • US</div>
              <h3>Senior Full-Stack & AI Engineer</h3>
              <div className="company">UniqCare</div>
              <p>
                Architected and maintained five HIPAA-compliant patient platforms using React, Next.js,
                React Native, Node.js, PostgreSQL, Redis, and cloud services. Built high-throughput APIs and
                production frontend workflows while also engineering OpenAI-powered RAG, document processing,
                semantic search, and AI automation. Owned architecture, performance, deployment, monitoring,
                and release.
              </p>
            </div>
          </article>

          <article className="experienceRow">
            <div className="expDate">JUL 2016 — MAR 2021</div>
            <div className="expBody">
              <div className="expLocation">SULU • PHILIPPINES</div>
              <h3>Full-Stack / Cloud & Automation Engineer</h3>
              <div className="company">ReeyaTek Solutions</div>
              <p>
                Built and delivered React, Next.js, Vue.js, Node.js, Laravel, and Python applications across
                client products. Developed secure REST APIs, payments, real-time communication, two-factor
                authentication, and database-backed workflows while managing AWS, Terraform, Docker, CI/CD,
                and contributing to AI/ML prototypes and automation.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pageSection contact" id="contact">
        <div className="sectionCode">04 / CONTACT</div>
        <h2>Have something<br /><span>ambitious</span> in mind?</h2>
        <p>Let's create technology that makes a difference.</p>
        <a className="emailHero" href="mailto:fradzkhanulao64@gmail.com">fradzkhanulao64@gmail.com <span>↗</span></a>
        <div className="contactLinks">
          <a href="https://linkedin.com/in/fradzkhan-ulao-797759428" target="_blank" rel="noreferrer">in&nbsp;&nbsp; LINKEDIN ↗</a>
          <a href="mailto:fradzkhanulao64@gmail.com">✉&nbsp;&nbsp; EMAIL ↗</a>
          <a href="https://github.com/shinyfrongce" target="_blank" rel="noreferrer">GH&nbsp;&nbsp; GITHUB ↗</a>
        </div>
      </section>

      <footer>
        <span>© 2026 FRADZKHAN ULAO</span>
        <span>DESIGNED TO BUILD WHAT'S NEXT.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
