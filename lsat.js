const lsatTerms = [
  ["Main learning area", "Study Plan / Lesson Library", "Lessons / Skills"],
  ["Curriculum areas", "Foundations / Logical Reasoning / Reading Comprehension", "Logical Reasoning / Reading Comprehension"],
  ["Curriculum hierarchy", "Category → Module → Lesson", "Skills / Lessons"],
  ["Practice umbrella", "Practice", "Practice"],
  ["Short custom practice", "Drill", "Drill"],
  ["Complete LR or RC block", "Section", "Section"],
  ["Full official test", "PrepTest / PT", "Test / Official"],
  ["Practice builder", "New Drill / LR Drill", "Filter Settings / Start Drill"],
  ["Practice history", "Drill / Section / PrepTest History", "Drill / Section / Test History"],
  ["Review workflow", "Blind Review / BR", "Review Mistakes / Review Inbox"],
  ["Question classification", "Tags / Difficulty / Status", "Question Type / Topic / Difficulty / Level"],
  ["Official-question language", "PrepTest IDs such as PT159.S1.Q1", "Official / Official LSAT / Tests"],
  ["Performance", "Performance / Priorities / Questions", "Study Quality / Test Progress / Question Types"],
  ["Search and notes", "Search 7Sage / Notes", "No global search or notes surfaced"],
  ["Tutor", "Sage AI", "Tutor means a human tutor"],
  ["Flashcards", "Not present", "Not present"],
];

const lsatReviewItems = [
  {
    id: "lsat-navigation",
    area: "Global navigation",
    title: "Bottom navigation",
    kind: "navigation",
    changeType: "Shared component · LSAT value",
    changes: [["Quiz", "Practice"]],
    rationale: "Practice is the main destination in both reviewed LSAT products and covers drills, complete sections and full tests.",
  },
  {
    id: "lsat-practice-landing",
    area: "Practice",
    title: "Practice landing screen",
    kind: "practice-landing",
    changeType: "Shared component · LSAT values",
    changes: [["Quiz", "Practice"], ["Self Assess", "Custom Drill"]],
    rationale: "Practice is the umbrella destination and Custom Drill clearly identifies a user-built short practice set. By Subject, Tests and Recents describe different ways to browse the existing content, so those tabs stay unchanged.",
  },
  {
    id: "lsat-lessons-ordering",
    area: "Lessons · Subject list",
    title: "Lessons subject list · ordering pending",
    kind: "lessons-ordering",
    changeType: "Shared component · LSAT values/examples",
    changes: [["Ordering filter", "Not decided yet"]],
    layout: "verified",
    rationale: "Verified in components/lessons/myPath (Lessons tab). Subject is already correct for LSAT, so no wording change is needed. Ordering filter (Organise by) is not decided yet, so it is not proposed here. This card stays as a placeholder until the ordering options are agreed.",
  },
  {
    id: "lsat-drill-builder",
    area: "Practice · Create",
    title: "Drill setup screen",
    kind: "drill-builder",
    changeType: "Shared component · LSAT values",
    changes: [["Create a Self-Assessment", "Custom Drill"], ["Choose the mode of quiz", "Choose a drill mode"], ["Image Based", "Remove for LSAT"]],
    rationale: "Verified in app/(app)/evaluation/test/setup/mode.tsx. Keep the current Number of questions, Filters, Question Type and CHOOSE TOPICS controls. Image Based is a generic medical-bank filter and should be hidden for LSAT.",
  },
  {
    id: "lsat-topic-selection",
    area: "Practice · Create",
    title: "Choose topics screen",
    kind: "topic-selection",
    changeType: "Shared component · LSAT value",
    changes: [["START QUIZ", "START DRILL"]],
    rationale: "The shared topic-selection route currently hard-codes START QUIZ. Make the action course-aware: LSAT and BAR use START DRILL, CPA uses START TEST, and CFA keeps START QUIZ. The search, filters, subjects and topics stay unchanged.",
  },
  {
    id: "lsat-by-subject-flow",
    area: "Practice · By Subject",
    title: "Start from a subject or topic",
    kind: "by-subject-flow",
    changeType: "Shared component · LSAT value",
    changes: [["START QUIZ", "START DRILL"]],
    rationale: "This is the separate direct By Subject route, not the Custom Drill topic-selection screen. By Subject and the LSAT hierarchy stay unchanged; both launch actions must use Drill for LSAT.",
  },
  {
    id: "lsat-test-types",
    area: "Practice · Exam simulation",
    title: "Full and mini practice tests",
    kind: "test-types",
    changeType: "Copy + provenance rule",
    changes: [["Benchmark", "Practice Tests"], ["Benchmark 1", "Practice Test 1"], ["Mini-Benchmark", "Mini Practice Test"]],
    rationale: "A Mini-Benchmark is a shorter version of the full test, so it remains a test. Reserve Section only for one complete Logical Reasoning or Reading Comprehension section. Use PrepTest only for an official licensed LSAC test.",
  },
  {
    id: "lsat-history",
    area: "Practice · History",
    title: "Recent LSAT practice",
    kind: "history",
    changeType: "Shared component · LSAT values",
    changes: [["PAST QUIZZES", "PRACTICE HISTORY"], ["Custom", "Custom Drill"], ["Custom Quiz", "Custom Drill"], ["Recommended Quiz", "Recommended Drill"], ["RESUME QUIZ", "RESUME DRILL"]],
    rationale: "Verified in components/evaluation/PastQuizContainer.tsx. Keep every existing filter—All, Paused, Recommended, Daily and Weekly. Only the drill-related labels change.",
  },
  {
    id: "lsat-history-empty",
    area: "Practice · Recents",
    title: "No practice history state",
    kind: "history-empty",
    changeType: "Shared component · LSAT value",
    changes: [["Try taking a quiz", "Try creating a drill"]],
    rationale: "Verified in components/evaluation/PastQuizContainer.tsx. This appears when the selected Recents filter has no matching activity.",
  },
  {
    id: "lsat-ready-sheet",
    area: "Practice · Ready / resume sheet",
    title: "Drill ready sheet states",
    kind: "ready-sheet",
    changeType: "Shared component · LSAT values",
    changes: [["Your Quiz is Ready", "Your Drill is Ready"], ["START QUIZ", "START DRILL"], ["Your Quiz is Ready · paused", "Resume Your Drill"], ["RESUME QUIZ", "RESUME DRILL"]],
    rationale: "The title and action should match the activity being created or resumed. A Section or Practice Test should use its own name in the same reusable component.",
  },
  {
    id: "lsat-paused-page",
    area: "Practice · Paused",
    title: "Paused drill page",
    kind: "paused-page",
    changeType: "Shared component · LSAT values",
    changes: [["Your Quiz is Paused", "Resume Your Drill"], ["CONTINUE QUIZ", "CONTINUE DRILL"]],
    rationale: "The full-page continuation state uses the same shared activity noun. For an LSAT drill it must say Drill; sections and practice tests should inherit their own activity name.",
  },
  {
    id: "lsat-casey-home",
    area: "Casey · Home and tools",
    title: "Casey tool pills and prompts",
    kind: "casey-home",
    changeType: "Shared component · LSAT values/examples",
    changes: [["Take a quiz", "Start a drill"], ["Medical tool examples", "LSAT examples for every tool"], ["Find high-yield lessons", "Get study notes"]],
    rationale: "Match the CFA review: show every Home pill, preserve the one-tool-at-a-time interaction, and provide concrete LSAT prompts for Upload, Canvas, Flowcharts, Flashcards, Drill, Study Notes, Mnemonics and Weak Areas.",
  },
  {
    id: "lsat-casey-widget",
    area: "Casey · Generated activity",
    title: "Generated drill widget",
    kind: "casey-widget",
    changeType: "Shared component · LSAT values",
    changes: [["CUSTOM QUIZ", "CUSTOM DRILL"], ["Quiz generated", "Drill generated"]],
    rationale: "Verified in components/chat/tools/RelatedQuiz/index.tsx and ToolRenderer.tsx. Casey's generated activity and its returned widget should use the same Drill terminology.",
  },
  {
    id: "lsat-canvas-empty",
    area: "Casey · Canvas",
    title: "Canvas empty state",
    kind: "canvas-empty",
    changeType: "Shared component · LSAT examples",
    changes: [["Medical Canvas suggestions", "LSAT reasoning suggestions"]],
    rationale: "Verified in components/chat/core/RezzyCanvasesGallery.tsx. The current empty state contains hard-coded medical suggestion chips.",
  },
  {
    id: "lsat-library-casey-empty",
    area: "Casey · Library · From Casey",
    title: "From Casey library empty state",
    kind: "library-casey-empty",
    changeType: "Shared component · LSAT examples",
    changes: [["Medical study-visual suggestions", "LSAT study-visual suggestions"]],
    rationale: "Verified in components/chat/core/RezzyLibraryGallery.tsx. This is a separate empty state under the From Casey tab.",
  },
  {
    id: "lsat-library-notes-empty",
    area: "Casey · Library · From My Notes",
    title: "From My Notes library empty state",
    kind: "library-notes-empty",
    changeType: "Shared component · LSAT examples",
    changes: [["Medical upload suggestions", "LSAT note-upload suggestions"]],
    rationale: "Verified in components/chat/core/RezzyLibraryGallery.tsx. This is a separate tab and state from From Casey.",
  },
  {
    id: "lsat-flashcard-create",
    area: "Flashcards · Create",
    title: "Generate flashcards with AI",
    kind: "flashcard-create",
    changeType: "Shared component · LSAT examples",
    changes: [["Medical prompt examples", "LSAT prompt examples"]],
    rationale: "Verified in app/(app)/snippets/flashcards/create-prompt.tsx. The creation screen is real and its example cards are currently medical.",
  },
  {
    id: "lsat-flashcard-search-empty",
    area: "Flashcards · Search",
    title: "No search results state",
    kind: "flashcard-search-empty",
    changeType: "Shared component · LSAT copy",
    changes: [["topper-level flashcards", "flashcards"]],
    rationale: "Verified in components/flashcards/SearchSection/FlashcardList.tsx. This state appears only after a search returns no flashcards.",
  },
];

function renderTerminologyTable() {
  return `<div class="terms-table-wrap"><table class="terms-table lsat-terms-table">
    <thead><tr><th>Product area</th><th>7Sage</th><th>LSAT Demon</th></tr></thead>
    <tbody>${lsatTerms.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? "th" : "td"}>${cell}</${index === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

function renderNavigation(version) {
  const proposed = version === "proposed";
  const labels = [proposed ? "Practice" : "Quiz", "Lessons", "Home", "Flashcards", "Play"];
  const icons = ["?", "▥", "⌂", "▤", "⌘"];
  return `<div class="component-preview cfa-nav-preview">
    <div class="preview-fade">Home content continues above</div>
    <div class="bottom-stack"><div class="rezzy-bar"><span class="rezzy-sparkle">✦</span><span>Ask Casey anything</span></div>
      <nav class="tabbar" aria-label="${proposed ? "Proposed" : "Current"} navigation">
        ${labels.map((label, index) => `<button class="tab-item ${index === 0 ? "active" : ""} ${proposed && index === 0 ? "changed" : ""}" type="button" tabindex="-1"><span class="cfa-nav-icon">${icons[index]}</span><span class="tab-text">${label}</span></button>`).join("")}
      </nav>
    </div>
  </div>`;
}

function renderPracticeLanding(version) {
  const proposed = version === "proposed";
  const segments = ["By Subject", "Tests", "Recents"];
  return `<div class="component-preview practice-shell-preview">
    <div class="practice-shell-header"><div class="practice-shell-icon">?</div><strong>${proposed ? "Practice" : "Quiz"}</strong></div>
    <div class="practice-actions"><button type="button" tabindex="-1"><span>☆</span> Bookmarked</button><button class="${proposed ? "changed-action" : ""}" type="button" tabindex="-1"><span>✦</span> ${proposed ? "Custom Drill" : "Self Assess"}</button></div>
    <div class="practice-segments">${segments.map((item, index) => `<span class="${index === 0 ? "selected" : ""}">${item}</span>`).join("")}</div>
    <div class="lsat-landing-list"><small>SUBJECTS</small><div><i>LR</i><span><strong>Logical Reasoning</strong><em>Questions and topics</em></span><b>›</b></div></div>
  </div>`;
}

function renderLessonsOrdering(version) {
  const proposed = version === "proposed";
  const subjects = [["LR", "Logical Reasoning", "0/824 lessons"], ["RC", "Reading Comprehension", "0/306 lessons"], ["W", "LSAT Writing", "0/24 lessons"]];
  return `<div class="component-preview lessons-audit-preview">
    <div class="lessons-audit-header"><i>▥</i><strong>Lessons</strong></div>
    <div class="lessons-audit-search">⌕ <span>Search across your Lessons</span></div>
    <div class="lessons-audit-selector"><span>▤</span><strong>Select Subject</strong><b>›</b></div>
    <div class="lessons-audit-pills"><span>All</span><span>High Yield</span><span>Bookmarks</span></div>
    <div class="lessons-audit-group">${proposed ? "LSAT curriculum" : "Subjects"}</div>
    ${subjects.map(([code, name, count]) => `<div class="lessons-audit-card"><i>${code}</i><span><strong>${name}</strong><small>${count}</small></span><b>›</b></div>`).join("")}
  </div>`;
}

function renderDrillBuilder(version) {
  const proposed = version === "proposed";
  const questionFilters = proposed
    ? ["All", "Unattempted", "Attempted", "Previously Incorrect", "Bookmarked"]
    : ["All", "Unattempted", "Attempted", "Previously Incorrect", "Image Based", "Bookmarked"];
  return `<div class="component-preview create-test-preview lsat-builder-preview">
    <div class="create-test-topline"><span>‹</span><strong>${proposed ? "Custom Drill" : "Create a Self-Assessment"}</strong></div>
    <p class="create-test-prompt">${proposed ? "Choose a drill mode" : "Choose the mode of quiz"}</p>
    <div class="mode-options"><div class="mode-option selected-mode"><span class="mode-radio"></span><span><strong>Practice Mode</strong><small>Learn as you go</small></span></div><div class="mode-option"><span class="mode-radio"></span><span><strong>Exam Mode</strong><small>Just like an exam</small></span></div></div>
    <div class="setup-label">Number of questions</div><div class="bar-number-select"><span>10</span><b>⌄</b></div>
    <div class="setup-label">Filters</div><div class="bar-filter-row"><span>Subjects and tags</span><b>⌄</b></div>
    <div class="setup-label">Question Type</div><div class="setup-pills bar-question-pills">${questionFilters.map((label, index) => `<span class="${index === 0 ? "active-pill" : ""}">${label}</span>`).join("")}</div>
    <button class="setup-cta" type="button" tabindex="-1">CHOOSE TOPICS</button>
  </div>`;
}

function renderTopicSelection(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-topic-preview lsat-topic-preview">
    <div class="create-test-topline"><span>‹</span><strong>Choose Topics</strong></div>
    <div class="bar-topic-search">⌕ <span>Search by keyword or browse topics</span></div>
    <div class="bar-topic-quick"><span>□ &nbsp;All</span><span>□ &nbsp;Weak Topics</span><span>□ &nbsp;High Yield</span></div>
    <div class="bar-topic-subject"><span><i>✅</i><b>Logical Reasoning</b></span><em>2 TOPICS</em><strong>⌃</strong></div>
    <div class="bar-topic-row"><span>□ &nbsp;All</span></div>
    <div class="bar-topic-row"><span>□ &nbsp;Necessary Assumption</span></div>
    <div class="bar-topic-row"><span>□ &nbsp;Flaw</span></div>
    <button class="setup-cta" type="button" tabindex="-1">${proposed ? "START DRILL" : "START QUIZ"}</button>
  </div>`;
}

function renderTestTypes(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-mock-preview lsat-test-preview">
    <div class="cfa-screen-bar"><span></span><strong>${proposed ? "Practice" : "Quiz"}</strong><i></i></div>
    <div class="cfa-pills mock-pills"><span>All</span><span class="active">${proposed ? "Practice Tests" : "Benchmark"}</span><span>${proposed ? "Mini Practice Tests" : "Mini-Benchmark"}</span><span>My Attempts</span></div>
    <div class="cfa-mock-card"><div class="cfa-mock-title"><span>▤</span><span><strong>${proposed ? "Practice Test 1" : "Benchmark 1"}</strong><small>${proposed ? "Full LSAT-style test" : "Realistic assessment"}</small></span></div><div class="cfa-benchmark-row"><span>4 sections</span><b>START</b></div></div>
    <div class="cfa-mock-card compact"><div class="cfa-mock-title"><span>PT</span><span><strong>${proposed ? "Mini Practice Test" : "Mini-Benchmark"}</strong><small>${proposed ? "Shorter LSAT-style test" : "Shorter timed question set"}</small></span></div><div class="cfa-benchmark-row"><span>25 questions</span><b>START</b></div></div>
    ${proposed ? '<p class="lsat-license-note"><strong>Official licensed content:</strong> use PrepTest / PT instead of Practice Test.</p>' : ""}
  </div>`;
}

function renderHistory(version) {
  const proposed = version === "proposed";
  const pills = proposed ? ["All", "Paused", "Custom Drill", "Recommended", "Daily", "Weekly"] : ["All", "Paused", "Custom", "Recommended", "Daily", "Weekly"];
  return `<div class="component-preview recent-tests-preview lsat-history-preview">
    <strong class="recent-tests-heading">${proposed ? "PRACTICE HISTORY" : "PAST QUIZZES"}</strong>
    <div class="recent-filter-pills">${pills.map((pill, index) => `<span class="${index === 0 ? "selected" : ""}">${pill}</span>`).join("")}</div>
    <div class="recent-date">Today</div><div class="recent-card-list">
      <div class="recent-test-card"><span class="recent-card-icon">▶</span><span class="recent-card-copy"><strong>${proposed ? "Custom Drill" : "Custom Quiz"}</strong><small>${proposed ? "Logical Reasoning · 8 questions · In process" : "Logical Reasoning"}</small></span><span class="recent-card-arrow">›</span></div>
      <div class="recent-test-card"><span class="recent-card-icon">✦</span><span class="recent-card-copy"><strong>${proposed ? "Recommended Drill" : "Recommended Quiz"}</strong><small>Reading Comprehension</small></span><span class="recent-card-arrow">›</span></div>
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

function renderReadySheet(version) {
  const proposed = version === "proposed";
  const states = [
    { label: "New", title: proposed ? "Your Drill is Ready" : "Your Quiz is Ready", action: proposed ? "START DRILL" : "START QUIZ" },
    { label: "Paused", title: proposed ? "Resume Your Drill" : "Your Quiz is Ready", action: proposed ? "RESUME DRILL" : "RESUME QUIZ" },
  ];
  return `<div class="component-preview resume-states-preview">${states.map((state) => `<section class="sheet-state-demo"><div class="state-heading"><strong>${state.label}</strong><span>${state.label === "New" ? "Create flow" : "Practice history"}</span></div><div class="phone-stage"><div class="ghost-app-content"><span class="ghost-app-title"></span><span class="ghost-app-card"></span><span class="ghost-app-card short"></span></div><div class="stage-dim"></div><div class="real-bottom-sheet"><div class="real-sheet-grabber"></div><button class="real-sheet-close" type="button" tabindex="-1">×</button><div class="real-sheet-header"><h3>${state.title}</h3><p>Review question types, difficulty and timing before you begin.</p></div><div class="real-detail-list"><div><strong>Questions</strong><span>10</span></div><div><strong>Mode</strong><span>Practice</span></div><div><strong>Area</strong><span>Logical Reasoning<br><small>3 Question Types</small></span></div></div><button class="real-sheet-action" type="button" tabindex="-1">${state.action}</button></div></div></section>`).join("")}</div>`;
}

function renderBySubjectFlow(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview two-screen-preview">
    <section class="mini-app-screen"><div class="mini-screen-title">By Subject</div><div class="mini-search">⌕ &nbsp; Search questions by keyword...</div><div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div><div class="keyword-result"><strong>Found 30 questions</strong><small>“conditional reasoning”</small><button type="button" tabindex="-1">${proposed ? "START DRILL" : "START QUIZ"} (30 Qs)</button></div><div class="mini-subject-row"><i></i><span><strong>Logical Reasoning</strong><small>Question types and topics</small></span><b>›</b></div></section>
    <section class="mini-app-screen topic-screen-mini"><div class="mini-screen-title">Logical Reasoning</div><div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div><div class="topic-choice selected"><i>✓</i><span>Necessary Assumption</span></div><div class="topic-choice selected"><i>✓</i><span>Strengthen</span></div><div class="topic-choice selected"><i>✓</i><span>Flaw</span></div><button class="mini-bottom-cta" type="button" tabindex="-1">${proposed ? "START DRILL" : "START QUIZ"} (3 topics)</button></section>
  </div>`;
}

function renderPausedPage(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview paused-page-preview"><span class="page-back">‹</span><div class="paused-page-content"><h3>${proposed ? "Resume Your Drill" : "Your Quiz is Paused"}</h3><p>Questions difficulty adapts to your answers. So you learn optimally.</p><div class="paused-page-details"><div><strong>Questions</strong><span>11/20</span></div><div><strong>Mode</strong><span>Practice</span></div><div><strong>Subject</strong><span>Logical Reasoning</span></div></div><div class="paused-page-features"><span>▤<small>Discuss answers<br />with Casey</small></span><span>⌁<small>AI weak-spot<br />analysis</small></span><span>Ⅱ<small>Pause &amp;<br />Resume</small></span></div></div><button class="paused-page-cta" type="button" tabindex="-1">${proposed ? "CONTINUE DRILL" : "CONTINUE QUIZ"}</button></div>`;
}

function renderOfficialQuestions(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-copy-surfaces lsat-official-preview">
    <section><small>Question source filter</small><div class="cfa-chip-row"><span>All</span><span>Bookmarked</span><span class="${proposed ? "" : "danger-chip"}">${proposed ? "Official" : "PYQs"}</span></div></section>
    <section><small>Question collection</small><div class="cfa-action-row"><i>?</i><span><strong>${proposed ? "Official LSAT Questions" : "PYQs"}</strong><em>${proposed ? "Licensed questions from official LSATs" : "Previous-year questions"}</em></span><b>›</b></div></section>
    <section><small>Question identifier</small><p>${proposed ? "PT159 · Section 1 · Question 1" : "PYQ · 2024 · Question 1"}</p></section>
    ${proposed ? '<p class="visibility-note">For authored material, use “LSAT-Style Questions” — never “Official”.</p>' : ""}
  </div>`;
}

const lsatCurrentTools = [
  { id: "upload", icon: "▤", title: "Upload your notes", subtitle: "Get Flashcards, Questions and more", special: "upload", suggestions: ["Medical lecture notes", "Clinical notes", "Revision notes"] },
  { id: "canvas", icon: "◇", title: "Create a Canvas", subtitle: "Make an interactive visual", special: "canvas", suggestions: ["ECG axis map", "Spinal cord lesions", "Antibiotic ladder"] },
  { id: "flowcharts", icon: "⌁", title: "Learn with Flowcharts", subtitle: "Visualize complex topics easily", suggestions: ["Cardiac cycle", "Nephron", "Coagulation cascade"] },
  { id: "flashcards", icon: "▥", title: "Review Flashcards", subtitle: "Recall faster, retain longer", suggestions: ["Cranial nerves", "Drug of choice", "Vitamins"] },
  { id: "drill", icon: "?", title: "Take a quiz", subtitle: "Improve accuracy and speed", suggestions: ["Pharmacology", "Anatomy", "PYQ practice"] },
  { id: "notes", icon: "≡", title: "Find high-yield lessons", subtitle: "Open exam-focused lessons", suggestions: ["Cardiac murmurs", "Antibiotics", "Renal physiology"] },
  { id: "mnemonics", icon: "✦", title: "Memorize with mnemonics", subtitle: "Make tough concepts stick", suggestions: ["Cranial nerves", "Drug adverse effects", "Vitamins"] },
  { id: "weak-areas", icon: "⌕", title: "Find my weak areas", subtitle: "Know and improve your weak spots", suggestions: ["Recent quizzes", "Subject gaps", "Weak topics"] },
];

const lsatCaseyTools = [
  { id: "upload", icon: "▤", title: "Upload your notes", subtitle: "Get Flashcards, Questions and more", special: "upload", suggestions: ["Logical Reasoning notes", "RC passage PDFs", "Handwritten error log"] },
  { id: "canvas", icon: "◇", title: "Create a Canvas", subtitle: "Make an interactive visual", special: "canvas", suggestions: ["Conditional logic map", "Argument structure", "RC passage viewpoints"] },
  { id: "flowcharts", icon: "⌁", title: "Learn with Flowcharts", subtitle: "Visualize complex topics easily", suggestions: ["Conditional reasoning", "Argument structure", "RC passage map"] },
  { id: "flashcards", icon: "▥", title: "Review Flashcards", subtitle: "Recall faster, retain longer", suggestions: ["Common argument flaws", "Conditional indicators", "RC viewpoints"] },
  { id: "drill", icon: "?", title: "Start a drill", subtitle: "Practice a targeted set", suggestions: ["Logical Reasoning", "Reading Comprehension", "My weak question types"] },
  { id: "notes", icon: "≡", title: "Get study notes", subtitle: "Focus on key LSAT concepts", suggestions: ["Necessary assumptions", "Causal reasoning", "Comparative passages"] },
  { id: "mnemonics", icon: "✦", title: "Memorize with mnemonics", subtitle: "Make tough concepts stick", suggestions: ["Logic indicators", "Flaw families", "Question stems"] },
  { id: "weak-areas", icon: "⌕", title: "Find my weak areas", subtitle: "Know and improve your weak spots", suggestions: ["Recent drills", "Question-type gaps", "Timing patterns"] },
];

function renderCaseyHome(version) {
  const proposed = version === "proposed";
  const tools = proposed ? lsatCaseyTools : lsatCurrentTools;
  return `<div class="casey-review-layout" ${proposed ? "data-casey-demo" : ""}>
    <div class="component-preview rezzy-phone rezzy-home-demo lsat-casey-preview">
      <div class="rezzy-phone-header"><span>☰</span><strong>Casey</strong><span>✦</span></div>
      <div class="rezzy-greeting"><div class="rezzy-orb">C</div><h3>What should we study today?</h3></div>
      <div class="savvy-demo-stage" ${proposed ? "data-casey-stage" : ""}><div class="savvy-tool-scroll">${tools.map((tool) => `<button type="button" class="savvy-tool-pill" ${proposed ? `data-casey-tool="${tool.id}"` : ""}><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}</div></div>
      <p class="savvy-demo-hint" ${proposed ? "data-casey-hint" : ""}>${proposed ? "Select a pill to see its LSAT examples" : "Current generic tool copy"}</p>
      <div class="rezzy-composer"><span>＋</span><p>Ask Casey anything…</p><b>↑</b></div>
    </div>
    ${proposed ? `<aside class="casey-examples-panel"><p>LSAT examples by tool</p>${lsatCaseyTools.map((tool) => `<section><div><i>${tool.icon}</i><strong>${tool.title}</strong></div><div class="casey-example-chips">${tool.suggestions.map((suggestion) => `<span>${suggestion}</span>`).join("")}</div></section>`).join("")}</aside>` : ""}
  </div>`;
}

function renderCaseySelectedState(tool) {
  if (tool.special === "upload") {
    return `<div class="savvy-special-sheet"><button class="savvy-back" type="button" data-casey-back>‹ Back</button><h3>Upload Notes</h3><p>Casey turns LSAT notes into flashcards, questions, concept maps and more.</p><div class="savvy-upload-options"><span>▧<small>Camera</small></span><span>▣<small>Photos</small></span><span>▤<small>Files</small></span></div><div class="casey-sheet-examples">${tool.suggestions.map((suggestion) => `<span>${suggestion}</span>`).join("")}</div></div>`;
  }
  if (tool.special === "canvas") {
    return `<div class="savvy-special-sheet canvas-sheet-demo"><div class="savvy-sheet-heading"><button class="savvy-back" type="button" data-casey-back>‹ Back</button><b>View all ›</b></div><h3>Create a Canvas</h3><p>Templates and starters are filtered to the active LSAT course.</p><div class="savvy-template-grid">${tool.suggestions.map((suggestion) => `<span><i></i><small>${suggestion}</small></span>`).join("")}</div></div>`;
  }
  return `<div class="savvy-prompt-state"><button class="savvy-back" type="button" data-casey-back>‹ Back</button><div class="savvy-selected-tool"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></div>${tool.suggestions.map((suggestion) => `<button type="button" class="savvy-suggestion">${suggestion}</button>`).join("")}<button type="button" class="savvy-suggestion">Something else</button></div>`;
}

function renderCaseyWidget(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-widget-preview"><div class="bar-widget-chat"><span class="rezzy-orb">C</span><p>${proposed ? "Drill generated" : "Quiz generated"}</p></div><div class="bar-widget-card"><header><span>?</span><div><strong>${proposed ? "CUSTOM DRILL" : "CUSTOM QUIZ"}</strong><small>8 questions</small></div><b>1 / 8</b></header><p>Which answer choice identifies the argument's necessary assumption?</p><button type="button" tabindex="-1">The conclusion depends on the stated condition</button><button type="button" tabindex="-1">The evidence guarantees the conclusion</button><footer><span>‹</span><b>NEXT ›</b></footer></div></div>`;
}

function renderCanvasEmpty(version) {
  const proposed = version === "proposed";
  const suggestions = proposed
    ? ["Conditional logic map", "Argument structure", "RC passage viewpoints", "Flaw family map"]
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
      ? ["Map a necessary assumption", "Create a flaw flowchart", "Diagram conditional logic", "Compare RC viewpoints"]
      : ["Explain the cardiac cycle", "Create a nephron flowchart", "Draw the brachial plexus", "Compare Gram + vs Gram −"])
    : (proposed
      ? ["Upload your LR error log", "Scan your conditional logic notes", "Add an RC passage map"]
      : ["Upload your Biochemistry chapter", "Snap your Anatomy notes", "Add a Pathology slide image"]);
  return `<div class="component-preview bar-single-empty-preview">
    <div class="bar-gallery-toolbar"><span>‹</span><strong>Library</strong><span>⌕</span></div>
    <div class="bar-library-tabs"><span class="${fromCasey ? "selected" : ""}">From Casey</span><span class="${fromCasey ? "" : "selected"}">From My Notes</span></div>
    <div class="bar-library-filters"><span class="selected">All</span><span>${fromCasey ? "Flowcharts" : "PDFs"}</span><span>${fromCasey ? "Tables" : "Images"}</span></div>
    <section><span class="bar-gallery-icon">${fromCasey ? "▤" : "≡"}</span><h3>${fromCasey ? "Create your first study visual" : "Turn your notes into Smart Notes"}</h3><p>${fromCasey ? "Ask Casey to create diagrams, flowcharts, and study visuals that make complex topics easier to understand." : "Upload PDFs, slides, or handwritten notes and Casey turns them into flashcards, questions, concept map and more."}</p><button type="button" tabindex="-1">${fromCasey ? "✦ &nbsp; CREATE WITH CASEY" : "⇧ &nbsp; UPLOAD A FILE"}</button><div>${suggestions.map((item) => `<b>${item}</b>`).join("")}</div></section>
  </div>`;
}

function renderFlashcardCreate(version) {
  const proposed = version === "proposed";
  const examples = proposed ? [["Conditional Reasoning", 8], ["Argument Flaws", 10], ["RC Passage Structure", 8]] : [["Urea Cycle", 8], ["Cardiac Potentials", 10], ["Conduction System of Heart", 2]];
  return `<div class="component-preview flashcard-phone-frame flashcard-ai-preview lsat-flashcard-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong>Generate Flashcards with AI</strong></div><div class="flashcard-screen-body"><label>Describe the flashcards you want in detail</label><div class="flashcard-prompt-field">Enter a prompt</div><label>Examples of what others are making</label><div class="flashcard-smart-pills">${examples.map(([title, count]) => `<span><strong>${title}</strong><small>${count} Cards</small></span>`).join("")}</div><button class="flashcard-disabled-cta" type="button" tabindex="-1">MAKE ME FLASHCARDS</button></div></div>`;
}

function renderFlashcardSearchEmpty(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview bar-flashcard-library-preview bar-flashcard-state-preview">
    <div class="bar-library-header"><span>▤</span><strong>Flashcards</strong><button type="button" tabindex="-1">＋ CREATE</button></div>
    <div class="bar-library-search">⌕ <span>parallel reasoning</span></div>
    <div class="bar-search-empty"><b>⌕</b><span><strong>No search results for “parallel reasoning”</strong><small>${proposed ? "Oncourse can generate flashcards for any LSAT topic you choose." : "Oncourse can generate topper-level flashcards for any topic that you like."}</small></span><button type="button" tabindex="-1">GENERATE FLASHCARDS WITH AI</button></div>
  </div>`;
}

function renderPreview(item, version) {
  if (item.kind === "navigation") return renderNavigation(version);
  if (item.kind === "practice-landing") return renderPracticeLanding(version);
  if (item.kind === "lessons-ordering") return renderLessonsOrdering(version);
  if (item.kind === "drill-builder") return renderDrillBuilder(version);
  if (item.kind === "topic-selection") return renderTopicSelection(version);
  if (item.kind === "by-subject-flow") return renderBySubjectFlow(version);
  if (item.kind === "test-types") return renderTestTypes(version);
  if (item.kind === "history") return renderHistory(version);
  if (item.kind === "history-empty") return renderHistoryEmpty(version);
  if (item.kind === "ready-sheet") return renderReadySheet(version);
  if (item.kind === "paused-page") return renderPausedPage(version);
  if (item.kind === "casey-home") return renderCaseyHome(version);
  if (item.kind === "casey-widget") return renderCaseyWidget(version);
  if (item.kind === "canvas-empty") return renderCanvasEmpty(version);
  if (item.kind === "library-casey-empty") return renderLibraryEmpty(version, "casey");
  if (item.kind === "library-notes-empty") return renderLibraryEmpty(version, "notes");
  if (item.kind === "flashcard-create") return renderFlashcardCreate(version);
  return renderFlashcardSearchEmpty(version);
}

function renderReviewItem(item, index) {
  const preview = item.layout === "verified"
    ? `<div class="verified-preview"><div class="version-heading"><span class="version-label verified-label">Latest LSAT code</span></div>${renderPreview(item, "current")}</div>`
    : `<div class="comparison-grid"><section class="version-panel"><div class="version-heading"><span class="version-label">Current</span></div>${renderPreview(item, "current")}</section><section class="version-panel"><div class="version-heading"><span class="version-label">Proposed</span></div>${renderPreview(item, "proposed")}</section></div>`;
  return `<article class="review-card" id="${item.id}">
    <header class="card-header"><p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p><h2>${item.title}</h2></header>
    ${preview}
    <div class="decision-row"><div><span class="change-type">${item.changeType || "Copy change only"}</span><div class="change-list">${item.changes.map(([from, to]) => `<div class="change-line"><span class="old-copy">${from}</span><span class="arrow">→</span><span class="new-copy">${to}</span></div>`).join("")}</div></div><div class="decision-copy"><h4>${item.layout === "verified" ? "What was verified" : "Why this change"}</h4><p>${item.rationale}</p></div></div>
  </article>`;
}

document.getElementById("lsat-terminology-table").innerHTML = renderTerminologyTable();
mountSharedReview("lsat-review-list", "lsat", lsatReviewItems, renderReviewItem);

document.querySelectorAll("[data-casey-demo]").forEach((demo) => {
  const stage = demo.querySelector("[data-casey-stage]");
  const hint = demo.querySelector("[data-casey-hint]");
  const showPills = () => {
    stage.innerHTML = `<div class="savvy-tool-scroll" data-casey-pills>${lsatCaseyTools.map((tool) => `<button type="button" class="savvy-tool-pill" data-casey-tool="${tool.id}"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}</div>`;
    hint.textContent = "Select a pill to see its actual state";
  };
  stage.addEventListener("click", (event) => {
    const toolButton = event.target.closest("[data-casey-tool]");
    if (toolButton) {
      const tool = lsatCaseyTools.find((item) => item.id === toolButton.dataset.caseyTool);
      if (!tool) return;
      stage.innerHTML = renderCaseySelectedState(tool);
      hint.textContent = tool.special ? `${tool.title} opens its own dedicated sheet` : `Only ${tool.title} suggestions are shown`;
      return;
    }
    if (event.target.closest("[data-casey-back]")) showPills();
  });
});
