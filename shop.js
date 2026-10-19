 "use strict";

// CAREER DATABASE
const careers = [
  {
    id: "upsc",
    title: "Civil Services (UPSC)",
    sector: "government",
    icon: "⚖",
    summary: "Government administration, public policy and civil service roles.",
    eligibility: "A recognised bachelor's degree is generally required. Age, attempts and other rules depend on the latest notification.",
    path: "Complete graduation, study the syllabus and current affairs, and check the latest UPSC notification.",
    tags: ["Graduation", "Government", "Exam"],
    official: "https://upsc.gov.in/"
  },
  {
    id: "ssc",
    title: "SSC CGL / CHSL",
    sector: "government",
    icon: "▤",
    summary: "Central government clerical, assistant and other departmental posts.",
    eligibility: "CHSL generally requires Class 12; CGL generally requires graduation. Post-wise rules vary.",
    path: "Practise reasoning, English, mathematics and general awareness. Check the official notification.",
    tags: ["Class 12 / Graduate", "Central jobs"],
    official: "https://ssc.gov.in/"
  },
  {
    id: "railways",
    title: "Railway Recruitment",
    sector: "government",
    icon: "🚆",
    summary: "Technical, operational, administrative and support roles in Indian Railways.",
    eligibility: "Requirements depend on the post and may range from Class 10/ITI to a degree.",
    path: "Identify the exact post and read the relevant RRB/RRC recruitment notice.",
    tags: ["Multiple qualifications", "Railways"],
    official: "https://indianrailways.gov.in/"
  },
  {
    id: "banking",
    title: "Banking Careers",
    sector: "government",
    icon: "₹",
    summary: "Bank PO, clerk and specialist roles through various recruitment processes.",
    eligibility: "Many PO and clerk roles require graduation. Specialist jobs may require specific qualifications.",
    path: "Review IBPS and SBI notices and practise aptitude, English and reasoning.",
    tags: ["Graduation", "Finance"],
    official: "https://www.ibps.in/"
  },
  {
    id: "defence",
    title: "NDA / Defence Careers",
    sector: "defence",
    icon: "✦",
    summary: "Explore officer-entry and other defence recruitment pathways.",
    eligibility: "Age, education, subjects, medical fitness and selection rules depend on the entry.",
    path: "Read the current official notification and understand the written, selection and medical stages.",
    tags: ["Defence", "Eligibility varies"],
    official: "https://upsc.gov.in/"
  },
  {
    id: "police",
    title: "Police & Uniformed Services",
    sector: "defence",
    icon: "◈",
    summary: "State police, constable, sub-inspector and other uniformed public-service roles.",
    eligibility: "Education, age, physical standards and other requirements vary by state and post.",
    path: "Check the relevant state recruitment board's official notification.",
    tags: ["Public service", "Physical standards"],
    official: "https://www.mppolice.gov.in/"
  },
  {
    id: "engineering",
    title: "Engineering",
    sector: "technology",
    icon: "⚙",
    summary: "Civil, mechanical, electrical, electronics and other engineering fields.",
    eligibility: "Common routes include a relevant diploma or B.E./B.Tech degree.",
    path: "Choose a branch, build practical projects and explore recognised courses and internships.",
    tags: ["Diploma / Degree", "Projects"],
    official: "https://www.aicte-india.org/"
  },
  {
    id: "software",
    title: "Software & Web Development",
    sector: "technology",
    icon: "⌘",
    summary: "Websites, software applications, testing, IT support and related technology roles.",
    eligibility: "Requirements vary. Some roles require a degree; others value practical skills and projects.",
    path: "Learn HTML, CSS, JavaScript and programming basics. Build projects for your portfolio.",
    tags: ["Coding", "Portfolio", "Private sector"],
    official: "https://www.ncs.gov.in/"
  },
  {
    id: "data",
    title: "Data & Analytics",
    sector: "technology",
    icon: "▥",
    summary: "Data analyst and business intelligence roles across different industries.",
    eligibility: "Analytical skills are important. Excel, SQL, statistics and Python can help.",
    path: "Learn spreadsheets and SQL, practise basic statistics and create sample projects.",
    tags: ["Excel", "SQL", "Analysis"],
    official: "https://www.ncs.gov.in/"
  },
  {
    id: "healthcare",
    title: "Healthcare Careers",
    sector: "healthcare",
    icon: "✚",
    summary: "Medicine, nursing, pharmacy, laboratory technology and allied health fields.",
    eligibility: "Each profession has specific education, entrance and registration requirements.",
    path: "Identify the profession and verify course recognition and requirements with the relevant regulator.",
    tags: ["Professional training", "Healthcare"],
    official: "https://www.nmc.org.in/"
  },
  {
    id: "commerce",
    title: "Commerce & Accounting",
    sector: "business",
    icon: "₹",
    summary: "Accounting, taxation, finance, audit support and business operations.",
    eligibility: "Routes include commerce degrees, accounting skills and professional qualifications.",
    path: "Develop accounting, spreadsheet and communication skills and compare course options.",
    tags: ["Commerce", "Finance"],
    official: "https://www.icai.org/"
  },
  {
    id: "teaching",
    title: "Teaching & Education",
    sector: "education",
    icon: "✎",
    summary: "School teaching, tutoring, academic support and education services.",
    eligibility: "Requirements vary by teaching level and may include relevant degrees and teacher training.",
    path: "Choose a subject and level, then verify the required qualifications and eligibility tests.",
    tags: ["Education", "Communication"],
    official: "https://ctet.nic.in/"
  },
  {
    id: "law",
    title: "Law & Legal Careers",
    sector: "education",
    icon: "§",
    summary: "Legal practice, corporate legal support and compliance-related careers.",
    eligibility: "Common routes include a recognised integrated law degree after Class 12 or a law degree after graduation.",
    path: "Check recognised programmes, entrance requirements and professional rules.",
    tags: ["Law", "Reading", "Reasoning"],
    official: "https://www.barcouncilofindia.org/"
  },
  {
    id: "design",
    title: "Design & Creative Careers",
    sector: "private",
    icon: "✿",
    summary: "Graphic design, UI/UX, animation, video editing and creative communication.",
    eligibility: "Requirements vary; practical ability and a portfolio may be important.",
    path: "Choose a creative area, learn the relevant tools and build a portfolio of original work.",
    tags: ["Creative", "Portfolio"],
    official: "https://www.ncs.gov.in/"
  },
  {
    id: "sales",
    title: "Sales & Marketing",
    sector: "private",
    icon: "↗",
    summary: "Sales, digital marketing, customer support and business development.",
    eligibility: "Many entry-level roles accept varied qualifications; requirements depend on the employer.",
    path: "Build communication skills, learn digital tools and verify each employer and job description.",
    tags: ["Communication", "Business"],
    official: "https://www.ncs.gov.in/"
  },
  {
    id: "iti",
    title: "ITI & Skilled Trades",
    sector: "skilled",
    icon: "⚒",
    summary: "Vocational trades such as electrician, fitter, mechanic and welder.",
    eligibility: "Entry requirements depend on the trade and institute; some routes accept Class 8 or 10.",
    path: "Compare recognised ITIs, training facilities and apprenticeship opportunities.",
    tags: ["Class 8 / 10 varies", "Practical skills"],
    official: "https://dgt.gov.in/"
  },
  {
    id: "apprenticeship",
    title: "Apprenticeships",
    sector: "skilled",
    icon: "⚒",
    summary: "Structured workplace training in participating organisations and industries.",
    eligibility: "Requirements vary by apprenticeship, employer, trade and educational qualification.",
    path: "Search official apprenticeship resources and read each opportunity's conditions.",
    tags: ["Training", "Work experience"],
    official: "https://www.apprenticeshipindia.gov.in/"
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    sector: "private",
    icon: "⌂",
    summary: "Hotel operations, travel services, events and tourism-related work.",
    eligibility: "Requirements range from vocational courses to hospitality degrees.",
    path: "Explore recognised training and internships and review job conditions carefully.",
    tags: ["Service", "Practical skills"],
    official: "https://nchm.gov.in/"
  }
];

// OFFICIAL RESOURCE LINKS
const resources = [
  {
    title: "UPSC",
    description: "Civil Services, NDA and other Union Public Service Commission examinations.",
    url: "https://upsc.gov.in/"
  },
  {
    title: "Staff Selection Commission",
    description: "Official information for SSC examinations, notices and results.",
    url: "https://ssc.gov.in/"
  },
  {
    title: "National Career Service",
    description: "Government career services and employment-related information.",
    url: "https://www.ncs.gov.in/"
  },
  {
    title: "Indian Army Recruitment",
    description: "Official Indian Army recruitment information and notices.",
    url: "https://joinindianarmy.nic.in/"
  },
  {
    title: "IBPS",
    description: "Official banking recruitment examination information.",
    url: "https://www.ibps.in/"
  },
  {
    title: "Apprenticeship India",
    description: "Information about apprenticeship training opportunities.",
    url: "https://www.apprenticeshipindia.gov.in/"
  }
];

// QUIZ QUESTIONS
const quizQuestions = [
  {
    question: "Which kind of activity interests you most?",
    hint: "Choose the option that sounds most interesting to you.",
    options: [
      { label: "Technology, computers and problem-solving", value: "technology" },
      { label: "Helping people, teaching or healthcare", value: "people" },
      { label: "Business, money and management", value: "business" },
      { label: "Public service, leadership or defence", value: "public" },
      { label: "Creative work and design", value: "creative" }
    ]
  },
  {
    question: "What is your current education stage?",
    hint: "This helps you explore relevant starting points.",
    options: [
      { label: "Class 10 or below", value: "school10" },
      { label: "Class 12", value: "school12" },
      { label: "Diploma or ITI", value: "diploma" },
      { label: "College student or graduate", value: "graduate" }
    ]
  },
  {
    question: "Which work environment sounds appealing?",
    hint: "Think about the type of work you might enjoy.",
    options: [
      { label: "Government or public service", value: "government" },
      { label: "Private company or startup", value: "private" },
      { label: "Education, care or community service", value: "service" },
      { label: "Practical, hands-on work", value: "hands" }
    ]
  },
  {
    question: "How would you prefer to prepare for your next step?",
    hint: "Different paths require different kinds of preparation.",
    options: [
      { label: "Competitive examinations", value: "exam" },
      { label: "Learning skills and building projects", value: "skills" },
      { label: "A recognised course or qualification", value: "qualification" },
      { label: "Practical training and experience", value: "experience" }
    ]
  }
];

// APP STATE
const state = {
  saved: new Set(),
  quizStep: 0,
  quizAnswers: {},
  quizResult: false
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2500);
}

function switchView(name) {
  $$(".view").forEach(view => view.classList.remove("active-view"));

  const target = $("#" + name + "View");
  if (target) target.classList.add("active-view");

  $$(".nav-item").forEach(button => {
    button.classList.toggle("active", button.dataset.view === name);
  });

  const labels = {
    chat: "Career assistant",
    explore: "Explore careers",
    quiz: "Career interest quiz",
    saved: "Saved careers",
    resources: "Official resources"
  };

  $("#breadcrumbCurrent").textContent = labels[name] || "Career assistant";
  $("#sidebar").classList.remove("sidebar-open");

  if (name === "explore") renderCareers();
  if (name === "saved") renderSaved();
  if (name === "resources") renderResources();
}

function makeCareerCard(career) {
  const saved = state.saved.has(career.id);

  return `
    <article class="career-card">
      <div class="career-card-top">
        <div class="career-icon">${escapeHTML(career.icon)}</div>
        <span class="career-sector">${escapeHTML(career.sector)}</span>
      </div>
      <h3>${escapeHTML(career.title)}</h3>
      <p>${escapeHTML(career.summary)}</p>
      <div class="career-tags">
        ${career.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}
      </div>
      <div class="career-actions">
        <button data-details="${career.id}">View details</button>
        <button data-save="${career.id}">${saved ? "♥ Saved" : "♡ Save"}</button>
      </div>
    </article>
  `;
}

function renderCareers() {
  const search = ($("#careerSearch")?.value || "").trim().toLowerCase();
  const sector = $("#sectorFilter")?.value || "all";

  const filtered = careers.filter(career => {
    const searchable = [
      career.title,
      career.sector,
      career.summary,
      career.eligibility,
      career.path,
      ...career.tags
    ].join(" ").toLowerCase();

    return searchable.includes(search) &&
      (sector === "all" || career.sector === sector);
  });

  $("#careerGrid").innerHTML = filtered.map(makeCareerCard).join("");
  $("#resultsCount").textContent = `${filtered.length} career option${filtered.length === 1 ? "" : "s"}`;
  $("#careerEmpty").classList.toggle("hidden", filtered.length > 0);
}

function renderSaved() {
  const list = careers.filter(career => state.saved.has(career.id));
  $("#savedGrid").innerHTML = list.map(makeCareerCard).join("");
  $("#savedEmpty").classList.toggle("hidden", list.length > 0);
  $("#savedCount").textContent = state.saved.size;
}

function toggleSaved(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
    toast("Career removed from your shortlist.");
  } else {
    state.saved.add(id);
    toast("Career saved to your shortlist.");
  }

  $("#savedCount").textContent = state.saved.size;
  renderCareers();
  renderSaved();
}

function renderResources() {
  $("#resourceGrid").innerHTML = resources.map(resource => `
    <article class="resource-card">
      <h3>${escapeHTML(resource.title)}</h3>
      <p>${escapeHTML(resource.description)}</p>
      <a href="${escapeHTML(resource.url)}" target="_blank" rel="noopener noreferrer">
        Visit official website ↗
      </a>
    </article>
  `).join("");
}

function addMessage(type, content) {
  const container = $("#chatMessages");
  const wrapper = document.createElement("div");
  wrapper.className = `message ${type}-message`;

  const avatar = type === "assistant" ? `
    <div class="message-avatar">✦</div>
  ` : "";

  const name = type === "assistant" ? `
    <div class="message-name">Career Assistant <span>GUIDANCE</span></div>
  ` : "";

  wrapper.innerHTML = `
    ${avatar}
    <div class="message-content">
      ${name}
      <div class="bubble">${content}</div>
    </div>
  `;

  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

function careerListHTML(list) {
  if (!list.length) return "<p>No close match found. Try searching in Explore Careers.</p>";

  return `<ul>${list.map(career => `
    <li><strong>${escapeHTML(career.title)}</strong> — ${escapeHTML(career.summary)}</li>
  `).join("")}</ul>`;
}

function getQualification(text) {
  const t = text.toLowerCase();

  if (/\b(10th|class 10|after 10|matric)\b/.test(t)) return "Class 10";
  if (/\b(12th|class 12|after 12)\b/.test(t)) return "Class 12";
  if (/\b(iti|diploma)\b/.test(t)) return "Diploma / ITI";
  if (/\b(college|graduate|graduation|degree)\b/.test(t)) return "College / graduate";

  return "your current stage";
}

function respond(message) {
  const text = message.toLowerCase();

  if (/\b(hello|hi|hey|namaste)\b/.test(text)) {
    return "Hello! 👋 Welcome to Career Compass India. I can guide you through career options, education, government exams, private-sector jobs and official websites. What would you like to explore?";
  }

  if (/\b(resume|cv|curriculum vitae|interview)\b/.test(text)) {
    return `<strong>Resume and interview tips</strong>
      <ul>
        <li>Keep your resume clear, honest and easy to read.</li>
        <li>Include your education, relevant skills, projects and experience.</li>
        <li>Use examples to explain what you learned or achieved.</li>
        <li>Practise common interview questions and research the employer.</li>
        <li>Never pay someone who promises a guaranteed job or selection.</li>
      </ul>
      Your resume should match the role you are applying for.`;
  }

  if (/\b(govt|government|sarkari|ssc|upsc|railway|bank exam|police|nda|agniveer|defence)\b/.test(text)) {
    const list = careers.filter(career =>
      ["government", "defence"].includes(career.sector) ||
      /railway|police|banking|upsc|ssc|defence/i.test(career.title)
    );

    return `<strong>Government and public-service options</strong>
      <p>Here are some starting points. Eligibility and recruitment dates vary by post and notification.</p>
      ${careerListHTML(list)}
      <p>Use the Official Resources section to open the relevant website. Check the latest notification before applying.</p>`;
  }

  if (/\b(private|company|corporate|private job|it job|software|developer|web development)\b/.test(text)) {
    const list = careers.filter(career =>
      ["private", "technology", "business"].includes(career.sector)
    );

    return `<strong>Private-sector careers to explore</strong>
      ${careerListHTML(list)}
      <p>Build relevant skills and projects, review job descriptions and apply through verified employer websites or trusted employment services.</p>`;
  }

  if (/\b(eligibility|eligible|age limit|qualification|required qualification|can i apply|criteria|marks|percentage)\b/.test(text)) {
    const matches = careers.filter(career =>
      (text.split(/\W+/).filter(word => word.length > 3)
        .some(word => career.title.toLowerCase().includes(word)))
    ).slice(0, 5);

    return `<strong>Understanding eligibility</strong>
      <p>Eligibility can depend on education, age on a specified date, subjects, category rules, physical or medical standards and other conditions.</p>
      ${matches.length ? careerListHTML(matches) : "<p>First identify the exact exam or job. Then read the latest official notification and check every eligibility condition.</p>"}
      Tell me the exam or job name and your qualification for more focused guidance.`;
  }

  if (/\b(after class 10|after 10|10th|class 10|matric|after class 12|after 12|12th|class 12|college student|graduate|graduation|diploma|iti)\b/.test(text)) {
    const qualification = getQualification(text);
    let list = [];

    if (qualification === "Class 10") {
      list = careers.filter(career =>
        ["skilled", "technology", "private"].includes(career.sector) ||
        career.id === "railways"
      ).slice(0, 6);
    } else if (qualification === "Class 12") {
      list = careers.filter(career =>
        ["defence", "education", "private", "skilled"].includes(career.sector) ||
        career.id === "ssc"
      ).slice(0, 7);
    } else if (qualification === "Diploma / ITI") {
      list = careers.filter(career =>
        ["skilled", "technology", "private"].includes(career.sector)
      ).slice(0, 7);
    } else {
      list = careers.slice(0, 7);
    }

    return `<strong>Options to explore: ${escapeHTML(qualification)}</strong>
      <p>These are starting points, not a personalised eligibility decision. Your subjects, interests, location and goals also matter.</p>
      ${careerListHTML(list)}
      <p>Open Explore Careers to search more options, or take the Career Interest Quiz.</p>`;
  }

  if (/\b(salary|pay|income|package|earning)\b/.test(text)) {
    return "Salary varies by role, location, employer, experience and qualifications. Compare current job descriptions, official pay scales for government posts and reputable salary surveys. Which role or sector are you considering?";
  }

  if (/\b(course|degree|college|study|stream|science|commerce|arts|subject)\b/.test(text)) {
    return "The best course depends on your subjects, interests, budget, location and preferred work style. You could explore engineering, healthcare, commerce, law, education, design, skilled trades or public-service exams. Check that institutions and courses are recognised by the relevant authority. What qualification and subjects have you completed?";
  }

  const words = text.split(/\W+/).filter(word => word.length > 3);
  const matches = careers.filter(career => {
    const description = `${career.title} ${career.summary} ${career.tags.join(" ")}`.toLowerCase();
    return words.some(word => description.includes(word));
  }).slice(0, 5);

  if (matches.length) {
    return `<strong>Career paths related to your question</strong>
      ${careerListHTML(matches)}
      <p>These are matches from the built-in directory, not live vacancies. Open Explore Careers for details.</p>`;
  }

  return `I can help with:
    <ul>
      <li>Career options after Class 10 or Class 12</li>
      <li>College courses and career paths</li>
      <li>Government exams and typical eligibility</li>
      <li>Private-sector careers and skills</li>
      <li>Resume, interview tips and official recruitment links</li>
    </ul>
    Try asking: <em>“What can I do after Class 12?”</em> or <em>“Explain SSC eligibility.”</em>`;
}

function sendMessage(message) {
  const query = message.trim();
  if (!query) return;

  addMessage("user", escapeHTML(query).replace(/\n/g, "<br>"));
  $("#chatInput").value = "";

  const answer = respond(query);
  addMessage("assistant", answer);
}

function newChat() {
  $("#chatMessages").innerHTML = "";
  addMessage(
    "assistant",
    "Hi there! 👋 I can help you explore careers in India, compare government and private-sector paths, understand typical eligibility and find official recruitment websites.<br><br>Tell me your current qualification or choose a topic below."
  );

  $("#chatInput").value = "";
  switchView("chat");
}

function renderQuiz() {
  if (state.quizResult) {
    renderQuizResult();
    return;
  }

  const question = quizQuestions[state.quizStep];
  const selected = state.quizAnswers[state.quizStep] || "";

  $("#quizStepLabel").textContent =
    `QUESTION ${state.quizStep + 1} OF ${quizQuestions.length}`;
  $("#quizPercent").textContent =
    `${Math.round((state.quizStep + 1) / quizQuestions.length * 100)}%`;
  $("#quizProgress").style.width =
    `${(state.quizStep + 1) / quizQuestions.length * 100}%`;

  $("#quizContent").innerHTML = `
    <h2 class="quiz-question">${escapeHTML(question.question)}</h2>
    <p class="quiz-hint">${escapeHTML(question.hint)}</p>
    <div class="quiz-options">
      ${question.options.map(option => `
        <label class="quiz-option ${selected === option.value ? "selected" : ""}">
          <input type="radio" name="quizAnswer" value="${escapeHTML(option.value)}"
            ${selected === option.value ? "checked" : ""}>
          <span>${escapeHTML(option.label)}</span>
        </label>
      `).join("")}
    </div>
  `;

  $$("#quizContent .quiz-option").forEach(label => {
    label.addEventListener("click", () => {
      const input = $("input", label);
      state.quizAnswers[state.quizStep] = input.value;

      $$("#quizContent .quiz-option").forEach(option => {
        option.classList.toggle("selected", option === label);
      });
    });
  });

  $("#quizBack").disabled = state.quizStep === 0;
  $("#quizNext").textContent =
    state.quizStep === quizQuestions.length - 1
      ? "See my directions →"
      : "Continue →";
}

function renderQuizResult() {
  $("#quizStepLabel").textContent = "YOUR REFLECTION";
  $("#quizPercent").textContent = "COMPLETE";
  $("#quizProgress").style.width = "100%";

  const answers = state.quizAnswers;
  let picks = [];

  function add(ids) {
    ids.forEach(id => {
      const career = careers.find(item => item.id === id);
      if (career && !picks.some(item => item.id === id)) {
        picks.push(career);
      }
    });
  }

  if (answers[0] === "technology") add(["software", "engineering", "data"]);
  if (answers[0] === "people") add(["teaching", "healthcare", "law"]);
  if (answers[0] === "business") add(["commerce", "sales", "data"]);
  if (answers[0] === "public") add(["upsc", "ssc", "police", "defence"]);
  if (answers[0] === "creative") add(["design", "iti", "hospitality"]);

  if (answers[2] === "government") add(["upsc", "ssc", "banking"]);
  if (answers[2] === "private") add(["software", "sales", "commerce"]);
  if (answers[2] === "service") add(["teaching", "healthcare"]);
  if (answers[2] === "hands") add(["iti", "engineering", "apprenticeship"]);

  if (answers[3] === "exam") add(["ssc", "banking", "upsc"]);
  if (answers[3] === "skills") add(["software", "data", "design"]);
  if (answers[3] === "qualification") add(["healthcare", "law", "commerce"]);
  if (answers[3] === "experience") add(["apprenticeship", "iti", "hospitality"]);

  if (!picks.length) add(["software", "teaching", "commerce", "iti"]);
  picks = picks.slice(0, 6);

  const stage = quizQuestions[1].options.find(
    option => option.value === answers[1]
  )?.label || "Not specified";

  $("#quizContent").innerHTML = `
    <div class="aside-icon">✳</div>
    <h2 class="quiz-question">Your exploration shortlist</h2>
    <p class="quiz-hint">Based on your preferences. These are ideas to research, not a formal assessment. Education stage: <strong>${escapeHTML(stage)}</strong>.</p>
    <div class="career-grid">${picks.map(makeCareerCard).join("")}</div>
    <p class="quiz-hint">Before deciding, check eligibility, course recognition, costs and official notices.</p>
  `;

  $("#quizBack").disabled = false;
  $("#quizNext").textContent = "Retake quiz ↻";
}

function handleQuizNext() {
  if (state.quizResult) {
    state.quizStep = 0;
    state.quizAnswers = {};
    state.quizResult = false;
    renderQuiz();
    return;
  }

  if (!state.quizAnswers[state.quizStep]) {
    toast("Choose an answer to continue.");
    return;
  }

  if (state.quizStep < quizQuestions.length - 1) {
    state.quizStep++;
  } else {
    state.quizResult = true;
  }

  renderQuiz();
}

function handleQuizBack() {
  if (state.quizResult) {
    state.quizResult = false;
    state.quizStep = quizQuestions.length - 1;
    renderQuiz();
    return;
  }

  if (state.quizStep > 0) {
    state.quizStep--;
    renderQuiz();
  }
}

function showCareerDetails(id) {
  const career = careers.find(item => item.id === id);
  if (!career) return;

  addMessage("assistant", `
    <strong>${escapeHTML(career.title)}</strong>
    <p>${escapeHTML(career.summary)}</p>
    <strong>Typical eligibility</strong>
    <p>${escapeHTML(career.eligibility)}</p>
    <strong>Suggested next steps</strong>
    <p>${escapeHTML(career.path)}</p>
    <p><a href="${escapeHTML(career.official)}" target="_blank" rel="noopener noreferrer">Open official website ↗</a></p>
  `);
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-view]");
  if (nav) {
    switchView(nav.dataset.view);
    return;
  }

  const prompt = event.target.closest("[data-prompt]");
  if (prompt) {
    switchView("chat");
    sendMessage(prompt.dataset.prompt);
    return;
  }

  const go = event.target.closest("[data-go]");
  if (go) {
    switchView(go.dataset.go);
    return;
  }

  const save = event.target.closest("[data-save]");
  if (save) {
    toggleSaved(save.dataset.save);
    return;
  }

  const details = event.target.closest("[data-details]");
  if (details) {
    switchView("chat");
    showCareerDetails(details.dataset.details);
  }
});

$("#chatForm").addEventListener("submit", event => {
  event.preventDefault();
  sendMessage($("#chatInput").value);
});

$("#chatInput").addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    $("#chatForm").requestSubmit();
  }
});

$("#newChatBtn").addEventListener("click", newChat);
$("#sidebarQuizBtn").addEventListener("click", () => switchView("quiz"));
$("#careerSearch").addEventListener("input", renderCareers);
$("#sectorFilter").addEventListener("change", renderCareers);
$("#quizNext").addEventListener("click", handleQuizNext);
$("#quizBack").addEventListener("click", handleQuizBack);

$("#mobileMenuBtn").addEventListener("click", () => {
  $("#sidebar").classList.toggle("sidebar-open");
});

document.addEventListener("click", event => {
  if (
    window.innerWidth <= 760 &&
    !event.target.closest("#sidebar") &&
    !event.target.closest("#mobileMenuBtn")
  ) {
    $("#sidebar").classList.remove("sidebar-open");
  }
});

// INITIALISE WEBSITE
renderCareers();
renderResources();
renderQuiz();
$("#savedCount").textContent = state.saved.size;