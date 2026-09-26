// Games review (local draft). Only Probe and Synapses, which every course has.
// Mocks follow the real screens at origin/dev 8ff57fb7c.
const gameCourses = {
  cpa: { name: "CPA", domain: "accounting", probeDomain: "accounting", concept: true, art: true, example: "Cash, Inventory, Receivables, Prepaids are all CURRENT ASSETS", clue: "I sit on the balance sheet and turn into cash within a year." },
  cfa: { name: "CFA", domain: "finance", probeDomain: "finance", concept: true, art: true, example: "Duration, Convexity, Coupon, Yield are all BOND MEASURES", clue: "I measure how much a bond's price moves when yields change." },
  lsat: { name: "LSAT", cluesTitle: true, domain: "reasoning", probeDomain: "logic", art: true, example: "Assumption, Flaw, Strengthen, Weaken are all LR QUESTION TYPES", clue: "I'm the unstated premise an argument needs to work." },
  bar: { name: "BAR", cluesTitle: true, domain: "legal", probeDomain: "legal", art: true, example: "Offer, Acceptance, Consideration, Capacity are all CONTRACT FORMATION", clue: "Without me, a promise usually isn't an enforceable contract." },
  mcat: { name: "MCAT", domain: "science", probeDomain: "science", concept: true, example: "Neuron, Synapse, Axon, Dendrite are all part of the NERVOUS SYSTEM", clue: "I speed up a reaction without being used up." },
  nclex: { name: "NCLEX", domain: "nursing", probeDomain: "nursing", example: "Neuron, Synapse, Axon, Dendrite are all part of the NERVOUS SYSTEM", clue: "I'm the first thing you check in the ABCs." },
};

const mark = (text, bad, good, proposed) => `<span class="${proposed ? (good ? "gm-new" : "") : (bad ? "gm-bad" : "")}">${text}</span>`;

const gameScreens = {
  play: (g, proposed) => {
    const retitle = true;
    const probeTitle = proposed ? "Crack the clues" : "Crack the case";
    const probeSub = proposed ? "Solve clues, reveal the concept" : "Solve clues, reveal the case";
    const art = g.art ? (proposed ? '<div class="gm-poster gm-poster-neutral"><i></i><i></i><i></i><i></i></div>' : '<div class="gm-poster gm-poster-organs">🫁 🫀<br>🫘 🍖</div>') : '<div class="gm-poster gm-poster-organs">🫁 🫀<br>🫘 🍖</div>';
    return `<div class="component-preview gm-phone">
      <div class="gm-play-head">PLAY</div>
      <div class="gm-featured"><small>MOST PLAYED</small><strong>Synapses</strong><p>Your current ${mark(proposed ? "favorite" : "favourite", true, true, proposed)} — ready whenever you are.</p></div>
      <div class="gm-section">${mark("Test your recall", false, false, proposed)}</div>
      <div class="gm-tile ${g.art ? (proposed ? "gm-tile-new" : "gm-tile-bad") : ""}">${art}<div><strong>Synapses</strong><small>Find the four hidden groups</small></div><b>▶</b></div>
      <div class="gm-section">${mark(probeTitle, retitle, retitle, proposed)}</div>
      <div class="gm-tile"><div class="gm-poster gm-poster-probe">?</div><div><strong>Probe</strong><small>${mark(probeSub, true, true, proposed)}</small></div><b>▶</b></div>
    </div>`;
  },
  synapsesStart: (g, proposed) => `<div class="component-preview gm-phone gm-center">
      <div class="gm-syn-icon"><i></i><i></i><i></i><i></i></div>
      <h3 class="gm-syn-title">Synapses</h3>
      <p class="gm-syn-sub">Make groups of 4 ${mark(proposed ? g.domain : "medical", true, true, proposed)} concepts that belong together</p>
      <p class="gm-syn-sub">${mark(proposed ? "September 26, 2026" : "26 September 2026", true, true, proposed)}</p>
      <u class="gm-link">HOW TO PLAY</u>
      <div class="gm-gif">demo animation</div>
      <button class="gm-btn gm-btn-syn" type="button" tabindex="-1">I AM READY!</button>
      <button class="gm-btn gm-btn-ghost" type="button" tabindex="-1">🏆 LEADERBOARD</button>
    </div>`,
  synapsesHow: (g, proposed) => `<div class="component-preview gm-phone gm-dim">
      <div class="gm-modal">
        <b class="gm-close">×</b>
        <h3>How to Play</h3>
        <p class="gm-modal-sub">Create 4 groups of 4 items each with something in common.</p>
        <p>• <strong>Examples:</strong> ${mark(proposed ? g.example : "Neuron, Synapse, Axon, Dendrite are all part of NEURON SYSTEM", true, true, proposed)}. 1, 2, 3, 4 are all Numbers.</p>
        <p>• ${mark(proposed ? "<strong>Colors</strong> show difficulty, from green (easy) to red (hard)." : "<strong>Colours</strong> of the group signify difficulty from green (easy) to hard (red).", true, true, proposed)}</p>
        <div class="gm-swatches"><i style="background:#59B971"></i><i style="background:#27A5A5"></i><i style="background:#E87D00"></i><i style="background:#FA4922"></i></div>
        <div class="gm-gif gm-gif-small">demo animation</div>
        <button class="gm-btn gm-btn-syn" type="button" tabindex="-1">Got It!</button>
      </div>
    </div>`,
  synapsesToast: (g, proposed) => `<div class="component-preview gm-phone">
      <div class="gm-toast">${mark(proposed ? "Perfect guess! Woohoo!" : "Perfect guess! Wohoo!", true, true, proposed)}</div>
      <div class="gm-group" style="background:#59B971">GROUP SOLVED</div>
      <div class="gm-grid">${Array.from({ length: 12 }, () => "<i></i>").join("")}</div>
      <p class="gm-syn-sub">Create groups of 4!</p>
    </div>`,
  probeStart: (g, proposed) => `<div class="component-preview gm-phone gm-center">
      <div class="gm-probe-logo">?</div>
      <h3 class="gm-probe-title">Probe</h3>
      <p class="gm-probe-sub">Solve the ${mark(proposed ? g.probeDomain : "medical", true, true, proposed)} mystery.<br>You have 5 clues.</p>
      <div class="gm-gif">how-to-play animation</div>
      <button class="gm-btn gm-btn-outline" type="button" tabindex="-1">📚 ALL SUBJECTS ⌄</button>
      <button class="gm-btn gm-btn-probe" type="button" tabindex="-1">PLAY</button>
      <button class="gm-btn gm-btn-ghost" type="button" tabindex="-1">🏆 LEADERBOARD</button>
    </div>`,
  probeChat: (g, proposed) => `<div class="component-preview gm-phone gm-chat">
      <div class="gm-chat-card">
        <div class="gm-chat-inner"><div class="gm-chat-head">🧑🏻 Probe Master</div><p>${g.clue}</p><strong>${mark(proposed ? "Can you guess what I am?" : "Can you guess what am I?", true, true, proposed)}</strong></div>
        <button class="gm-btn gm-btn-chat" type="button" tabindex="-1">GUESS NOW →</button>
      </div>
    </div>`,
};

function gameItems(key) {
  const g = gameCourses[key];
  const items = [];
  const playChanges = [["favourite", "favorite"]];
  playChanges.unshift(["Crack the case", "Crack the clues"], ["Solve clues, reveal the case", "Solve clues, reveal the concept"]);
  if (g.art) playChanges.push(["Synapses poster: organs", "Neutral poster (no medical art)"]);
  items.push({ id: `${key}-game-play`, screen: "play", area: "Play tab", title: "Play tab", where: "Tap Play in the bottom bar", changes: playChanges,
    rationale: `Verified in app/(app)/(tabs)/play.tsx. Probe answers are terms and concepts, not medical cases, so “case” becomes “concept”; the line keeps its familiar pattern.${g.art ? " The Synapses poster shows organs." : ""} “Favourite” is British spelling.` });
  items.push({ id: `${key}-game-syn-start`, screen: "synapsesStart", area: "Synapses", title: "Synapses start screen", where: "Play → tap Synapses",
    changes: [["medical concepts", `${g.domain} concepts`], ["26 September 2026", "September 26, 2026"]], rationale: "Verified in pages/games/synapses/index.tsx. The words in the game already come from the course; only this line and the UK date format are generic." });
  items.push({ id: `${key}-game-syn-how`, screen: "synapsesHow", area: "Synapses", title: "How to Play", where: "Play → Synapses → HOW TO PLAY",
    changes: [["NEURON SYSTEM example", g.example], ["Colours… green (easy) to hard (red)", "Colors show difficulty, from green (easy) to red (hard)"]], rationale: "Verified in components/games/synapses/HowToPlayModal.tsx." });
  items.push({ id: `${key}-game-syn-toast`, screen: "synapsesToast", area: "Synapses", title: "Correct-answer message", where: "Play → Synapses → I AM READY! → solve a group",
    changes: [["Wohoo", "Woohoo"]], rationale: "Typo shown after every correct group." });
  items.push({ id: `${key}-game-probe-start`, screen: "probeStart", area: "Probe", title: "Probe start screen", where: "Play → tap Probe",
    changes: [["Solve the medical mystery", `Solve the ${g.probeDomain} mystery`]], rationale: "Verified in pages/games/probe/index.tsx. Probe cases already come from the course." });
  items.push({ id: `${key}-game-probe-chat`, screen: "probeChat", area: "Probe", title: "Probe card in chat", where: "Tutor chat → ask to play Probe → card in the reply",
    changes: [["Can you guess what am I?", "Can you guess what I am?"]], rationale: "Grammar, components/chat/tools/Games/ProbeCardChat.tsx." });
  return items;
}

function renderGameCard(key, item, index) {
  const g = gameCourses[key];
  const render = gameScreens[item.screen];
  return `<article class="review-card" id="${item.id}">
    <header class="card-header"><p class="card-kicker">${String(index + 1).padStart(2, "0")} · ${item.area}</p><h2>${item.title}</h2><p class="card-where"><span>Where in the app</span>${item.where}</p></header>
    <div class="comparison-grid"><section class="version-panel"><div class="version-heading"><span class="version-label">Current</span></div>${render(g, false)}</section><section class="version-panel"><div class="version-heading"><span class="version-label">Proposed</span></div>${render(g, true)}</section></div>
    <div class="decision-row"><div><span class="change-type">${g.name} game copy</span><div class="change-list">${item.changes.map(([from, to]) => `<div class="change-line"><span class="old-copy">${from}</span><span class="arrow">→</span><span class="new-copy">${to}</span></div>`).join("")}</div></div><div class="decision-copy"><h4>Why this change</h4><p>${item.rationale}</p></div></div>
  </article>`;
}

function renderGames(key) {
  document.querySelectorAll("[data-game-course]").forEach((b) => b.classList.toggle("active", b.dataset.gameCourse === key));
  document.getElementById("games-review-list").innerHTML = gameItems(key).map((item, i) => renderGameCard(key, item, i)).join("");
}

document.querySelectorAll("[data-game-course]").forEach((b) => b.addEventListener("click", () => renderGames(b.dataset.gameCourse)));
renderGames(location.hash.slice(1) || "cpa");
