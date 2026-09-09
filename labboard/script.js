const people = [
  {
    id: "maya", name: "Maya Chen", initials: "MC", role: "PhD · Representation Learning", open: true, color: "#9fc4ff",
    updates: [
      { message: "Tinkering with OSWorld 2.0", topics: ["Computer use", "Agents"], time: "Today, 10:14" },
      { message: "Reading about continual learning in LLMs", topics: ["Continual learning"], time: "Monday" },
      { message: "Trying sparse probes on vision-language models", topics: ["Interpretability"], time: "Last Thursday" },
      { message: "Thinking about features that only appear at inference time", topics: ["Representation learning"], time: "Aug 29" },
      { message: "Comparing SAE dictionaries across model checkpoints", topics: ["SAEs"], time: "Aug 25" },
      { message: "Looking for a good multimodal evaluation set", topics: ["Collaboration"], time: "Aug 19" }
    ]
  },
  {
    id: "elias", name: "Elias Haddad", initials: "EH", role: "MSc · Robot Learning", open: true, color: "#ffb37f",
    updates: [
      { message: "Exploring world models for long-horizon household tasks", topics: ["World models", "Robotics"], time: "Yesterday" },
      { message: "Playing with smaller action spaces for mobile manipulation", topics: ["Robot learning"], time: "Last Thursday" },
      { message: "Looking for weird indoor spaces to test navigation in", topics: ["Collaboration"], time: "Last week" },
      { message: "Trying to make sim-to-real failures easier to inspect", topics: ["Simulation"], time: "Aug 28" },
      { message: "Reading about latent action models", topics: ["World models"], time: "Aug 21" }
    ]
  },
  {
    id: "priya", name: "Priya Nair", initials: "PN", role: "PhD · AI Safety", open: false, color: "#c4adff",
    updates: [
      { message: "Thinking about evals that models can’t recognize", topics: ["AI safety", "Evaluation"], time: "Today, 09:02" },
      { message: "Reading the recent work on model sandbagging", topics: ["Evals"], time: "Last Friday" },
      { message: "Collecting strange failure modes from model-written tests", topics: ["Agents"], time: "Last week" },
      { message: "Exploring hidden-state probes for deceptive behavior", topics: ["Interpretability"], time: "Aug 27" },
      { message: "Revisiting threat models for autonomous research agents", topics: ["Threat modeling"], time: "Aug 18" }
    ]
  },
  {
    id: "jon", name: "Jon Bell", initials: "JB", role: "MSc · Natural Language Processing", open: true, color: "#90dbbe",
    updates: [
      { message: "Prototyping RAG over a constantly changing paper collection", topics: ["Retrieval", "NLP"], time: "Today, 11:31" },
      { message: "Reading about citation verification for scientific assistants", topics: ["Grounding"], time: "Tuesday" },
      { message: "Looking for an evolving scientific dataset to test on", topics: ["Collaboration"], time: "Last Friday" },
      { message: "Trying query decomposition on literature-review questions", topics: ["Retrieval"], time: "Aug 26" },
      { message: "Comparing paper chunking strategies again", topics: ["RAG"], time: "Aug 20" }
    ]
  },
  {
    id: "sofia", name: "Sofia Alvarez", initials: "SA", role: "PhD · Generative Models", open: false, color: "#ff9eae",
    updates: [
      { message: "Exploring local control for diffusion model composition", topics: ["Diffusion", "Control"], time: "Today, 08:48" },
      { message: "Tinkering with test-time interventions in image models", topics: ["Generative models"], time: "Monday" },
      { message: "Reading about flow matching for video", topics: ["Video"], time: "Last Wednesday" },
      { message: "Trying to separate style and layout interventions", topics: ["Controllability"], time: "Aug 24" },
      { message: "Collecting tricky compositional prompts", topics: ["Evaluation"], time: "Aug 16" }
    ]
  },
  {
    id: "noah", name: "Noah Williams", initials: "NW", role: "MSc · ML Systems", open: true, color: "#f1d46f",
    updates: [
      { message: "Profiling MoE routing overhead on two consumer GPUs", topics: ["Systems", "MoE"], time: "Today, 12:06" },
      { message: "Trying quantized KV caches for long-context inference", topics: ["Efficiency"], time: "Yesterday" },
      { message: "Reading about speculative decoding beyond language models", topics: ["Inference"], time: "Last Friday" },
      { message: "Looking for workloads that break our profiler", topics: ["Collaboration"], time: "Aug 30" },
      { message: "Benchmarking small-batch serving on older GPUs", topics: ["Serving"], time: "Aug 22" }
    ]
  },
  {
    id: "amina", name: "Amina Okafor", initials: "AO", role: "PhD · Multimodal Learning", open: true, color: "#79d9df",
    updates: [
      { message: "Exploring audio-language models for field recordings", topics: ["Audio", "Multimodal"], time: "Today, 09:47" },
      { message: "Reading about representation collapse across modalities", topics: ["Representation learning"], time: "Monday" },
      { message: "Trying contrastive objectives on noisy paired data", topics: ["Self-supervision"], time: "Last Thursday" },
      { message: "Looking for unlabeled environmental audio", topics: ["Collaboration"], time: "Aug 27" },
      { message: "Tinkering with temporal pooling strategies", topics: ["Audio"], time: "Aug 17" }
    ]
  },
  {
    id: "lucas", name: "Lucas Martin", initials: "LM", role: "MSc · Reinforcement Learning", open: false, color: "#a7e477",
    updates: [
      { message: "Playing with curriculum generation for open-ended agents", topics: ["RL", "Agents"], time: "Yesterday, 15:12" },
      { message: "Reading old papers on novelty search", topics: ["Open-endedness"], time: "Monday" },
      { message: "Trying tiny environments with very long horizons", topics: ["Exploration"], time: "Last week" },
      { message: "Thinking about evaluation without a fixed task set", topics: ["Evaluation"], time: "Aug 23" }
    ]
  },
  {
    id: "hana", name: "Hana Kim", initials: "HK", role: "PhD · Human–AI Interaction", open: true, color: "#ffadcf",
    updates: [
      { message: "Interviewing researchers who use coding agents every day", topics: ["HCI", "Agents"], time: "Today, 10:52" },
      { message: "Exploring interfaces for inspecting an agent’s uncertainty", topics: ["Interfaces"], time: "Tuesday" },
      { message: "Looking for volunteers who delegate messy coding tasks", topics: ["Collaboration"], time: "Last Friday" },
      { message: "Sketching better handoff patterns for long-running agents", topics: ["Interaction design"], time: "Aug 28" },
      { message: "Reading about calibrated trust in automation", topics: ["Trust"], time: "Aug 20" }
    ]
  },
  {
    id: "theo", name: "Théo Roy", initials: "TR", role: "MSc · Computational Neuroscience", open: true, color: "#b9a6f4",
    updates: [
      { message: "Comparing neural population dynamics with transformer residual streams", topics: ["Neuroscience", "Transformers"], time: "Today, 08:21" },
      { message: "Reading about dynamical systems views of in-context learning", topics: ["Theory"], time: "Monday" },
      { message: "Tinkering with low-dimensional trajectory visualizations", topics: ["Visualization"], time: "Last Thursday" },
      { message: "Looking for feedback on a cross-domain analogy", topics: ["Collaboration"], time: "Aug 26" },
      { message: "Exploring attractor structure in small transformers", topics: ["Mechanistic interpretability"], time: "Aug 15" }
    ]
  }
];

const MAX_VISIBLE = 3;
const board = document.querySelector("#people-board");
const searchInput = document.querySelector("#search-updates");
const noResults = document.querySelector("#no-results");
const composer = document.querySelector("#composer");
const historyDialog = document.querySelector("#history-dialog");
const historyContent = document.querySelector("#history-content");
const form = document.querySelector("#update-form");
const messageInput = form.elements.message;
const characterCount = document.querySelector("#character-count");
const personSelect = document.querySelector("#person-select");

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function cardTemplate(update) {
  return `<article class="update-card">
    <p class="update-message">${escapeHtml(update.message)}</p>
    ${update.topics.length ? `<div class="tags">${update.topics.map((topic) => `<span class="tag">${escapeHtml(topic)}</span>`).join("")}</div>` : ""}
    <div class="author-row"><time>${escapeHtml(update.time)}</time></div>
  </article>`;
}

function laneTemplate(person, matchingUpdates, searching) {
  const visibleUpdates = matchingUpdates.slice(0, MAX_VISIBLE);
  const hiddenCount = matchingUpdates.length - visibleUpdates.length;
  const historyLabel = searching
    ? `View all ${person.updates.length} updates`
    : `${hiddenCount} older update${hiddenCount === 1 ? "" : "s"}`;
  const historyButton = person.updates.length > MAX_VISIBLE
    ? `<button class="view-history" type="button" data-history="${person.id}">${historyLabel} →</button>`
    : "";
  const status = person.open ? "Open to collaborate" : "Focused for now";

  return `<section class="lane" data-person="${person.id}" style="--person-color: ${person.color}">
    <header class="lane-header">
      <div>
        <span class="person-avatar" style="--avatar: ${person.color}" aria-hidden="true">${person.initials}</span>
        <div class="person-heading"><h2>${escapeHtml(person.name)}</h2><p>${escapeHtml(person.role)}</p></div>
        <span class="collab-badge${person.open ? " open" : ""}" aria-hidden="true"></span>
      </div>
      <p class="lane-status${person.open ? " open" : ""}">${status}</p>
    </header>
    <div class="card-stack">${visibleUpdates.map(cardTemplate).join("")}</div>
    ${historyButton}
  </section>`;
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const columns = people.map((person) => {
    const personMatches = [person.name, person.role].join(" ").toLowerCase().includes(query);
    const matchingUpdates = person.updates.filter((update) => {
      const updateMatches = [update.message, ...update.topics].join(" ").toLowerCase().includes(query);
      return !query || personMatches || updateMatches;
    });
    return matchingUpdates.length ? laneTemplate(person, matchingUpdates, Boolean(query)) : "";
  }).join("");

  board.innerHTML = columns;
  board.hidden = !columns;
  noResults.hidden = Boolean(columns);
}

function openHistory(personId) {
  const person = people.find((entry) => entry.id === personId);
  if (!person) return;
  const status = person.open ? "Open to collaborate" : "Focused for now";
  historyContent.innerHTML = `
    <header class="history-person">
      <span class="person-avatar" style="--avatar: ${person.color}" aria-hidden="true">${person.initials}</span>
      <div><h2>${escapeHtml(person.name)}</h2><p>${escapeHtml(person.role)} · ${status}</p></div>
    </header>
    <p class="history-summary">All ${person.updates.length} updates · newest first</p>
    <div class="history-list">${person.updates.map(cardTemplate).join("")}</div>`;
  historyDialog.showModal();
}

function closeComposer() { composer.close(); }
function closeHistory() { historyDialog.close(); }

personSelect.innerHTML = people.map((person) => `<option value="${person.id}">${escapeHtml(person.name)}</option>`).join("");
document.querySelector("#open-composer").addEventListener("click", () => composer.showModal());
document.querySelector("#close-composer").addEventListener("click", closeComposer);
document.querySelector("#cancel-composer").addEventListener("click", closeComposer);
document.querySelector("#close-history").addEventListener("click", closeHistory);
board.addEventListener("click", (event) => {
  const button = event.target.closest("[data-history]");
  if (button) openHistory(button.dataset.history);
});
searchInput.addEventListener("input", render);
messageInput.addEventListener("input", () => { characterCount.textContent = String(messageInput.value.length); });
composer.addEventListener("click", (event) => { if (event.target === composer) closeComposer(); });
historyDialog.addEventListener("click", (event) => { if (event.target === historyDialog) closeHistory(); });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const person = people.find((entry) => entry.id === data.get("person"));
  if (!person) return;
  person.updates.unshift({
    message: data.get("message").trim(),
    topics: data.get("topics").split(",").map((topic) => topic.trim()).filter(Boolean).slice(0, 3),
    time: "Just now"
  });
  form.reset();
  characterCount.textContent = "0";
  searchInput.value = "";
  closeComposer();
  render();
  document.querySelector(`[data-person="${person.id}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
});

render();

