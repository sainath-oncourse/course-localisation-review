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
    changes: [["Benchmark", "Exam Simulations"], ["Mini-Benchmark", "Half Section"], ["Benchmark 1", "Full Section 1"]],
    rationale: "JD Simplified uses Exam Simulations and names products by their real exam scope: Half Section, Full Section and Full Exam. These labels explain the experience more clearly than Benchmark.",
  },
  {
    id: "bar-formats",
    area: "Practice · Filters",
    title: "Question formats and difficulty",
    kind: "formats",
    changeType: "BAR-specific options",
    changes: [["Generic question types", "MCQ / IQS / PT"], ["Easy / Medium / Hard", "Foundation / Proficient / Exam"]],
    rationale: "These are the labels JD Simplified uses throughout NextGen Practice. Keep Subjects as the curriculum filter and add format and difficulty as separate dimensions.",
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
    area: "Global · Search and study tools",
    title: "Search fields and legal-study language",
    kind: "search-study",
    changeType: "Copy + example content",
    changes: [["Get high-yield notes", "Get high-yield outlines"], ["Medical examples", "BAR subjects and legal issues"]],
    rationale: "Outline is established legal-study language in JD Simplified. Generic search wording can remain, while placeholders should match the content being searched. The BAR tutor name stays unchanged until its course persona is confirmed.",
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
  return `<div class="component-preview cfa-mock-preview bar-simulation-preview"><div class="cfa-screen-bar"><span></span><strong>Exam Simulations</strong><i></i></div><p class="bar-sim-intro">Practice in the shape of your actual exam.</p><div class="bar-sim-grid">${simulationCard("Half Section", "20 MCQ · 1 IQS · 1 PT", "90 minutes")}${simulationCard("Full Section", "40 MCQ · 2 IQS · 1 PT", "3 hours", true)}${simulationCard("Full Exam", "120 MCQ · 6 IQS · 3 PT", "1.5 days")}</div></div>`;
}

function renderFormats(version) {
  const proposed = version === "proposed";
  const formats = proposed ? [["MCQ", "Multiple Choice", "Select-One · Select-Two"], ["IQS", "Integrated Question Sets", "Counseling · Drafting"], ["PT", "Performance Tasks", "Standard PT · Legal Research PT"]] : [["All", "All questions", "Mixed content"], ["MCQ", "Multiple Choice", "Question type"], ["TBS", "Task-Based Simulation", "Question type"]];
  return `<div class="component-preview bar-format-preview"><div class="bar-mini-header"><span>‹</span><strong>${proposed ? "Build a Drill" : "Choose Question Type"}</strong><span></span></div><div class="bar-format-cards">${formats.map(([abbr, title, detail], index) => `<button class="${index === 0 ? "selected" : ""}" type="button" tabindex="-1"><i>${abbr}</i><span><strong>${title}</strong><small>${detail}</small></span><b>›</b></button>`).join("")}</div><div class="bar-filter-block"><label>Subjects</label><div class="bar-search-field">⌕ <span>Search subjects…</span></div><label>Difficulty</label><div class="setup-pills">${(proposed ? ["All", "Foundation", "Proficient", "Exam"] : ["All", "Easy", "Medium", "Hard"]).map((label, index) => `<span class="${index === 0 ? "active-pill" : ""}">${label}</span>`).join("")}</div></div></div>`;
}

function renderReadySheet(version) {
  const proposed = version === "proposed";
  const states = [
    { label: "New", title: proposed ? "Your Drill is Ready" : "Your Quiz is Ready", action: proposed ? "START DRILL" : "START QUIZ" },
    { label: "Paused", title: proposed ? "Resume Your Drill" : "Your Quiz is Ready", action: proposed ? "RESUME DRILL" : "RESUME QUIZ" },
  ];
  return `<div class="component-preview resume-states-preview">${states.map((state) => `<section class="sheet-state-demo"><div class="state-heading"><strong>${state.label}</strong><span>${state.label === "New" ? "Create flow" : "Recent activity"}</span></div><div class="phone-stage"><div class="ghost-app-content"><span class="ghost-app-title"></span><span class="ghost-app-card"></span><span class="ghost-app-card short"></span></div><div class="stage-dim"></div><div class="real-bottom-sheet"><div class="real-sheet-grabber"></div><button class="real-sheet-close" type="button" tabindex="-1">×</button><div class="real-sheet-header"><h3>${state.title}</h3><p>Review the activity details before you begin.</p></div><div class="real-detail-list"><div><strong>Questions</strong><span>20</span></div><div><strong>Format</strong><span>${proposed ? "MCQ" : "Mixed"}</span></div><div><strong>Subject</strong><span>Business Associations<br><small>4 Topics</small></span></div></div><button class="real-sheet-action" type="button" tabindex="-1">${state.action}</button></div></div></section>`).join("")}</div>`;
}

function renderSearchStudy(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-study-preview"><div class="bar-mini-header"><span>☰</span><strong>Rezzy</strong><span>✦</span></div><div class="bar-study-orb">R</div><h3>What should we study today?</h3><div class="bar-study-tools"><div><i>?</i><span><strong>Take a quiz</strong><small>${proposed ? "Practice a BAR subject" : "Practice a targeted set"}</small></span><b>›</b></div><div><i>▥</i><span><strong>Review Flashcards</strong><small>${proposed ? "Civil Procedure rules" : "Cranial nerves"}</small></span><b>›</b></div><div class="${proposed ? "changed-tool" : ""}"><i>≡</i><span><strong>${proposed ? "Get high-yield outlines" : "Get high-yield notes"}</strong><small>${proposed ? "Focus on exam-tested rules" : "Focus on exam-relevant points"}</small></span><b>›</b></div></div><div class="bar-search-audit"><span>⌕</span><strong>${proposed ? "Search subjects, topics or lessons" : "Search subjects or topics"}</strong><small>Keep generic</small></div><div class="tutor-decision-note"><strong>Tutor name</strong><span>Keep current until the BAR persona is confirmed</span></div><div class="rezzy-composer"><span>＋</span><p>Ask Rezzy anything…</p><b>↑</b></div></div>`;
}

function renderFlashcards(version) {
  const proposed = version === "proposed";
  const examples = proposed ? [["Civil Procedure", 8], ["Business Associations", 10], ["Evidence Rules", 8]] : [["Urea Cycle", 8], ["Cardiac Potentials", 10], ["Cranial Nerves", 8]];
  return `<div class="component-preview flashcard-phone-frame flashcard-ai-preview bar-flashcard-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong>Generate Flashcards with AI</strong></div><div class="flashcard-screen-body"><label>Describe the flashcards you want in detail</label><div class="flashcard-prompt-field">Enter a prompt</div><label>Examples of what others are making</label><div class="flashcard-smart-pills">${examples.map(([title, count]) => `<span><strong>${title}</strong><small>${count} Cards</small></span>`).join("")}</div><div class="bar-loading-copy"><span class="bar-loading-spark">✦</span><span><strong>Creating your flashcards</strong><small>${proposed ? "Building high-yield BAR flashcards" : "Adding topper flashcards and PYQs"}</small></span></div><button class="flashcard-disabled-cta" type="button" tabindex="-1">MAKE ME FLASHCARDS</button></div></div>`;
}

function renderPreview(item, version) {
  if (item.kind === "navigation") return renderNavigation(version);
  if (item.kind === "practice-landing") return renderPracticeLanding(version);
  if (item.kind === "drill-builder") return renderDrillBuilder(version);
  if (item.kind === "simulations") return renderSimulations(version);
  if (item.kind === "formats") return renderFormats(version);
  if (item.kind === "ready-sheet") return renderReadySheet(version);
  if (item.kind === "search-study") return renderSearchStudy(version);
  return renderFlashcards(version);
}

function renderReviewItem(item, index) {
  return `<article class="review-card" id="${item.id}">
    <header class="card-header"><p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p><h2>${item.title}</h2></header>
    <div class="comparison-grid"><section class="version-panel"><div class="version-heading"><span class="version-label">Current</span></div>${renderPreview(item, "current")}</section><section class="version-panel"><div class="version-heading"><span class="version-label">Proposed</span></div>${renderPreview(item, "proposed")}</section></div>
    <div class="decision-row"><div><span class="change-type">${item.changeType || "Copy change only"}</span><div class="change-list">${item.changes.map(([from, to]) => `<div class="change-line"><span class="old-copy">${from}</span><span class="arrow">→</span><span class="new-copy">${to}</span></div>`).join("")}</div></div><div class="decision-copy"><h4>Why this change</h4><p>${item.rationale}</p></div></div>
  </article>`;
}

document.getElementById("bar-terminology-table").innerHTML = renderTerminologyTable();
document.getElementById("bar-review-list").innerHTML = barReviewItems.map(renderReviewItem).join("");
