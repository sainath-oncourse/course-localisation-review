const cfaTerms = [
  ["Main learning area", "Syllabus", "Learn Materials", "Study Notes / Video Lessons"],
  ["Top curriculum level", "Topic", "Topic", "Topic; sometimes Chapter"],
  ["Level below topic", "Learning Module", "Reading", "Reading"],
  ["Learning content", "Lectures", "Read lesson / Watch lesson", "Study Notes / Video Lessons"],
  ["Lesson questions", "MCQs", "Assignment", "Practice Questions"],
  ["Question collection", "QBank", "Question bank", "Question Bank"],
  ["Practice builder", "Create Test", "Quiz Creator", "Create Quiz"],
  ["Practice set", "Test", "Topic Quiz / Reading Quiz", "Quiz"],
  ["Practice history", "Previous Tests", "Focus Quiz Log", "Abandoned / Completed Quizzes"],
  ["Practice modes", "Tutor / Timed", "Grade after each / after all", "Practice / Revision Mode"],
  ["Exam simulation", "Mock Exams", "Mock Exams", "Computer-Based Testing Mock Exams"],
  ["Mock structure", "Session 1 / Session 2", "Session 1 / Session 2", "First Session / Second Session"],
  ["Performance", "Overall / Reports / Graphs / SmartPath", "Focus Analysis / Topic Performance", "Performance / Detailed Stats"],
  ["Planning", "Study Planner", "CheckPoints / Next Steps", "—"],
  ["Flashcards", "My Decks / ReadyDecks", "Available Decks / Marked Cards", "My Saved Items/Flashcards"],
];

const navIcons = ["?", "▥", "⌂", "▤", "⌘"];
const navLabels = ["Quiz", "Lessons", "Home", "Flashcards", "Play"];

const cfaReviewItems = [
  {
    id: "cfa-practice-landing",
    area: "Quiz",
    title: "Quiz landing screen",
    kind: "practice-shell",
    changes: [["Self Assess", "Create Quiz"]],
    rationale: "Create Quiz is established CFA-product language. By Subject can stay: UWorld explicitly organizes CFA practice by subject and topic, so Oncourse's existing Subject → Topic → Lesson structure is suitable for CFA.",
  },
  {
    id: "cfa-quiz-setup",
    area: "Quiz · Create",
    title: "Quiz setup screen",
    kind: "test-setup",
    changes: [["Create a Self-Assessment", "Create Quiz"], ["Choose the mode of quiz", "Choose a quiz mode"], ["Image Based", "Remove for CFA"]],
    rationale: "Create Quiz is used by AnalystPrep and matches the preceding CTA. Keep the real Practice Mode, Exam Mode, Number of questions and Question Type controls. Hide Image Based unless CFA question metadata genuinely supports it.",
  },
  {
    id: "cfa-mock-exams",
    area: "Quiz · Exam simulation",
    title: "Mock exams",
    kind: "mocks",
    changes: [["Benchmark", "Mock Exams"], ["Benchmark 1", "Mock Exam 1"], ["Mini-Benchmark", "Remove for CFA"]],
    rationale: "All three reviewed CFA products use Mock Exam for full simulations. Remove the generic Mini-Benchmark category from CFA rather than introducing a separate Mini Mock Exam product.",
  },
  {
    id: "cfa-recents",
    area: "Quiz · Recents",
    title: "CFA quiz history",
    kind: "recents",
    changeType: "Course visibility",
    changes: [["Weekly", "Hidden for CFA"]],
    rationale: "Past Quizzes, Custom Quiz, Recommended Quiz and Resume Quiz are valid. Only Weekly is removed because it represents the medical Weekly Score Predictor Test.",
  },
  {
    id: "cfa-quiz-ready",
    area: "Quiz · Ready / resume sheet",
    title: "Quiz ready sheet states",
    kind: "resume-sheet",
    changes: [["Your Quiz is Ready · paused quiz", "Resume Your Quiz"], ["Your Quiz is Ready · paused mock", "Resume Your Mock Exam"]],
    rationale: "A paused activity can be a Quiz or Mock Exam. Keep the first-start title, but make the resume title and CTA match the actual activity instead of applying Quiz to every state.",
  },
  {
    id: "cfa-flashcard-examples",
    area: "Flashcards · Generate with AI",
    title: "AI flashcard generator",
    kind: "flashcard-examples",
    changeType: "Example content",
    changes: [["Medical prompt examples", "CFA prompt examples"]],
    rationale: "The current suggestions are medical topics. Replace them with examples from the CFA curriculum; the screen structure stays unchanged.",
  },
  {
    id: "cfa-flashcard-loading",
    area: "Flashcards · Generate with AI",
    title: "AI generation loading state",
    kind: "flashcard-loading",
    changes: [["flashcards.search_loading_text", "Creating your flashcards…"]],
    rationale: "CFA currently falls back to a missing base translation. Use clear generic copy; none of the audited competitors uses High Yield here.",
  },
  {
    id: "cfa-flashcard-empty",
    area: "Flashcards · Search",
    title: "No search results",
    kind: "flashcard-empty",
    changes: [["topper-level flashcards", "flashcards"]],
    rationale: "Topper is Indian medical-exam language. All three CFA products simply use Flashcards, so no replacement adjective is needed.",
  },
  {
    id: "cfa-flashcard-search-footer",
    area: "Flashcards · Search results",
    title: "Short-results footer",
    kind: "flashcard-search-footer",
    changes: [["topper-level flashcards", "flashcards"]],
    rationale: "Verified in the search-results list when fewer than 20 cards are returned. It uses the same medical-specific Topper sentence as the no-results state and needs the same neutral CFA wording.",
  },
  {
    id: "cfa-rezzy-tools",
    area: "Savvy · Add menu",
    title: "Learning tools and prompts",
    kind: "rezzy-tools",
    changeType: "Cross-component consistency",
    changes: [["Get flowcharts", "Learn with Flowcharts"], ["See how concepts connects", "Visualize complex topics easily"], ["Get high-yield notes", "Get study notes"]],
    rationale: "Match the Flowcharts row to the latest Home tray. For Notes, keep the existing feature intent and simplify the label to Get study notes; the current subtitle already describes it correctly.",
  },
  {
    id: "cfa-rezzy-canvas",
    area: "Savvy drawer · Canvas",
    title: "Canvas starter suggestions",
    kind: "rezzy-canvas",
    changeType: "Example content",
    changes: [["Medical visual suggestions", "CFA visual suggestions"]],
    rationale: "Canvas is an Oncourse feature and can remain. Its five hard-coded medical starters must be replaced with CFA curriculum examples.",
  },
  {
    id: "cfa-rezzy-reminders",
    area: "Savvy drawer · Reminders",
    title: "Reminder suggestions",
    kind: "rezzy-reminders",
    changes: [["Mock test this Sunday", "Mock exam this Sunday"], ["Read Pharmacology notes", "Read Ethics notes"]],
    rationale: "Mock Exam is used by all three CFA products. Flashcards and MCQs stay; Pharmacology is replaced by a CFA topic.",
  },
  {
    id: "cfa-savvy-flashcard-paywall",
    area: "Savvy · Locked flashcards",
    title: "Locked flashcard pricing hand-off",
    kind: "savvy-flashcard-paywall",
    changes: [["flashcards.unlock_access_title", "Unlock Flashcards"], ["flashcards.unlock_access_subtitle", "Upgrade to Oncourse Max to access all flashcards."]],
    rationale: "Verified as the pricing hand-off triggered from a locked Savvy flashcard result. It is separate from the returned card and expanded library modal, so it is shown independently.",
  },
];

function renderTerminologyTable() {
  return `
    <div class="terms-table-wrap">
      <table class="terms-table">
        <thead><tr><th>Product area</th><th>UWorld</th><th>Salt Solutions</th><th>AnalystPrep</th></tr></thead>
        <tbody>
          ${cfaTerms.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? "th" : "td"}>${cell}</${index === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderNavigation(version) {
  const proposed = version === "proposed";
  return `
    <div class="component-preview cfa-nav-preview">
      <div class="preview-fade">Home content continues above</div>
      <div class="bottom-stack">
        <div class="rezzy-bar"><span class="rezzy-sparkle">✦</span><span>Ask Rezzy anything</span></div>
        <nav class="tabbar" aria-label="${proposed ? "Proposed" : "Current"} navigation">
          ${navLabels.map((label, index) => {
            const shown = proposed && index === 0 ? "Practice" : label;
            return `<button class="tab-item ${index === 0 ? "active" : ""} ${proposed && index === 0 ? "changed" : ""}" type="button" tabindex="-1"><span class="cfa-nav-icon">${navIcons[index]}</span><span class="tab-text">${shown}</span></button>`;
          }).join("")}
        </nav>
      </div>
    </div>`;
}

function renderMocks(version) {
  const proposed = version === "proposed";
  return `
    <div class="component-preview cfa-mock-preview">
      <div class="cfa-screen-bar"><span></span><strong>Quiz</strong><i></i></div>
      <div class="cfa-pills mock-pills"><span>All</span><span class="active">${proposed ? "Mock Exams" : "Benchmark"}</span>${proposed ? "" : "<span>Mini-Benchmark</span>"}<span>My Attempts</span></div>
      <div class="cfa-mock-card">
        <div class="cfa-mock-title"><span>▤</span><span><strong>${proposed ? "Mock Exam 1" : "Benchmark 1"}</strong><small>${proposed ? "Full exam simulation" : "Realistic assessment"}</small></span></div>
        <div class="cfa-benchmark-row"><span>180 questions</span><b>START</b></div>
      </div>
      ${proposed ? "" : `<div class="cfa-mock-card compact">
        <div class="cfa-mock-title"><span>◫</span><span><strong>Mini-Benchmark</strong><small>Shorter exam simulation</small></span></div>
        <div class="cfa-benchmark-row"><span>30 questions</span><b>START</b></div>
      </div>`}
    </div>`;
}

function renderPracticeShell(version) {
  const proposed = version === "proposed";
  return `
    <div class="component-preview practice-shell-preview">
      <div class="practice-shell-header"><div class="practice-shell-icon">?</div><strong>Quiz</strong></div>
      <div class="practice-actions">
        <button type="button" tabindex="-1"><span>☆</span> Bookmarked</button>
        <button class="${proposed ? "changed-action" : ""}" type="button" tabindex="-1"><span>✦</span> ${proposed ? "Create Quiz" : "Self Assess"}</button>
      </div>
      <div class="practice-segments"><span>By Subject</span><span class="selected">Tests</span><span>Recents</span></div>
      <div class="practice-content-sample"><div class="sample-label">Available tests</div><div class="sample-card"><span class="sample-icon"></span><span class="sample-lines"><i></i><i></i></span><span class="sample-chevron">›</span></div></div>
    </div>`;
}

function renderTestSetup(version) {
  const proposed = version === "proposed";
  return `
    <div class="component-preview create-test-preview">
      <div class="create-test-topline"><span>‹</span><strong>${proposed ? "Create Quiz" : "Create a Self-Assessment"}</strong></div>
      <p class="create-test-prompt">${proposed ? "Choose a quiz mode" : "Choose the mode of quiz"}</p>
      <div class="mode-options">
        <div class="mode-option selected-mode"><span class="mode-radio"></span><span><strong>Practice Mode</strong><small>Learn as you go</small></span></div>
        <div class="mode-option"><span class="mode-radio"></span><span><strong>Exam Mode</strong><small>Just like an exam</small></span></div>
      </div>
      <div class="setup-label">Number of questions</div><div class="question-count">15 <span>⌄</span></div>
      <div class="setup-label">Filters</div><div class="question-count">Subjects and tags <span>⌄</span></div>
      <div class="setup-label">Question Type</div><div class="setup-pills"><span class="active-pill">All</span><span>Unattempted</span><span>Attempted</span><span>Previously Incorrect</span>${proposed ? "" : "<span>Image Based</span>"}<span>Bookmarked</span></div>
      <button class="setup-cta" type="button" tabindex="-1">CHOOSE TOPICS</button>
    </div>`;
}

function renderTopicSelection(version) {
  const proposed = version === "proposed";
  return `
    <div class="component-preview content-selection-preview">
      <div class="create-test-topline"><span>‹</span><strong>Choose Topics</strong></div>
      <div class="selection-search"><span>⌕</span><span>Search by keyword or browse topics</span></div>
      <div class="selection-quick-pills"><span class="selected">All</span><span>Weak Topics</span><span>High Yield</span></div>
      <div class="subject-row"><span class="selection-check">✓</span><span><strong>Quantitative Methods</strong><small>11 topics</small></span><b>⌃</b></div>
      <div class="topic-row"><span class="selection-check"></span><span>The Time Value of Money in Finance</span></div>
      <button class="setup-cta" type="button" tabindex="-1">${proposed ? "START TEST" : "START QUIZ"}</button>
    </div>`;
}

function renderRecents(version) {
  const proposed = version === "proposed";
  const pills = proposed ? ["All", "Paused", "Custom", "Recommended", "Daily"] : ["All", "Paused", "Custom", "Recommended", "Daily", "Weekly"];
  return `
    <div class="component-preview recent-tests-preview">
      <strong class="recent-tests-heading">PAST QUIZZES</strong>
      <div class="recent-filter-pills">${pills.map((pill, index) => `<span class="${index === 0 ? "selected" : ""}">${pill}</span>`).join("")}</div>
      <div class="recent-date">Today</div>
      <div class="recent-card-list">
        <div class="recent-test-card"><span class="recent-card-icon">▶</span><span class="recent-card-copy"><strong>Custom Quiz</strong><small>Quantitative Methods</small></span><span class="recent-card-arrow">›</span></div>
        <div class="recent-test-card"><span class="recent-card-icon">✦</span><span class="recent-card-copy"><strong>Recommended Quiz</strong><small>Financial Statement Analysis</small></span><span class="recent-card-arrow">›</span></div>
      </div>
      <div class="resume-sample"><span>Paused quiz</span><button type="button" tabindex="-1">RESUME QUIZ</button></div>
    </div>`;
}

function renderResumeSheet(version) {
  const proposed = version === "proposed";
  const states = [
    { label: "New quiz", context: "Create Quiz flow", title: "Your Quiz is Ready", action: "START QUIZ" },
    { label: "Paused quiz", context: "Recents", title: proposed ? "Resume Your Quiz" : "Your Quiz is Ready", action: "RESUME QUIZ" },
    { label: "Paused mock", context: "Recents", title: proposed ? "Resume Your Mock Exam" : "Your Quiz is Ready", action: proposed ? "RESUME MOCK EXAM" : "RESUME QUIZ" },
  ];
  return `<div class="component-preview resume-states-preview">${states.map((state) => `
    <section class="sheet-state-demo"><div class="state-heading"><strong>${state.label}</strong><span>${state.context}</span></div>
      <div class="phone-stage"><div class="ghost-app-content"><span class="ghost-app-title"></span><span class="ghost-app-card"></span><span class="ghost-app-card short"></span></div><div class="stage-dim"></div>
        <div class="real-bottom-sheet"><div class="real-sheet-grabber"></div><button class="real-sheet-close" type="button" tabindex="-1">×</button>
          <div class="real-sheet-header"><h3>${state.title}</h3><p>Questions difficulty adapts to your answers. So you learn optimally.</p></div>
          <div class="real-detail-list"><div><strong>Questions</strong><span>30</span></div><div><strong>Mode</strong><span>Practice</span></div><div><strong>Subject</strong><span>Quantitative Methods<br><small>4 Topics</small></span></div></div>
          <button class="real-sheet-action" type="button" tabindex="-1">${state.action}</button>
        </div>
      </div>
    </section>`).join("")}</div>`;
}

function renderBySubject(version) {
  const proposed = version === "proposed";
  return `
    <div class="component-preview two-screen-preview">
      <section class="mini-app-screen"><div class="mini-screen-title">By Subject</div><div class="mini-search">⌕ &nbsp; Search questions by keyword...</div><div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div><div class="keyword-result"><strong>Found 30 questions</strong><small>“time value of money”</small><button type="button" tabindex="-1">${proposed ? "START TEST" : "START QUIZ"} (30 Qs)</button></div><div class="mini-subject-row"><i></i><span><strong>Quantitative Methods</strong><small>355 questions</small></span><b>›</b></div></section>
      <section class="mini-app-screen topic-screen-mini"><div class="mini-screen-title">Quantitative Methods</div><div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div><div class="topic-choice selected"><i>✓</i><span>Rates and returns</span></div><div class="topic-choice selected"><i>✓</i><span>Time value of money</span></div><div class="topic-choice selected"><i>✓</i><span>Statistical measures</span></div><button class="mini-bottom-cta" type="button" tabindex="-1">${proposed ? "START TEST" : "START QUIZ"} (3 topics)</button></section>
    </div>`;
}

function renderFlashcardExamples(version) {
  const proposed = version === "proposed";
  const examples = proposed ? [["Time Value of Money", 8], ["Financial Statement Analysis", 10], ["Fixed Income Valuation", 8]] : [["Urea Cycle", 8], ["Cardiac Potentials", 10], ["Conduction System of Heart", 2]];
  return `
    <div class="component-preview flashcard-phone-frame flashcard-ai-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong>Generate Flashcards with AI</strong></div><div class="flashcard-screen-body"><label>Describe the flashcards you want in detail</label><div class="flashcard-prompt-field">Enter a prompt</div><label>How many cards?</label><div class="flashcard-count-field"><span>10</span><b>⌄</b></div><label>Examples of what others are making</label><div class="flashcard-smart-pills">${examples.map(([title, count]) => `<span><strong>${title}</strong><small>${count} Cards</small></span>`).join("")}</div><button class="flashcard-disabled-cta" type="button" tabindex="-1">MAKE ME FLASHCARDS</button></div></div>`;
}

function renderFlashcardLoading(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview flashcard-phone-frame flashcard-loading-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong></strong></div><div class="flashcard-full-loader"><div class="flashcard-loader-animation"><span>▤</span></div><strong>Crafting your flashcards</strong><p>${proposed ? "Creating your flashcards…" : "flashcards.search_loading_text"}</p></div></div>`;
}

function renderFlashcardEmpty(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview flashcard-phone-frame flashcard-empty-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcards-home-title"><span class="flashcards-home-icon">▥</span><strong>Flashcards</strong><i>Oncourse</i></div><div class="flashcards-search-box"><span>⌕</span><strong>duration and convexity</strong><i>×</i></div><div class="flashcard-empty-content"><i>⌕</i><h3>No search results for “duration and convexity”</h3><p>${proposed ? "Oncourse can generate flashcards for any topic you choose" : "Oncourse can generate topper-level flashcards for any topic that you like"}</p><button type="button" tabindex="-1">GENERATE FLASHCARDS WITH AI</button></div></div>`;
}

function renderNotes(version) {
  const proposed = version === "proposed";
  const premade = proposed ? "ONCOURSE" : "TOPPER";
  const banner = proposed ? "Get Flashcards, Practice Questions & More." : "Get Flashcards, PYQs & More.";
  const filters = `<div class="cfa-notes-filters"><span class="active">ALL</span><span>${premade}</span><span>UPLOADED</span></div>`;
  return `<div class="component-preview cfa-notes-preview">
    <section class="cfa-notes-screen">
      <small>Notes home</small>
      <header><span>≡</span><strong>Notes</strong><button type="button" tabindex="-1">＋ UPLOAD</button></header>
      <div class="cfa-notes-banner"><strong>${banner}</strong><span>Upload your notes & enhance them with AI</span></div>
      ${filters}
      <div class="cfa-note-row"><i>▤</i><span><strong>Fixed Income</strong><small>Duration, convexity and yield curves</small></span><b>›</b></div>
    </section>
    <section class="cfa-notes-screen">
      <small>Topic · Fixed Income</small>
      <header><span>‹</span><strong>Fixed Income</strong><i></i></header>
      ${filters}
      <div class="cfa-note-row"><i>▤</i><span><strong>Bond valuation notes</strong><small>Oncourse study note</small></span><b>›</b></div>
      <div class="cfa-note-row"><i>▤</i><span><strong>Duration and convexity</strong><small>Uploaded note</small></span><b>›</b></div>
    </section>
  </div>`;
}

function renderFlashcardSearchFooter(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview flashcard-phone-frame cfa-flashcard-results-preview">
    <div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div>
    <div class="flashcards-home-title"><span class="flashcards-home-icon">▥</span><strong>Flashcards</strong><i>Oncourse</i></div>
    <div class="flashcards-search-box"><span>⌕</span><strong>duration and convexity</strong><i>×</i></div>
    <div class="cfa-search-card"><strong>Modified duration</strong><small>Fixed Income · Oncourse</small></div>
    <div class="cfa-search-card"><strong>Effective duration</strong><small>Fixed Income · My deck</small></div>
    <div class="cfa-looking-more"><i>⌕</i><h3>Looking for more?</h3><p>${proposed ? "Oncourse can generate flashcards for any CFA topic you choose" : "Oncourse can generate topper-level flashcards for any topic that you like"}</p><button type="button" tabindex="-1">GENERATE FLASHCARDS WITH AI</button></div>
  </div>`;
}

function renderFlashcardPaywall(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-flashcard-paywall-preview">
    <div class="cfa-paywall-sample"><small>Sample flashcard</small><strong>${proposed ? "Modified duration estimates a bond's price sensitivity" : "_______ is the drug of choice for status epilepticus"}</strong><span>${proposed ? "Approximate percentage price change for a 1% change in yield" : "Lorazepam is the drug of choice for status epilepticus"}</span></div>
    <div class="cfa-paywall-fade"></div>
    <section><b>ONCOURSE MAX</b><h3>${proposed ? "Unlock CFA Flashcards" : "flashcards.unlock_topper_flashcards_title"}</h3><p>${proposed ? "Upgrade to Oncourse Max to access all CFA flashcards." : "flashcards.unlock_topper_flashcards_subtitle"}</p><button type="button" tabindex="-1">UNLOCK ALL FLASHCARDS</button></section>
  </div>`;
}

function renderSavvyFlashcardModal(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-savvy-modal-preview">
    <header><span><strong>Fixed Income flashcards</strong><small>12 of 12 flashcards found</small></span><b>×</b></header>
    <div class="savvy-filter-row"><span class="active">ALL</span><span>BY ME</span><span class="${proposed ? "" : "wrong-term"}">${proposed ? "BY ONCOURSE" : "BY TOPPERS"}</span><span>IMPORTED</span></div>
    <div class="cfa-modal-card"><small>Fixed Income</small><strong>How does modified duration estimate a bond's price sensitivity?</strong><span>Tap to reveal the answer</span></div>
    <footer><button type="button" tabindex="-1">SAVE TO DECK</button><button type="button" tabindex="-1">START REVIEW</button></footer>
  </div>`;
}

function renderSavvyFlashcardPaywall(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-savvy-pricing-preview">
    <div class="savvy-widget-message"><span>🗂️</span><strong>Fixed Income flashcards</strong></div>
    <div class="cfa-locked-result"><span>▣</span><div><strong>${proposed ? "Unlock Flashcards" : "flashcards.unlock_access_title"}</strong><small>${proposed ? "Upgrade to Oncourse Max to access all flashcards." : "flashcards.unlock_access_subtitle"}</small></div></div>
    <button type="button" tabindex="-1">VIEW PLANS</button>
  </div>`;
}

function renderPyqCopy(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview cfa-copy-surfaces">
    <section><small>Question source filter · when verified past items exist</small><div class="cfa-chip-row"><span>All</span><span>High Yield</span><span class="${proposed ? "" : "danger-chip"}">${proposed ? "Past Exam" : "PYQs"}</span></div></section>
    <section><small>Question collection</small><div class="cfa-action-row"><i>?</i><span><strong>${proposed ? "Past Exam Questions" : "PYQs"}</strong><em>${proposed ? "Verified questions from earlier exams" : "Previous-year questions"}</em></span><b>›</b></div></section>
    <section><small>Subscription copy</small><p>${proposed ? "Past exam questions, mock exams and topic-based practice" : "PYQs, mock tests and drills with explanations"}</p></section>
    ${proposed ? '<p class="visibility-note">If provenance is not verified, label the set “Exam-Style Questions” instead.</p>' : ""}
  </div>`;
}

const cfaSavvyTools = [
  {
    id: "upload",
    icon: "▤",
    title: "Upload your notes",
    subtitle: "Get Flashcards, Questions and more",
    special: "upload",
  },
  {
    id: "canvas",
    icon: "◇",
    title: "Create a Canvas",
    subtitle: "Make an interactive visual",
    special: "canvas",
  },
  {
    id: "flowcharts",
    icon: "⌁",
    title: "Learn with Flowcharts",
    subtitle: "Visualize complex topics easily",
    suggestions: ["Ethics Standards", "Revenue recognition", "Equity valuation models"],
  },
  {
    id: "flashcards",
    icon: "▥",
    title: "Review Flashcards",
    subtitle: "Recall faster, retain longer",
    suggestions: ["Financial ratios", "Ethics Standards", "Formulas"],
  },
  {
    id: "quiz",
    icon: "?",
    title: "Take a quiz",
    subtitle: "Improve accuracy and speed",
    suggestions: ["Item sets", "Ethics cases", "Rapid revision"],
  },
  {
    id: "lessons",
    icon: "≡",
    title: "Find high-yield lessons",
    subtitle: "Open exam-focused lessons",
    suggestions: ["Fixed income", "Financial statements", "Revision topic"],
  },
  {
    id: "mnemonics",
    icon: "✦",
    title: "Memorize with mnemonics",
    subtitle: "Make tough concepts stick",
    suggestions: ["Ethics Standards", "DuPont analysis", "Portfolio process"],
  },
  {
    id: "weak-areas",
    icon: "⌕",
    title: "Find my weak areas",
    subtitle: "Know and improve your weak spots",
    suggestions: ["Recent practice", "Subject gaps", "Study plan"],
  },
];

function renderRezzyHome() {
  return `<div class="component-preview rezzy-phone rezzy-home-demo" data-savvy-demo>
    <div class="rezzy-phone-header"><span>☰</span><strong>Savvy</strong><span>✦</span></div>
    <div class="rezzy-greeting"><div class="rezzy-orb">S</div><h3>What should we study today?</h3></div>
    <div class="savvy-demo-stage" data-savvy-stage>
      <div class="savvy-tool-scroll" data-savvy-pills>
        ${cfaSavvyTools.map((tool) => `<button type="button" class="savvy-tool-pill" data-savvy-tool="${tool.id}"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}
      </div>
    </div>
    <p class="savvy-demo-hint" data-savvy-hint>Select a pill to see its actual state</p>
    <div class="rezzy-composer"><span>＋</span><p>Ask Savvy anything…</p><b>↑</b></div>
  </div>`;
}

function renderSavvySelectedState(tool) {
  if (tool.special === "upload") {
    return `<div class="savvy-special-sheet"><button class="savvy-back" type="button" data-savvy-back>‹ Back</button><h3>Upload Notes</h3><p>Savvy turns them into flashcards, questions, concept map and more.</p><div class="savvy-upload-options"><span>▧<small>Camera</small></span><span>▣<small>Photos</small></span><span>▤<small>Files</small></span></div></div>`;
  }
  if (tool.special === "canvas") {
    return `<div class="savvy-special-sheet canvas-sheet-demo"><div class="savvy-sheet-heading"><button class="savvy-back" type="button" data-savvy-back>‹ Back</button><b>View all ›</b></div><h3>Create a Canvas</h3><p>Templates are filtered to the active CFA course.</p><div class="savvy-template-grid"><span><i></i><small>CFA template</small></span><span><i></i><small>CFA template</small></span><span><i></i><small>CFA template</small></span><span><i></i><small>CFA template</small></span></div></div>`;
  }
  return `<div class="savvy-prompt-state"><button class="savvy-back" type="button" data-savvy-back>‹ Back</button><div class="savvy-selected-tool"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></div>${tool.suggestions.map((suggestion) => `<button type="button" class="savvy-suggestion">${suggestion}</button>`).join("")}<button type="button" class="savvy-suggestion">Something else</button></div>`;
}

function renderRezzyTools(version) {
  const proposed = version === "proposed";
  const tools = [
    ["◇", "Create canvas", "Make an interactive visual"],
    ["⌁", proposed ? "Learn with Flowcharts" : "Get flowcharts", proposed ? "Visualize complex topics easily" : "See how concepts connects"],
    ["▤", "Review Flashcards", "Recall faster, retain longer"],
    ["?", "Take a quiz", "Improve accuracy and speed"],
    ["≡", proposed ? "Get study notes" : "Get high-yield notes", "Focus on exam-relevant points"],
    ["✦", "Memorize with mnemonics", "Make tough concepts stick"],
    ["⌕", "Find my weak areas", "Know and improve your weak spots"],
  ];
  return `<div class="component-preview rezzy-sheet-preview"><div class="rezzy-sheet-handle"></div><div class="rezzy-upload-shortcuts"><span>▧<small>Camera</small></span><span>▣<small>Photos</small></span><span>▤<small>Files</small></span></div><div class="rezzy-tool-list">${tools.map(([icon, title, subtitle]) => `<div><i>${icon}</i><span><strong>${title}</strong><small>${subtitle}</small></span><b>›</b></div>`).join("")}</div></div>`;
}

function renderRezzyCanvas(version) {
  const proposed = version === "proposed";
  const suggestions = proposed
    ? ["Yield curve visualizer", "DCF sensitivity model", "Bond duration explorer", "Efficient frontier", "Financial statements map"]
    : ["Spinal cord visualizer", "ECG axis map", "Antibiotic ladder", "Hernia anatomy map", "ABG interpreter"];
  return `<div class="component-preview rezzy-gallery-preview"><div class="rezzy-gallery-header"><span>‹</span><strong>Canvas</strong><span>＋</span></div><div class="rezzy-gallery-empty"><div class="rezzy-gallery-art">◇</div><h3>Make your first canvas</h3><p>Ask Savvy to turn a tough topic into an interactive visual, simulator, map, or exam-ready explainer.</p><button type="button" tabindex="-1">Create canvas</button><small>Try one of these</small><div class="rezzy-suggestion-grid">${suggestions.map((item) => `<span>${item}</span>`).join("")}</div></div></div>`;
}

function renderRezzyLibrary(version) {
  const proposed = version === "proposed";
  const createExamples = proposed
    ? ["Explain duration and convexity", "Create a cash flow map", "Visualize the efficient frontier", "Compare active vs passive"]
    : ["Explain the cardiac cycle", "Create a nephron flowchart", "Draw the brachial plexus", "Compare Gram + vs Gram −"];
  const uploadExamples = proposed
    ? ["Upload Quantitative Methods", "Add Equity notes", "Add a Fixed Income slide"]
    : ["Upload Biochemistry", "Snap Anatomy notes", "Add a Pathology slide"];
  return `<div class="component-preview rezzy-library-preview"><div class="rezzy-gallery-header"><span>‹</span><strong>Library</strong><span>⌕</span></div>
    <div class="rezzy-library-state"><small class="state-caption">From Savvy tab</small><div class="rezzy-library-tabs"><span class="active">From Savvy</span><span>From My Notes</span></div><section><h3>Create your first study visual</h3><p>Ask Savvy to create diagrams, flowcharts, and study visuals that make complex topics easier to understand.</p><button type="button" tabindex="-1">Create with Savvy</button><div class="rezzy-mini-chips">${createExamples.map((item) => `<span>${item}</span>`).join("")}</div></section></div>
    <div class="rezzy-library-state"><small class="state-caption">From My Notes tab</small><div class="rezzy-library-tabs"><span>From Savvy</span><span class="active">From My Notes</span></div><section class="notes-state"><h3>Turn your notes into Smart Notes</h3><p>Upload PDFs, slides, or handwritten notes and Savvy turns them into flashcards, questions, concept map and more.</p><button type="button" tabindex="-1">Upload a file</button><div class="rezzy-mini-chips">${uploadExamples.map((item) => `<span>${item}</span>`).join("")}</div></section></div>
  </div>`;
}

function renderRezzyReminders(version) {
  const proposed = version === "proposed";
  const reminders = proposed
    ? ["Revise flashcards daily", "Mock exam this Sunday", "Practice MCQs", "Read Ethics notes"]
    : ["Revise flashcards daily", "Mock test this Sunday", "Practice MCQs", "Read Pharmacology notes"];
  return `<div class="component-preview rezzy-reminders-preview"><div class="rezzy-gallery-header"><span>‹</span><strong>Reminders</strong><span></span></div><div class="reminder-bell">♢</div><h3>Set your first reminder</h3><p>Ask Savvy to remind you to study, revise, or practise — whenever you need it.</p><button type="button" tabindex="-1">SET A REMINDER</button><small>Try one of these</small><div class="reminder-chips">${reminders.map((item) => `<span>${item}</span>`).join("")}</div></div>`;
}

function renderRezzyFlashcardWidget(version) {
  const proposed = version === "proposed";
  return `<div class="component-preview savvy-flashcard-widget">
    <div class="savvy-widget-message"><span>🗂️</span><strong>Fixed Income flashcards</strong></div>
    <div class="savvy-returned-card">
      <small>12 Flashcards</small>
      <h3>How does modified duration estimate a bond's price sensitivity?</h3>
      <div class="tap-answer">TAP TO SEE ANSWER&nbsp;&nbsp;&nbsp; TAP TO SEE ANSWER</div>
    </div>
    <div class="savvy-card-actions"><button>START REVIEW</button><button>SAVE TO DECK</button></div>
    <div class="savvy-expanded-sheet">
      <div class="savvy-sheet-title"><span><strong>Fixed Income flashcards</strong><small>12 of 12 flashcards found</small></span><b>×</b></div>
      <div class="savvy-filter-row"><span class="active">ALL</span><span>BY ME</span><span class="${proposed ? "" : "wrong-term"}">${proposed ? "BY ONCOURSE" : "BY TOPPERS"}</span><span>IMPORTED</span></div>
      <div class="savvy-locked-copy"><i>▣</i><span><strong>${proposed ? "Unlock Flashcards" : "flashcards.unlock_access_title"}</strong><small>${proposed ? "Upgrade to Oncourse Max to access all flashcards." : "flashcards.unlock_access_subtitle"}</small></span></div>
    </div>
  </div>`;
}

function renderPreview(item, version) {
  if (item.kind === "mocks") return renderMocks(version);
  if (item.kind === "practice-shell") return renderPracticeShell(version);
  if (item.kind === "test-setup") return renderTestSetup(version);
  if (item.kind === "topic-selection") return renderTopicSelection(version);
  if (item.kind === "recents") return renderRecents(version);
  if (item.kind === "resume-sheet") return renderResumeSheet(version);
  if (item.kind === "by-subject") return renderBySubject(version);
  if (item.kind === "flashcard-examples") return renderFlashcardExamples(version);
  if (item.kind === "flashcard-loading") return renderFlashcardLoading(version);
  if (item.kind === "flashcard-empty") return renderFlashcardEmpty(version);
  if (item.kind === "flashcard-search-footer") return renderFlashcardSearchFooter(version);
  if (item.kind === "rezzy-tools") return renderRezzyTools(version);
  if (item.kind === "rezzy-canvas") return renderRezzyCanvas(version);
  if (item.kind === "rezzy-reminders") return renderRezzyReminders(version);
  if (item.kind === "savvy-flashcard-paywall") return renderSavvyFlashcardPaywall(version);
  return renderNavigation(version);
}

function renderReviewItem(item, index) {
  const preview = item.layout === "verified"
    ? `<div class="verified-preview"><div class="version-heading"><span class="version-label verified-label">Latest CFA code</span></div>${renderPreview(item, "current")}</div>`
    : `<div class="comparison-grid">
        <section class="version-panel"><div class="version-heading"><span class="version-label">Current</span></div>${renderPreview(item, "current")}</section>
        <section class="version-panel"><div class="version-heading"><span class="version-label">Proposed</span></div>${renderPreview(item, "proposed")}</section>
      </div>`;
  return `
    <article class="review-card ${item.layout === "verified" ? "verified-card" : ""}" id="${item.id}">
      <header class="card-header"><p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p><h2>${item.title}</h2></header>
      ${preview}
      <div class="decision-row">
        <div><span class="change-type">${item.changeType || "Copy change only"}</span><div class="change-list">${item.changes.map(([from, to]) => `<div class="change-line"><span class="old-copy">${from}</span><span class="arrow">→</span><span class="new-copy">${to}</span></div>`).join("")}</div></div>
        <div class="decision-copy"><h4>${item.layout === "verified" ? "What was verified" : "Why this change"}</h4><p>${item.rationale}</p></div>
      </div>
    </article>`;
}

document.getElementById("terminology-table").innerHTML = renderTerminologyTable();
const cfaReviewOrder = ["practice-shell", "test-setup", "mocks", "recents", "resume-sheet", "flashcard-examples", "flashcard-loading", "flashcard-empty", "flashcard-search-footer", "rezzy-tools", "rezzy-canvas", "rezzy-reminders", "savvy-flashcard-paywall"];
const orderedReviewItems = [...cfaReviewItems].sort((a, b) => cfaReviewOrder.indexOf(a.kind) - cfaReviewOrder.indexOf(b.kind));
document.getElementById("cfa-review-list").innerHTML = orderedReviewItems.map(renderReviewItem).join("");

document.querySelectorAll("[data-savvy-demo]").forEach((demo) => {
  const stage = demo.querySelector("[data-savvy-stage]");
  const hint = demo.querySelector("[data-savvy-hint]");
  const showPills = () => {
    stage.innerHTML = `<div class="savvy-tool-scroll" data-savvy-pills>${cfaSavvyTools.map((tool) => `<button type="button" class="savvy-tool-pill" data-savvy-tool="${tool.id}"><i>${tool.icon}</i><span><strong>${tool.title}</strong><small>${tool.subtitle}</small></span></button>`).join("")}</div>`;
    hint.textContent = "Select a pill to see its actual state";
  };
  const handleClick = (event) => {
    const toolButton = event.target.closest("[data-savvy-tool]");
    if (toolButton) {
      const tool = cfaSavvyTools.find((item) => item.id === toolButton.dataset.savvyTool);
      if (!tool) return;
      stage.innerHTML = renderSavvySelectedState(tool);
      hint.textContent = tool.special
        ? `${tool.title} opens its own dedicated sheet`
        : `Only ${tool.title} suggestions are shown`;
      return;
    }
    if (event.target.closest("[data-savvy-back]")) showPills();
  };
  stage.addEventListener("click", handleClick);
});
