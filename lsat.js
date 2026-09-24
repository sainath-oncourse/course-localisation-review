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
    changes: [["Quiz", "Practice"], ["Self Assess", "Create Drill"]],
    rationale: "Practice is the umbrella destination and Drill is the short practice activity. By Subject, Tests and Recents describe different ways to browse the existing content, so those tabs stay unchanged.",
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
    changes: [["Ask Rezzy anything", "Ask Casey anything"], ["Discuss with Rezzy", "Discuss with Casey"]],
    rationale: "The latest app maps LSAT to Casey. Search subjects or topics, Search questions and Search lessons can all stay unchanged.",
  },
  {
    id: "lsat-casey-home",
    area: "Casey · Home and tools",
    title: "Home tool pills and selected states",
    kind: "casey-home",
    layout: "verified",
    changeType: "Terminology + example content",
    changes: [["Take a quiz", "Start a drill"], ["Medical tool examples", "LSAT examples"], ["Get high-yield notes", "Get study notes"]],
    rationale: "The latest app already maps LSAT to Casey and uses the correct one-tool-at-a-time interaction. Keep that behaviour; localise Quiz to Drill, simplify Notes, and replace medical examples with LSAT content.",
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
  const segments = ["By Subject", "Tests", "Recents"];
  return `<div class="component-preview practice-shell-preview">
    <div class="practice-shell-header"><div class="practice-shell-icon">?</div><strong>${proposed ? "Practice" : "Quiz"}</strong></div>
    <div class="practice-actions"><button type="button" tabindex="-1"><span>☆</span> Bookmarked</button><button class="${proposed ? "changed-action" : ""}" type="button" tabindex="-1"><span>✦</span> ${proposed ? "Create Drill" : "Self Assess"}</button></div>
    <div class="practice-segments">${segments.map((item, index) => `<span class="${index === 0 ? "selected" : ""}">${item}</span>`).join("")}</div>
    <div class="lsat-landing-list"><small>SUBJECTS</small><div><i>LR</i><span><strong>Logical Reasoning</strong><em>Questions and topics</em></span><b>›</b></div></div>
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
    <div class="search-audit-list"><div class="unchanged-search"><span>⌕</span><strong>Search subjects or topics</strong><small>Keep</small></div><div class="unchanged-search"><span>⌕</span><strong>Search questions by keyword</strong><small>Keep</small></div><div class="unchanged-search"><span>⌕</span><strong>Search lessons</strong><small>Keep</small></div></div>
  </div>`;
}

const lsatCaseyTools = [
  { id: "upload", icon: "▤", title: "Upload your notes", subtitle: "Get Flashcards, Questions and more", special: "upload" },
  { id: "canvas", icon: "◇", title: "Create a Canvas", subtitle: "Make an interactive visual", special: "canvas" },
  { id: "flowcharts", icon: "⌁", title: "Learn with Flowcharts", subtitle: "Visualize complex topics easily", suggestions: ["Conditional reasoning", "Argument structure", "RC passage map"] },
  { id: "flashcards", icon: "▥", title: "Review Flashcards", subtitle: "Recall faster, retain longer", suggestions: ["Common argument flaws", "Conditional indicators", "RC viewpoints"] },
  { id: "drill", icon: "?", title: "Start a drill", subtitle: "Practice a targeted set", suggestions: ["Logical Reasoning", "Reading Comprehension", "My weak question types"] },
  { id: "notes", icon: "≡", title: "Get study notes", subtitle: "Focus on key LSAT concepts", suggestions: ["Necessary assumptions", "Causal reasoning", "Comparative passages"] },
  { id: "mnemonics", icon: "✦", title: "Memorize with mnemonics", subtitle: "Make tough concepts stick", suggestions: ["Logic indicators", "Flaw families", "Question stems"] },
  { id: "weak-areas", icon: "⌕", title: "Find my weak areas", subtitle: "Know and improve your weak spots", suggestions: ["Recent drills", "Question-type gaps", "Timing patterns"] },
];

function renderCaseyHome() {
  return `<div class="component-preview rezzy-phone rezzy-home-demo lsat-casey-preview" data-casey-demo>
    <div class="rezzy-phone-header"><span>☰</span><strong>Casey</strong><span>✦</span></div>
    <div class="rezzy-greeting"><div class="rezzy-orb">C</div><h3>What should we study today?</h3></div>
    <div class="savvy-demo-stage" data-casey-stage><div class="savvy-tool-scroll" data-casey-pills>${lsatCaseyTools.map((tool) => `<button type="button" class="savvy-tool-pill" data-casey-tool="${tool.id}"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}</div></div>
    <p class="savvy-demo-hint" data-casey-hint>Select a pill to see its actual state</p>
    <div class="rezzy-composer"><span>＋</span><p>Ask Casey anything…</p><b>↑</b></div>
  </div>`;
}

function renderCaseySelectedState(tool) {
  if (tool.special === "upload") {
    return `<div class="savvy-special-sheet"><button class="savvy-back" type="button" data-casey-back>‹ Back</button><h3>Upload Notes</h3><p>Casey turns them into flashcards, questions, concept maps and more.</p><div class="savvy-upload-options"><span>▧<small>Camera</small></span><span>▣<small>Photos</small></span><span>▤<small>Files</small></span></div></div>`;
  }
  if (tool.special === "canvas") {
    return `<div class="savvy-special-sheet canvas-sheet-demo"><div class="savvy-sheet-heading"><button class="savvy-back" type="button" data-casey-back>‹ Back</button><b>View all ›</b></div><h3>Create a Canvas</h3><p>Templates are filtered to the active LSAT course.</p><div class="savvy-template-grid"><span><i></i><small>LSAT template</small></span><span><i></i><small>LSAT template</small></span><span><i></i><small>LSAT template</small></span><span><i></i><small>LSAT template</small></span></div></div>`;
  }
  return `<div class="savvy-prompt-state"><button class="savvy-back" type="button" data-casey-back>‹ Back</button><div class="savvy-selected-tool"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></div>${tool.suggestions.map((suggestion) => `<button type="button" class="savvy-suggestion">${suggestion}</button>`).join("")}<button type="button" class="savvy-suggestion">Something else</button></div>`;
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
  if (item.kind === "test-types") return renderTestTypes(version);
  if (item.kind === "history") return renderHistory(version);
  if (item.kind === "ready-sheet") return renderReadySheet(version);
  if (item.kind === "official-questions") return renderOfficialQuestions(version);
  if (item.kind === "search-casey") return renderSearchCasey(version);
  if (item.kind === "casey-home") return renderCaseyHome(version);
  return renderFlashcards(version);
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
document.getElementById("lsat-review-list").innerHTML = lsatReviewItems.map(renderReviewItem).join("");

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
