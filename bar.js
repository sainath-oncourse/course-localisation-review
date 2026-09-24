const barTerms = [
  ["Main learning area", "Video Courses / Course Library", "Structured learning content"],
  ["Course hierarchy", "Subject → Module → Lesson", "Closest match to the Oncourse lesson hierarchy"],
  ["Practice umbrella", "Practice", "Covers all question-based activity"],
  ["Adaptive practice", "What’s Up Next / Back for Review", "Recommended and review activity"],
  ["Custom practice session", "Drill", "A learner-configured question session"],
  ["Question formats", "MCQ / IQS / PT", "Multiple Choice, Integrated Question Set and Performance Task"],
  ["Practice filters", "Subjects / Question Type / Difficulty", "How learners build a drill"],
  ["Difficulty", "Foundation / Proficient / Exam", "BAR-specific difficulty levels"],
  ["Exam-like practice", "Exam Simulations", "Timed, exam-shaped practice with delayed feedback"],
  ["Simulation sizes", "Half Section / Full Section / Full Exam", "90 minutes / 3 hours / 1.5 days"],
  ["Format simulations", "MCQ Block / IQS Set / Performance Task", "Practice one exam format under timing"],
  ["Practice history", "Recent Sessions / History / Your Simulations", "Previous and in-progress work"],
  ["Performance", "Progress / Exam Readiness / Patterns", "Readiness by format, skill and subject"],
  ["Study material", "Outlines / Notes / Video Courses", "Legal-study content"],
  ["Flashcards", "Subjects / Collections / Flashcards", "Subject-based decks and individual cards"],
  ["Written practice", "Essay Coach / Issue Spotter", "IRAC feedback and fact-pattern analysis"],
  ["Legal research", "Case Law Library / Case Briefs", "Search by party, rule or issue"],
  ["AI support", "Ask JDS / Coach", "Product assistant terminology"],
];

const barReviewItems = [
  {
    id: "bar-navigation",
    area: "Global navigation",
    title: "Bottom navigation",
    kind: "navigation",
    changes: [["Quiz", "Practice"]],
    rationale: "JD Simplified uses Practice as the umbrella for MCQs, integrated question sets, performance tasks, drills and simulations. Quiz is too narrow for the BAR experience.",
  },
  {
    id: "bar-home-simulation",
    area: "Home · Simulation banner",
    title: "BAR-ready home assessment banner",
    kind: "home-simulation",
    changeType: "Course-specific copy",
    changes: [["INICET score", "BAR exam readiness"], ["AKT-focused questions", "BAR formats and subjects"], ["200 questions", "Use the simulation's actual format counts"]],
    rationale: "The latest shared banner contains fixed INICET and AKT copy. For BAR, its title, feature list and question counts must come from the active Half Section, Full Section or Full Exam simulation.",
  },
  {
    id: "bar-practice-landing",
    area: "Practice",
    title: "Practice landing screen",
    kind: "practice-landing",
    changes: [["Quiz", "Practice"], ["Self Assess", "Custom Drill"], ["Tests", "Simulations"]],
    rationale: "Custom Drill identifies the user-configured practice activity, while Simulations are timed exam-shaped experiences. By Subject and Recents remain valid and should not be replaced by Drill.",
  },
  {
    id: "bar-drill-builder",
    area: "Practice · Create",
    title: "Drill setup screen",
    kind: "drill-builder",
    changeType: "Copy + BAR filters",
    changes: [["Create a Self-Assessment", "Custom Drill"], ["Choose the mode of quiz", "Choose a drill mode"], ["CHOOSE TOPICS", "CHOOSE SUBJECTS & FORMAT"]],
    rationale: "JD Simplified builds drills using Subject, Question Type and Difficulty. The BAR builder should expose MCQ, IQS and PT rather than treating every activity as a quiz.",
  },
  {
    id: "bar-simulations",
    area: "Practice · Exam simulation",
    title: "Exam simulations",
    kind: "simulations",
    changes: [["Benchmark", "Exam Simulations"], ["Mini-Benchmark", "Half Section"], ["Benchmark 1", "Full Section"], ["All / My Attempts", "Keep"]],
    rationale: "JD Simplified uses Exam Simulations and names products by their real exam scope: Half Section, Full Section and Full Exam. Keep the existing filter pills and My Attempts; only adapt their labels to the available BAR simulation types.",
  },
  {
    id: "bar-ready-sheet",
    area: "Practice · Ready / resume sheet",
    title: "Activity-specific sheet states",
    kind: "ready-sheet",
    changes: [["Your Quiz is Ready", "Your Drill is Ready"], ["START QUIZ", "START DRILL"], ["Your Quiz is Ready · paused", "Resume Your Drill"], ["RESUME QUIZ", "RESUME DRILL"]],
    rationale: "The shared sheet should use the activity being opened. Drills use Drill; timed exam products use Half Section, Full Section or Full Exam with Start/Resume Simulation actions.",
  },
  {
    id: "bar-search-study",
    area: "Rezzy · Home and tools",
    title: "Rezzy tool pills and prompts",
    kind: "rezzy-home",
    layout: "verified",
    changeType: "Terminology + example content",
    changes: [["Take a quiz", "Start a drill"], ["Medical tool examples", "BAR examples for every tool"], ["Get high-yield notes", "Get high-yield outlines"]],
    rationale: "Match the LSAT review: show every Home pill, preserve the one-tool-at-a-time interaction, and provide concrete BAR prompts for Upload, Canvas, Flowcharts, Flashcards, Drill, High-yield Outlines, Mnemonics and Weak Areas. Keep Rezzy until the BAR persona is confirmed.",
  },
  {
    id: "bar-rezzy-galleries",
    area: "Rezzy · Canvas and Library",
    title: "Canvas and Library empty-state examples",
    kind: "rezzy-galleries",
    changeType: "Example content",
    changes: [["Medical Canvas suggestions", "BAR legal-study suggestions"], ["Cardiac / nephron / anatomy Library chips", "Rules / issue maps / case briefs"]],
    rationale: "The empty-state structure and actions can stay. The hard-coded medical suggestion chips must change because they are shown before a learner has created any content.",
  },
  {
    id: "bar-flashcards-library",
    area: "Flashcards · Home, paywall and search",
    title: "Flashcard library and empty states",
    kind: "flashcards-library",
    changeType: "Terminology + empty-state copy",
    changes: [["Topper Flashcards", "High-Yield BAR Flashcards"], ["topper-level flashcards", "BAR flashcards"], ["By Subject / Themes / My Decks", "Keep"]],
    rationale: "Topper is not BAR terminology. Keep the current Flashcards information architecture and generic actions, but replace visible Topper language in paywalls, search-empty states and fallback translations.",
  },
  {
    id: "bar-flashcards",
    area: "Flashcards",
    title: "BAR flashcard examples",
    kind: "flashcards",
    changeType: "Example content",
    changes: [["Medical prompt examples", "BAR prompt examples"], ["Topper flashcards and PYQs", "High-yield BAR flashcards"]],
    rationale: "JD Simplified supports Flashcards, Subjects and Collections, so the feature can stay. Only medical and PYQ-specific examples need to be replaced.",
  },
  {
    id: "bar-smart-notes",
    area: "Notes · Upload and generated content",
    title: "Smart Notes labels, loading and empty states",
    kind: "smart-notes",
    changeType: "Terminology + state copy",
    changes: [["TOPPER", "HIGH-YIELD OUTLINES"], ["Get Flashcards, PYQs & More", "Get Flashcards, Practice Questions & More"], ["Practice Questions & PYQs", "Practice Questions"], ["No PYQs here", "No practice questions here"]],
    rationale: "The BAR note flow already labels its tab Practice Q, but other states still expose Topper and PYQ. All states in the same journey should consistently use High-Yield Outlines and Practice Questions.",
  },
  {
    id: "bar-paywalls",
    area: "Onboarding and pricing",
    title: "BAR onboarding and paywall copy",
    kind: "paywalls",
    changeType: "Course-specific marketing copy",
    changes: [["NEET-PG / Medical PG", "BAR preparation"], ["Topper Flashcards", "High-Yield BAR Flashcards"], ["PYQs", "Practice Questions"], ["Medical games", "Hide for BAR"]],
    rationale: "BAR currently falls back to base medical copy because there is no BAR locale bundle. Add BAR-specific onboarding and paywall content, and omit game claims that are not available for this course.",
  },
  {
    id: "bar-entry-search",
    area: "Public entry and loaders",
    title: "Public and loading-state language",
    kind: "entry-search",
    changeType: "Course-specific copy",
    changes: [["largest medical Q-Bank", "BAR question bank"], ["medical doubts", "BAR subjects and legal issues"], ["Finding relevant medical videos", "Finding relevant BAR videos"]],
    rationale: "These shared surfaces are outside the main tabs but remain user-visible. Their copy must follow the selected BAR course instead of presenting a medical product.",
  },
  {
    id: "bar-onboarding-demo",
    area: "Onboarding · Tour and lesson demo",
    title: "BAR onboarding messages and examples",
    kind: "onboarding-demo",
    changeType: "Course-specific copy",
    changes: [["medical studies / Medical AI", "BAR preparation / BAR AI study support"], ["Topper Flashcards", "High-Yield BAR Flashcards"], ["PYQs", "Practice Questions"], ["Medical sample decks", "BAR subject decks"]],
    rationale: "The current onboarding tour and lesson demo inherit medical and topper language. The flow can stay, but its headline, assistant description, flashcard examples and question message need BAR-specific copy.",
  },
  {
    id: "bar-account-retention",
    area: "Account · Membership, FAQ and cancellation",
    title: "Membership and retention copy",
    kind: "account-retention",
    changeType: "Course-specific copy",
    changes: [["PYQs, mock tests and drills", "Practice Questions, Exam Simulations and Drills"], ["NEET-PG FAQ", "BAR preparation FAQ"], ["Medical feature claims", "BAR formats and study tools"]],
    rationale: "Membership, cancellation and FAQ screens are reachable after onboarding and currently reuse Indian-medical claims. Their product descriptions must match BAR formats; game rows should be omitted for BAR.",
  },
  {
    id: "bar-discovery-examples",
    area: "Explore · Reminders and deck creation",
    title: "Discovery prompts and empty examples",
    kind: "discovery-examples",
    changeType: "Example content",
    changes: [["interactive medical visuals", "interactive BAR study visuals"], ["medical creators", "BAR educators"], ["Pharmacology notes", "Evidence outline"], ["Medical & Clinical Context", "Legal Concepts & Rules"]],
    rationale: "These prompts appear before the learner has supplied content, so they must not default to medicine. Generic actions stay unchanged; only their hard-coded examples and category labels change.",
  },
];

function renderTerminologyTable() {
  return `<div class="terms-table-wrap"><table class="terms-table bar-terms-table">
    <thead><tr><th>Product area</th><th>JD Simplified</th><th>Meaning in the product</th></tr></thead>
    <tbody>${barTerms.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? "th" : "td"}>${cell}</${index === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

function renderNavigation(version) {
  const proposed = version === "proposed";
  const labels = [proposed ? "Practice" : "Quiz", "Lessons", "Home", "Flashcards", "Play"];
  const navIcons = ["?", "▥", "⌂", "▤", "⌘"];
  return `<div class="component-preview cfa-nav-preview bar-nav-preview">
    <div class="preview-fade">Home content continues above</div>
    <div class="bottom-stack"><div class="rezzy-bar"><span class="rezzy-sparkle">✦</span><span>Ask Rezzy anything</span></div>
      <nav class="tabbar" aria-label="${proposed ? "Proposed" : "Current"} navigation">
        ${labels.map((label, index) => `<button class="tab-item ${index === 0 ? "active" : ""} ${proposed && index === 0 ? "changed" : ""}" type="button" tabindex="-1"><span class="cfa-nav-icon">${navIcons[index]}</span><span class="tab-text">${label}</span></button>`).join("")}
      </nav>
    </div>
  </div>`;
}

function renderHomeSimulation(version) {
  const proposed = version === "proposed";
  const features = proposed
    ? ["40 MCQs · 2 IQS · 1 PT", "Timed Full Section format", "Personalized subject and format analysis"]
    : ["200 Questions covering all subjects", "AI trained on 5,000+ AKT focused questions", "Get personalized analysis & resources"];
  return `<div class="component-preview bar-home-simulation-preview">
    <div class="bar-home-sim-icon">▤</div>
    <h3>${proposed ? "Full Section Simulation" : "Benchmark Test"}</h3>
    <p>${proposed ? "Measure your BAR exam readiness with an exam-shaped simulation." : "AI-powered algorithm to predict your INICET score from this test."}</p>
    <div class="bar-home-sim-features">${features.map((feature) => `<span>✓ ${feature}</span>`).join("")}</div>
    <button type="button" tabindex="-1">TAKE TEST</button>
  </div>`;
}

function renderPracticeLanding(version) {
  const proposed = version === "proposed";
  const segments = proposed ? ["By Subject", "Simulations", "Recents"] : ["By Subject", "Tests", "Recents"];
  return `<div class="component-preview practice-shell-preview bar-practice-preview">
    <div class="practice-shell-header"><div class="practice-shell-icon">?</div><strong>${proposed ? "Practice" : "Quiz"}</strong></div>
    <div class="practice-actions"><button type="button" tabindex="-1"><span>☆</span> Bookmarked</button><button class="${proposed ? "changed-action" : ""}" type="button" tabindex="-1"><span>✦</span> ${proposed ? "Custom Drill" : "Self Assess"}</button></div>
    <div class="practice-segments">${segments.map((item, index) => `<span class="${index === 0 ? "selected" : ""}">${item}</span>`).join("")}</div>
    <div class="bar-subject-list"><small>SUBJECTS</small><div><i>BA</i><span><strong>Business Associations</strong><em>Questions and topics</em></span><b>›</b></div><div><i>CP</i><span><strong>Civil Procedure</strong><em>Questions and topics</em></span><b>›</b></div></div>
  </div>`;
}

function renderDrillBuilder(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview create-test-preview bar-builder-preview">
    <div class="create-test-topline"><span>‹</span><strong>${proposed ? "Custom Drill" : "Create a Self-Assessment"}</strong></div>
    <p class="create-test-prompt">${proposed ? "Choose a drill mode" : "Choose the mode of quiz"}</p>
    <div class="mode-options"><div class="mode-option selected-mode"><span class="mode-radio"></span><span><strong>Practice Mode</strong><small>Review as you go</small></span></div><div class="mode-option"><span class="mode-radio"></span><span><strong>Timed Mode</strong><small>Work against the clock</small></span></div></div>
    <div class="setup-label">${proposed ? "Question format" : "Question type"}</div>
    <div class="bar-format-selector">${(proposed ? [["MCQ", "Multiple Choice"], ["IQS", "Integrated Sets"], ["PT", "Performance Tasks"]] : [["All", "Mixed questions"], ["MCQ", "Multiple Choice"], ["TBS", "Simulation"]]).map(([abbr, label], index) => `<span class="${index === 0 ? "selected" : ""}"><b>${abbr}</b><small>${label}</small></span>`).join("")}</div>
    <div class="setup-label">Difficulty</div><div class="setup-pills">${(proposed ? ["Foundation", "Proficient", "Exam"] : ["Adaptive", "Easy", "Medium", "Hard"]).map((label, index) => `<span class="${index === 0 ? "active-pill" : ""}">${label}</span>`).join("")}</div>
    <button class="setup-cta" type="button" tabindex="-1">${proposed ? "CHOOSE SUBJECTS & FORMAT" : "CHOOSE TOPICS"}</button>
  </div>`;
}

function simulationCard(title, detail, duration, featured = false) {
  return `<div class="bar-simulation-card ${featured ? "featured" : ""}"><div><span class="bar-sim-icon">▤</span><span><strong>${title}</strong><small>${detail}</small></span></div><footer><span>${duration}</span><b>START</b></footer></div>`;
}

function renderSimulations(version) {
  const proposed = version === "proposed";
  if (!proposed) {
    return `<div class="component-preview cfa-mock-preview bar-simulation-preview"><div class="cfa-screen-bar"><span></span><strong>Quiz</strong><i></i></div><div class="cfa-pills mock-pills"><span>All</span><span class="active">Benchmark</span><span>Mini-Benchmark</span><span>My Attempts</span></div>${simulationCard("Benchmark 1", "Realistic assessment", "180 questions", true)}${simulationCard("Mini-Benchmark", "Shorter timed question set", "30 questions")}</div>`;
  }
  return `<div class="component-preview cfa-mock-preview bar-simulation-preview"><div class="cfa-screen-bar"><span></span><strong>Exam Simulations</strong><i></i></div><p class="bar-sim-intro">Practice in the shape of your actual exam.</p><div class="cfa-pills mock-pills"><span class="active">All</span><span>Half Section</span><span>Full Section</span><span>Full Exam</span><span>My Attempts</span></div><div class="bar-sim-grid">${simulationCard("Half Section", "20 MCQ · 1 IQS · 1 PT", "90 minutes")}${simulationCard("Full Section", "40 MCQ · 2 IQS · 1 PT", "3 hours", true)}${simulationCard("Full Exam", "120 MCQ · 6 IQS · 3 PT", "1.5 days")}</div></div>`;
}

function renderReadySheet(version) {
  const proposed = version === "proposed";
  const states = [
    { label: "New", title: proposed ? "Your Drill is Ready" : "Your Quiz is Ready", action: proposed ? "START DRILL" : "START QUIZ" },
    { label: "Paused", title: proposed ? "Resume Your Drill" : "Your Quiz is Ready", action: proposed ? "RESUME DRILL" : "RESUME QUIZ" },
  ];
  return `<div class="component-preview resume-states-preview">${states.map((state) => `<section class="sheet-state-demo"><div class="state-heading"><strong>${state.label}</strong><span>${state.label === "New" ? "Create flow" : "Recent activity"}</span></div><div class="phone-stage"><div class="ghost-app-content"><span class="ghost-app-title"></span><span class="ghost-app-card"></span><span class="ghost-app-card short"></span></div><div class="stage-dim"></div><div class="real-bottom-sheet"><div class="real-sheet-grabber"></div><button class="real-sheet-close" type="button" tabindex="-1">×</button><div class="real-sheet-header"><h3>${state.title}</h3><p>Review the activity details before you begin.</p></div><div class="real-detail-list"><div><strong>Questions</strong><span>20</span></div><div><strong>Format</strong><span>${proposed ? "MCQ" : "Mixed"}</span></div><div><strong>Subject</strong><span>Business Associations<br><small>4 Topics</small></span></div></div><button class="real-sheet-action" type="button" tabindex="-1">${state.action}</button></div></div></section>`).join("")}</div>`;
}

const barRezzyTools = [
  { id: "upload", icon: "▤", title: "Upload your notes", subtitle: "Get Flashcards, Questions and more", special: "upload", suggestions: ["JD outline", "Case brief", "Issue checklist"] },
  { id: "canvas", icon: "◇", title: "Create a Canvas", subtitle: "Make an interactive visual", special: "canvas", suggestions: ["IRAC map", "Issue tree", "Party and claim map"] },
  { id: "flowcharts", icon: "⌁", title: "Learn with Flowcharts", subtitle: "Visualize complex topics easily", suggestions: ["Civil procedure timeline", "Evidence admissibility", "Contract formation"] },
  { id: "flashcards", icon: "▥", title: "Review Flashcards", subtitle: "Recall faster, retain longer", suggestions: ["Evidence rules", "Civil procedure deadlines", "Fiduciary duties"] },
  { id: "drill", icon: "?", title: "Start a drill", subtitle: "Practice a targeted set", suggestions: ["Multiple Choice", "Integrated Question Sets", "Performance Tasks"] },
  { id: "outlines", icon: "≡", title: "Get high-yield outlines", subtitle: "Focus on exam-tested rules", suggestions: ["Negligence elements", "Personal jurisdiction", "Business associations"] },
  { id: "mnemonics", icon: "✦", title: "Memorize with mnemonics", subtitle: "Make tough rules stick", suggestions: ["Evidence exceptions", "Civil procedure motions", "Contract defenses"] },
  { id: "weak-areas", icon: "⌕", title: "Find my weak areas", subtitle: "Know and improve your weak spots", suggestions: ["Recent drills", "Subject gaps", "Question-format gaps"] },
];

function renderRezzyHome() {
  return `<div class="casey-review-layout" data-bar-rezzy-demo>
    <div class="component-preview rezzy-phone rezzy-home-demo bar-rezzy-preview">
      <div class="rezzy-phone-header"><span>☰</span><strong>Rezzy</strong><span>✦</span></div>
      <div class="rezzy-greeting"><div class="rezzy-orb">R</div><h3>What should we study today?</h3></div>
      <div class="savvy-demo-stage" data-bar-rezzy-stage><div class="savvy-tool-scroll">${barRezzyTools.map((tool) => `<button type="button" class="savvy-tool-pill" data-bar-rezzy-tool="${tool.id}"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}</div></div>
      <p class="savvy-demo-hint" data-bar-rezzy-hint>Select a pill to see its actual state</p>
      <div class="rezzy-composer"><span>＋</span><p>Ask Rezzy anything…</p><b>↑</b></div>
    </div>
    <aside class="casey-examples-panel"><p>BAR examples by tool</p>${barRezzyTools.map((tool) => `<section><div><i>${tool.icon}</i><strong>${tool.title}</strong></div><div class="casey-example-chips">${tool.suggestions.map((suggestion) => `<span>${suggestion}</span>`).join("")}</div></section>`).join("")}</aside>
  </div>`;
}

function renderRezzySelectedState(tool) {
  if (tool.special === "upload") {
    return `<div class="savvy-special-sheet"><button class="savvy-back" type="button" data-bar-rezzy-back>‹ Back</button><h3>Upload Notes</h3><p>Rezzy turns BAR notes into flashcards, questions, visual maps and more.</p><div class="savvy-upload-options"><span>▧<small>Camera</small></span><span>▣<small>Photos</small></span><span>▤<small>Files</small></span></div><div class="casey-sheet-examples">${tool.suggestions.map((suggestion) => `<span>${suggestion}</span>`).join("")}</div></div>`;
  }
  if (tool.special === "canvas") {
    return `<div class="savvy-special-sheet canvas-sheet-demo"><div class="savvy-sheet-heading"><button class="savvy-back" type="button" data-bar-rezzy-back>‹ Back</button><b>View all ›</b></div><h3>Create a Canvas</h3><p>Templates and starters are filtered to the active BAR course.</p><div class="savvy-template-grid">${tool.suggestions.map((suggestion) => `<span><i></i><small>${suggestion}</small></span>`).join("")}</div></div>`;
  }
  return `<div class="savvy-prompt-state"><button class="savvy-back" type="button" data-bar-rezzy-back>‹ Back</button><div class="savvy-selected-tool"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></div>${tool.suggestions.map((suggestion) => `<button type="button" class="savvy-suggestion">${suggestion}</button>`).join("")}<button type="button" class="savvy-suggestion">Something else</button></div>`;
}

function renderRezzyGalleries(version) {
  const proposed = version === "proposed";
  const canvas = proposed
    ? ["IRAC issue map", "Evidence admissibility", "Civil procedure timeline", "Contract formation"]
    : ["Spinal cord visualizer", "ECG axis map", "Antibiotic ladder", "ABG interpreter"];
  const library = proposed
    ? ["Explain personal jurisdiction", "Create an evidence flowchart", "Map negligence elements", "Compare business entities"]
    : ["Explain the cardiac cycle", "Create a nephron flowchart", "Draw the brachial plexus", "Compare Gram + vs Gram −"];
  return `<div class="component-preview bar-gallery-preview">
    <section><span class="bar-gallery-icon">◇</span><h3>Make your first canvas</h3><p>Turn a tough topic into an interactive visual or exam-ready explainer.</p><div>${canvas.map((item) => `<b>${item}</b>`).join("")}</div><button type="button" tabindex="-1">CREATE CANVAS</button></section>
    <section><span class="bar-gallery-icon">▤</span><h3>Create your first study visual</h3><p>Ask Rezzy to create diagrams, flowcharts and study visuals.</p><div>${library.map((item) => `<b>${item}</b>`).join("")}</div><button type="button" tabindex="-1">CREATE WITH REZZY</button></section>
  </div>`;
}

function renderFlashcardsLibrary(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-flashcard-library-preview">
    <div class="bar-library-header"><span>▤</span><strong>Flashcards</strong><button type="button" tabindex="-1">＋ CREATE</button></div>
    <div class="bar-library-search">⌕ <span>Search across your Flashcards</span></div>
    <div class="practice-segments"><span>By Subject</span><span class="selected">Themes</span><span>My Decks</span></div>
    <div class="setup-pills"><span class="active-pill">All</span><span>High Yield</span><span>Image</span></div>
    <div class="bar-flashcard-paywall"><i>🔒</i><span><strong>${proposed ? "Unlock High-Yield BAR Flashcards" : "Unlock Topper Flashcards"}</strong><small>${proposed ? "Upgrade to Oncourse Max to access all high-yield BAR flashcards." : "Upgrade to Oncourse Max to access all topper flashcards."}</small></span></div>
    <div class="bar-search-empty"><b>⌕</b><span><strong>No search results for “consideration”</strong><small>${proposed ? "Oncourse can generate BAR flashcards for any subject or rule you choose." : "Oncourse can generate topper-level flashcards for any topic that you like."}</small></span><button type="button" tabindex="-1">GENERATE FLASHCARDS WITH AI</button></div>
  </div>`;
}

function renderFlashcards(version) {
  const proposed = version === "proposed";
  const examples = proposed ? [["Civil Procedure", 8], ["Business Associations", 10], ["Evidence Rules", 8]] : [["Urea Cycle", 8], ["Cardiac Potentials", 10], ["Cranial Nerves", 8]];
  return `<div class="component-preview flashcard-phone-frame flashcard-ai-preview bar-flashcard-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong>Generate Flashcards with AI</strong></div><div class="flashcard-screen-body"><label>Describe the flashcards you want in detail</label><div class="flashcard-prompt-field">Enter a prompt</div><label>Examples of what others are making</label><div class="flashcard-smart-pills">${examples.map(([title, count]) => `<span><strong>${title}</strong><small>${count} Cards</small></span>`).join("")}</div><div class="bar-loading-copy"><span class="bar-loading-spark">✦</span><span><strong>Creating your flashcards</strong><small>${proposed ? "Building high-yield BAR flashcards" : "Adding topper flashcards and PYQs"}</small></span></div><button class="flashcard-disabled-cta" type="button" tabindex="-1">MAKE ME FLASHCARDS</button></div></div>`;
}

function renderSmartNotes(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-notes-preview">
    <div class="bar-library-header"><span>≡</span><strong>Notes</strong><button type="button" tabindex="-1">＋ UPLOAD</button></div>
    <div class="bar-notes-upload"><strong>${proposed ? "Get Flashcards, Practice Questions & More." : "Get Flashcards, PYQs & More."}</strong><small>Upload your notes and enhance them with AI</small></div>
    <div class="setup-pills"><span class="active-pill">ALL</span><span>${proposed ? "HIGH-YIELD OUTLINES" : "TOPPER"}</span><span>UPLOADED</span></div>
    <div class="bar-notes-tabs"><span>Smart Note</span><span>Flashcards</span><span class="active">Practice Q</span><span>Videos</span></div>
    <div class="bar-state-stack"><div><i>◌</i><span><strong>Preparing Your Questions</strong><small>${proposed ? "Improve your application skills with practice questions" : "Improve your Application Skills with Practice Questions & PYQs"}</small></span></div><div><i>!</i><span><strong>${proposed ? "No practice questions here" : "No PYQs here"}</strong><small>Try uploading something else</small></span></div></div>
  </div>`;
}

function renderPaywalls(version) {
  const proposed = version === "proposed";
  const features = proposed
    ? [["High-Yield BAR Flashcards", "Organised by BAR subjects"], ["BAR Question Bank", "MCQs, IQS and Performance Tasks"], ["Smart Notes", "Flashcards and practice questions"]]
    : [["20,000+ Topper Flashcards", "Organised by topics & subjects"], ["Largest Medical PG QBank", "With 1 Lakh+ questions & PYQs"], ["Smart Notes with MAX", "With AI flashcards, PYQs"]];
  return `<div class="component-preview bar-paywall-preview">
    <span class="bar-max-pill">ONCOURSE MAX</span><h3>${proposed ? "Get the smartest subscription for BAR prep" : "Get the smartest subscription for NEET-PG"}</h3>
    <p>${proposed ? "BAR practice, high-yield flashcards and Smart Notes in one place." : "High Yield Questions & 40k+ Topper Flashcards"}</p>
    <div>${features.map(([title, detail]) => `<section><i>✓</i><span><strong>${title}</strong><small>${detail}</small></span></section>`).join("")}</div>
    ${proposed ? "" : '<div class="bar-excluded-feature">Interactive Medical Games · Diagnose patients</div>'}
    <button type="button" tabindex="-1">CONTINUE</button>
  </div>`;
}

function renderEntrySearch(version) {
  const proposed = version === "proposed";
  const rows = proposed
    ? [["Public access", "Log in to access the BAR question bank, Lessons and high-yield flashcards."], ["Public Rezzy", "Ask about BAR subjects and legal issues, and get flashcards, questions and lessons."], ["Video search", "Finding relevant BAR videos…"]]
    : [["Public access", "Log in to access the largest medical Q-Bank and Interactive Lessons."], ["Public Rezzy", "Rezzy can answer any medical doubts you have."], ["Video search", "Finding relevant medical videos…"]];
  return `<div class="component-preview bar-entry-preview">${rows.map(([label, copy]) => `<section><span>${label}</span><p>${copy}</p></section>`).join("")}</div>`;
}

function renderCopySurface(version, kind) {
  const proposed = version === "proposed";
  const rowsByKind = {
    "onboarding-demo": proposed
      ? [
          ["Welcome", "A new way to master BAR preparation"],
          ["Meet Rezzy", "AI study support built around trusted BAR preparation sources"],
          ["Lesson flashcards", "High-Yield BAR Flashcards, organised by subject and topic"],
          ["Practice message", "BAR-style Practice Questions reinforce what you just learned"],
          ["Example decks", "Civil Procedure · Evidence · Business Associations"],
        ]
      : [
          ["Welcome", "A new way to master medical studies"],
          ["Meet Rezzy", "Most Accurate Medical AI Ever Made · trusted medical sources"],
          ["Lesson flashcards", "Topper Flashcards · 50,000+ made by toppers"],
          ["Practice message", "PYQs are most critical for any exam preparation"],
          ["Example decks", "Drug of Choice · Investigation of Choice · Vitamins and Coenzymes"],
        ],
    "account-retention": proposed
      ? [
          ["Membership", "BAR Question Bank · Practice Questions, Exam Simulations and subject-wise Drills"],
          ["Cancellation offer", "MCQs, IQS, Performance Tasks and exam simulations with explanations"],
          ["FAQ", "Is Oncourse Max enough for BAR preparation?"],
          ["Course switcher", "Choose from the available courses"],
        ]
      : [
          ["Membership", "100k+ question bank · PYQs, mock tests and subject-wise drills"],
          ["Cancellation offer", "PYQs, mock tests and drills with explanations"],
          ["FAQ", "Is Oncourse Max enough for NEET-PG preparations?"],
          ["Course switcher", "You can switch between USMLE, UKMLA and Indian Medical PG for now"],
        ],
    "discovery-examples": proposed
      ? [
          ["Explore Canvases", "A library of interactive BAR study visuals"],
          ["Video Lessons", "Curated YouTube lessons from BAR educators"],
          ["Reminder suggestion", "Read Evidence outline"],
          ["Deck icon category", "Legal Concepts & Rules"],
          ["Loading fact", "Use a BAR-neutral study tip or legal concept"],
        ]
      : [
          ["Explore Canvases", "A library of interactive medical visuals"],
          ["Video Lessons", "Curated YouTube lectures from medical creators"],
          ["Reminder suggestion", "Read Pharmacology notes"],
          ["Deck icon category", "Medical & Clinical Context"],
          ["Loading fact", "The left lung is smaller because of the cardiac notch"],
        ],
  };
  return `<div class="component-preview bar-copy-surface-preview">${rowsByKind[kind].map(([label, copy]) => `<section><span>${label}</span><p>${copy}</p></section>`).join("")}</div>`;
}

function renderPreview(item, version) {
  if (item.kind === "navigation") return renderNavigation(version);
  if (item.kind === "home-simulation") return renderHomeSimulation(version);
  if (item.kind === "practice-landing") return renderPracticeLanding(version);
  if (item.kind === "drill-builder") return renderDrillBuilder(version);
  if (item.kind === "simulations") return renderSimulations(version);
  if (item.kind === "ready-sheet") return renderReadySheet(version);
  if (item.kind === "rezzy-home") return renderRezzyHome();
  if (item.kind === "rezzy-galleries") return renderRezzyGalleries(version);
  if (item.kind === "flashcards-library") return renderFlashcardsLibrary(version);
  if (item.kind === "smart-notes") return renderSmartNotes(version);
  if (item.kind === "paywalls") return renderPaywalls(version);
  if (item.kind === "entry-search") return renderEntrySearch(version);
  if (["onboarding-demo", "account-retention", "discovery-examples"].includes(item.kind)) return renderCopySurface(version, item.kind);
  return renderFlashcards(version);
}

function renderReviewItem(item, index) {
  const preview = item.layout === "verified"
    ? `<div class="verified-preview"><div class="version-heading"><span class="version-label verified-label">Latest BAR code</span></div>${renderPreview(item, "current")}</div>`
    : `<div class="comparison-grid"><section class="version-panel"><div class="version-heading"><span class="version-label">Current</span></div>${renderPreview(item, "current")}</section><section class="version-panel"><div class="version-heading"><span class="version-label">Proposed</span></div>${renderPreview(item, "proposed")}</section></div>`;
  return `<article class="review-card" id="${item.id}">
    <header class="card-header"><p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p><h2>${item.title}</h2></header>
    ${preview}
    <div class="decision-row"><div><span class="change-type">${item.changeType || "Copy change only"}</span><div class="change-list">${item.changes.map(([from, to]) => `<div class="change-line"><span class="old-copy">${from}</span><span class="arrow">→</span><span class="new-copy">${to}</span></div>`).join("")}</div></div><div class="decision-copy"><h4>${item.layout === "verified" ? "What was verified" : "Why this change"}</h4><p>${item.rationale}</p></div></div>
  </article>`;
}

document.getElementById("bar-terminology-table").innerHTML = renderTerminologyTable();
document.getElementById("bar-review-list").innerHTML = barReviewItems.map(renderReviewItem).join("");

document.querySelectorAll("[data-bar-rezzy-demo]").forEach((demo) => {
  const stage = demo.querySelector("[data-bar-rezzy-stage]");
  const hint = demo.querySelector("[data-bar-rezzy-hint]");
  const showPills = () => {
    stage.innerHTML = `<div class="savvy-tool-scroll">${barRezzyTools.map((tool) => `<button type="button" class="savvy-tool-pill" data-bar-rezzy-tool="${tool.id}"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}</div>`;
    hint.textContent = "Select a pill to see its actual state";
  };
  stage.addEventListener("click", (event) => {
    const toolButton = event.target.closest("[data-bar-rezzy-tool]");
    if (toolButton) {
      const tool = barRezzyTools.find((item) => item.id === toolButton.dataset.barRezzyTool);
      if (!tool) return;
      stage.innerHTML = renderRezzySelectedState(tool);
      hint.textContent = tool.special ? `${tool.title} opens its own dedicated sheet` : `Only ${tool.title} suggestions are shown`;
      return;
    }
    if (event.target.closest("[data-bar-rezzy-back]")) showPills();
  });
});
