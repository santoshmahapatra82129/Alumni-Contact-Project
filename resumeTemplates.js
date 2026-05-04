// 10 ATS-friendly LaTeX resume templates.
// All use single-column layouts, standard fonts, and parseable section headings.

const templates = [
  {
    id: "classic",
    name: "Classic Professional",
    description: "Clean single-column layout with traditional section headings. Works with every ATS.",
    bestFor: "All-purpose job applications",
    latex: String.raw`\documentclass[letterpaper,11pt]{article}
\usepackage[margin=0.75in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\large\bfseries\uppercase}{}{0em}{}[\titlerule]
\titlespacing*{\section}{0pt}{8pt}{4pt}
\setlist[itemize]{leftmargin=*,topsep=2pt,itemsep=1pt}
\pagestyle{empty}

\begin{document}

\begin{center}
{\LARGE \textbf{YOUR NAME}}\\[2pt]
City, State $|$ +91-XXXXXXXXXX $|$ \href{mailto:you@example.com}{you@example.com} $|$ \href{https://linkedin.com/in/you}{linkedin.com/in/you}
\end{center}

\section*{Education}
\textbf{Indira Gandhi Institute of Technology, Sarang} \hfill 2022 -- 2026\\
Bachelor of Technology in Computer Science \hfill CGPA: 8.5/10

\section*{Experience}
\textbf{Software Engineering Intern}, Company Name \hfill May 2025 -- Jul 2025
\begin{itemize}
  \item Built a feature that reduced API response time by 40\%.
  \item Collaborated with a team of 5 engineers in an Agile environment.
\end{itemize}

\section*{Projects}
\textbf{Alumni Portal} -- Node.js, Express, MongoDB
\begin{itemize}
  \item Developed full-stack web app for students to access alumni interview experiences.
  \item Implemented authentication, mock aptitude tests, and resource library.
\end{itemize}

\section*{Skills}
\textbf{Languages:} C++, Python, JavaScript, Java\\
\textbf{Tools:} Git, Docker, Linux, MongoDB, AWS\\
\textbf{Frameworks:} React, Node.js, Express

\section*{Achievements}
\begin{itemize}
  \item Solved 500+ problems on LeetCode.
  \item Winner, Smart India Hackathon 2024.
\end{itemize}

\end{document}`
  },

  {
    id: "jakes",
    name: "Jake's Resume (Popular)",
    description: "The widely-shared Jake Gutierrez template. Compact, ATS-tested, GitHub-popular.",
    bestFor: "Software engineering and tech roles",
    latex: String.raw`\documentclass[letterpaper,11pt]{article}
\usepackage[margin=0.5in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\usepackage{fancyhdr}
\pagestyle{fancy}\fancyhf{}\renewcommand{\headrulewidth}{0pt}
\titleformat{\section}{\vspace{-4pt}\scshape\raggedright\large}{}{0em}{}[\color{black}\titlerule\vspace{-5pt}]
\setlist[itemize]{leftmargin=0.15in,label={\textbullet},itemsep=0pt,topsep=0pt}
\newcommand{\resumeItem}[1]{\item\small{#1 \vspace{-2pt}}}
\newcommand{\resumeSubheading}[4]{\vspace{-2pt}\item
  \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
    \textbf{#1} & #2 \\ \textit{\small#3} & \textit{\small #4} \\
  \end{tabular*}\vspace{-7pt}}

\begin{document}
\begin{center}
{\Huge \textbf{Your Name}} \\ \vspace{1pt}
\small +91-XXXXXXXXXX $|$ \href{mailto:you@example.com}{you@example.com} $|$
\href{https://linkedin.com/in/you}{linkedin.com/in/you} $|$
\href{https://github.com/you}{github.com/you}
\end{center}

\section{Education}
\begin{itemize}[leftmargin=0.15in,label={}]
  \resumeSubheading{IGIT Sarang}{Odisha, India}{B.Tech in Computer Science; CGPA: 8.5}{2022 -- 2026}
\end{itemize}

\section{Experience}
\begin{itemize}[leftmargin=0.15in,label={}]
  \resumeSubheading{Software Engineering Intern}{Remote}{Company Name}{May 2025 -- Jul 2025}
  \begin{itemize}
    \resumeItem{Implemented backend microservice in Go reducing latency by 30\%.}
    \resumeItem{Wrote unit tests achieving 90\% coverage.}
  \end{itemize}
\end{itemize}

\section{Projects}
\begin{itemize}[leftmargin=0.15in,label={}]
  \resumeSubheading{Alumni Portal}{Node.js, Express, MongoDB, EJS}{}{Mar 2026}
  \begin{itemize}
    \resumeItem{Built authentication system using Passport.js and session management.}
    \resumeItem{Developed mock aptitude testing module with auto-grading.}
  \end{itemize}
\end{itemize}

\section{Technical Skills}
\begin{itemize}[leftmargin=0.15in,label={}]
  \small{\item{
    \textbf{Languages}: C++, Python, JavaScript, SQL \\
    \textbf{Frameworks}: React, Node.js, Express, Mongoose \\
    \textbf{Tools}: Git, Docker, Linux, AWS
  }}
\end{itemize}

\end{document}`
  },

  {
    id: "minimalist",
    name: "Minimalist Plain",
    description: "Bare-essentials layout. Maximum ATS parseability. No fancy formatting.",
    bestFor: "Strict ATS systems (banking, government, large corp)",
    latex: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}
\setlength{\parindent}{0pt}
\pagestyle{empty}

\begin{document}

\textbf{\Large YOUR NAME}\\
City, State | +91-XXXXXXXXXX | you@example.com | linkedin.com/in/you

\vspace{8pt}\hrule\vspace{8pt}

\textbf{EDUCATION}\\
Indira Gandhi Institute of Technology, Sarang -- 2022 to 2026\\
Bachelor of Technology, Computer Science\\
CGPA: 8.5/10

\vspace{6pt}
\textbf{EXPERIENCE}\\
\textbf{Software Engineering Intern} -- Company Name -- May 2025 to Jul 2025\\
- Developed REST APIs serving 10,000+ daily requests.\\
- Reduced database query time by 35\% through indexing.

\vspace{6pt}
\textbf{PROJECTS}\\
\textbf{Alumni Portal} -- Node.js, Express, MongoDB\\
- Full-stack platform connecting students with placement experiences.\\
- Includes authentication, mock tests, and resource sharing.

\vspace{6pt}
\textbf{SKILLS}\\
Languages: C++, Python, JavaScript, Java\\
Frameworks: React, Node.js, Express\\
Tools: Git, Docker, MongoDB, AWS

\vspace{6pt}
\textbf{ACHIEVEMENTS}\\
- Smart India Hackathon Winner, 2024\\
- 500+ problems solved on LeetCode\\
- Dean's List, 2023 and 2024

\end{document}`
  },

  {
    id: "swe",
    name: "Software Engineer Focused",
    description: "Skills-forward layout for SDE roles. Emphasizes projects and tech stack.",
    bestFor: "Software Developer / SDE / Backend / Frontend roles",
    latex: String.raw`\documentclass[11pt,a4paper]{article}
\usepackage[margin=0.7in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\bfseries\large}{}{0em}{}[\vspace{-6pt}\hrule]
\setlist[itemize]{leftmargin=*,itemsep=1pt,topsep=2pt}
\pagestyle{empty}

\begin{document}

\begin{center}
{\Large \textbf{YOUR NAME}}\\
Software Engineer | +91-XXXXXXXXXX | \href{mailto:you@example.com}{you@example.com}\\
\href{https://github.com/you}{github.com/you} | \href{https://linkedin.com/in/you}{linkedin.com/in/you} | \href{https://yoursite.dev}{yoursite.dev}
\end{center}

\section*{Technical Skills}
\textbf{Languages:} C++, Python, JavaScript/TypeScript, Go, SQL\\
\textbf{Frontend:} React, Next.js, HTML5, CSS3, TailwindCSS\\
\textbf{Backend:} Node.js, Express, Django, REST, GraphQL\\
\textbf{Database:} PostgreSQL, MongoDB, Redis\\
\textbf{DevOps:} Docker, Kubernetes, AWS, CI/CD, Linux

\section*{Experience}
\textbf{Software Engineering Intern} \hfill May 2025 -- Jul 2025\\
\textit{Company Name, Bengaluru}
\begin{itemize}
  \item Built event-driven microservice in Go handling 1M+ messages/day on Kafka.
  \item Migrated monolith authentication module to OAuth2.0, reducing token refresh latency by 50\%.
  \item Authored design doc reviewed and approved by senior staff engineers.
\end{itemize}

\section*{Projects}
\textbf{Alumni Portal} -- \textit{Node.js, Express, MongoDB, EJS, Passport.js}
\begin{itemize}
  \item Designed RESTful API serving authentication, company data, and mock test scoring.
  \item Implemented session-based auth and protected routes using middleware.
\end{itemize}

\textbf{Distributed Cache} -- \textit{Go, Redis, Docker}
\begin{itemize}
  \item Implemented LRU eviction policy and consistent hashing across nodes.
  \item Achieved sub-millisecond GET latency at p99.
\end{itemize}

\section*{Education}
\textbf{IGIT Sarang} -- B.Tech in Computer Science \hfill 2022 -- 2026\\
CGPA: 8.5/10 | Coursework: Data Structures, OS, DBMS, Networks, AI

\section*{Achievements}
\begin{itemize}
  \item Winner, Smart India Hackathon 2024
  \item 1800+ rating on Codeforces (Expert)
  \item Top 5\% on LeetCode (500+ problems solved)
\end{itemize}

\end{document}`
  },

  {
    id: "fresher",
    name: "Fresh Graduate",
    description: "Education-first layout for students with limited work experience.",
    bestFor: "Final-year students, fresh graduates seeking first role",
    latex: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.75in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\bfseries\large\color{black!85}}{}{0em}{}[\titlerule]
\titlespacing*{\section}{0pt}{8pt}{4pt}
\setlist[itemize]{leftmargin=*,itemsep=1pt,topsep=2pt}
\pagestyle{empty}

\begin{document}

\begin{center}
{\LARGE \textbf{YOUR NAME}}\\[2pt]
Final Year B.Tech Student | +91-XXXXXXXXXX | \href{mailto:you@example.com}{you@example.com}\\
\href{https://linkedin.com/in/you}{linkedin.com/in/you} | \href{https://github.com/you}{github.com/you}
\end{center}

\section*{Career Objective}
Final-year Computer Science student seeking software engineering roles where I can apply data structures, algorithms, and full-stack development skills to solve real-world problems.

\section*{Education}
\textbf{Indira Gandhi Institute of Technology, Sarang} \hfill 2022 -- 2026\\
B.Tech in Computer Science \hfill CGPA: 8.5/10\\
Relevant Coursework: DSA, OOP, DBMS, OS, Computer Networks, AI

\textbf{XYZ Higher Secondary School} \hfill 2020 -- 2022\\
Class XII -- Science (PCM) \hfill 92\%

\section*{Projects}
\textbf{Alumni Portal} -- \textit{Node.js, MongoDB, Express}
\begin{itemize}
  \item Built full-stack web platform for sharing placement interview experiences.
  \item Designed MongoDB schema for users, companies, and experiences.
  \item Integrated Passport.js authentication and session management.
\end{itemize}

\textbf{Personal Expense Tracker} -- \textit{React, Firebase}
\begin{itemize}
  \item Created mobile-first PWA tracking expenses with category-based analytics.
\end{itemize}

\section*{Technical Skills}
\textbf{Programming:} C++, Python, Java, JavaScript\\
\textbf{Web:} HTML, CSS, React, Node.js, Express\\
\textbf{Database:} MySQL, MongoDB\\
\textbf{Tools:} Git, GitHub, VS Code, Linux

\section*{Achievements \& Activities}
\begin{itemize}
  \item Runner-up, Inter-college Coding Contest, 2024
  \item Member, Coding Club IGIT
  \item Volunteer, NSS chapter
\end{itemize}

\end{document}`
  },

  {
    id: "intern",
    name: "Internship Hunter",
    description: "Project-heavy layout designed for students applying to internships.",
    bestFor: "Summer internships, off-campus internship applications",
    latex: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.65in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\bfseries\normalsize\uppercase}{}{0em}{}[\titlerule]
\titlespacing*{\section}{0pt}{6pt}{3pt}
\setlist[itemize]{leftmargin=*,itemsep=0pt,topsep=2pt}
\pagestyle{empty}

\begin{document}

\begin{center}
{\Large \textbf{YOUR NAME}} \quad | \quad B.Tech CSE, IGIT Sarang\\
+91-XXXXXXXXXX | \href{mailto:you@example.com}{you@example.com} | \href{https://linkedin.com/in/you}{LinkedIn} | \href{https://github.com/you}{GitHub}
\end{center}

\section*{Education}
B.Tech in Computer Science, IGIT Sarang \hfill CGPA: 8.5/10 \hfill 2022 -- 2026

\section*{Projects}
\textbf{Alumni Connect Platform} -- \textit{Node.js, MongoDB, EJS} \hfill \href{https://github.com/you/alumni}{[GitHub]}
\begin{itemize}
  \item Built portal where 500+ students share company-specific interview experiences.
  \item Implemented Passport.js auth, session cookies, and a 10-question mock test engine.
  \item Designed MongoDB schemas for User, Company, and Experience with relational refs.
\end{itemize}

\textbf{Real-time Chat App} -- \textit{Socket.io, React, Express} \hfill \href{https://github.com/you/chat}{[GitHub]}
\begin{itemize}
  \item Multi-room chat supporting 100+ concurrent users with typing indicators.
  \item JWT-based authentication and message persistence in MongoDB.
\end{itemize}

\textbf{Movie Recommendation System} -- \textit{Python, scikit-learn, Pandas} \hfill \href{https://github.com/you/movies}{[GitHub]}
\begin{itemize}
  \item Built collaborative-filtering recommender on 25k MovieLens dataset.
  \item Achieved RMSE of 0.87 with matrix factorization.
\end{itemize}

\section*{Technical Skills}
\textbf{Programming:} C++, Python, JavaScript, SQL\\
\textbf{Web Development:} React, Node.js, Express, MongoDB, REST APIs\\
\textbf{CS Fundamentals:} Data Structures, Algorithms, OOP, OS, DBMS, Networks\\
\textbf{Tools:} Git, GitHub, Linux, VS Code, Postman

\section*{Coding Profiles}
LeetCode (500+ solved, top 5\%) | Codeforces (Specialist) | GeeksforGeeks (Top contributor)

\section*{Position of Responsibility}
\textbf{Tech Lead, Coding Club IGIT} \hfill 2024 -- Present
\begin{itemize}
  \item Conducted weekly DSA sessions for 80+ juniors.
  \item Organized 24-hour intra-college hackathon with 200+ participants.
\end{itemize}

\end{document}`
  },

  {
    id: "academic",
    name: "Academic / Research",
    description: "Research-oriented layout with publications and academic emphasis.",
    bestFor: "Higher studies, research internships, M.S./Ph.D. applications",
    latex: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.85in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\large\bfseries}{}{0em}{}
\titlespacing*{\section}{0pt}{10pt}{4pt}
\setlist[itemize]{leftmargin=*,itemsep=1pt,topsep=2pt}
\pagestyle{empty}

\begin{document}

\begin{center}
{\Large \textbf{Your Name}}\\
Department of Computer Science, IGIT Sarang\\
\href{mailto:you@example.com}{you@example.com} | +91-XXXXXXXXXX | \href{https://scholar.google.com/citations?user=XXX}{Google Scholar}
\end{center}

\section*{Research Interests}
Machine Learning, Natural Language Processing, Distributed Systems

\section*{Education}
\textbf{B.Tech, Computer Science} -- IGIT Sarang \hfill 2022 -- 2026\\
CGPA: 8.5/10 (Department Rank: 3 of 90)\\
\textit{Thesis (in progress):} "Federated Learning Approaches for Edge Devices" under Prof. X.Y.

\section*{Publications}
\begin{itemize}
  \item \textbf{Your Name}, Co-author. "Title of paper." \textit{Conference / Journal Name}, 2025. \href{https://arxiv.org/abs/XXXX}{[arXiv]}
  \item \textbf{Your Name}. "Workshop paper title." \textit{Workshop on XYZ}, 2024.
\end{itemize}

\section*{Research Experience}
\textbf{Research Intern} -- IIT Bombay, Prof. A.B. Lab \hfill May 2025 -- Jul 2025
\begin{itemize}
  \item Investigated graph neural networks for molecular property prediction.
  \item Implemented baseline models in PyTorch; reproduced 3 published results.
\end{itemize}

\section*{Projects}
\textbf{Federated Learning Simulator} -- \textit{Python, PyTorch}
\begin{itemize}
  \item Designed simulator for FedAvg and FedProx across 100 simulated clients.
  \item Studied effect of non-IID data distribution on convergence.
\end{itemize}

\section*{Skills}
\textbf{Programming:} Python, C++, MATLAB, R\\
\textbf{ML Frameworks:} PyTorch, TensorFlow, scikit-learn, JAX\\
\textbf{Tools:} \LaTeX, Git, Linux, Slurm

\section*{Awards \& Honors}
\begin{itemize}
  \item Department Merit Scholarship, 2023 and 2024
  \item Best Paper Runner-up, Student Symposium 2024
\end{itemize}

\section*{References}
Available upon request.

\end{document}`
  },

  {
    id: "data-science",
    name: "Data Science / ML",
    description: "Tailored for data, ML, and analytics roles. Highlights tooling and impact metrics.",
    bestFor: "Data Scientist, ML Engineer, Data Analyst roles",
    latex: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.7in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\bfseries\large}{}{0em}{}[\titlerule]
\titlespacing*{\section}{0pt}{8pt}{3pt}
\setlist[itemize]{leftmargin=*,itemsep=1pt,topsep=2pt}
\pagestyle{empty}

\begin{document}

\begin{center}
{\Large \textbf{YOUR NAME}}\\
Aspiring Data Scientist | +91-XXXXXXXXXX | \href{mailto:you@example.com}{you@example.com}\\
\href{https://kaggle.com/you}{Kaggle} | \href{https://github.com/you}{GitHub} | \href{https://linkedin.com/in/you}{LinkedIn}
\end{center}

\section*{Skills}
\textbf{Languages:} Python, R, SQL\\
\textbf{ML/DL:} scikit-learn, PyTorch, TensorFlow, XGBoost, Hugging Face Transformers\\
\textbf{Data Tools:} Pandas, NumPy, Spark, Airflow, dbt\\
\textbf{Visualization:} Matplotlib, Seaborn, Plotly, Tableau, Power BI\\
\textbf{Cloud:} AWS (S3, SageMaker), GCP (BigQuery), Databricks

\section*{Experience}
\textbf{Data Science Intern} -- Company Name \hfill May 2025 -- Jul 2025
\begin{itemize}
  \item Built customer-churn prediction model (XGBoost) achieving AUC 0.91, beating baseline by 12\%.
  \item Designed Airflow pipeline ingesting 50GB/day from 4 sources into Snowflake warehouse.
  \item Presented findings to product team; recommendations adopted reduced churn by 8\%.
\end{itemize}

\section*{Projects}
\textbf{Movie Recommender on MovieLens 25M} -- \textit{Python, PySpark}
\begin{itemize}
  \item Trained ALS matrix factorization at scale; RMSE 0.83 on held-out set.
\end{itemize}

\textbf{NLP Sentiment Classifier} -- \textit{Hugging Face, PyTorch}
\begin{itemize}
  \item Fine-tuned DistilBERT on 50k Twitter samples; 92\% accuracy.
\end{itemize}

\section*{Education}
\textbf{IGIT Sarang} -- B.Tech CSE \hfill 2022 -- 2026\\
CGPA: 8.5/10 | Coursework: Statistics, Linear Algebra, ML, Deep Learning

\section*{Achievements}
\begin{itemize}
  \item Kaggle Competitions Expert (top 5\%)
  \item Coursera ML Specialization (Stanford) -- Completed
\end{itemize}

\end{document}`
  },

  {
    id: "compact",
    name: "One-Page Compact",
    description: "Tight single-page layout that fits more content without sacrificing readability.",
    bestFor: "Experienced students with multiple internships and projects",
    latex: String.raw`\documentclass[10pt]{article}
\usepackage[margin=0.5in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\bfseries\small\uppercase}{}{0em}{}[\titlerule]
\titlespacing*{\section}{0pt}{4pt}{2pt}
\setlist[itemize]{leftmargin=*,itemsep=0pt,topsep=1pt,parsep=0pt}
\pagestyle{empty}
\linespread{1.0}

\begin{document}

\begin{center}
{\large \textbf{YOUR NAME}} | +91-XXXXXXXXXX | \href{mailto:you@example.com}{you@example.com} | \href{https://linkedin.com/in/you}{linkedin.com/in/you} | \href{https://github.com/you}{github.com/you}
\end{center}

\section*{Education}
\textbf{IGIT Sarang} -- B.Tech CSE, CGPA 8.5/10 \hfill 2022 -- 2026

\section*{Experience}
\textbf{SDE Intern, Company A} \hfill May 2025 -- Jul 2025
\begin{itemize}
  \item Built REST API in Go reducing p95 latency by 40\% via connection pooling.
  \item Migrated 15 legacy endpoints to gRPC, cutting payload size by 60\%.
\end{itemize}
\textbf{Backend Intern, Startup B} \hfill Dec 2024 -- Feb 2025
\begin{itemize}
  \item Implemented Stripe payment integration handling \$50k+ monthly volume.
  \item Wrote 80\% test coverage suite using Jest.
\end{itemize}

\section*{Projects}
\textbf{Alumni Portal} -- Node.js, MongoDB, Express -- Auth, sessions, mock tests; 500+ DAU.\\
\textbf{Distributed KV Store} -- Go, Raft -- Implemented leader election and log replication.\\
\textbf{Image Classifier} -- PyTorch, ResNet50 -- Achieved 94\% on CIFAR-10 with augmentation.

\section*{Skills}
\textbf{Languages:} C++, Python, JavaScript, Go, SQL.
\textbf{Web:} React, Node, Express, REST.
\textbf{Data:} MongoDB, PostgreSQL, Redis.
\textbf{DevOps:} Docker, Kubernetes, AWS, Linux, CI/CD.

\section*{Achievements}
\begin{itemize}
  \item Smart India Hackathon Winner 2024 | Codeforces Expert (1800+) | LeetCode Top 5\%
  \item Department Rank 3 / 90 | NPTEL Discrete Math (Gold)
\end{itemize}

\end{document}`
  },

  {
    id: "leadership",
    name: "Leadership / Management",
    description: "Layout for students with strong leadership, club, and POR experience.",
    bestFor: "Consulting, product management, MBA prep, business roles",
    latex: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.75in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\titleformat{\section}{\bfseries\large}{}{0em}{}[\vspace{-4pt}\titlerule]
\titlespacing*{\section}{0pt}{8pt}{3pt}
\setlist[itemize]{leftmargin=*,itemsep=1pt,topsep=2pt}
\pagestyle{empty}

\begin{document}

\begin{center}
{\LARGE \textbf{YOUR NAME}}\\[2pt]
+91-XXXXXXXXXX | \href{mailto:you@example.com}{you@example.com} | \href{https://linkedin.com/in/you}{linkedin.com/in/you}
\end{center}

\section*{Education}
\textbf{IGIT Sarang} -- B.Tech in Computer Science \hfill 2022 -- 2026\\
CGPA: 8.5/10 | Department Rank: 3/90

\section*{Leadership \& Positions of Responsibility}
\textbf{President, Coding Club} \hfill 2024 -- 2026
\begin{itemize}
  \item Led team of 15 across content, events, and outreach; grew membership from 80 to 250.
  \item Organized 24-hour hackathon with 200+ participants and \$500 prize pool.
  \item Negotiated sponsorship of \$1500 from 3 industry partners.
\end{itemize}

\textbf{Class Representative, CSE 2022 Batch} \hfill 2022 -- Present
\begin{itemize}
  \item Coordinated between 90 students and faculty across academic and administrative issues.
  \item Spearheaded curriculum-feedback survey adopted department-wide.
\end{itemize}

\section*{Internships}
\textbf{Product Intern} -- Startup Name \hfill May 2025 -- Jul 2025
\begin{itemize}
  \item Conducted 30+ user interviews shaping roadmap of new B2B feature.
  \item A/B tested onboarding flow improving D7 retention by 18\%.
\end{itemize}

\section*{Projects}
\textbf{Alumni Portal (Founder)} -- Built and shipped to 500+ peers as a self-led product.\\
\textbf{Campus Event Tracker} -- React, Firebase. Deployed to college internal use.

\section*{Skills}
Stakeholder management, public speaking, data-driven decision making, project planning.\\
Tools: Notion, Figma, Jira, SQL, Excel, basic Python.

\section*{Awards}
\begin{itemize}
  \item Best Student Leader Award, IGIT 2025
  \item Smart India Hackathon Winner, 2024
  \item Toastmasters Competent Communicator, 2024
\end{itemize}

\end{document}`
  }
];

module.exports = templates;
