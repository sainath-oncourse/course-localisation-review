// Shared screens: every component below exists once in the app (origin/dev 41bfa98ac)
// and needs course-specific copy. Each course page mounts the same set with its own values,
// so coverage stays identical across CPA, CFA, LSAT and BAR.

const sharedCourses = {
  cpa: {
    name: "CPA",
    tutor: "Savvy",
    unit: "Test",
    hierarchy: "area",
    bySegment: "By Area",
    mock: "Simulated Exam",
    mockShort: "SIMULATED EXAM",
    questionNoun: "questions",
    examples: {
      canvas: ["Lease classifier", "Depreciation methods", "Tax basis"],
      flowcharts: ["Revenue recognition", "Consolidations", "Audit opinions"],
      flashcards: ["Governmental funds", "Tax rules", "Audit standards"],
      quiz: ["Simulations", "FAR practice", "Rapid revision"],
      lessons: ["Leases", "Deferred taxes", "Revision topic"],
      mnemonics: ["Internal control", "Governmental funds", "Audit assertions"],
      weak: ["Recent practice", "Area gaps", "Study plan"],
    },
    canvasChips: ["Lease classifier", "Depreciation methods", "Tax basis calculator", "Consolidation map", "Audit opinion tree"],
    libraryTutorChips: ["Explain lease classification", "Create a revenue recognition flowchart", "Map audit assertions", "Compare GAAP vs IFRS"],
    libraryNotesChips: ["Upload your FAR chapter", "Snap your AUD notes", "Add a REG tax table"],
    reminders: ["Revise flashcards daily", "Simulated exam this Sunday", "Practice MCQs and TBS", "Read FAR notes"],
    shareCopy: "I've been studying for the CPA with Savvy, an AI tutor that explains concepts and builds practice tests and flashcards for me.",
    widgetQuestion: "Which lease classification criterion is met when ownership transfers at the end of the term?",
    perksBank: "CPA question bank – MCQs, task-based simulations and section-wise tests",
    discountBank: "CPA question bank – MCQs, simulations and tests with explanations",
  },
  cfa: {
    name: "CFA",
    premadeDecks: true,
    tutor: "Savvy",
    unit: "Quiz",
    hierarchy: "subject",
    mock: "Mock Exam",
    mockShort: "MOCK EXAM",
    questionNoun: "questions",
    examples: {
      canvas: ["Bond price explorer", "Option payoffs", "Time value of money"],
      flowcharts: ["Ethics Standards", "Revenue recognition", "Equity valuation models"],
      flashcards: ["Financial ratios", "Ethics Standards", "Formulas"],
      quiz: ["Item sets", "Ethics cases", "Rapid revision"],
      lessons: ["Fixed income", "Financial statements", "Revision topic"],
      mnemonics: ["Ethics Standards", "DuPont analysis", "Portfolio process"],
      weak: ["Recent practice", "Subject gaps", "Study plan"],
    },
    canvasChips: ["Yield curve visualizer", "DCF sensitivity model", "Bond duration explorer", "Efficient frontier", "Financial statements map"],
    libraryTutorChips: ["Explain duration and convexity", "Create a cash flow map", "Visualize the efficient frontier", "Compare active vs passive"],
    libraryNotesChips: ["Upload your Quantitative Methods chapter", "Snap your Equity notes", "Add a Fixed Income slide"],
    reminders: ["Revise flashcards daily", "Mock exam this Sunday", "Practice MCQs", "Read Ethics notes"],
    shareCopy: "I've been studying for the CFA with Savvy, an AI tutor that explains concepts and builds practice quizzes and flashcards for me.",
    widgetQuestion: "Which measure best estimates a bond's price change for a small change in yield?",
    perksBank: "CFA question bank – Item sets, MCQs and mock exams across every subject",
    discountBank: "CFA question bank – Item sets, mock exams and quizzes with explanations",
  },
  lsat: {
    name: "LSAT",
    tutor: "Casey",
    unit: "Drill",
    hierarchy: "subject",
    mock: "Practice Test",
    mockShort: "PRACTICE TEST",
    questionNoun: "questions",
    examples: {
      canvas: ["Argument map", "Conditional logic", "Passage map"],
      flowcharts: ["Question types", "Reasoning flaws", "Assumptions"],
      flashcards: ["Reasoning flaws", "Conditional keywords", "Question stems"],
      quiz: ["Logical Reasoning", "Reading Comprehension", "Rapid revision"],
      lessons: ["Flaw questions", "Assumption questions", "Revision topic"],
      mnemonics: ["Conditional logic", "Reasoning flaws", "Passage structure"],
      weak: ["Recent drills", "Question-type gaps", "Study plan"],
    },
    reminders: ["Revise flashcards daily", "Practice test this Sunday", "Do a Logical Reasoning drill", "Review Reading Comprehension notes"],
    shareCopy: "I've been studying for the LSAT with Casey, an AI tutor that explains reasoning and builds drills and flashcards for me.",
    perksBank: "LSAT question bank – Logical Reasoning, Reading Comprehension and full practice tests",
    discountBank: "LSAT question bank – Drills and practice tests with explanations",
  },
  bar: {
    name: "BAR",
    notesTool: "Get high-yield outlines",
    tutor: "Casey",
    unit: "Drill",
    hierarchy: "subject",
    mock: "Exam Simulation",
    mockShort: "EXAM SIMULATION",
    questionNoun: "questions",
    examples: {
      canvas: ["Hearsay navigator", "Personal jurisdiction", "Contract formation"],
      flowcharts: ["Hearsay analysis", "UCC vs. common law", "Negligence elements"],
      flashcards: ["Hearsay exceptions", "Levels of scrutiny", "Future interests"],
      quiz: ["MBE practice", "Essay issues", "Rapid revision"],
      lessons: ["Evidence", "Civil procedure", "Revision topic"],
      mnemonics: ["Negligence", "Adverse possession", "Hearsay exceptions"],
      weak: ["Recent drills", "Subject gaps", "Study plan"],
    },
    reminders: ["Revise flashcards daily", "Exam simulation this Sunday", "Practice MBE questions", "Read Evidence outline"],
    shareCopy: "I've been studying for the bar exam with Casey, an AI tutor that explains rules and builds drills and flashcards for me.",
    perksBank: "Bar question bank – MBE questions, essays and performance tests",
    discountBank: "Bar question bank – MBE, essay and MPT practice with explanations",
  },
};

const medicalToolExamples = {
  canvas: ["ECG axis map", "Spinal cord lesions", "Antibiotic ladder"],
  flowcharts: ["Cardiac cycle", "Nephron", "Coagulation cascade"],
  flashcards: ["Cranial nerves", "Drug of choice", "Vitamins"],
  quiz: ["Pharmacology", "Anatomy", "PYQ practice"],
  lessons: ["Cardiac murmurs", "Antibiotics", "Renal physiology"],
  mnemonics: ["Cranial nerves", "Drug adverse effects", "Vitamins"],
  weak: ["Recent quizzes", "Subject gaps", "Weak topics"],
};

function sharedTools(c, proposed) {
  const quizTitle = proposed && c.unit !== "Quiz" ? (c.unit === "Drill" ? "Start a drill" : "Take a test") : "Take a quiz";
  const ex = proposed ? c.examples : medicalToolExamples;
  return [
    { icon: "▤", title: "Upload your notes", subtitle: "Get Flashcards, Questions and more", key: null },
    { icon: "◇", title: "Create a Canvas", subtitle: "Make an interactive visual", key: "canvas" },
    { icon: "⌁", title: "Learn with Flowcharts", subtitle: "Visualize complex topics easily", key: "flowcharts" },
    { icon: "▥", title: "Review Flashcards", subtitle: "Recall faster, retain longer", key: "flashcards" },
    { icon: "?", title: quizTitle, subtitle: "Improve accuracy and speed", key: "quiz" },
    { icon: "≡", title: "Find high-yield lessons", subtitle: "Open exam-focused lessons", key: "lessons" },
    { icon: "✦", title: "Memorize with mnemonics", subtitle: "Make tough concepts stick", key: "mnemonics" },
    { icon: "⌕", title: "Find my weak areas", subtitle: "Know and improve your weak spots", key: "weak" },
  ].map((tool) => ({ ...tool, suggestions: tool.key ? ex[tool.key] : [] }));
}

const sharedRenderers = {
  "tutor-home": (c, v) => {
    const proposed = v === "proposed";
    const tools = sharedTools(c, proposed);
    return `<div class="casey-review-layout">
      <div class="component-preview rezzy-phone rezzy-home-demo">
        <div class="rezzy-phone-header"><span>☰</span><strong>${c.tutor}</strong><span>✦</span></div>
        <div class="rezzy-greeting"><div class="rezzy-orb">${c.tutor[0]}</div><h3>What should we study today?</h3></div>
        <div class="savvy-demo-stage"><div class="savvy-tool-scroll">${tools.slice(0, 3).map((t) => `<button type="button" class="savvy-tool-pill" tabindex="-1"><i>${t.icon}</i><span><strong>${t.title}</strong><small>${t.subtitle}</small></span></button>`).join("")}</div></div>
        <p class="savvy-demo-hint">Each pill opens its own prompt sheet</p>
        <div class="rezzy-composer"><span>＋</span><p>Ask ${c.tutor} anything…</p><b>↑</b></div>
      </div>
      <aside class="casey-examples-panel"><p>${proposed ? `${c.name} prompts` : "Live prompts (medical)"} by pill</p>${tools.filter((t) => t.key).map((t) => `<section><div><i>${t.icon}</i><strong>${t.title}</strong></div><div class="casey-example-chips">${t.suggestions.map((s) => `<span>${s}</span>`).join("")}</div></section>`).join("")}</aside>
    </div>`;
  },

  "plus-menu": (c, v) => {
    const proposed = v === "proposed";
    const quizTitle = proposed && c.unit !== "Quiz" ? (c.unit === "Drill" ? "Start a drill" : "Take a test") : "Take a quiz";
    const tools = [
      ["◇", "Create canvas", "Make an interactive visual"],
      ["⌁", proposed ? "Learn with Flowcharts" : "Get flowcharts", proposed ? "Visualize complex topics easily" : "See how concepts connects"],
      ["▤", "Review Flashcards", "Recall faster, retain longer"],
      ["?", quizTitle, "Improve accuracy and speed"],
      ["≡", proposed ? (c.notesTool || "Get study notes") : "Get high-yield notes", "Focus on exam-relevant points"],
      ["✦", "Memorize with mnemonics", "Make tough concepts stick"],
      ["⌕", "Find my weak areas", "Know and improve your weak spots"],
    ];
    return `<div class="component-preview rezzy-sheet-preview"><div class="rezzy-sheet-handle"></div><div class="rezzy-upload-shortcuts"><span>▧<small>Camera</small></span><span>▣<small>Photos</small></span><span>▤<small>Files</small></span></div><div class="rezzy-tool-list">${tools.map(([icon, title, subtitle]) => `<div><i>${icon}</i><span><strong>${title}</strong><small>${subtitle}</small></span><b>›</b></div>`).join("")}</div></div>`;
  },

  "canvas-empty": (c, v) => {
    const chips = v === "proposed" ? c.canvasChips : ["Spinal cord visualizer", "ECG axis map", "Antibiotic ladder", "Hernia anatomy map", "ABG interpreter"];
    return `<div class="component-preview bar-single-empty-preview">
      <div class="bar-gallery-toolbar"><span>‹</span><strong>Canvas</strong><span></span></div>
      <section><span class="bar-gallery-icon">◇</span><h3>Make your first canvas</h3><p>Ask ${c.tutor} to turn a tough topic into an interactive visual, simulator, map, or exam-ready explainer.</p><button type="button" tabindex="-1">✦ &nbsp; Create canvas</button><small>Try one of these</small><div>${chips.map((item) => `<b>${item}</b>`).join("")}</div></section>
    </div>`;
  },

  "library-empty": (c, v, item) => {
    const proposed = v === "proposed";
    const fromTutor = item.section === "tutor";
    const chips = fromTutor
      ? (proposed ? c.libraryTutorChips : ["Explain the cardiac cycle", "Create a nephron flowchart", "Draw the brachial plexus", "Compare Gram + vs Gram −"])
      : (proposed ? c.libraryNotesChips : ["Upload your Biochemistry chapter", "Snap your Anatomy notes", "Add a Pathology slide image"]);
    return `<div class="component-preview bar-single-empty-preview">
      <div class="bar-gallery-toolbar"><span>‹</span><strong>Library</strong><span>⌕</span></div>
      <div class="bar-library-tabs"><span class="${fromTutor ? "selected" : ""}">From ${c.tutor}</span><span class="${fromTutor ? "" : "selected"}">From My Notes</span></div>
      <div class="bar-library-filters"><span class="selected">All</span><span>${fromTutor ? "Flowcharts" : "Files"}</span><span>${fromTutor ? "Tables" : "Images"}</span></div>
      <section><span class="bar-gallery-icon">${fromTutor ? "▤" : "≡"}</span><h3>${fromTutor ? "Create your first study visual" : "Turn your notes into Smart Notes"}</h3><p>${fromTutor ? `Ask ${c.tutor} to create diagrams, flowcharts, and study visuals that make complex topics easier to understand.` : `Upload PDFs, slides, or handwritten notes and ${c.tutor} turns them into flashcards, questions, concept map and more.`}</p><button type="button" tabindex="-1">${fromTutor ? `✦ &nbsp; CREATE WITH ${c.tutor.toUpperCase()}` : "⇧ &nbsp; UPLOAD A FILE"}</button><div>${chips.map((x) => `<b>${x}</b>`).join("")}</div></section>
    </div>`;
  },

  reminders: (c, v) => {
    const chips = v === "proposed" ? c.reminders : ["Revise flashcards daily", "Mock test this Sunday", "Practice MCQs", "Read Pharmacology notes"];
    return `<div class="component-preview rezzy-reminders-preview"><div class="rezzy-gallery-header"><span>‹</span><strong>Reminders</strong><span></span></div><div class="reminder-bell">♢</div><h3>Set your first reminder</h3><p>Ask ${c.tutor} to remind you to study, revise, or practise — whenever you need it.</p><button type="button" tabindex="-1">SET A REMINDER</button><small>Try one of these</small><div class="reminder-chips">${chips.map((x) => `<span>${x}</span>`).join("")}</div></div>`;
  },

  "quiz-widget": (c, v) => {
    const proposed = v === "proposed";
    const unit = proposed ? c.unit : "Quiz";
    return `<div class="component-preview bar-widget-preview"><div class="bar-widget-chat"><span class="rezzy-orb">${c.tutor[0]}</span><p>${unit} generated</p></div><div class="bar-widget-card"><header><span>?</span><div><strong>CUSTOM ${unit.toUpperCase()}</strong><small>8 questions</small></div><b>1 / 8</b></header><p>${c.widgetQuestion}</p><button type="button" tabindex="-1">Option A</button><button type="button" tabindex="-1">Option B</button><footer><span>‹</span><b>NEXT ›</b></footer></div></div>`;
  },

  "chat-history-empty": (c, v) => {
    const proposed = v === "proposed";
    const tabs = ["All", c.tutor, "Explanations", "Lessons", "Quiz Analysis"];
    return `<div class="component-preview sx-screen">
      <div class="sx-drawer-rows"><span>✦ Your memories</span><span>◇ Canvas</span><span>▤ Library</span><span>♢ Reminders</span></div>
      <div class="sx-label">Chats</div>
      <div class="sx-search">⌕ Search for chats</div>
      <div class="sx-pills">${tabs.map((t, i) => `<span class="${i === 1 ? "on" : ""}">${t}</span>`).join("")}</div>
      <div class="sx-empty"><strong class="${proposed ? "" : "sx-bad"}">${proposed ? `No ${c.tutor} chats yet.` : "No rezzy conversations yet."}</strong><small>${proposed ? "Quiz Analysis tab: “No quiz analysis chats yet.”" : "Quiz Analysis tab: “No quiz_analysis conversations yet.”"}</small></div>
    </div>`;
  },

  "share-message": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-answer"><span class="rezzy-orb">${c.tutor[0]}</span><p>…answer from ${c.tutor}…</p></div>
      <div class="sx-actions"><span class="on">⇪ Share</span><span>👍</span><span>👎</span><span>↻</span></div>
      <div class="sx-sheet"><small>Share message</small><p class="${proposed ? "" : "sx-bad"}">${proposed ? c.shareCopy : "quiz.chat_share_pyqs"}</p><p>Download Oncourse to try it! https://oncourse.onelink.me/…</p></div>
    </div>`;
  },

  "start-screen": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-top"><span>‹</span><strong></strong></div>
      <h3 class="sx-title">${proposed ? `Your ${c.mock} is Ready` : "Your Benchmark Test is Ready"}</h3>
      <p class="sx-sub">${proposed ? "Timed, exam-style questions — just like test day." : "Questions difficulty adapts to your answers. So you learn optimally."}</p>
      <div class="sx-rows"><div><strong>Questions</strong><span>${c.name === "LSAT" ? "76" : c.name === "BAR" ? "100" : "180"}</span></div><div><strong>Mode</strong><span>Exam</span></div></div>
      <div class="sx-feature">Discuss answers with ${c.tutor} · AI weak-spot analysis</div>
      <button class="sx-cta" type="button" tabindex="-1">START TEST</button>
    </div>`;
  },

  "report-header": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-top"><span>‹</span><strong>Report card</strong></div>
      <div class="sx-report"><small class="${proposed ? "" : "sx-bad"}">${proposed ? `${c.mockShort} · 24 SEP` : "BENCHMARK · 24 SEP"}</small><h3>On track</h3><div class="sx-score"><span><b>112</b>Correct</span><span><b>54</b>Wrong</span><span><b>14</b>Skipped</span></div></div>
      <div class="sx-pills"><span class="on">Overview</span><span>Your misses</span><span>Do next</span></div>
    </div>`;
  },

  "tests-empty": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-pills"><span>${proposed && c.bySegment ? c.bySegment : "By Subject"}</span><span class="on">Tests</span><span>Recents</span></div>
      ${proposed ? "" : `<div class="sx-empty-box sx-bad">No Active Tests Available Today. Please check back tomorrow.</div>`}
      <div class="sx-label">${proposed ? `${c.mock}s` : "Benchmark"}</div>
      <div class="sx-card"><strong>${proposed ? `${c.mock} 1` : "Benchmark 1"}</strong><small>24 Sep · 180 ${proposed ? "questions" : "MCQs"}</small></div>
    </div>`;
  },

  "test-card-count": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-label">${proposed ? `${c.mock}s` : "Benchmark"}</div>
      <div class="sx-card"><span class="sx-live">NOW LIVE</span><strong>${proposed ? `${c.mock} 1` : "Benchmark 1"}</strong><small class="${proposed ? "" : "sx-bad"}">24 Sep · ${proposed ? `${c.name === "BAR" ? "200" : "84"} questions` : `${c.name === "BAR" ? "200" : "84"} MCQs`}</small></div>
      <div class="sx-card"><strong>${proposed ? `${c.mock} 2` : "Benchmark 2"}</strong><small>1 Oct · ${proposed ? "questions" : "MCQs"}</small><b>Register Me</b></div>
      ${proposed ? `<p class="sx-note">${c.name === "CPA" ? "Includes task-based simulations" : "Includes essays and performance tests"}, so “MCQs” undercounts the exam.</p>` : ""}
    </div>`;
  },

  "end-dialog": (c, v) => {
    const unit = v === "proposed" ? c.unit.toLowerCase() : "quiz";
    return `<div class="component-preview sx-screen sx-dim">
      <div class="sx-dialog"><h3>You are about to end the ${unit}</h3><p>You can review your answers and results next.</p><button class="sx-cta" type="button" tabindex="-1">YES, END THE ${unit.toUpperCase()}</button><button class="sx-ghost" type="button" tabindex="-1">NO, LET ME CONTINUE</button></div>
    </div>`;
  },

  "vibe-followup": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-top"><span>‹</span><strong>Exercises</strong></div>
      <p class="sx-sub">How you feeling? → <b>Bored</b></p>
      <div class="sx-avatar ${proposed ? "" : "sx-bad-box"}">${proposed ? `${c.tutor} art` : "Rezzy in doctor's coat"}</div>
      <p class="${proposed ? "" : "sx-bad"}">${proposed ? `Let's switch it up — here's a quick ${c.name} fact to reset your focus.` : "Time for a small bolus of dopamine! Let's dive deeper into a clinical tidbit."}</p>
      <button class="sx-cta" type="button" tabindex="-1">CONTINUE</button>
    </div>`;
  },

  "readiness-strip": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-strip"><span><small>Your readiness</small><strong>Developing</strong><em class="${proposed ? "" : "sx-bad"}">${proposed ? "2 of 4 areas exam ready" : "2 of 4 subjects exam ready"}</em></span><b>VIEW</b></div>
      <div class="sx-card"><small>Plan loader</small><strong>${proposed ? "Picking your areas…" : "Picking your subjects…"}</strong></div>
    </div>`;
  },

  "readiness-dimension": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-label">Four dimensions of readiness</div>
      <div class="sx-card"><strong>Knowledge</strong><small>Recalling a fact unaided…</small></div>
      <div class="sx-card"><strong>Application</strong><small class="${proposed ? "" : "sx-bad"}">${proposed ? "Using what you know on an exam-style scenario." : "Using what you know on a clinical vignette."}</small></div>
      <div class="sx-card"><strong>Exam Instinct</strong><small>Reading what a question is really asking, and seeing the trap.</small></div>
      <button class="sx-cta" type="button" tabindex="-1">GOT IT</button>
    </div>`;
  },

  "study-points": (c, v) => {
    const proposed = v === "proposed";
    const acts = proposed
      ? ["Read a Lesson", `Attempt a ${c.unit}`, "Watch a Video", "Play Probe", `Chat with ${c.tutor}`, "Upload Notes", "Review Flashcards", "Play Synapses", "Play Medle"]
      : ["Read a Lesson", "Attempt a Quiz", "Watch a Video", "Play Probe", `Chat with ${c.tutor}`, "Upload Notes", "Review Flashcards", "Play Image Rush", "Play Synapses", "Solve a Clinical Round"];
    return `<div class="component-preview sx-screen">
      <h3 class="sx-title">Earn Study Points and Level Up Your Badge</h3>
      <div class="sx-label">Activities covered</div>
      <div class="sx-chips">${acts.map((a) => `<span class="${!proposed && /Image Rush|Clinical/.test(a) ? "sx-bad-chip" : ""}">${a}</span>`).join("")}</div>
      <button class="sx-cta" type="button" tabindex="-1">GOT IT</button>
    </div>`;
  },

  "profile-avatar": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-profile"><span class="sx-emoji ${proposed ? "" : "sx-bad-box"}">${proposed ? "🧑‍🎓" : "🧑🏻‍⚕️"}</span><strong>Alex Morgan</strong><small>Joined Sep 2, 2026</small></div>
      <div class="sx-card"><strong>Study Points</strong><small>Complete activities, earn SP and level up your Prep</small></div>
      <div class="sx-card"><strong>${c.tutor} credits</strong><small>82% left</small></div>
    </div>`;
  },

  "membership-perks": (c, v) => {
    const proposed = v === "proposed";
    const perks = proposed
      ? [`${c.tutor}, your AI tutor – Visual explanations, flowcharts, and mnemonics`, "Flashcards – Spaced repetition tuned to your forgetting curve", c.perksBank, "Synapses, Probe & Medle – Gamified learning that makes tough concepts fun", "Smart analytics – Exam readiness, mastery and weak topics"]
      : [`${c.tutor}, your AI tutor – Visual explanations, flowcharts, and mnemonics`, "40k+ flashcards – Spaced repetition tuned to your forgetting curve", "100k+ question bank – PYQs, mock tests, and subject-wise drills", "Synapses, Probe & Medle – Gamified learning that makes tough concepts fun", "Smart analytics – Bloom's mastery, projected rank, and weak topics"];
    return `<div class="component-preview sx-screen">
      <div class="sx-top"><span>‹</span><strong>Membership</strong></div>
      <div class="sx-label">Your Max perks</div>
      ${perks.map((p, i) => `<div class="sx-card"><small class="${!proposed && (i === 1 || i === 2 || i === 4) ? "sx-bad" : ""}">${p}</small></div>`).join("")}
    </div>`;
  },

  "cancel-flow": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview sx-screen">
      <div class="sx-label">Which features did you use the most?</div>
      <div class="sx-chips"><span>AI tutor (${c.tutor})</span><span>Flashcards &amp; spaced repetition</span><span>Practice questions / QBank</span><span class="${proposed ? "" : "sx-bad-chip"}">${proposed ? "Mini-games (Synapses, Probe)" : "Mini-games (Synapses, Clinical Rounds)"}</span></div>
      <div class="sx-label">Discount offer · Now at 25% off</div>
      <div class="sx-card"><small class="${proposed ? "" : "sx-bad"}">${proposed ? c.discountBank : "100k+ question bank – PYQs, mock tests, and drills with explanations"}</small></div>
      <div class="sx-card"><small>${c.tutor}, your AI tutor – Diagrams, flowcharts, mnemonics, and nudges</small></div>
    </div>`;
  },

  "flashcard-filters": (c, v) => {
    const proposed = v === "proposed";
    const q = c.examples.flashcards[0].toLowerCase();
    return `<div class="component-preview sx-screen">
      <div class="sx-top"><span>▥</span><strong>Flashcards</strong></div>
      <div class="sx-search">⌕ ${q}</div>
      <div class="sx-pills"><span class="on">All</span><span>By Me</span>${proposed ? (c.premadeDecks ? "<span>By Oncourse</span>" : "") : `<span class="sx-bad-chip">By Toppers</span>`}<span>Imported</span></div>
      <div class="sx-card"><strong>${c.examples.flashcards[0]}</strong><small>Oncourse</small></div>
      <div class="sx-card"><strong>${c.examples.flashcards[1]}</strong><small>My deck</small></div>
    </div>`;
  },

  "emoji-picker": (c, v) => {
    const proposed = v === "proposed";
    const recent = proposed ? "📈 📚 🧮 ⚖️ 📝 💡 🎯 ⏱️" : "🫁 🚑 😷 💊 🩺 💉 🩸 🦠";
    const category = proposed ? (c.name === "LSAT" || c.name === "BAR" ? "Law &amp; Reasoning" : "Finance &amp; Accounting") : "Medical &amp; Clinical Context";
    const categoryEmoji = proposed ? (c.name === "LSAT" || c.name === "BAR" ? "⚖️ 🏛️ 📜 🔍 🧠" : "📈 💹 💰 🏦 📊") : "🩺 💊 🚑 🧬 🫀";
    return `<div class="component-preview sx-screen">
      <div class="sx-top"><span>‹</span><strong>Change emoji</strong></div>
      <div class="sx-label">Recently used</div>
      <p class="${proposed ? "" : "sx-bad"}" style="font-size:20px;letter-spacing:4px">${recent}</p>
      <div class="sx-label ${proposed ? "" : "sx-bad"}">${category}</div>
      <p style="font-size:20px;letter-spacing:4px">${categoryEmoji}</p>
      <div class="sx-label">${c.tutor} &amp; AI Interactions</div>
      <p style="font-size:20px;letter-spacing:4px">${proposed ? "🤖 ✨ 💬 🧠 ⚡" : "🦠 🤖 ✨ 💬 🧠"}</p>
    </div>`;
  },

  "flashcard-loading": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview flashcard-phone-frame flashcard-loading-preview"><div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div><div class="flashcard-plain-header"><span>‹</span><strong></strong></div><div class="flashcard-full-loader"><div class="flashcard-loader-animation"><span>▤</span></div><strong>Crafting your flashcards</strong><p class="${proposed ? "" : "sx-bad"}">${proposed ? `Creating your ${c.name} flashcards…` : "flashcards.search_loading_text"}</p></div></div>`;
  },

  "flashcard-footer": (c, v) => {
    const proposed = v === "proposed";
    return `<div class="component-preview flashcard-phone-frame cfa-flashcard-results-preview">
      <div class="flashcard-phone-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <div class="flashcards-home-title"><span class="flashcards-home-icon">▥</span><strong>Flashcards</strong><i>Oncourse</i></div>
      <div class="flashcards-search-box"><span>⌕</span><strong>${c.examples.flashcards[0].toLowerCase()}</strong><i>×</i></div>
      <div class="cfa-search-card"><strong>${c.examples.flashcards[0]}</strong><small>Oncourse</small></div>
      <div class="cfa-looking-more"><i>⌕</i><h3>Looking for more?</h3><p class="${proposed ? "" : "sx-bad"}">${proposed ? `Oncourse can generate flashcards for any ${c.name} topic you choose` : "Oncourse can generate topper-level flashcards for any topic that you like"}</p><button type="button" tabindex="-1">GENERATE FLASHCARDS WITH AI</button></div>
    </div>`;
  },
};

// Card definitions. `courses` lists the pages that should show the shared card;
// pages that already have an equivalent course-specific card are left out.
function sharedItemsFor(key) {
  const c = sharedCourses[key];
  const unit = c.unit;
  const items = [
    { kind: "start-screen", courses: ["cpa", "cfa", "lsat", "bar"], area: `${unit === "Quiz" ? "Quiz" : "Practice"} · Start screen`, title: `${c.mock} start screen`, changes: [["Your Benchmark Test is Ready", `Your ${c.mock} is Ready`], ["Questions difficulty adapts to your answers…", "Timed, exam-style questions — just like test day."]], rationale: `Verified in app/(app)/evaluation/test/start/index.tsx:325-350. This is a separate screen from the ready sheet and still hard-codes Benchmark. Its adaptive-difficulty subtitle is untrue for a fixed ${c.mock}.` },
    { kind: "report-header", courses: ["cpa", "cfa", "lsat", "bar"], area: `${unit === "Quiz" ? "Quiz" : "Practice"} · Results`, title: "Report card header", changes: [["BENCHMARK · 24 Sep", `${c.mockShort} · 24 Sep`]], rationale: "Verified in GenerativeAnalysis/widgets/ReportCardHeader.tsx:112, the live results screen after every attempt. The mode label still uses the medical Benchmark name." },
    { kind: "tests-empty", courses: ["cpa", "cfa", "lsat", "bar"], area: `${unit === "Quiz" ? "Quiz" : "Practice"} · Tests`, title: "Tests tab empty banner", changes: [["No Active Tests Available Today. Please check back tomorrow.", `Hide for ${c.name}`]], rationale: `Verified in components/evaluation/TodayQuizSection.tsx:180. It is built around the medical daily and weekly test schedule. ${c.name} has no daily tests, so the banner always shows and promises tests that never arrive.` },
    { kind: "test-card-count", courses: ["cpa", "bar"], area: "Practice · Tests", title: `${c.mock} card question count`, changes: [["{n} MCQs", "{n} questions"]], rationale: `Verified in TestTemplateListCard.tsx:250. ${c.name === "CPA" ? "CPA exams include task-based simulations" : "The bar exam includes MEE essays and MPT performance tests"}, so counting everything as MCQs is inaccurate.` },
    { kind: "end-dialog", courses: ["lsat", "bar"], area: "Practice · In drill", title: "End drill confirmation", changes: [["You are about to end the quiz", "You are about to end the drill"], ["YES, END THE QUIZ", "YES, END THE DRILL"]], rationale: "Verified in app/(app)/evaluation/test/question/end.tsx. The same dialog already has a CPA Test card, so LSAT and BAR get their Drill value too." },
    { kind: "vibe-followup", courses: ["cpa", "cfa", "lsat", "bar"], area: "Lessons · Exercises", title: "Mood check follow-up", changes: [["Rezzy doctor-coat art (5 of 6 moods)", `${c.tutor} art`], ["…bolus of dopamine… clinical tidbit", `Neutral ${c.name} copy`]], rationale: `Verified in components/notes/exercises/VibeContent.tsx. The mood check appears halfway through lesson exercises. Its images are not persona-aware and its fallback copy is medical; only “Curious” uses ${c.tutor}'s art.` },
    { kind: "readiness-strip", courses: ["cpa"], area: "Home · Readiness", title: "Readiness strip and plan loader", changes: [["2 of 4 subjects exam ready", "2 of 4 areas exam ready"], ["Picking your subjects…", "Picking your areas…"]], rationale: "Verified in ProgressionStatusStrip.tsx:175 and dailyPlanStages.ts. Readiness is counted per content area inside the selected CPA section (e.g. AUD Area I–IV), so the strip should say areas, matching the rest of this review." },
    { kind: "tutor-home", courses: ["cpa", "cfa"], area: `${c.tutor} · Home`, title: `${c.tutor} home pills and prompts`, changes: [["Medical prompts under every pill", `${c.name} prompts for every pill`], ...(unit === "Test" ? [["Take a quiz", "Take a test"]] : [])], rationale: `Each pill opens its own prompt sheet. The live API (main) still serves medical defaults such as ECG axis map and Antibiotic ladder. The ${c.name} prompts shown are the ones already written on API dev (courses/${key}/insights-tool-suggestions), so this only needs releasing.` },
    { kind: "plus-menu", courses: ["cpa", "lsat", "bar"], area: `${c.tutor} · Add menu`, title: "“+” menu learning tools", changes: [["Get flowcharts · See how concepts connects", "Learn with Flowcharts · Visualize complex topics easily"], ["Get high-yield notes", c.notesTool || "Get study notes"], ...(unit !== "Quiz" ? [["Take a quiz", unit === "Drill" ? "Start a drill" : "Take a test"]] : [])], rationale: "Verified in components/chat/input/ChatUploadModal.tsx:279-343. The same menu opens from the composer and inside lesson chat. The CFA page already has this card, so the other courses get their own values." },
    { kind: "canvas-empty", courses: ["cpa"], area: `${c.tutor} drawer · Canvas`, title: "Canvas empty state", changes: [["Medical Canvas suggestions", "CPA Canvas suggestions"]], rationale: "Verified in components/chat/core/RezzyCanvasesGallery.tsx:72-93. The chips are hard-coded medical for every course." },
    { kind: "library-empty", section: "tutor", courses: ["cpa", "cfa"], area: `${c.tutor} drawer · Library`, title: `From ${c.tutor} library empty state`, changes: [["Medical study-visual suggestions", `${c.name} study-visual suggestions`]], rationale: "Verified in components/chat/core/RezzyLibraryGallery.tsx:142-151. The chips are hard-coded medical for every course." },
    { kind: "library-empty", section: "notes", courses: ["cpa", "cfa"], area: `${c.tutor} drawer · Library`, title: "From My Notes library empty state", changes: [["Medical upload suggestions", `${c.name} upload suggestions`]], rationale: "Verified in components/chat/core/RezzyLibraryGallery.tsx:156-165. This is the main way into notes for these courses." },
    { kind: "reminders", courses: ["cpa", "lsat", "bar"], area: `${c.tutor} drawer · Reminders`, title: "Reminder suggestions", changes: [["Mock test this Sunday", c.reminders[1]], ["Read Pharmacology notes", c.reminders[3]], ...(c.reminders[2] !== "Practice MCQs" ? [["Practice MCQs", c.reminders[2]]] : [])], rationale: "Verified in components/reminders/RezzyRemindersScreen.tsx:39-44. The chips are hard-coded for every course; Pharmacology is medical." },
    { kind: "quiz-widget", courses: ["cpa"], area: `${c.tutor} · Generated activity`, title: "Generated test widget", changes: [["CUSTOM QUIZ", "CUSTOM TEST"], ["Quiz generated", "Test generated"]], rationale: "Verified in components/chat/tools/RelatedQuiz/index.tsx:35 and ToolRenderer.tsx. LSAT and BAR already have Drill values for this widget." },
    { kind: "chat-history-empty", courses: ["cpa", "cfa", "lsat", "bar"], area: `${c.tutor} drawer · Chats`, title: "Chat history empty state", changes: [["No rezzy conversations yet.", `No ${c.tutor} chats yet.`], ["No quiz_analysis conversations yet.", "No quiz analysis chats yet."]], rationale: "Verified in components/chat/core/PastChatsDrawerContent.tsx:320. The message is built from internal type names, so it shows “rezzy” and “quiz_analysis” to every course." },
    { kind: "share-message", courses: ["cpa", "cfa", "lsat", "bar"], area: `${c.tutor} · Chat`, title: "Share an answer", changes: [["quiz.chat_share_pyqs (raw key)", `${c.name} share message`]], rationale: "Verified in components/chat/actions/MessageActions.tsx:111. The key is missing from the base copy file, so the raw key is sent. The medical version mentions an “AI medical resident” and PYQs, so it cannot be reused." },
    { kind: "flashcard-loading", courses: ["lsat"], area: "Flashcards · Generate with AI", title: "AI generation loading state", changes: [["flashcards.search_loading_text", "Creating your LSAT flashcards…"]], rationale: "Verified in app/(app)/snippets/flashcards/create-prompt.tsx:282. The key is missing from the base copy file, so every non-medical course sees the raw key." },
    { kind: "flashcard-footer", courses: ["cpa", "lsat", "bar"], area: "Flashcards · Search results", title: "“Looking for more?” footer", changes: [["topper-level flashcards", `flashcards for any ${c.name} topic`]], rationale: "Verified in components/flashcards/SearchSection/FlashcardList.tsx:183-187. It shows below short result lists (under 20 cards) and repeats the Topper wording of the empty state." },
    { kind: "flashcard-filters", courses: ["cpa", "cfa", "lsat", "bar"], area: "Flashcards · Search results", title: "Search result filters", changes: [["By Toppers", c.premadeDecks ? "By Oncourse" : "Remove chip"]], rationale: c.premadeDecks ? "Verified in components/snippets/FlashcardFilters.tsx:23: the chip filters to premade (type: premade) cards. CFA has premade decks: the API imported 3,193 owner-authored CFA Level I–III cards to staging on 24 Sep (pending validation). Keep the chip, but “Toppers” is Indian medical-exam slang, so name it By Oncourse." : `Verified in components/snippets/FlashcardFilters.tsx:23: the chip filters to premade (type: premade) cards. There is no premade ${c.name} flashcard import in the API, so the chip would always return nothing. Remove it until premade ${c.name} decks exist; All, By Me and Imported stay.` },
    { kind: "emoji-picker", courses: ["cpa", "cfa", "lsat", "bar"], area: "Flashcards · Save to deck", title: "New deck emoji picker", changes: [["Medical & Clinical Context category", c.name === "LSAT" || c.name === "BAR" ? "Law & Reasoning" : "Finance & Accounting"], ["Preset “Recently used”: 🫁🚑😷💊🩺", "Study emojis, or the user's real recent picks"]], rationale: "Verified in components/flashcards/SearchSection/SaveToDeckBottomSheet.tsx:25-31. “Recently used” is a hard-coded medical preset, not the user's history, and one category is medical." },
    { kind: "readiness-dimension", courses: ["cpa", "cfa", "lsat", "bar"], area: "My Progress · Readiness", title: "Readiness dimensions sheet", changes: [["Using what you know on a clinical vignette.", "Using what you know on an exam-style scenario."]], rationale: "Verified in components/myProgress/ReadinessTab.tsx:71. “Clinical vignette” is medical." },
    { kind: "study-points", courses: ["cpa", "cfa", "lsat", "bar"], area: "My Progress · Badges", title: "Study Points activities", changes: [["Play Image Rush", "Remove"], ["Solve a Clinical Round", "Remove"], ["—", "Play Medle"], ...(unit !== "Quiz" ? [["Attempt a Quiz", `Attempt a ${unit}`]] : [])], rationale: `Verified in StudyPointsInfoModal (native and web). Image Rush and Clinical Rounds are hidden for ${c.name}, while Medle, which ${c.name} does get, is missing.` },
    { kind: "profile-avatar", courses: ["cpa", "cfa", "lsat", "bar"], area: "Profile", title: "Profile avatar", changes: [["🧑🏻‍⚕️ health-worker emoji", "🧑‍🎓 student emoji"]], rationale: "Verified in ProfileScreen.tsx:260 and ProfileHeader.tsx:27. Every course gets a medical avatar." },
    { kind: "membership-perks", courses: ["cpa", "cfa", "lsat", "bar"], area: "Membership", title: "Your Max perks", changes: [["100k+ question bank – PYQs, mock tests…", c.perksBank], ["40k+ flashcards", "Flashcards"], ["Bloom's mastery, projected rank", "Exam readiness, mastery"]], rationale: `Verified in components/pricing/Membership/index.tsx:36-67 (web too). PYQs, the medical bank sizes and “projected rank” (a NEET-PG idea) do not apply to ${c.name}.` },
    { kind: "cancel-flow", courses: ["cpa", "cfa", "lsat", "bar"], area: "Membership · Cancel flow", title: "Cancel flow features and discount", changes: [["Mini-games (Synapses, Clinical Rounds)", "Mini-games (Synapses, Probe)"], ["100k+ question bank – PYQs, mock tests…", c.discountBank]], rationale: `Verified in app/(app)/cancel-flow/index.tsx:158-176 and 614-702. Clinical Rounds is not available to ${c.name}; PYQs and medical bank sizes are wrong. Separately, the discount button offers Medical PG plans (engineering issue, not copy).` },
  ];
  return items
    .filter((item) => item.courses.includes(key))
    .map((item, i) => ({ ...item, id: `${key}-shared-${item.kind}${item.section ? `-${item.section}` : ""}`, changeType: `Shared component · ${c.name} values`, shared: true, course: key, _order: i }));
}

const sharedAreaOrder = [/navigation/i, /^(Quiz|Practice)/, /^Lessons/, /^Home/, /^(Savvy|Casey|Global)/, /^Flashcards/, /^My Progress/, /^Profile/, /^Membership/];

function sharedAreaRank(area) {
  const index = sharedAreaOrder.findIndex((pattern) => pattern.test(area));
  return index === -1 ? sharedAreaOrder.length : index;
}

function renderSharedCard(item, index) {
  const c = sharedCourses[item.course];
  const render = sharedRenderers[item.kind];
  const wide = item.kind === "tutor-home" ? " sx-wide" : "";
  return `<article class="review-card${wide}" id="${item.id}">
    <header class="card-header"><p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p><h2>${item.title}</h2></header>
    <div class="comparison-grid"><section class="version-panel"><div class="version-heading"><span class="version-label">Current</span></div>${render(c, "current", item)}</section><section class="version-panel"><div class="version-heading"><span class="version-label">Proposed</span></div>${render(c, "proposed", item)}</section></div>
    <div class="decision-row"><div><span class="change-type">${item.changeType}</span><div class="change-list">${item.changes.map(([from, to]) => `<div class="change-line"><span class="old-copy">${from}</span><span class="arrow">→</span><span class="new-copy">${to}</span></div>`).join("")}</div></div><div class="decision-copy"><h4>Why this change</h4><p>${item.rationale}</p></div></div>
  </article>`;
}

// "Where in the app" paths, written with the labels the app shows today.
function whereFor(courseKey, kind) {
  const t = sharedCourses[courseKey].tutor;
  const paths = {
    navigation: "Bottom tab bar on every main screen (Quiz · Lessons · Home · Flashcards · Play)",
    "practice-landing": "Quiz tab (bottom bar) → top of the Quiz screen: header, Bookmarked / Self Assess buttons and the By Subject · Tests · Recents segments",
    "test-filters": "Quiz tab → Tests segment → filter pills and test list",
    builder: "Quiz tab → Self Assess button → “Create a Self-Assessment” screen",
    "topic-selection": "Quiz tab → Self Assess → CHOOSE TOPICS → “Choose Topics” screen",
    "by-subject": "Quiz tab → By Subject segment → keyword search results, or tap a subject → its topics screen",
    history: "Quiz tab → Recents segment → past quizzes list",
    "history-empty": "Quiz tab → Recents segment, before any quiz has been taken",
    "ready-sheet": "Quiz tab → By Subject → tap a topic (or tap a paused quiz in Recents) → bottom sheet",
    "paused-page": "Start a quiz → pause it → Quiz tab → Recents → tap the paused quiz → “Your Quiz is Paused” screen",
    "end-dialog": "During any quiz → End / Finish button → confirmation dialog",
    "start-screen": "Quiz tab → Tests segment → tap a Benchmark test → start screen shown before the first question",
    "report-header": "Finish any quiz or test → “Report card” results screen → top summary card",
    "tests-empty": "Quiz tab → Tests segment → banner at the top of the list",
    "test-card-count": "Quiz tab → Tests segment → subtitle on each test card",
    lessons: "Lessons tab → “Select Subject” button (opens the subject sheet) and the pills below it",
    "lessons-search": "Lessons tab → Theme → open a theme → FILTER → Subjects → search box",
    "vibe-followup": "Lessons tab → open a lesson → Exercises → halfway “How you feeling?” check → pick a mood",
    "readiness-strip": "Home tab → readiness strip under the header; the loader text shows while today's plan is being built",
    "flashcard-create": "Flashcards tab → Create → Generate with AI",
    "flashcard-loading": "Flashcards tab → Create → Generate with AI → MAKE ME FLASHCARDS → loading screen",
    "flashcard-empty": "Flashcards tab → search bar → search a topic that has no cards",
    "flashcard-footer": "Flashcards tab → search bar → search a topic that returns fewer than 20 cards → end of the list",
    "flashcard-filters": "Flashcards tab → search bar → type 3+ letters → chips above the results",
    "emoji-picker": "Flashcards tab → search a topic → select cards → SAVE TO DECK → New deck → Change emoji",
    "tutor-home": `Home tab → “Ask ${t} anything” bar → ${t} home → tool pills above the text box (each pill opens its own prompt sheet)`,
    "plus-menu": `${t} home → “+” button in the text box (the same menu opens inside lesson chat)`,
    "canvas-empty": `${t} home → ☰ menu (top left) → Canvas, before any canvas is created`,
    "library-tutor": `${t} home → ☰ menu → Library → “From ${t}” tab, while empty`,
    "library-notes": `${t} home → ☰ menu → Library → “From My Notes” tab, while empty`,
    reminders: `${t} home → ☰ menu → Reminders, before any reminder is set`,
    "chat-history-empty": `${t} home → ☰ menu → Chats → “${t}” or “Quiz Analysis” tab with no chats`,
    "share-message": `Any ${t} chat → an answer → Share icon under the message → share sheet text`,
    "quiz-widget": `${t} chat → ask for a quiz (or use the Take a quiz pill) → quiz card in the reply`,
    "readiness-dimension": "Home → profile circle (top right) → My Progress → Readiness → tap the “Four dimensions” card",
    "study-points": "Home → profile circle → My Progress → Badges tab → ⓘ button",
    "profile-avatar": "Home → profile circle → My Progress → ⚙ settings → Profile (avatar at the top)",
    "membership-perks": "Profile → Oncourse Max row → Manage → Membership screen → “Your Max perks”",
    "cancel-flow": "Membership screen → Cancel → “Which features did you use the most?”, then the “Now at 25% off” offer",
  };
  return paths[kind] || "";
}

// Page-owned cards, mapped to the same screen paths.
const ownCardScreens = {
  "bottom-navigation": "navigation", "lsat-navigation": "navigation", "bar-navigation": "navigation",
  "practice-screen-shell": "practice-landing", "cfa-practice-landing": "practice-landing", "lsat-practice-landing": "practice-landing", "bar-practice-landing": "practice-landing",
  "practice-test-filters": "test-filters", "cfa-mock-exams": "test-filters", "lsat-test-types": "test-filters", "bar-simulations": "test-filters",
  "create-test-setup": "builder", "cfa-quiz-setup": "builder", "lsat-drill-builder": "builder", "bar-drill-builder": "builder",
  "create-test-content-selection": "topic-selection", "lsat-topic-selection": "topic-selection", "bar-topic-selection": "topic-selection",
  "by-subject-flow": "by-subject", "lsat-by-subject-flow": "by-subject", "bar-by-subject-flow": "by-subject",
  "recent-tests": "history", "cfa-recents": "history", "lsat-history": "history", "bar-practice-history": "history",
  "lsat-history-empty": "history-empty", "bar-practice-history-empty": "history-empty",
  "resume-test-sheet": "ready-sheet", "cfa-quiz-ready": "ready-sheet", "lsat-ready-sheet": "ready-sheet", "bar-ready-sheet": "ready-sheet",
  "paused-test-page": "paused-page", "lsat-paused-page": "paused-page", "bar-paused-page": "paused-page",
  "end-test-dialog": "end-dialog",
  "cpa-lessons-ordering": "lessons", "cfa-lessons-ordering": "lessons", "lsat-lessons-ordering": "lessons", "bar-lessons-ordering": "lessons",
  "search-and-savvy": "lessons-search",
  "flashcards-ai-generation": "flashcard-create", "cfa-flashcard-examples": "flashcard-create", "lsat-flashcard-create": "flashcard-create", "bar-flashcards": "flashcard-create",
  "flashcards-ai-loading": "flashcard-loading", "cfa-flashcard-loading": "flashcard-loading",
  "flashcards-search-empty": "flashcard-empty", "cfa-flashcard-empty": "flashcard-empty", "lsat-flashcard-search-empty": "flashcard-empty", "bar-flashcards-search-empty": "flashcard-empty",
  "cfa-flashcard-search-footer": "flashcard-footer",
  "cfa-rezzy-tools": "plus-menu", "lsat-casey-home": "tutor-home", "bar-search-study": "tutor-home",
  "lsat-casey-widget": "quiz-widget", "bar-casey-widget": "quiz-widget",
  "cfa-rezzy-canvas": "canvas-empty", "lsat-canvas-empty": "canvas-empty", "bar-canvas-empty": "canvas-empty",
  "lsat-library-casey-empty": "library-tutor", "bar-library-casey-empty": "library-tutor",
  "lsat-library-notes-empty": "library-notes", "bar-library-notes-empty": "library-notes",
  "cfa-rezzy-reminders": "reminders",
};

function sharedScreenKey(item) {
  if (item.kind === "library-empty") return item.section === "tutor" ? "library-tutor" : "library-notes";
  return item.kind;
}

function addWhereLines(courseKey, entries) {
  entries.forEach(({ item, shared }) => {
    const key = shared ? sharedScreenKey(item) : ownCardScreens[item.id];
    const text = key ? whereFor(courseKey, key) : "";
    const header = document.querySelector(`#${CSS.escape(item.id)} .card-header`);
    if (!text || !header || header.querySelector(".card-where")) return;
    header.insertAdjacentHTML("beforeend", `<p class="card-where"><span>Where in the app</span>${text}</p>`);
  });
}

// Merges a page's own cards with the shared cards, grouped by app area, and renders them.
function mountSharedReview(containerId, courseKey, courseItems, renderCourseCard) {
  const own = courseItems.map((item, i) => ({ item, rank: sharedAreaRank(item.area || ""), seq: i, shared: false }));
  const shared = sharedItemsFor(courseKey).map((item, i) => ({ item, rank: sharedAreaRank(item.area), seq: item.kind === "tutor-home" ? -1 : 1000 + i, shared: true }));
  const ordered = [...own, ...shared].sort((a, b) => a.rank - b.rank || a.seq - b.seq);
  document.getElementById(containerId).innerHTML = ordered
    .map((entry, index) => (entry.shared ? renderSharedCard(entry.item, index) : renderCourseCard(entry.item, index)))
    .join("");
  addWhereLines(courseKey, ordered);
}
