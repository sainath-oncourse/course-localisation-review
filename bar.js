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
    changeType: "Shared component · BAR value",
    changes: [["Quiz", "Practice"]],
    rationale: "JD Simplified uses Practice as the umbrella for MCQs, integrated question sets, performance tasks, drills and simulations. Quiz is too narrow for the BAR experience.",
  },
  {
    id: "bar-practice-landing",
    area: "Practice",
    title: "Practice landing screen",
    kind: "practice-landing",
    changeType: "Shared component · BAR values",
    changes: [["Quiz", "Practice"], ["Self Assess", "Custom Drill"], ["Tests", "Simulations"]],
    rationale: "Custom Drill identifies the user-configured practice activity, while Simulations are timed exam-shaped experiences. By Subject and Recents remain valid and should not be replaced by Drill.",
  },
  {
    id: "bar-drill-builder",
    area: "Practice · Create",
    title: "Drill setup screen",
    kind: "drill-builder",
    changeType: "Shared component · BAR values",
    changes: [["Create a Self-Assessment", "Custom Drill"], ["Choose the mode of quiz", "Choose a drill mode"], ["Image Based", "Remove for BAR"]],
    rationale: "The latest BAR route has generic attempt filters but no BAR format row. Image Based is not IQS and is not a BAR format, so it should be hidden for BAR. Add IQS only when the BAR question bank supports it.",
  },
  {
    id: "bar-topic-selection",
    area: "Practice · Create",
    title: "Choose topics screen",
    kind: "topic-selection",
    changeType: "Shared component · BAR value",
    changes: [["START QUIZ", "START DRILL"]],
    rationale: "The shared topic-selection route currently hard-codes START QUIZ. Make the action course-aware: BAR uses START DRILL, LSAT uses START DRILL, CPA uses START TEST, and CFA keeps START QUIZ. The rest of this BAR screen stays unchanged.",
  },
  {
    id: "bar-by-subject-flow",
    area: "Practice · By Subject",
    title: "Start from a subject or topic",
    kind: "by-subject-flow",
    changeType: "Shared component · BAR value",
    changes: [["START QUIZ", "START DRILL"]],
    rationale: "This is the separate direct By Subject route, not the Custom Drill topic-selection screen. By Subject and the BAR hierarchy stay unchanged; both launch actions must use Drill for BAR.",
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
    changeType: "Shared component · BAR values",
    changes: [["Your Quiz is Ready", "Your Drill is Ready"], ["START QUIZ", "START DRILL"], ["Your Quiz is Ready · paused", "Resume Your Drill"], ["RESUME QUIZ", "RESUME DRILL"]],
    rationale: "The shared sheet should use the activity being opened. Drills use Drill; timed exam products use Half Section, Full Section or Full Exam with Start/Resume Simulation actions.",
  },
  {
    id: "bar-paused-page",
    area: "Practice · Paused",
    title: "Paused drill page",
    kind: "paused-page",
    changeType: "Shared component · BAR values",
    changes: [["Your Quiz is Paused", "Resume Your Drill"], ["CONTINUE QUIZ", "CONTINUE DRILL"]],
    rationale: "The full-page continuation state uses the same shared activity noun. For a BAR drill it must say Drill; exam simulations should inherit Half Section, Full Section or Full Exam instead.",
  },
  {
    id: "bar-practice-history",
    area: "Practice · Recents",
    title: "Practice history and paused activity",
    kind: "history",
    changeType: "Shared component · BAR values",
    changes: [["Past Quizzes", "Practice History"], ["Custom", "Custom Drill"], ["Custom Quiz", "Custom Drill"], ["Paused quiz / Resume Quiz", "Paused drill / Resume Drill"]],
    rationale: "Recents is a current tab on origin/dev. Keep every existing filter, including Paused; only make the drill-related labels match the BAR activity type.",
  },
  {
    id: "bar-practice-history-empty",
    area: "Practice · Recents",
    title: "No practice history state",
    kind: "history-empty",
    changeType: "Shared component · BAR value",
    changes: [["Try taking a quiz", "Try creating a drill"]],
    rationale: "Verified in components/evaluation/PastQuizContainer.tsx. The empty message appears when the selected Recents filter has no matching activity.",
  },
  {
    id: "bar-search-study",
    area: "Casey · Home and tools",
    title: "BAR tutor tool pills and prompts",
    kind: "rezzy-home",
    changeType: "Shared component · BAR values/examples",
    changes: [["Take a quiz", "Start a drill"], ["Medical tool examples", "BAR examples for every tool"], ["Get high-yield notes", "Get high-yield outlines"]],
    rationale: "Current-code fact: lib/persona/registry.ts maps both LSAT and Bar Exam to Casey. This review does not propose a BAR tutor name; it only changes the tool copy and examples.",
  },
  {
    id: "bar-casey-widget",
    area: "Casey · Generated activity",
    title: "Generated drill widget",
    kind: "casey-widget",
    changeType: "Shared component · BAR values",
    changes: [["CUSTOM QUIZ", "CUSTOM DRILL"], ["Quiz generated", "Drill generated"]],
    rationale: "When Casey returns an interactive practice widget, the current component falls back to Custom Quiz and Quiz generated. The BAR tool and its returned widget should use the same Drill terminology.",
  },
  {
    id: "bar-canvas-empty",
    area: "Casey · Canvas",
    title: "Canvas empty state",
    kind: "canvas-empty",
    changeType: "Shared component · BAR examples",
    changes: [["Medical Canvas suggestions", "BAR legal-study suggestions"]],
    rationale: "Verified in components/chat/core/RezzyCanvasesGallery.tsx. This is the empty state shown when the learner has not created a canvas.",
  },
  {
    id: "bar-library-casey-empty",
    area: "Casey · Library · From Casey",
    title: "From Casey library empty state",
    kind: "library-casey-empty",
    changeType: "Shared component · BAR examples",
    changes: [["Medical study-visual suggestions", "BAR study-visual suggestions"]],
    rationale: "Verified in components/chat/core/RezzyLibraryGallery.tsx. This is the onboarding empty state for the From Casey tab with the All filter selected.",
  },
  {
    id: "bar-library-notes-empty",
    area: "Casey · Library · From My Notes",
    title: "From My Notes library empty state",
    kind: "library-notes-empty",
    changeType: "Shared component · BAR examples",
    changes: [["Medical upload suggestions", "BAR study-note suggestions"]],
    rationale: "Verified in components/chat/core/RezzyLibraryGallery.tsx. This is a separate tab and a separate empty state from the From Casey library.",
  },
  {
    id: "bar-flashcards-search-empty",
    area: "Flashcards · Search",
    title: "No search results state",
    kind: "flashcards-search-empty",
    changeType: "Shared component · BAR copy",
    changes: [["topper-level flashcards", "BAR flashcards"]],
    rationale: "Verified in components/flashcards/SearchSection/FlashcardList.tsx. It appears only after a flashcard search returns no results.",
  },
  {
    id: "bar-flashcards",
    area: "Flashcards",
    title: "BAR flashcard examples",
    kind: "flashcards",
    changeType: "Shared component · BAR examples/copy",
    changes: [["Medical prompt examples", "BAR prompt examples"], ["Missing BAR loading translation", "Building high-yield BAR flashcards"]],
    rationale: "The current Create action reaches this screen on origin/dev. Its examples are medical, and BAR has no search_loading_text translation, so both the examples and loading line need BAR-specific copy.",
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
    <div class="bottom-stack"><div class="rezzy-bar"><span class="rezzy-sparkle">✦</span><span>Ask Casey anything</span></div>
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
  const questionFilters = proposed
    ? ["All", "Unattempted", "Attempted", "Previously Incorrect", "Bookmarked"]
    : ["All", "Unattempted", "Attempted", "Previously Incorrect", "Image Based", "Bookmarked"];
  return `<div class="component-preview create-test-preview bar-builder-preview">
    <div class="create-test-topline"><span>‹</span><strong>${proposed ? "Custom Drill" : "Create a Self-Assessment"}</strong></div>
    <p class="create-test-prompt">${proposed ? "Choose a drill mode" : "Choose the mode of quiz"}</p>
    <div class="mode-options"><div class="mode-option selected-mode"><span class="mode-radio"></span><span><strong>Practice Mode</strong><small>Learn as you go</small></span></div><div class="mode-option"><span class="mode-radio"></span><span><strong>Exam Mode</strong><small>Just like an exam</small></span></div></div>
    <div class="setup-label">Number of questions</div><div class="bar-number-select"><span>15</span><b>⌄</b></div>
    <div class="setup-label">Filters</div><div class="bar-filter-row"><span>Subjects and tags</span><b>⌄</b></div>
    <div class="setup-label">Question Type</div><div class="setup-pills bar-question-pills">${questionFilters.map((label, index) => `<span class="${index === 0 ? "active-pill" : ""}">${label}</span>`).join("")}</div>
    <button class="setup-cta" type="button" tabindex="-1">CHOOSE TOPICS</button>
  </div>`;
}

function renderTopicSelection(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-topic-preview">
    <div class="create-test-topline"><span>‹</span><strong>Choose Topics</strong></div>
    <div class="bar-topic-search">⌕ <span>Search by keyword or browse topics</span></div>
    <div class="bar-topic-quick"><span>□ &nbsp;All</span><span>□ &nbsp;Weak Topics</span><span>□ &nbsp;High Yield</span></div>
    <div class="bar-topic-subject"><span><i>✅</i><b>Business Associations</b></span><em>2 TOPICS</em><strong>⌃</strong></div>
    <div class="bar-topic-row"><span>□ &nbsp;All</span></div>
    <div class="bar-topic-row"><span>□ &nbsp;Agency and authority</span></div>
    <div class="bar-topic-row"><span>□ &nbsp;Corporations</span></div>
    <button class="setup-cta" type="button" tabindex="-1">${proposed ? "START DRILL" : "START QUIZ"}</button>
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
  return `<div class="component-preview resume-states-preview">${states.map((state) => `<section class="sheet-state-demo"><div class="state-heading"><strong>${state.label}</strong><span>${state.label === "New" ? "Create flow" : "Recent activity"}</span></div><div class="phone-stage"><div class="ghost-app-content"><span class="ghost-app-title"></span><span class="ghost-app-card"></span><span class="ghost-app-card short"></span></div><div class="stage-dim"></div><div class="real-bottom-sheet"><div class="real-sheet-grabber"></div><button class="real-sheet-close" type="button" tabindex="-1">×</button><div class="real-sheet-header"><h3>${state.title}</h3><p>Review the activity details before you begin.</p></div><div class="real-detail-list"><div><strong>Questions</strong><span>20</span></div><div><strong>Format</strong><span>Mixed</span></div><div><strong>Subject</strong><span>Business Associations<br><small>4 Topics</small></span></div></div><button class="real-sheet-action" type="button" tabindex="-1">${state.action}</button></div></div></section>`).join("")}</div>`;
}

function renderBySubjectFlow(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview two-screen-preview">
    <section class="mini-app-screen"><div class="mini-screen-title">By Subject</div><div class="mini-search">⌕ &nbsp; Search questions by keyword...</div><div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div><div class="keyword-result"><strong>Found 30 questions</strong><small>“apparent authority”</small><button type="button" tabindex="-1">${proposed ? "START DRILL" : "START QUIZ"} (30 Qs)</button></div><div class="mini-subject-row"><i></i><span><strong>Business Associations</strong><small>Questions and topics</small></span><b>›</b></div></section>
    <section class="mini-app-screen topic-screen-mini"><div class="mini-screen-title">Business Associations</div><div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div><div class="topic-choice selected"><i>✓</i><span>Agency and authority</span></div><div class="topic-choice selected"><i>✓</i><span>Corporations</span></div><div class="topic-choice selected"><i>✓</i><span>Fiduciary duties</span></div><button class="mini-bottom-cta" type="button" tabindex="-1">${proposed ? "START DRILL" : "START QUIZ"} (3 topics)</button></section>
  </div>`;
}

function renderPausedPage(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview paused-page-preview"><span class="page-back">‹</span><div class="paused-page-content"><h3>${proposed ? "Resume Your Drill" : "Your Quiz is Paused"}</h3><p>Questions difficulty adapts to your answers. So you learn optimally.</p><div class="paused-page-details"><div><strong>Questions</strong><span>11/20</span></div><div><strong>Mode</strong><span>Practice</span></div><div><strong>Subject</strong><span>Business Associations</span></div></div><div class="paused-page-features"><span>▤<small>Discuss answers<br />with Casey</small></span><span>⌁<small>AI weak-spot<br />analysis</small></span><span>Ⅱ<small>Pause &amp;<br />Resume</small></span></div></div><button class="paused-page-cta" type="button" tabindex="-1">${proposed ? "CONTINUE DRILL" : "CONTINUE QUIZ"}</button></div>`;
}

function renderSessionEnd(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-end-preview"><div class="bar-end-icon">✍️</div><h3>You are about to end the ${proposed ? "drill" : "quiz"}</h3><p>You will be able to see the results and performance analysis once you end the ${proposed ? "drill" : "quiz"}.</p><div class="bar-end-stats"><span><b>18 MINS</b><small>Total Time Spent</small></span><span><b>12 / 20</b><small>Attempted</small></span></div><button class="bar-end-primary" type="button" tabindex="-1">PAUSE FOR LATER</button><button class="bar-end-secondary" type="button" tabindex="-1">YES, END THE ${proposed ? "DRILL" : "QUIZ"}</button><div class="bar-end-last"><small>After the last question</small><strong>END ${proposed ? "DRILL" : "QUIZ"} & VIEW RESULTS</strong></div></div>`;
}

function renderResults(version) {
  const proposed = version === "proposed";
  const activity = proposed ? "drill" : "quiz";
  return `<div class="component-preview bar-results-preview"><div class="bar-report-card"><header><span>PRACTICE ${activity.toUpperCase()} · TODAY</span><b>ON TRACK</b></header><div class="bar-report-score"><strong>68%</strong><span><i style="width:68%"></i></span></div><div class="bar-report-stats"><span><b>14</b><small>Correct</small></span><span><b>6</b><small>Wrong</small></span><span><b>18m</b><small>Time</small></span></div></div><div class="bar-standing-gaps"><small>STANDING GAPS</small><strong>Still weak after earlier ${proposed ? "drills" : "quizzes"}</strong><span>Personal jurisdiction <b>48%</b></span><span>Evidence exceptions <b>52%</b></span></div><div class="bar-handoff"><small>CASEY SUGGESTS</small><div><span>${proposed ? "Drill" : "Quiz"}</span><b>${proposed ? "Start this drill" : "Start this quiz"} ›</b></div></div><div class="bar-report-composer">Ask about this ${activity}<b>↑</b></div></div>`;
}

function renderHistory(version) {
  const proposed = version === "proposed";
  const pills = proposed ? ["All", "Paused", "Custom Drill", "Recommended", "Daily", "Weekly"] : ["All", "Paused", "Custom", "Recommended", "Daily", "Weekly"];
  return `<div class="component-preview recent-tests-preview lsat-history-preview">
    <strong class="recent-tests-heading">${proposed ? "PRACTICE HISTORY" : "PAST QUIZZES"}</strong>
    <div class="recent-filter-pills">${pills.map((pill, index) => `<span class="${index === 0 ? "selected" : ""}">${pill}</span>`).join("")}</div>
    <div class="recent-date">Today</div><div class="recent-card-list">
      <div class="recent-test-card"><span class="recent-card-icon">▶</span><span class="recent-card-copy"><strong>${proposed ? "Custom Drill" : "Custom Quiz"}</strong><small>Business Associations · 20 questions</small></span><span class="recent-card-arrow">›</span></div>
      <div class="recent-test-card"><span class="recent-card-icon">✦</span><span class="recent-card-copy"><strong>${proposed ? "Recommended Drill" : "Recommended Quiz"}</strong><small>Civil Procedure</small></span><span class="recent-card-arrow">›</span></div>
    </div><div class="resume-sample"><span>${proposed ? "Paused drill" : "Paused quiz"}</span><button type="button" tabindex="-1">${proposed ? "RESUME DRILL" : "RESUME QUIZ"}</button></div>
  </div>`;
}

function renderHistoryEmpty(version) {
  const proposed = version === "proposed";
  const pills = proposed ? ["All", "Paused", "Custom Drill", "Recommended", "Daily", "Weekly"] : ["All", "Paused", "Custom", "Recommended", "Daily", "Weekly"];
  return `<div class="component-preview recent-tests-preview lsat-history-preview bar-history-empty-preview">
    <strong class="recent-tests-heading">${proposed ? "PRACTICE HISTORY" : "PAST QUIZZES"}</strong>
    <div class="recent-filter-pills">${pills.map((pill, index) => `<span class="${index === 0 ? "selected" : ""}">${pill}</span>`).join("")}</div>
    <div class="bar-empty-message"><b>Nothing to show here😅</b><span>${proposed ? "Try creating a drill" : "Try taking a quiz"}</span></div>
  </div>`;
}

const barCurrentTools = [
  { id: "upload", icon: "▤", title: "Upload your notes", subtitle: "Get Flashcards, Questions and more", special: "upload", suggestions: ["Medical lecture notes", "Clinical notes", "Revision notes"] },
  { id: "canvas", icon: "◇", title: "Create canvas", subtitle: "Make an interactive visual", special: "canvas", suggestions: ["Spinal cord", "ECG axis", "Antibiotic ladder"] },
  { id: "flowcharts", icon: "⌁", title: "Get flowcharts", subtitle: "See how concepts connect", suggestions: ["Cardiac cycle", "Nephron", "Coagulation cascade"] },
  { id: "flashcards", icon: "▥", title: "Review Flashcards", subtitle: "Recall faster, retain longer", suggestions: ["Cranial nerves", "Drug of choice", "Vitamins"] },
  { id: "drill", icon: "?", title: "Take a quiz", subtitle: "Improve accuracy and speed", suggestions: ["Pharmacology", "Anatomy", "Pathology"] },
  { id: "outlines", icon: "≡", title: "Get high-yield notes", subtitle: "Focus on exam-relevant points", suggestions: ["Cardiac murmurs", "Antibiotics", "Renal physiology"] },
  { id: "mnemonics", icon: "✦", title: "Memorize with mnemonics", subtitle: "Make tough concepts stick", suggestions: ["Cranial nerves", "Drug adverse effects", "Vitamins"] },
  { id: "weak-areas", icon: "⌕", title: "Find my weak areas", subtitle: "Know and improve your weak spots", suggestions: ["Recent quizzes", "Subject gaps", "Weak topics"] },
];

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

function renderRezzyHome(version) {
  const proposed = version === "proposed";
  const tools = proposed ? barRezzyTools : barCurrentTools;
  return `<div class="casey-review-layout" ${proposed ? "data-bar-rezzy-demo" : ""}>
    <div class="component-preview rezzy-phone rezzy-home-demo bar-rezzy-preview">
      <div class="rezzy-phone-header"><span>☰</span><strong>Casey</strong><span>✦</span></div>
      <div class="rezzy-greeting"><div class="rezzy-orb">C</div><h3>What should we study today?</h3></div>
      <div class="savvy-demo-stage" ${proposed ? "data-bar-rezzy-stage" : ""}><div class="savvy-tool-scroll">${tools.map((tool) => `<button type="button" class="savvy-tool-pill" ${proposed ? `data-bar-rezzy-tool="${tool.id}"` : ""}><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}</div></div>
      <p class="savvy-demo-hint" ${proposed ? "data-bar-rezzy-hint" : ""}>${proposed ? "Select a pill to see its BAR examples" : "Current tool copy from origin/dev"}</p>
      <div class="rezzy-composer"><span>＋</span><p>Ask Casey anything…</p><b>↑</b></div>
    </div>
    ${proposed ? `<aside class="casey-examples-panel"><p>BAR examples by tool</p>${barRezzyTools.map((tool) => `<section><div><i>${tool.icon}</i><strong>${tool.title}</strong></div><div class="casey-example-chips">${tool.suggestions.map((suggestion) => `<span>${suggestion}</span>`).join("")}</div></section>`).join("")}</aside>` : ""}
  </div>`;
}

function renderRezzySelectedState(tool) {
  if (tool.special === "upload") {
    return `<div class="savvy-special-sheet"><button class="savvy-back" type="button" data-bar-rezzy-back>‹ Back</button><h3>Upload Notes</h3><p>Casey turns BAR notes into flashcards, questions, visual maps and more.</p><div class="savvy-upload-options"><span>▧<small>Camera</small></span><span>▣<small>Photos</small></span><span>▤<small>Files</small></span></div><div class="casey-sheet-examples">${tool.suggestions.map((suggestion) => `<span>${suggestion}</span>`).join("")}</div></div>`;
  }
  if (tool.special === "canvas") {
    return `<div class="savvy-special-sheet canvas-sheet-demo"><div class="savvy-sheet-heading"><button class="savvy-back" type="button" data-bar-rezzy-back>‹ Back</button><b>View all ›</b></div><h3>Create a Canvas</h3><p>Templates and starters are filtered to the active BAR course.</p><div class="savvy-template-grid">${tool.suggestions.map((suggestion) => `<span><i></i><small>${suggestion}</small></span>`).join("")}</div></div>`;
  }
  return `<div class="savvy-prompt-state"><button class="savvy-back" type="button" data-bar-rezzy-back>‹ Back</button><div class="savvy-selected-tool"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></div>${tool.suggestions.map((suggestion) => `<button type="button" class="savvy-suggestion">${suggestion}</button>`).join("")}<button type="button" class="savvy-suggestion">Something else</button></div>`;
}

function renderCaseyWidget(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-widget-preview"><div class="bar-widget-chat"><span class="rezzy-orb">C</span><p>${proposed ? "Drill generated" : "Quiz generated"}</p></div><div class="bar-widget-card"><header><span>?</span><div><strong>${proposed ? "CUSTOM DRILL" : "CUSTOM QUIZ"}</strong><small>10 questions</small></div><b>1 / 10</b></header><p>Which fact most strongly supports apparent authority?</p><button type="button" tabindex="-1">The principal's manifestation to the third party</button><button type="button" tabindex="-1">The agent's private statement</button><footer><span>‹</span><b>NEXT ›</b></footer></div></div>`;
}

function renderCanvasEmpty(version) {
  const proposed = version === "proposed";
  const suggestions = proposed
    ? ["IRAC issue map", "Evidence admissibility", "Civil procedure timeline", "Contract formation"]
    : ["Spinal cord visualizer", "ECG axis map", "Antibiotic ladder", "ABG interpreter"];
  return `<div class="component-preview bar-single-empty-preview">
    <div class="bar-gallery-toolbar"><span>‹</span><strong>Canvas</strong><span></span></div>
    <section><span class="bar-gallery-icon">◇</span><h3>Make your first canvas</h3><p>Ask Casey to turn a tough topic into an interactive visual, simulator, map, or exam-ready explainer.</p><button type="button" tabindex="-1">✦ &nbsp; Create canvas</button><small>Try one of these</small><div>${suggestions.map((item) => `<b>${item}</b>`).join("")}</div></section>
  </div>`;
}

function renderLibraryEmpty(version, section) {
  const proposed = version === "proposed";
  const fromCasey = section === "casey";
  const suggestions = fromCasey
    ? (proposed
      ? ["Explain personal jurisdiction", "Create an evidence flowchart", "Map negligence elements", "Compare business entities"]
      : ["Explain the cardiac cycle", "Create a nephron flowchart", "Draw the brachial plexus", "Compare Gram + vs Gram −"])
    : (proposed
      ? ["Upload your Contracts outline", "Scan your Evidence notes", "Add a Civil Procedure slide"]
      : ["Upload your Biochemistry chapter", "Snap your Anatomy notes", "Add a Pathology slide image"]);
  return `<div class="component-preview bar-single-empty-preview">
    <div class="bar-gallery-toolbar"><span>‹</span><strong>Library</strong><span>⌕</span></div>
    <div class="bar-library-tabs"><span class="${fromCasey ? "selected" : ""}">From Casey</span><span class="${fromCasey ? "" : "selected"}">From My Notes</span></div>
    <div class="bar-library-filters"><span class="selected">All</span><span>${fromCasey ? "Flowcharts" : "PDFs"}</span><span>${fromCasey ? "Tables" : "Images"}</span></div>
    <section><span class="bar-gallery-icon">${fromCasey ? "▤" : "≡"}</span><h3>${fromCasey ? "Create your first study visual" : "Turn your notes into Smart Notes"}</h3><p>${fromCasey ? "Ask Casey to create diagrams, flowcharts, and study visuals that make complex topics easier to understand." : "Upload PDFs, slides, or handwritten notes and Casey turns them into flashcards, questions, concept map and more."}</p><button type="button" tabindex="-1">${fromCasey ? "✦ &nbsp; CREATE WITH CASEY" : "⇧ &nbsp; UPLOAD A FILE"}</button><div>${suggestions.map((item) => `<b>${item}</b>`).join("")}</div></section>
  </div>`;
}

function renderFlashcardsSearchEmpty(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-flashcard-library-preview bar-flashcard-state-preview">
    <div class="bar-library-header"><span>▤</span><strong>Flashcards</strong><button type="button" tabindex="-1">＋ CREATE</button></div>
    <div class="bar-library-search">⌕ <span>consideration</span></div>
    <div class="bar-search-empty"><b>⌕</b><span><strong>No search results for “consideration”</strong><small>${proposed ? "Oncourse can generate BAR flashcards for any subject or rule you choose." : "Oncourse can generate topper-level flashcards for any topic that you like."}</small></span><button type="button" tabindex="-1">GENERATE FLASHCARDS WITH AI</button></div>
  </div>`;
}

function renderFlashcards(version) {
  const proposed = version === "proposed";
  const examples = proposed ? [["Civil Procedure", 8], ["Business Associations", 10], ["Evidence Rules", 8]] : [["Urea Cycle", 8], ["Cardiac Potentials", 10], ["Conduction System of Heart", 2]];
  return `<div class="component-preview flashcard-phone-frame flashcard-ai-preview bar-flashcard-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong>Generate Flashcards with AI</strong></div><div class="flashcard-screen-body"><label>Describe the flashcards you want in detail</label><div class="flashcard-prompt-field">Enter a prompt</div><label>Examples of what others are making</label><div class="flashcard-smart-pills">${examples.map(([title, count]) => `<span><strong>${title}</strong><small>${count} Cards</small></span>`).join("")}</div><div class="bar-loading-copy"><span class="bar-loading-spark">✦</span><span><strong>Crafting your flashcards</strong><small>${proposed ? "Building high-yield BAR flashcards" : "flashcards.search_loading_text"}</small></span></div><button class="flashcard-disabled-cta" type="button" tabindex="-1">MAKE ME FLASHCARDS</button></div></div>`;
}

function renderPreview(item, version) {
  if (item.kind === "navigation") return renderNavigation(version);
  if (item.kind === "practice-landing") return renderPracticeLanding(version);
  if (item.kind === "drill-builder") return renderDrillBuilder(version);
  if (item.kind === "topic-selection") return renderTopicSelection(version);
  if (item.kind === "by-subject-flow") return renderBySubjectFlow(version);
  if (item.kind === "simulations") return renderSimulations(version);
  if (item.kind === "ready-sheet") return renderReadySheet(version);
  if (item.kind === "paused-page") return renderPausedPage(version);
  if (item.kind === "session-end") return renderSessionEnd(version);
  if (item.kind === "results") return renderResults(version);
  if (item.kind === "history") return renderHistory(version);
  if (item.kind === "history-empty") return renderHistoryEmpty(version);
  if (item.kind === "rezzy-home") return renderRezzyHome(version);
  if (item.kind === "casey-widget") return renderCaseyWidget(version);
  if (item.kind === "canvas-empty") return renderCanvasEmpty(version);
  if (item.kind === "library-casey-empty") return renderLibraryEmpty(version, "casey");
  if (item.kind === "library-notes-empty") return renderLibraryEmpty(version, "notes");
  if (item.kind === "flashcards-search-empty") return renderFlashcardsSearchEmpty(version);
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
