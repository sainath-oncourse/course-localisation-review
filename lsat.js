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
    changes: [["Quiz", "Practice"]],
    rationale: "Practice is the main destination in both reviewed LSAT products and covers drills, complete sections and full tests.",
  },
  {
    id: "lsat-practice-landing",
    area: "Practice",
    title: "Practice landing screen",
    kind: "practice-landing",
    changeType: "Copy + LSAT grouping",
    changes: [["Quiz", "Practice"], ["Self Assess", "Create Drill"], ["By Subject / Tests / Recents", "Drills / Sections / Tests"]],
    rationale: "Both products distinguish a short Drill, a complete LR or RC Section, and a full Test. These labels describe the content more precisely than Quiz or Subject.",
  },
  {
    id: "lsat-drill-builder",
    area: "Practice · Create",
    title: "Drill setup screen",
    kind: "drill-builder",
    changes: [["Create a Self-Assessment", "Create Drill"], ["Choose the mode of quiz", "Choose a drill mode"], ["CHOOSE TOPICS", "CHOOSE QUESTION TYPES"]],
    rationale: "Drill is used by both competitors for a short, configurable question set. Question Type, Topic and Difficulty are established LSAT filters.",
  },
  {
    id: "lsat-content-selection",
    area: "Practice · Drill filters",
    title: "LSAT area and question selection",
    kind: "content-selection",
    changeType: "Copy + hierarchy rule",
    changes: [["By Subject", "Logical Reasoning / Reading Comprehension"], ["Subject", "Area"], ["Topics", "Question Types / Topics"]],
    rationale: "Section must not replace Subject here: in LSAT, Section means a complete timed LR or RC block. Present the two LSAT areas directly, then filter by Question Type, Topic and Difficulty.",
  },
  {
    id: "lsat-test-types",
    area: "Practice · Exam simulation",
    title: "Sections and full tests",
    kind: "test-types",
    changeType: "Copy + provenance rule",
    changes: [["Benchmark", "Practice Tests"], ["Benchmark 1", "Practice Test 1"], ["Mini-Benchmark", "Sections"]],
    rationale: "Both products use Section for a complete LR or RC block. Use PrepTest only when the product contains an official licensed LSAC test; otherwise use Practice Test.",
  },
  {
    id: "lsat-history",
    area: "Practice · History",
    title: "Recent LSAT practice",
    kind: "history",
    changes: [["PAST QUIZZES", "PRACTICE HISTORY"], ["Custom Quiz", "Drill"], ["Recommended Quiz", "Recommended Drill"], ["RESUME QUIZ", "RESUME DRILL"]],
    rationale: "7Sage and LSAT Demon name history by activity: Drill, Section and PrepTest/Test. Recents can remain as navigation, while cards use the actual activity type.",
  },
  {
    id: "lsat-ready-sheet",
    area: "Practice · Ready / resume sheet",
    title: "Drill ready sheet states",
    kind: "ready-sheet",
    changes: [["Your Quiz is Ready", "Your Drill is Ready"], ["START QUIZ", "START DRILL"], ["Your Quiz is Ready · paused", "Resume Your Drill"], ["RESUME QUIZ", "RESUME DRILL"]],
    rationale: "The title and action should match the activity being created or resumed. A Section or Practice Test should use its own name in the same reusable component.",
  },
  {
    id: "lsat-official-questions",
    area: "Across LSAT · Question provenance",
    title: "Past official question terminology",
    kind: "official-questions",
    changeType: "Copy + licensing rule",
    changes: [["PYQs", "Official LSAT Questions"], ["PYQ", "Official Question"], ["Unverified reconstructed questions", "LSAT-Style Questions"]],
    rationale: "Neither product uses PYQ. Use Official LSAT Questions only for licensed official items; use LSAT-Style Questions for authored or reconstructed material.",
  },
  {
    id: "lsat-search-casey",
    area: "Global · Search and tutor",
    title: "Search fields and Casey surfaces",
    kind: "search-casey",
    changes: [["Ask Rezzy anything", "Ask Casey anything"], ["Discuss with Rezzy", "Discuss with Casey"], ["Search subjects or topics", "Search question types or topics"]],
    rationale: "The latest app maps LSAT to Casey. Generic Search questions copy can stay; only tutor identity and subject-specific placeholders need localisation.",
  },
  {
    id: "lsat-casey-home",
    area: "Casey · Home and tools",
    title: "LSAT tool pills and prompts",
    kind: "casey-home",
    changeType: "Copy + example content",
    changes: [["Take a quiz", "Start a drill"], ["Medical tool examples", "LSAT examples"], ["Get high-yield notes", "Get study notes"]],
    rationale: "The tool remains a focused one-tool-at-a-time flow. Drill is the established LSAT term; the remaining tool concepts can stay with LSAT-specific examples.",
  },
  {
    id: "lsat-flashcards",
    area: "Flashcards",
    title: "LSAT flashcard examples and empty state",
    kind: "flashcards",
    changeType: "Example + neutral copy",
    changes: [["Medical prompt examples", "LSAT prompt examples"], ["topper-level flashcards", "flashcards"]],
    rationale: "Neither competitor offers flashcards, but that does not require removing the Oncourse feature. Keep Flashcards and replace only medical or topper-specific language.",
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
  const segments = proposed ? ["Drills", "Sections", "Tests"] : ["By Subject", "Tests", "Recents"];
  return `<div class="component-preview practice-shell-preview">
    <div class="practice-shell-header"><div class="practice-shell-icon">?</div><strong>${proposed ? "Practice" : "Quiz"}</strong></div>
    <div class="practice-actions"><button type="button" tabindex="-1"><span>☆</span> Bookmarked</button><button class="${proposed ? "changed-action" : ""}" type="button" tabindex="-1"><span>✦</span> ${proposed ? "Create Drill" : "Self Assess"}</button></div>
    <div class="practice-segments">${segments.map((item, index) => `<span class="${index === 0 ? "selected" : ""}">${item}</span>`).join("")}</div>
    <div class="lsat-landing-list"><small>${proposed ? "CONTINUE PRACTICE" : "AVAILABLE TESTS"}</small><div><i>${proposed ? "LR" : "?"}</i><span><strong>${proposed ? "Logical Reasoning Drill" : "Recommended Quiz"}</strong><em>${proposed ? "8 questions · In process" : "10 questions"}</em></span><b>›</b></div></div>
  </div>`;
}

function renderDrillBuilder(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview create-test-preview lsat-builder-preview">
    <div class="create-test-topline"><span>‹</span><strong>${proposed ? "Create Drill" : "Create a Self-Assessment"}</strong></div>
    <p class="create-test-prompt">${proposed ? "Choose a drill mode" : "Choose the mode of quiz"}</p>
    <div class="mode-options"><div class="mode-option selected-mode"><span class="mode-radio"></span><span><strong>Practice Mode</strong><small>Review as you go</small></span></div><div class="mode-option"><span class="mode-radio"></span><span><strong>Timed Mode</strong><small>Work against the clock</small></span></div></div>
    <div class="setup-label">Number of questions</div><div class="question-count">10 <span>⌄</span></div>
    <div class="setup-label">Difficulty</div><div class="setup-pills"><span class="active-pill">Adaptive</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
    <button class="setup-cta" type="button" tabindex="-1">${proposed ? "CHOOSE QUESTION TYPES" : "CHOOSE TOPICS"}</button>
  </div>`;
}

function renderContentSelection(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview lsat-selection-preview">
    <div class="create-test-topline"><span>‹</span><strong>${proposed ? "Choose Practice Area" : "By Subject"}</strong></div>
    <div class="selection-search"><span>⌕</span><span>${proposed ? "Search question types or topics" : "Search subjects or topics"}</span></div>
    <div class="lsat-area-card"><i>LR</i><span><strong>Logical Reasoning</strong><small>${proposed ? "Question Types · Topics · Difficulty" : "18 topics"}</small></span><b>›</b></div>
    <div class="lsat-area-card"><i>RC</i><span><strong>Reading Comprehension</strong><small>${proposed ? "Passage Type · Topic · Difficulty" : "12 topics"}</small></span><b>›</b></div>
    <div class="lsat-hierarchy-rule"><small>Curriculum</small><strong>${proposed ? "Area → Topic / Module → Lesson" : "Subject → Topic → Lesson"}</strong></div>
    ${proposed ? '<p class="visibility-note">“Section” is reserved for a complete LR or RC exam block.</p>' : ""}
  </div>`;
}

function renderTestTypes(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-mock-preview lsat-test-preview">
    <div class="cfa-screen-bar"><span></span><strong>${proposed ? "Practice" : "Quiz"}</strong><i></i></div>
    <div class="cfa-pills mock-pills"><span>All</span><span class="active">${proposed ? "Practice Tests" : "Benchmark"}</span><span>${proposed ? "Sections" : "Mini-Benchmark"}</span><span>My Attempts</span></div>
    <div class="cfa-mock-card"><div class="cfa-mock-title"><span>▤</span><span><strong>${proposed ? "Practice Test 1" : "Benchmark 1"}</strong><small>${proposed ? "Full LSAT-style test" : "Realistic assessment"}</small></span></div><div class="cfa-benchmark-row"><span>4 sections</span><b>START</b></div></div>
    <div class="cfa-mock-card compact"><div class="cfa-mock-title"><span>LR</span><span><strong>${proposed ? "Logical Reasoning Section" : "Mini-Benchmark"}</strong><small>${proposed ? "Complete timed section" : "Shorter timed question set"}</small></span></div><div class="cfa-benchmark-row"><span>25 questions</span><b>START</b></div></div>
    ${proposed ? '<p class="lsat-license-note"><strong>Official licensed content:</strong> use PrepTest / PT instead of Practice Test.</p>' : ""}
  </div>`;
}

function renderHistory(version) {
  const proposed = version === "proposed";
  const pills = proposed ? ["All", "Drills", "Sections", "Tests"] : ["All", "Paused", "Custom", "Recommended", "Daily", "Weekly"];
  return `<div class="component-preview recent-tests-preview lsat-history-preview">
    <strong class="recent-tests-heading">${proposed ? "PRACTICE HISTORY" : "PAST QUIZZES"}</strong>
    <div class="recent-filter-pills">${pills.map((pill, index) => `<span class="${index === 0 ? "selected" : ""}">${pill}</span>`).join("")}</div>
    <div class="recent-date">Today</div><div class="recent-card-list">
      <div class="recent-test-card"><span class="recent-card-icon">▶</span><span class="recent-card-copy"><strong>${proposed ? "Logical Reasoning Drill" : "Custom Quiz"}</strong><small>${proposed ? "8 questions · In process" : "Logical Reasoning"}</small></span><span class="recent-card-arrow">›</span></div>
      <div class="recent-test-card"><span class="recent-card-icon">✦</span><span class="recent-card-copy"><strong>${proposed ? "Recommended Drill" : "Recommended Quiz"}</strong><small>Reading Comprehension</small></span><span class="recent-card-arrow">›</span></div>
    </div><div class="resume-sample"><span>${proposed ? "Paused drill" : "Paused quiz"}</span><button type="button" tabindex="-1">${proposed ? "RESUME DRILL" : "RESUME QUIZ"}</button></div>
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

function renderOfficialQuestions(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-copy-surfaces lsat-official-preview">
    <section><small>Question source filter</small><div class="cfa-chip-row"><span>All</span><span>Bookmarked</span><span class="${proposed ? "" : "danger-chip"}">${proposed ? "Official" : "PYQs"}</span></div></section>
    <section><small>Question collection</small><div class="cfa-action-row"><i>?</i><span><strong>${proposed ? "Official LSAT Questions" : "PYQs"}</strong><em>${proposed ? "Licensed questions from official LSATs" : "Previous-year questions"}</em></span><b>›</b></div></section>
    <section><small>Question identifier</small><p>${proposed ? "PT159 · Section 1 · Question 1" : "PYQ · 2024 · Question 1"}</p></section>
    ${proposed ? '<p class="visibility-note">For authored material, use “LSAT-Style Questions” — never “Official”.</p>' : ""}
  </div>`;
}

function renderSearchCasey(version) {
  const proposed = version === "proposed";
  const tutor = proposed ? "Casey" : "Rezzy";
  return `<div class="component-preview lsat-search-preview">
    <div class="lsat-mini-header"><span>‹</span><strong>Lessons</strong><span></span></div>
    <div class="global-tutor-input"><span>✦</span>Ask ${tutor} anything</div>
    <div class="lesson-context"><span><small>Current lesson</small><strong>Conditional Reasoning</strong></span><button type="button">Discuss with ${tutor}</button></div>
    <div class="search-audit-list"><div><span>⌕</span><strong>${proposed ? "Search question types or topics" : "Search subjects or topics"}</strong><small>Changed</small></div><div class="unchanged-search"><span>⌕</span><strong>Search questions by keyword</strong><small>Keep</small></div><div class="unchanged-search"><span>⌕</span><strong>Search lessons</strong><small>Keep</small></div></div>
  </div>`;
}

function renderCaseyHome(version) {
  const proposed = version === "proposed";
  const rows = proposed
    ? [["?", "Start a drill", "Practice a targeted set"], ["▤", "Review Flashcards", "Recall faster, retain longer"], ["≡", "Get study notes", "Focus on key LSAT concepts"], ["⌁", "Learn with Flowcharts", "Visualize argument structure"]]
    : [["?", "Take a quiz", "Improve accuracy and speed"], ["▤", "Review Flashcards", "Cranial nerves"], ["≡", "Get high-yield notes", "Pharmacology revision"], ["⌁", "Get flowcharts", "Coagulation cascade"]];
  return `<div class="component-preview rezzy-phone lsat-casey-preview"><div class="rezzy-phone-header"><span>☰</span><strong>${proposed ? "Casey" : "Rezzy"}</strong><span>✦</span></div><div class="rezzy-greeting"><div class="rezzy-orb">${proposed ? "C" : "R"}</div><h3>What should we study today?</h3></div><div class="lsat-tool-list">${rows.map(([icon, title, subtitle]) => `<div><i>${icon}</i><span><strong>${title}</strong><small>${subtitle}</small></span><b>›</b></div>`).join("")}</div><div class="rezzy-composer"><span>＋</span><p>Ask ${proposed ? "Casey" : "Rezzy"} anything…</p><b>↑</b></div></div>`;
}

function renderFlashcards(version) {
  const proposed = version === "proposed";
  const examples = proposed ? [["Conditional Reasoning", 8], ["Argument Flaws", 10], ["RC Passage Structure", 8]] : [["Urea Cycle", 8], ["Cardiac Potentials", 10], ["Cranial Nerves", 8]];
  return `<div class="component-preview flashcard-phone-frame flashcard-ai-preview lsat-flashcard-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong>Generate Flashcards with AI</strong></div><div class="flashcard-screen-body"><label>Describe the flashcards you want in detail</label><div class="flashcard-prompt-field">Enter a prompt</div><label>Examples of what others are making</label><div class="flashcard-smart-pills">${examples.map(([title, count]) => `<span><strong>${title}</strong><small>${count} Cards</small></span>`).join("")}</div><div class="lsat-empty-copy"><strong>No search results</strong><small>Oncourse can generate ${proposed ? "flashcards" : "topper-level flashcards"} for any topic you choose.</small></div><button class="flashcard-disabled-cta" type="button" tabindex="-1">MAKE ME FLASHCARDS</button></div></div>`;
}

function renderPreview(item, version) {
  if (item.kind === "navigation") return renderNavigation(version);
  if (item.kind === "practice-landing") return renderPracticeLanding(version);
  if (item.kind === "drill-builder") return renderDrillBuilder(version);
  if (item.kind === "content-selection") return renderContentSelection(version);
  if (item.kind === "test-types") return renderTestTypes(version);
  if (item.kind === "history") return renderHistory(version);
  if (item.kind === "ready-sheet") return renderReadySheet(version);
  if (item.kind === "official-questions") return renderOfficialQuestions(version);
  if (item.kind === "search-casey") return renderSearchCasey(version);
  if (item.kind === "casey-home") return renderCaseyHome(version);
  return renderFlashcards(version);
}

function renderReviewItem(item, index) {
  return `<article class="review-card" id="${item.id}">
    <header class="card-header"><p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p><h2>${item.title}</h2></header>
    <div class="comparison-grid"><section class="version-panel"><div class="version-heading"><span class="version-label">Current</span></div>${renderPreview(item, "current")}</section><section class="version-panel"><div class="version-heading"><span class="version-label">Proposed</span></div>${renderPreview(item, "proposed")}</section></div>
    <div class="decision-row"><div><span class="change-type">${item.changeType || "Copy change only"}</span><div class="change-list">${item.changes.map(([from, to]) => `<div class="change-line"><span class="old-copy">${from}</span><span class="arrow">→</span><span class="new-copy">${to}</span></div>`).join("")}</div></div><div class="decision-copy"><h4>Why this change</h4><p>${item.rationale}</p></div></div>
  </article>`;
}

document.getElementById("lsat-terminology-table").innerHTML = renderTerminologyTable();
document.getElementById("lsat-review-list").innerHTML = lsatReviewItems.map(renderReviewItem).join("");
