// Term glossary: which words each course should and should not use, with the evidence behind each call.
// Evidence = competitor in-product labels (logged-in walkthroughs or help docs), official exam bodies, or a team decision.
const T = (term, where, why, src) => ({ term, where, why, src });

const termCourses = [
  {
    key: "cpa", name: "CPA", tutor: "Savvy", competitors: "Becker, UWorld (Roger)",
    use: [
      T("Practice", "Quiz tab name", "Becker “Practice Mode”, UWorld “Practice” test mode", "Competitor"),
      T("Test", "A custom practice set", "Becker “Create a practice test”, UWorld “custom tests”", "Competitor"),
      T("Create Test", "Builder button and title", "Becker “Create a practice test”", "Competitor"),
      T("Simulated Exam", "Full exam (replaces Benchmark)", "Becker “Simulated Exam”", "Competitor"),
      T("Mini Exam", "Short exam (replaces Mini-Benchmark)", "Becker “Mini Exams”", "Competitor"),
      T("Section", "AUD, FAR, REG, BAR, ISC, TCP only", "AICPA exam structure; Becker and UWorld", "Official"),
      T("Area", "The subject list inside a section (e.g. AUD Area I–IV)", "AICPA Blueprint “content area”; also on the score report", "Official"),
      T("Topic / Lesson", "Level below Area / learning content", "Already in the app, clear", "Team decision"),
      T("Review", "Review Entire Topic, Review Topic, reminders", "US study verb used by every competitor", "Competitor"),
      T("Savvy", "Tutor name", "Course persona in the app", "Team decision"),
      T("Get notes / Find lessons", "Tutor tools", "Neutral; no competitor uses “high-yield” in product", "Team decision"),
    ],
    avoid: [
      T("Quiz", "Tab name and practice sets", "Becker and UWorld say Test", "Competitor"),
      T("Subject", "Quiz, Lessons, filters", "These are AICPA content areas, not subjects", "Official"),
      T("Section (for the subject list)", "Quiz, Lessons", "Clashes with the AUD/FAR/REG section switcher", "Official"),
      T("Self Assess / Self-Assessment", "Quiz button, builder title", "Oncourse medical wording", "Competitor"),
      T("Benchmark / Mini-Benchmark", "Tests tab, start screen, report", "Oncourse medical test names", "Competitor"),
      T("High Yield", "Filter pills, labels, tutor tools", "Only on UWorld's website, never in product", "Competitor"),
      T("PYQ / Topper", "Anywhere", "Indian medical-exam jargon", "Competitor"),
      T("Weekly Score Predictor Test", "Tests, Recents", "Medical-only test", "Competitor"),
      T("Revise / revision / practise", "Anywhere", "British spelling; US says review / practice", "Team decision"),
    ],
  },
  {
    key: "cfa", name: "CFA", tutor: "Savvy", competitors: "UWorld, Salt Solutions, AnalystPrep",
    use: [
      T("Quiz", "Tab name and practice sets", "Salt “Quiz Creator”, AnalystPrep “Create Quiz”", "Competitor"),
      T("Create Quiz", "Builder button and title", "AnalystPrep “Create Quiz”", "Competitor"),
      T("Mock Exam", "Full exam (replaces Benchmark)", "All three competitors", "Competitor"),
      T("Topic", "Top curriculum level (e.g. Alternative Investments)", "CFA Institute; UWorld, Salt, AnalystPrep", "Official"),
      T("Learning Module", "Level below Topic (“Module” in tight pills)", "CFA Institute; UWorld “Topics and Learning Modules”", "Official"),
      T("Lesson", "Learning content", "Already in the app, clear", "Team decision"),
      T("Item set", "Question format", "UWorld and AnalystPrep", "Competitor"),
      T("Get study notes", "Tutor notes tool", "AnalystPrep “Study Notes” menu", "Competitor"),
      T("Review", "Review Entire Module, reminders", "UWorld “Review Mode”", "Competitor"),
      T("Savvy", "Tutor name", "Course persona in the app", "Team decision"),
    ],
    avoid: [
      T("Subject", "Quiz, Lessons, filters", "CFA calls this level Topic", "Official"),
      T("Topic (for the level below)", "“Topic 1 · 3 Lessons”", "That level is a Learning Module", "Official"),
      T("Self Assess / Self-Assessment", "Quiz button, builder title", "Oncourse medical wording", "Competitor"),
      T("Benchmark / Mini-Benchmark / Mini Mock", "Tests tab, start screen, report", "No competitor has a mini mock", "Competitor"),
      T("High Yield / Highest yield", "Filter pills, report badges, tutor tools", "Not used in product; also a bond term in CFA", "Competitor"),
      T("PYQ / past papers / Topper", "Anywhere", "CFA exam questions are never published", "Official"),
      T("Weekly Score Predictor Test", "Tests, Recents", "Medical-only test", "Competitor"),
      T("Revise / revision / practise", "Anywhere", "US says review / practice", "Team decision"),
    ],
  },
  {
    key: "lsat", name: "LSAT", tutor: "Casey", competitors: "7Sage, LSAT Demon, LSAC LawHub",
    use: [
      T("Practice", "Quiz tab name", "7Sage “Practice tab”, LSAT Demon “Practice”", "Competitor"),
      T("Drill", "A practice set", "7Sage, LSAT Demon, LawHub “drill sets”", "Competitor"),
      T("Create Drill", "Builder button and title", "7Sage “Create Drill”", "Competitor"),
      T("Practice Test", "Full test (replaces Benchmark)", "Students and platforms say practice test", "Team decision"),
      T("Section", "Only a full Logical Reasoning or Reading Comprehension block", "LSAC exam structure", "Official"),
      T("Skill", "Top-level list (e.g. Assumptions and flaws)", "LSAC “skills”; LSAT Demon “Skills” tab", "Official"),
      T("Topic / Lesson", "Level below Skill / learning content", "LSAT Demon “Topics”; 7Sage and Demon “Lessons”", "Competitor"),
      T("Practice History", "Recents heading", "7Sage and Demon “Drill History”", "Competitor"),
      T("Review", "Review Entire Topic, reminders", "7Sage “Blind Review”, Demon “Review Mistakes”", "Competitor"),
      T("Casey", "Tutor name", "Course persona in the app", "Team decision"),
      T("Get notes / Find lessons", "Tutor tools", "No LSAT product uses “high-yield”", "Competitor"),
    ],
    avoid: [
      T("Quiz", "Tab name and practice sets", "LSAT products say Drill / Practice", "Competitor"),
      T("Custom Drill", "Builder", "No product uses it as a label; 7Sage says Create Drill", "Competitor"),
      T("PrepTest", "Full tests", "LSAC brand name; students say practice test", "Team decision"),
      T("Mini practice test", "Tests tab", "No LSAT product has one", "Competitor"),
      T("Subject", "Quiz, Lessons, filters", "LSAT tests skills, not subjects", "Official"),
      T("Section (for the skill list)", "Quiz, Lessons", "Section means a full LR or RC block", "Official"),
      T("Self Assess / Benchmark", "Quiz button, Tests tab", "Oncourse medical wording", "Competitor"),
      T("High Yield", "Filter pills, tutor tools", "Not used by any LSAT product", "Competitor"),
      T("PYQ / Topper", "Anywhere", "Indian medical-exam jargon", "Competitor"),
      T("Revise / revision / practise", "Anywhere", "US says review / practice", "Team decision"),
    ],
  },
  {
    key: "bar", name: "BAR", tutor: "Casey", competitors: "JD Simplified (NextGen bar exam)",
    use: [
      T("Practice", "Quiz tab name", "JD Simplified “NextGen Practice”", "Competitor"),
      T("Drill / Custom Drill", "Practice set / builder", "Custom Drill chosen by the team for BAR", "Team decision"),
      T("Exam Simulation", "Full exam (replaces Benchmark)", "JD Simplified “Exam Simulations”", "Competitor"),
      T("Half Section / Full Section", "Simulation sizes", "JD Simplified simulation sizes", "Competitor"),
      T("Subject", "Subject list (Civil Procedure, Contracts…)", "NCBE subjects; JD Simplified “Subjects”", "Official"),
      T("Topic / Lesson", "Level below Subject / learning content", "JD Simplified “Subject → Module → Lesson”", "Competitor"),
      T("Outlines", "Tutor notes tool (“Get outlines”)", "JD Simplified “Outlines” nav item", "Competitor"),
      T("Multiple-choice / Integrated question set / Performance task", "Question formats", "NCBE NextGen formats", "Official"),
      T("Practice History", "Recents heading", "JD Simplified “History”", "Competitor"),
      T("Review", "Review Entire Topic, reminders", "JD Simplified “Back for Review”", "Competitor"),
      T("Casey", "Tutor name", "Course persona in the app", "Team decision"),
    ],
    avoid: [
      T("Quiz", "Tab name and practice sets", "BAR products say Practice / Drill", "Competitor"),
      T("MBE / MEE / MPT", "Anywhere", "Old bar exam; we follow NextGen only", "Team decision"),
      T("Self Assess / Benchmark / Mini-Benchmark", "Quiz button, Tests tab", "Oncourse medical wording", "Competitor"),
      T("Image Based", "Question type filter", "BAR questions have no image filter", "Team decision"),
      T("High Yield", "Filter pills, tutor tools", "Not used by any bar product in-product", "Competitor"),
      T("PYQ / Topper", "Anywhere", "Bar products say “NCBE-released questions”", "Competitor"),
      T("Revise / revision / practise", "Anywhere", "US says review / practice", "Team decision"),
    ],
  },
  {
    key: "mcat", name: "MCAT", tutor: "Rezzy", competitors: "UWorld, Blueprint, AAMC, Kaplan",
    use: [
      T("Quiz / Create Quiz", "Tab name, builder", "Kaplan “custom quizzes”; existing app term", "Competitor"),
      T("Custom", "Recents filter", "UWorld and Blueprint “custom”", "Competitor"),
      T("Full-Length Exam", "Full exam (replaces Benchmark)", "AAMC, Blueprint, UWorld “Full-Length”", "Official"),
      T("Half-Length Exam", "Short exam (replaces Mini-Benchmark)", "Blueprint and UWorld “half-length”", "Competitor"),
      T("Section", "Chem/Phys, CARS, Bio/Biochem, Psych/Soc", "AAMC structure", "Official"),
      T("Subject / Topic", "Subject list / level below", "UWorld “Subjects”, Blueprint “Topics”", "Competitor"),
      T("Passage-based / Discrete", "Question format filter", "AAMC “passage-based”, Blueprint “Discretes”", "Official"),
      T("High Yield", "Filter pills, tutor tools", "Familiar to pre-med students; Kaplan High-Yield badges", "Team decision"),
      T("Review", "Review Entire Topic, reminders", "US study verb", "Competitor"),
      T("Rezzy", "Tutor name (persona decision still open)", "Current app persona", "Team decision"),
    ],
    avoid: [
      T("Self Assess / Self-Assessment", "Quiz button, builder title", "Reads like AAMC's official product", "Competitor"),
      T("Benchmark / Mini-Benchmark", "Tests tab, start screen, report", "Oncourse medical test names", "Competitor"),
      T("SATA, Case Study, Cloze, Matrix… (NCLEX formats)", "Question format filter", "Every MCAT question is multiple choice", "Official"),
      T("medical / clinical / diagnosis / patient", "Games, readiness, privacy copy", "Pre-meds aren't clinicians yet", "Team decision"),
      T("PYQ / Topper / past papers", "Anywhere", "Students say “AAMC material”", "Competitor"),
      T("Weekly Score Predictor Test", "Tests, Recents", "Medical-only test", "Competitor"),
      T("Revise / revision / practise", "Anywhere", "US says review / practice", "Team decision"),
    ],
  },
  {
    key: "nclex", name: "NCLEX", tutor: "Rezzy", competitors: "UWorld, Archer, Kaplan, NCSBN",
    use: [
      T("Quiz / Create Quiz", "Tab name, builder", "Kaplan “Quiz”, “Quiz History”", "Competitor"),
      T("Readiness Assessment", "Full test (replaces Benchmark), only if NCLEX has benchmark tests", "Archer and UWorld", "Competitor"),
      T("Subject / Client Needs", "Subject list and its categories", "UWorld and Archer “subjects”; NCSBN Client Needs", "Official"),
      T("Case study, SATA, Cloze, Matrix, Drag and Drop, Hot Spot, Highlight", "Question format filter", "NCSBN and UWorld / Archer / Kaplan item names", "Official"),
      T("Probability of passing", "Report and scores", "UWorld “Probability of Passing”; NCLEX is pass/fail", "Competitor"),
      T("High Yield", "Filter pills, tutor tools", "Familiar to nursing students", "Team decision"),
      T("Review", "Review Entire Topic, Review topic, reminders", "US study verb", "Competitor"),
      T("Rezzy", "Tutor name (persona decision still open)", "Current app persona", "Team decision"),
    ],
    avoid: [
      T("Self Assess / Self-Assessment", "Quiz button, builder title", "UWorld sells readiness tests under that name", "Competitor"),
      T("Benchmark / Mini-Benchmark / Mini Assessment", "Tests tab, start screen, report", "No NCLEX product has a mini assessment", "Competitor"),
      T("Weekly Score Predictor Test / predicted score", "Tests, Recents, quiz result", "NCLEX is pass/fail", "Official"),
      T("Integrated, Reading, Ordering", "Question format filter", "Bar and LSAT formats; NCSBN says Drag and Drop", "Official"),
      T("Exhibit 1 / Exhibit 2", "Case study chart tabs", "Real tabs are Nurses' Notes, Vital Signs, Lab Results", "Official"),
      T("“scored as one question”", "Answer review", "NCSBN scores each case item", "Official"),
      T("diagnosis / first-line / physician terms", "Games, report cards", "Outside nursing scope", "Team decision"),
      T("PYQ / Topper / past papers", "Anywhere", "NCLEX items are confidential", "Official"),
      T("Revise / revision / practise", "Anywhere (e.g. “Revision topic” → “Review topic”)", "US says review / practice", "Team decision"),
    ],
  },
];

const shared = [
  T("Crack the clues / Solve clues, reveal the concept", "Play tab, Probe section and tile", "Replaces “Crack the case / reveal the case” for all six", "Team decision"),
  T("favorite, color, September 26, 2026", "Games and dates", "US spelling and date format", "Team decision"),
  T("Review Entire Topic (CFA: Review Entire Module)", "Last row of every topic in Lessons", "Replaces “Revise Whole Topic”", "Team decision"),
];

const srcTag = (s) => `<span class="gl-src gl-src-${s.split(" ")[0].toLowerCase()}">${s}</span>`;
const rows = (list, ok) => list.map((t) => `<tr><td class="gl-term ${ok ? "gl-ok" : "gl-no"}"><b>${ok ? "✓" : "✕"}</b>${t.term}</td><td>${t.where}</td><td>${t.why}</td><td>${srcTag(t.src)}</td></tr>`).join("");
const table = (title, list, ok) => `<h3 class="gl-h ${ok ? "gl-ok" : "gl-no"}">${title}</h3><div class="terms-table-wrap"><table class="terms-table gl-table"><thead><tr><th>Term</th><th>Where</th><th>Why</th><th>Evidence</th></tr></thead><tbody>${rows(list, ok)}</tbody></table></div>`;

function renderTerms(key) {
  document.querySelectorAll("[data-term-course]").forEach((b) => b.classList.toggle("active", b.dataset.termCourse === key));
  const c = termCourses.find((x) => x.key === key);
  document.getElementById("terms-body").innerHTML = key === "all"
    ? `<section class="terminology-section gl-card"><header class="section-heading"><div><p class="card-kicker">All courses</p><h2>Shared decisions</h2></div></header><div class="gl-pad">${table("Use", shared, true)}</div></section>`
    : `<section class="terminology-section gl-card"><header class="section-heading"><div><p class="card-kicker">${c.name} · tutor ${c.tutor}</p><h2>${c.name} terms</h2></div><div class="audit-meta"><span class="audit-chip source-chip">Competitors: ${c.competitors}</span></div></header>
      <div class="gl-pad">${table(`Use (${c.use.length})`, c.use, true)}${table(`Don't use (${c.avoid.length})`, c.avoid, false)}</div></section>`;
}

document.querySelectorAll("[data-term-course]").forEach((b) => b.addEventListener("click", () => renderTerms(b.dataset.termCourse)));
renderTerms(location.hash.slice(1) || "cpa");
