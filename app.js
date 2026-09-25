const icons = {
  quiz: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M9.9 9a2.2 2.2 0 1 1 3.8 1.5c-.9.8-1.7 1.1-1.7 2.5"></path>
      <path d="M12 17h.01"></path>
    </svg>`,
  lessons: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22z"></path>
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22z"></path>
    </svg>`,
  home: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 11 9-8 9 8"></path>
      <path d="M5.5 9.5V21h13V9.5"></path>
      <path d="M9.5 21v-6h5v6"></path>
    </svg>`,
  flashcards: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="2"></rect>
      <path d="M8 1.8h8"></path>
      <path d="M8.5 9h7M8.5 13h5"></path>
    </svg>`,
  play: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 8h8a5 5 0 0 1 4.8 6.5l-1 3.3a2.4 2.4 0 0 1-4.2.7L14 16h-4l-1.6 2.5a2.4 2.4 0 0 1-4.2-.7l-1-3.3A5 5 0 0 1 8 8Z"></path>
      <path d="M8 11v4M6 13h4M16.5 12h.01M18.5 14h.01"></path>
    </svg>`,
};

const cpaTerms = [
  ["Top curriculum level", "Section", "Section"],
  ["Learning hierarchy", "Section → Unit → Module", "Section → Topic / Subtopic"],
  ["Learning content", "Concept Videos / Digital Textbook", "Video Lectures / Study Guides"],
  ["Practice questions", "MCQs / TBSs", "MCQs / TBSs"],
  ["Question collection", "Practice Questions", "QBank"],
  ["Practice builder", "Practice Tests", "Create Custom Test"],
  ["Short assessment", "Mini Exams", "Mini-Assessments"],
  ["Full exam simulation", "Simulated Exams", "Full-Length Mock Exams / Exam Sim"],
  ["Practice modes", "Adapt2U personalized practice", "Tutor Mode / Exam Sim"],
  ["Performance", "Exam Day Ready tracker", "SmartPath / Performance Metrics"],
  ["Planning", "Study Planner", "Dynamic Study Planner"],
  ["Flashcards", "Digital Flashcards", "ReadyDecks / Custom Flashcards"],
  ["AI tutor", "Newt", "UAsk"],
];

const reviewItems = [
  {
    id: "bottom-navigation",
    kind: "tabs",
    area: "Global navigation",
    title: "Bottom navigation",
    current: "Quiz",
    proposed: "Practice",
    changeType: "Shared component · CPA value",
    rationale:
      "Practice is a clearer umbrella for CPA content such as MCQs, TBSs and simulated exams.",
  },
  {
    id: "practice-screen-shell",
    kind: "practice-shell",
    area: "Practice",
    title: "Practice landing screen",
    current: "Quiz screen",
    proposed: "Practice screen",
    currentLabel: "Current shell",
    proposedLabel: "CPA proposal",
    changeType: "Shared component · CPA values",
    changes: [
      { from: "Quiz", to: "Practice" },
      { from: "By Subject", to: "By Area" },
      { from: "Self Assess", to: "Create Test" },
    ],
    rationale:
      "Practice describes the complete destination. Create Test matches the action that opens the test builder and the terminology used by Becker and UWorld.",
  },
  {
    id: "cpa-lessons-ordering",
    kind: "lessons-ordering",
    area: "Lessons · Area list",
    title: "Lessons area selector",
    current: "Subject terminology with no visible ordering control",
    proposed: "CPA content areas",
    changeType: "Shared component · CPA values/examples",
    changes: [
      { from: "Select Subject", to: "Select Area" },
      { from: "Search across your Subjects", to: "Search across your Areas" },
    ],
    rationale:
      "Verified in components/lessons/myPath/SubjectSelectorBottomSheet. In CPA, a Section is the whole exam part (AUD, FAR, REG, BAR, ISC, TCP) and is chosen with the Home section switcher. This list shows the AICPA Blueprint content areas inside the selected section (e.g. AUD Area I–IV), so “Area” is the accurate term; “Section” would clash with the switcher. Ordering filter (Organise by) is not decided yet, so it is not proposed here.",
  },
  {
    id: "practice-test-filters",
    kind: "test-filters",
    area: "Practice · Tests",
    title: "Test filters",
    current: "Benchmark filters",
    proposed: "CPA assessment filters",
    changes: [
      { from: "Benchmark", to: "Simulated Exams" },
      { from: "Mini-Benchmark", to: "Mini Exams" },
    ],
    rationale:
      "Use Simulated Exams for realistic full-exam experiences and Mini Exams for shorter checkpoints covering part of a CPA Section.",
  },
  {
    id: "create-test-setup",
    kind: "create-test-setup",
    area: "Practice · Create Test",
    title: "Test setup screen",
    current: "Generic quiz setup",
    proposed: "CPA test setup",
    changeType: "Shared component · CPA values",
    changes: [
      { from: "Create a Self-Assessment", to: "Create Test" },
      { from: "Choose the mode of quiz", to: "Choose a test mode" },
      { from: "Question Type (mixed filters)", to: "Question status + Question type" },
    ],
    rationale:
      "Create Test keeps the journey consistent. Separate question history from CPA formats, show MCQs and TBSs explicitly, and reserve Simulated Exam for the fixed exam-like product.",
  },
  {
    id: "create-test-content-selection",
    kind: "content-selection",
    area: "Practice · Create Test",
    title: "Choose Topics screen",
    current: "Choose Topics",
    proposed: "START TEST",
    changeType: "Shared component · CPA values",
    changes: [
      { from: "START QUIZ", to: "START TEST" },
    ],
    rationale:
      "Choose Topics and its search box are accurate for CPA and stay unchanged. Only the start action moves to Test wording. All, Weak Topics and High Yield remain.",
  },
  {
    id: "recent-tests",
    kind: "recent-tests",
    area: "Practice · Recents",
    title: "Recent tests",
    current: "Quiz history language",
    proposed: "CPA test history language",
    changeType: "Shared component · CPA values",
    changes: [
      { from: "PAST QUIZZES", to: "RECENT TESTS" },
      { from: "Custom / Recommended Quiz", to: "Custom / Recommended Test" },
      { from: "RESUME QUIZ", to: "RESUME TEST" },
      { from: "Weekly", to: "Removed for CPA" },
    ],
    rationale:
      "Use Test consistently throughout the CPA journey. Keep the short filter labels, and hide Weekly because it represents the medical-specific Weekly Score Predictor Test.",
  },
  {
    id: "resume-test-sheet",
    kind: "resume-test-sheet",
    area: "Practice · Create Test and Recents",
    title: "Test start and resume bottom sheet",
    current: "Quiz language in both states",
    proposed: "Test language for each state",
    changeType: "Shared component · CPA values",
    changes: [
      { from: "Your Quiz is Ready", to: "Your Test is Ready" },
      { from: "START QUIZ", to: "START TEST" },
      { from: "Your Quiz is Ready (paused)", to: "Resume Your Test" },
      { from: "RESUME QUIZ", to: "RESUME TEST" },
    ],
    rationale:
      "The same component serves two states: confirm a new test or resume a paused one. Each state should use Test language and the correct action, while keeping the supporting copy unchanged.",
  },
  {
    id: "by-subject-flow",
    kind: "by-subject-flow",
    area: "Practice · By Subject",
    title: "Start from an area or topic",
    current: "Quiz actions",
    proposed: "Test actions",
    changeType: "Shared component · CPA values",
    changes: [
      { from: "By Subject", to: "By Area" },
      { from: "START QUIZ (30 Qs)", to: "START TEST (30 Qs)" },
      { from: "START QUIZ (3 topics)", to: "START TEST (3 topics)" },
    ],
    rationale:
      "In CPA, a Section is the whole exam part (AUD, FAR, REG, BAR, ISC, TCP) and is chosen with the Home section switcher. This list shows the AICPA Blueprint content areas inside the selected section (e.g. AUD Area I–IV), so “Area” is the accurate term; “Section” would clash with the switcher. Apply Area and Test as CPA values of the shared component, not a global rename. All and High Yield remain unchanged.",
  },
  {
    id: "search-and-savvy",
    kind: "search-savvy",
    area: "Lessons · Search",
    title: "Lessons filter search field",
    current: "Subjects",
    proposed: "Areas",
    changes: [
      { from: "Search by Subjects", to: "Search areas" },
    ],
    rationale:
      "Verified in components/lessons/FilterBottomSheet/index.tsx:180 (theme and subject filter sheets). The subjects in this filter are CPA content areas, not Sections (AUD, FAR, REG…). Savvy entry points already show the correct name in the latest code, so they are no longer listed. Keyword search stays unchanged.",
  },
  {
    id: "paused-test-page",
    kind: "paused-test-page",
    area: "Practice · Paused",
    title: "Paused test page",
    current: "Paused quiz copy",
    proposed: "Paused test copy",
    changeType: "Shared component · CPA values",
    changes: [
      { from: "Your Quiz is Paused", to: "Your Test is Paused" },
      { from: "CONTINUE QUIZ", to: "CONTINUE TEST" },
    ],
    rationale:
      "The shared continue route currently defaults to Quiz because it does not pass an activity mode. Use the CPA activity noun through course-specific terminology. Savvy is already the current CPA persona, so no tutor rename belongs in this card.",
  },
  {
    id: "end-test-dialog",
    kind: "end-test-dialog",
    area: "Practice · In test",
    title: "End test confirmation",
    current: "End quiz copy",
    proposed: "End test copy",
    changeType: "Shared component · CPA value",
    changes: [
      { from: "End the quiz", to: "End the test" },
      { from: "END QUIZ & VIEW RESULTS", to: "END TEST & VIEW RESULTS" },
    ],
    rationale:
      "The confirmation belongs to the main Practice test journey and should not switch back to Quiz terminology.",
  },
  {
    id: "flashcards-ai-generation",
    kind: "flashcards-ai-generation",
    area: "Flashcards · Generate with AI",
    title: "AI flashcard generator",
    current: "Medical prompt examples",
    proposed: "CPA prompt examples",
    changeType: "Shared component · CPA examples",
    changes: [
      { from: "Urea Cycle / Cardiac Potentials", to: "Audit Evidence / Revenue Recognition" },
    ],
    rationale:
      "The suggested prompts are currently specific to medical exam preparation. The generator fields and actions remain unchanged.",
  },
  {
    id: "flashcards-ai-loading",
    kind: "flashcards-ai-loading",
    area: "Flashcards · Generate with AI",
    title: "AI generation loading state",
    current: "flashcards.search_loading_text",
    proposed: "High-yield CPA flashcards",
    changeType: "Shared component · CPA copy",
    changes: [
      { from: "flashcards.search_loading_text (raw key)", to: "Creating high-yield CPA flashcards for you..." },
    ],
    rationale:
      "Verified in app/(app)/snippets/flashcards/create-prompt.tsx:282. The key is missing from the base copy file that CPA uses, so the raw key shows today. The medical wording (topper flashcards, PYQs) must not be copied over.",
  },
  {
    id: "flashcards-search-empty",
    kind: "flashcards-search-empty",
    area: "Flashcards · Search",
    title: "No search results",
    current: "Topper-level flashcards",
    proposed: "High-yield flashcards",
    changeType: "Shared component · CPA copy",
    changes: [
      { from: "Generate topper-level flashcards", to: "Generate high-yield flashcards" },
    ],
    rationale:
      "Topper is medical-course language. High Yield is already used elsewhere in the CPA experience and communicates the same value.",
  },
];

const tabDefinitions = [
  { key: "quiz", current: "Quiz", proposed: "Practice" },
  { key: "lessons", current: "Lessons", proposed: "Lessons" },
  { key: "home", current: "Home", proposed: "Home" },
  { key: "flashcards", current: "Flashcards", proposed: "Flashcards" },
  { key: "play", current: "Play", proposed: "Play" },
];

function renderTabBar(version) {
  const isProposal = version === "proposed";
  const tabs = tabDefinitions
    .map((tab, index) => {
      const label = isProposal ? tab.proposed : tab.current;
      const changed = isProposal && tab.current !== tab.proposed;
      return `
        <button
          class="tab-item ${index === 0 ? "active" : ""} ${changed ? "changed" : ""}"
          type="button"
          aria-label="${label}${index === 0 ? ", selected" : ""}"
        >
          <span class="tab-icon">${icons[tab.key]}</span>
          <span class="tab-text">${label}</span>
        </button>`;
    })
    .join("");

  return `
    <div class="component-preview">
      <div class="preview-fade">Home content continues above</div>
      <div class="bottom-stack">
        <div class="rezzy-bar">
          <span class="rezzy-sparkle" aria-hidden="true">✦</span>
          <span>Ask ${isProposal ? "Savvy" : "Rezzy"} anything</span>
        </div>
        <nav class="tabbar" aria-label="${isProposal ? "Proposed" : "Current"} bottom navigation">
          ${tabs}
        </nav>
      </div>
    </div>`;
}

function renderCpaTerminologyTable() {
  return `
    <div class="terms-table-wrap">
      <table class="terms-table">
        <thead><tr><th>Product area</th><th>Becker</th><th>UWorld</th></tr></thead>
        <tbody>
          ${cpaTerms.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? "th" : "td"}>${cell}</${index === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderPracticeShell(version) {
  const isProposal = version === "proposed";
  const title = isProposal ? "Practice" : "Quiz";
  const primaryAction = isProposal ? "Create Test" : "Self Assess";
  const recentLabel = "Recents";

  return `
    <div class="component-preview practice-shell-preview">
      <div class="practice-shell-header">
        <div class="practice-shell-icon" aria-hidden="true">?</div>
        <strong>${title}</strong>
      </div>
      <div class="practice-actions">
        <button type="button" tabindex="-1">
          <span aria-hidden="true">☆</span>
          Bookmarked
        </button>
        <button class="${isProposal ? "changed-action" : ""}" type="button" tabindex="-1">
          <span aria-hidden="true">✦</span>
          ${primaryAction}
        </button>
      </div>
      <div class="practice-segments" aria-label="Practice screen sections">
        <span>${isProposal ? "By Area" : "By Subject"}</span>
        <span class="selected">Tests</span>
        <span>${recentLabel}</span>
      </div>
      <div class="practice-content-sample">
        <div class="sample-label">Available tests</div>
        <div class="sample-card">
          <span class="sample-icon"></span>
          <span class="sample-lines"><i></i><i></i></span>
          <span class="sample-chevron">›</span>
        </div>
      </div>
    </div>`;
}

function renderLessonsOrdering(version) {
  const isProposal = version === "proposed";
  const subjects = [["I", "Ethics, Professional Responsibilities and General Principles", "0/64 lessons"], ["II", "Assessing Risk and Developing a Planned Response", "0/88 lessons"], ["III", "Performing Further Procedures and Obtaining Evidence", "0/92 lessons"]];
  return `<div class="component-preview lessons-audit-preview">
    <div class="lessons-audit-header"><i>▥</i><strong>Lessons</strong></div>
    <div class="lessons-audit-search">⌕ <span>Search across your Lessons</span></div>
    <div class="lessons-audit-selector"><span>▤</span><strong>${isProposal ? "Select Area" : "Select Subject"}</strong><b>›</b></div>
    <div class="lessons-audit-pills"><span>All</span><span>High Yield</span><span>Bookmarks</span></div>
    <div class="lessons-audit-group">${isProposal ? "AUD content areas" : "All Subjects"}</div>
    ${subjects.map(([code, name, count]) => `<div class="lessons-audit-card"><i>${code}</i><span><strong>${name}</strong><small>${count}</small></span><b>›</b></div>`).join("")}
  </div>`;
}

function renderTestFilters(version) {
  const isProposal = version === "proposed";
  const labels = isProposal
    ? ["All", "Simulated Exams", "Mini Exams", "My Attempts"]
    : ["All", "Benchmark", "Mini-Benchmark", "My Attempts"];

  return `
    <div class="component-preview test-filters-preview">
      <strong class="test-filters-title">Tests</strong>
      <div class="test-filter-pills" aria-label="${isProposal ? "Proposed" : "Current"} test filters">
        ${labels
          .map(
            (label, index) => `
              <span class="${index === 0 ? "selected" : ""} ${isProposal && index > 0 && index < 3 ? "changed-filter" : ""}">
                ${label}
              </span>`,
          )
          .join("")}
      </div>
      <div class="test-filter-card">
        <span class="test-filter-card-icon"></span>
        <span class="test-filter-card-copy"><i></i><i></i></span>
        <span class="test-filter-card-action">START</span>
      </div>
      <div class="test-filter-card muted-card">
        <span class="test-filter-card-icon"></span>
        <span class="test-filter-card-copy"><i></i><i></i></span>
        <span class="test-filter-card-action">START</span>
      </div>
    </div>`;
}

function renderCreateTestSetup(version) {
  const isProposal = version === "proposed";
  const title = isProposal ? "Create Test" : "Create a Self-Assessment";
  const prompt = isProposal ? "Choose a test mode" : "Choose the mode of quiz";
  const practiceHelp = isProposal ? "Review answers as you go" : "Learn as you go";
  const examHelp = isProposal ? "Review answers after the test" : "Just like an exam";
  const statusLabels = isProposal
    ? ["All", "Unused", "Attempted", "Incorrect", "Bookmarked"]
    : ["All", "Unattempted", "Attempted", "Previously Incorrect", "Image Based", "Bookmarked"];

  return `
    <div class="component-preview create-test-preview">
      <div class="create-test-topline">
        <span aria-hidden="true">‹</span>
        <strong>${title}</strong>
      </div>
      <p class="create-test-prompt">${prompt}</p>
      <div class="mode-options">
        <div class="mode-option selected-mode">
          <span class="mode-radio"></span>
          <span><strong>Practice Mode</strong><small>${practiceHelp}</small></span>
        </div>
        <div class="mode-option">
          <span class="mode-radio"></span>
          <span><strong>Exam Mode</strong><small>${examHelp}</small></span>
        </div>
      </div>
      <div class="setup-label">Number of questions</div>
      <div class="question-count">15 <span>⌄</span></div>
      <div class="setup-label">${isProposal ? "Question status" : "Question Type"}</div>
      <div class="setup-pills">
        ${statusLabels.map((label, index) => `<span class="${index === 0 ? "active-pill" : ""}">${label}</span>`).join("")}
      </div>
      ${
        isProposal
          ? `<div class="setup-label compact-label">Question type</div>
             <div class="setup-pills"><span class="active-pill">All</span><span>MCQs</span><span>TBSs</span></div>`
          : `<div class="setup-pills format-row"><span>CPA TBS</span></div>`
      }
      <button class="setup-cta" type="button" tabindex="-1">CHOOSE TOPICS</button>
    </div>`;
}

function renderContentSelection(version) {
  const isProposal = version === "proposed";
  return `
    <div class="component-preview content-selection-preview">
      <div class="create-test-topline">
        <span aria-hidden="true">‹</span>
        <strong>Choose Topics</strong>
      </div>
      <div class="selection-search">
        <span aria-hidden="true">⌕</span>
        <span>Search by keyword or browse topics</span>
      </div>
      <div class="selection-quick-pills">
        <span class="selected">All</span><span>Weak Topics</span><span>High Yield</span>
      </div>
      <div class="subject-row"><span class="selection-check">✓</span><span><strong>Auditing and Attestation</strong><small>6 topics</small></span><b>⌃</b></div>
      <div class="topic-row"><span class="selection-check"></span><span>Ethics and professional responsibilities</span></div>
      <button class="setup-cta" type="button" tabindex="-1">${isProposal ? "START TEST" : "START QUIZ"}</button>
    </div>`;
}

function renderRecentTests(version) {
  const isProposal = version === "proposed";
  const pills = isProposal
    ? ["All", "Paused", "Custom", "Recommended", "Daily"]
    : ["All", "Paused", "Custom", "Recommended", "Daily", "Weekly"];
  const cards = isProposal
    ? [
        { title: "Custom Test", subtitle: "Auditing and Attestation", action: "›" },
        { title: "Recommended Test", subtitle: "Financial Accounting", action: "›" },
        { title: "Daily Practice Test", subtitle: "Regulation", action: "›" },
      ]
    : [
        { title: "Custom Quiz", subtitle: "Auditing and Attestation", action: "›" },
        { title: "Recommended Quiz", subtitle: "Financial Accounting", action: "›" },
        { title: "Daily Practice Quiz", subtitle: "Regulation", action: "›" },
      ];

  return `
    <div class="component-preview recent-tests-preview">
      <strong class="recent-tests-heading">${isProposal ? "RECENT TESTS" : "PAST QUIZZES"}</strong>
      <div class="recent-filter-pills" aria-label="${isProposal ? "Proposed" : "Current"} recent test filters">
        ${pills.map((pill, index) => `<span class="${index === 0 ? "selected" : ""}">${pill}</span>`).join("")}
      </div>
      <div class="recent-date">Today</div>
      <div class="recent-card-list">
        ${cards
          .map(
            (card, index) => `
              <div class="recent-test-card">
                <span class="recent-card-icon">${index === 0 ? "▶" : index === 1 ? "✦" : "☀"}</span>
                <span class="recent-card-copy"><strong>${card.title}</strong><small>${card.subtitle}</small></span>
                <span class="recent-card-arrow">${card.action}</span>
              </div>`,
          )
          .join("")}
      </div>
      <div class="resume-sample">
        <span>Paused test</span>
        <button type="button" tabindex="-1">${isProposal ? "RESUME TEST" : "RESUME QUIZ"}</button>
      </div>
    </div>`;
}

function renderResumeTestSheet(version) {
  const isProposal = version === "proposed";
  const supportingCopy = "Questions difficulty adapts to your answers. So you learn optimally.";
  const states = [
    {
      label: "New test",
      context: "Create Test flow",
      title: isProposal ? "Your Test is Ready" : "Your Quiz is Ready",
      button: isProposal ? "START TEST" : "START QUIZ",
    },
    {
      label: "Paused test",
      context: "Recents",
      title: isProposal ? "Resume Your Test" : "Your Quiz is Ready",
      button: isProposal ? "RESUME TEST" : "RESUME QUIZ",
    },
  ];

  return `
    <div class="component-preview resume-states-preview">
      ${states
        .map(
          (state) => `
            <section class="sheet-state-demo">
              <div class="state-heading">
                <strong>${state.label}</strong>
                <span>${state.context}</span>
              </div>
              <div class="phone-stage">
                <div class="ghost-app-content" aria-hidden="true">
                  <span class="ghost-app-title"></span>
                  <span class="ghost-app-card"></span>
                  <span class="ghost-app-card short"></span>
                </div>
                <div class="stage-dim"></div>
                <div class="real-bottom-sheet">
                  <div class="real-sheet-grabber"></div>
                  <button class="real-sheet-close" type="button" tabindex="-1" aria-label="Close">×</button>
                  <div class="real-sheet-header">
                    <h3>${state.title}</h3>
                    <p>${supportingCopy}</p>
                  </div>
                  <div class="real-detail-list">
                    <div><strong>Questions</strong><span>30</span></div>
                    <div><strong>Mode</strong><span>Practice</span></div>
                    <div><strong>${isProposal ? "Area" : "Subject"}</strong><span>Assessing Risk and Developing a Planned Response<br /><small>4 Topics</small></span></div>
                  </div>
                  <div class="real-feature-panel">
                    <div><i class="feature-icon blue">▤</i><span>Discuss answers<br />with ${isProposal ? "Savvy" : "Rezzy"}</span></div>
                    <div><i class="feature-icon red">⌁</i><span>AI weak-spot<br />analysis</span></div>
                    <div><i class="feature-icon amber">Ⅱ</i><span>Pause &amp;<br />Resume</span></div>
                  </div>
                  <button class="real-sheet-action" type="button" tabindex="-1">${state.button}</button>
                </div>
              </div>
            </section>`,
        )
        .join("")}
    </div>`;
}

function renderBySubjectFlow(version) {
  const isProposal = version === "proposed";
  return `
    <div class="component-preview two-screen-preview">
      <section class="mini-app-screen">
        <div class="mini-screen-title">${isProposal ? "By Area" : "By Subject"}</div>
        <div class="mini-search">⌕ &nbsp; Search questions by keyword...</div>
        <div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div>
        <div class="keyword-result">
          <strong>Found 30 questions</strong>
          <small>"audit evidence"</small>
          <button type="button" tabindex="-1">${isProposal ? "START TEST" : "START QUIZ"} (30 Qs)</button>
        </div>
        <div class="mini-subject-row"><i></i><span><strong>Auditing and Attestation</strong><small>142 questions</small></span><b>›</b></div>
      </section>
      <section class="mini-app-screen topic-screen-mini">
        <div class="mini-screen-title">Auditing and Attestation</div>
        <div class="mini-pills"><span class="active">All</span><span>★ High Yield</span></div>
        <div class="topic-choice selected"><i>✓</i><span>Ethics and responsibilities</span></div>
        <div class="topic-choice selected"><i>✓</i><span>Audit evidence</span></div>
        <div class="topic-choice selected"><i>✓</i><span>Risk assessment</span></div>
        <button class="mini-bottom-cta" type="button" tabindex="-1">${isProposal ? "START TEST" : "START QUIZ"} (3 topics)</button>
      </section>
    </div>`;
}

function renderSearchSavvy(version) {
  const isProposal = version === "proposed";
  return `
    <div class="component-preview search-savvy-preview">
      <div class="search-audit-list">
        <div><span>⌕</span><strong>${isProposal ? "Search areas" : "Search by Subjects"}</strong><small>Lessons filter sheet · Subjects</small></div>
        <div class="unchanged-search"><span>⌕</span><strong>Search questions by keyword…</strong><small>Unchanged</small></div>
      </div>
    </div>`;
}

function renderFlashcardsAiGeneration(version) {
  const isProposal = version === "proposed";
  const examples = isProposal
    ? [["Audit Evidence", 10], ["Revenue Recognition", 15], ["Business Law Fundamentals", 10]]
    : [["Urea Cycle", 10], ["Cardiac Potentials", 15], ["Conduction System of Heart", 10]];

  return `
    <div class="component-preview flashcard-phone-frame flashcard-ai-preview">
      <div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <div class="flashcard-plain-header"><span>‹</span><strong>Generate Flashcards with AI</strong></div>
      <div class="flashcard-screen-body">
        <label>Describe the flashcards you want in detail</label>
        <div class="flashcard-prompt-field">Enter a prompt</div>
        <label>How many cards?</label>
        <div class="flashcard-count-field"><span>10</span><b>⌄</b></div>
        <label>Examples of what others are making</label>
        <div class="flashcard-smart-pills">${examples.map(([example, count]) => `<span><strong>${example}</strong><small>${count} Cards</small></span>`).join("")}</div>
        <button class="flashcard-disabled-cta" type="button" tabindex="-1">MAKE ME FLASHCARDS</button>
      </div>
    </div>`;
}

function renderFlashcardsAiLoading(version) {
  const isProposal = version === "proposed";
  const loadingCopy = isProposal
    ? "Creating high-yield CPA flashcards for you..."
    : "flashcards.search_loading_text";

  return `
    <div class="component-preview flashcard-phone-frame flashcard-loading-preview">
      <div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <div class="flashcard-plain-header"><span>‹</span><strong></strong></div>
      <div class="flashcard-full-loader">
        <div class="flashcard-loader-animation"><span>▤</span></div>
        <strong>Crafting your flashcards</strong>
        <p>${loadingCopy}</p>
      </div>
    </div>`;
}

function renderFlashcardsSearchEmpty(version) {
  const isProposal = version === "proposed";
  const supportingCopy = isProposal
    ? "Oncourse can generate high-yield flashcards for any CPA topic."
    : "Oncourse can generate topper-level flashcards for any topic that you like";

  return `
    <div class="component-preview flashcard-phone-frame flashcard-empty-preview">
      <div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <div class="flashcards-home-title"><span class="flashcards-home-icon">▥</span><strong>Flashcards</strong><i>Oncourse</i></div>
      <div class="flashcards-search-box"><span>⌕</span><strong>lease accounting</strong><i>×</i></div>
      <div class="flashcard-empty-content">
        <i>⌕</i>
        <h3>No search results for “lease accounting”</h3>
        <p>${supportingCopy}</p>
        <button type="button" tabindex="-1">GENERATE FLASHCARDS WITH AI</button>
      </div>
    </div>`;
}

function renderPausedTestPage(version) {
  const isProposal = version === "proposed";
  return `
    <div class="component-preview paused-page-preview">
      <span class="page-back">‹</span>
      <div class="paused-page-content">
        <h3>${isProposal ? "Your Test is Paused" : "Your Quiz is Paused"}</h3>
        <p>Questions difficulty adapts to your answers. So you learn optimally.</p>
        <div class="paused-page-details"><div><strong>Questions</strong><span>11/30</span></div><div><strong>Mode</strong><span>Practice</span></div><div><strong>${isProposal ? "Area" : "Subject"}</strong><span>Auditing and Attestation</span></div></div>
        <div class="paused-page-features"><span>▤<small>Discuss answers<br />with Savvy</small></span><span>⌁<small>AI weak-spot<br />analysis</small></span><span>Ⅱ<small>Pause &amp;<br />Resume</small></span></div>
      </div>
      <button class="paused-page-cta" type="button" tabindex="-1">${isProposal ? "CONTINUE TEST" : "CONTINUE QUIZ"}</button>
    </div>`;
}

function renderEndTestDialog(version) {
  const isProposal = version === "proposed";
  return `
    <div class="component-preview end-dialog-preview">
      <div class="player-behind" aria-hidden="true"><span></span><i></i><i></i><i></i></div>
      <div class="end-dialog-dim"></div>
      <div class="end-dialog-card">
        <button type="button" tabindex="-1">×</button>
        <div class="end-dialog-icon">✍️</div>
        <h3>${isProposal ? "You are about to end the test" : "You are about to end the quiz"}</h3>
        <p>You will be able to see the results and performance analysis once you end the ${isProposal ? "test" : "quiz"}.</p>
        <div class="end-dialog-stats"><span><strong>18 MINS</strong><small>Total Time Spent</small></span><span><strong>24 / 30</strong><small>Attempted</small></span></div>
        <div class="end-dialog-actions"><button type="button" tabindex="-1">${isProposal ? "END TEST & VIEW RESULTS" : "END QUIZ & VIEW RESULTS"}</button><button type="button" tabindex="-1">GO BACK</button></div>
      </div>
    </div>`;
}

function renderPostTestAnalysis(version) {
  const isProposal = version === "proposed";
  return `
    <div class="component-preview results-preview">
      <div class="results-header"><span>×</span><strong>Results</strong><i></i></div>
      <div class="score-summary"><small>Your score</small><strong>78%</strong><span>24 of 30 correct</span></div>
      <div class="analysis-card"><small>${isProposal ? "SAVVY" : "REZZY"} ANALYSIS</small><strong>Strong overall performance</strong><p>Your main opportunity is improving audit evidence and risk assessment.</p><div class="analysis-input">${isProposal ? "Ask about this test" : "Ask about this quiz"}<span>↗</span></div></div>
      <div class="schedule-row"><span>◷</span><strong>${isProposal ? "SCHEDULE TEST IN" : "SCHEDULE QUIZ IN"}</strong><b>2 days⌄</b></div>
      <div class="feedback-row"><span>${isProposal ? "Did you find this test helpful?" : "Did you find this quiz helpful?"}</span><div>👍　🤷　👎</div></div>
    </div>`;
}

function renderComponentPreview(item, version) {
  if (item.kind === "practice-shell") return renderPracticeShell(version);
  if (item.kind === "lessons-ordering") return renderLessonsOrdering(version);
  if (item.kind === "test-filters") return renderTestFilters(version);
  if (item.kind === "create-test-setup") return renderCreateTestSetup(version);
  if (item.kind === "content-selection") return renderContentSelection(version);
  if (item.kind === "recent-tests") return renderRecentTests(version);
  if (item.kind === "resume-test-sheet") return renderResumeTestSheet(version);
  if (item.kind === "by-subject-flow") return renderBySubjectFlow(version);
  if (item.kind === "search-savvy") return renderSearchSavvy(version);
  if (item.kind === "flashcards-ai-generation") return renderFlashcardsAiGeneration(version);
  if (item.kind === "flashcards-ai-loading") return renderFlashcardsAiLoading(version);
  if (item.kind === "flashcards-search-empty") return renderFlashcardsSearchEmpty(version);
  if (item.kind === "paused-test-page") return renderPausedTestPage(version);
  if (item.kind === "end-test-dialog") return renderEndTestDialog(version);
  return renderTabBar(version);
}

function renderReviewItem(item, index) {
  return `
    <article class="review-card" id="${item.id}">
      <header class="card-header">
        <p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p>
        <h2>${item.title}</h2>
      </header>

      <div class="comparison-grid">
        <section class="version-panel" aria-labelledby="${item.id}-current">
          <div class="version-heading">
            <span class="version-label" id="${item.id}-current">Current</span>
          </div>
          ${renderComponentPreview(item, "current")}
        </section>

        <section class="version-panel" aria-labelledby="${item.id}-proposed">
          <div class="version-heading">
            <span class="version-label" id="${item.id}-proposed">Proposed</span>
          </div>
          ${renderComponentPreview(item, "proposed")}
        </section>
      </div>

      <div class="decision-row">
        <div>
          <span class="change-type">${item.changeType ?? "Copy change only"}</span>
          <div class="change-list">
            ${(item.changes ?? [{ from: item.current, to: item.proposed }])
              .map(
                (change) => `
                  <div class="change-line">
                    <span class="old-copy">${change.from}</span>
                    <span class="arrow" aria-hidden="true">→</span>
                    <span class="new-copy">${change.to}</span>
                  </div>`,
              )
              .join("")}
          </div>
        </div>
        <div class="decision-copy">
          <h4>Why this change</h4>
          <p>${item.rationale}</p>
        </div>
      </div>
    </article>`;
}

document.getElementById("cpa-terminology-table").innerHTML = renderCpaTerminologyTable();

mountSharedReview("review-list", "cpa", reviewItems, renderReviewItem);
