const $ = (selector) => document.querySelector(selector);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const toast = $("#toast");
let toastTimer;
let currentFeeling = 0;
let heartTimers = [];

const experiences = [
  { id: "notes", number: "01", title: "Pequeñas cosas que quiero que sepas", description: "Doce lucecitas para descubrir.", tint: "rgba(255,72,139,.26)", accent: "#ff95bd" },
  { id: "feelings", number: "02", title: "Lo que me haces sentir", description: "Diez mensajes, uno a la vez.", tint: "rgba(156,104,255,.2)", accent: "#c6a5ff" },
  { id: "universe", number: "03", title: "Nuestro pequeño universo", description: "Diez sorpresas entre las estrellas.", tint: "rgba(255,112,91,.2)", accent: "#ffc09d" },
  { id: "letter", number: "04", title: "Una carta para ti", description: "Para leer con calma.", tint: "rgba(233,55,114,.25)", accent: "#ff9abc" },
];

function heartSvg(className = "") {
  return `<svg class="${className}" viewBox="0 0 100 92" aria-hidden="true"><path pathLength="100" d="M50 84 C43 77,8 55,8 29 C8 12,29 7,40 20 L50 31 L60 20 C71 7,92 12,92 29 C92 55,57 77,50 84 Z" /></svg>`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-showing");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-showing"), 2500);
}

function makeAtmosphere() {
  const stars = $("#stars"); const particles = $("#particles");
  const amount = reducedMotion ? 26 : 64;
  for (let i = 0; i < amount; i += 1) {
    const star = document.createElement("i"); star.className = "star";
    star.style.left = `${Math.random() * 100}%`; star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--d", `${2 + Math.random() * 4}s`); star.style.setProperty("--o", `${.18 + Math.random() * .72}`);
    stars.append(star);
  }
  for (let i = 0; i < (reducedMotion ? 4 : 13); i += 1) {
    const dot = document.createElement("span"); dot.className = "particle"; dot.textContent = i % 3 ? "✦" : "♥";
    dot.style.left = `${Math.random() * 100}%`; dot.style.fontSize = `${.45 + Math.random() * .8}rem`;
    dot.style.setProperty("--d", `${10 + Math.random() * 11}s`); dot.style.setProperty("--drift", `${-50 + Math.random() * 100}px`);
    dot.style.animationDelay = `${-Math.random() * 18}s`; particles.append(dot);
  }
}

function showHome() {
  clearHeartTimers();
  $("#home").hidden = false; $("#experience").hidden = true; $("#finalScene").hidden = true;
  $("#backButton").hidden = true;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

function showExperience(type) {
  clearHeartTimers();
  const item = experiences.find((experience) => experience.id === type);
  $("#home").hidden = true; $("#finalScene").hidden = true; $("#experience").hidden = false; $("#backButton").hidden = false;
  $("#viewKicker").textContent = `${item.number} · PARA YAMI`; $("#viewTitle").textContent = item.title; $("#viewLead").textContent = item.description;
  const content = $("#viewContent"); content.innerHTML = "";
  if (type === "notes") renderNotes(content);
  if (type === "feelings") renderFeelings(content);
  if (type === "universe") renderUniverse(content);
  if (type === "letter") renderLetter(content);
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

function renderHome() {
  const grid = $("#experienceGrid");
  experiences.forEach((item) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "experience-card";
    button.style.setProperty("--tint", item.tint); button.style.setProperty("--accent", item.accent);
    button.innerHTML = `<span>${item.number}</span><div class="card-heart">${heartSvg("")}</div><h3>${item.title}</h3><p>${item.description}</p>`;
    button.addEventListener("click", () => showExperience(item.id)); grid.append(button);
  });
}

function renderNotes(target) {
  const grid = document.createElement("div"); grid.className = "note-grid";
  smallNotes.forEach((note) => {
    const card = document.createElement("button"); card.type = "button"; card.className = "note-card";
    card.innerHTML = `<span class="mini-heart">${heartSvg("")}</span><div><b>${note.title}</b><p>${note.text}</p></div>`;
    card.addEventListener("click", () => card.classList.toggle("is-open")); grid.append(card);
  });
  target.append(grid);
  const wrap = document.createElement("div"); wrap.className = "continue-wrap"; wrap.innerHTML = `<button class="primary-button" type="button">Seguir descubriendo <span aria-hidden="true">↗</span></button>`;
  wrap.querySelector("button").addEventListener("click", showHome); target.append(wrap);
}

function renderFeelings(target) {
  const player = document.createElement("div"); player.className = "feelings-player";
  player.innerHTML = `<div class="feeling-heart">${heartSvg("")}</div><span class="feeling-count"></span><p class="feeling-text"></p><div class="player-nav"><button type="button" aria-label="Mensaje anterior">←</button><button class="quiet-button" type="button">Quiero ver qué más hay</button><button type="button" aria-label="Mensaje siguiente">→</button></div>`;
  const paint = () => { player.querySelector(".feeling-count").textContent = `${String(currentFeeling + 1).padStart(2, "0")} / ${String(feelings.length).padStart(2, "0")}`; player.querySelector(".feeling-text").textContent = feelings[currentFeeling].text; player.querySelectorAll(".player-nav button")[0].disabled = currentFeeling === 0; player.querySelectorAll(".player-nav button")[2].disabled = currentFeeling === feelings.length - 1; const heart = player.querySelector(".feeling-heart"); heart.innerHTML = heartSvg(""); };
  player.querySelectorAll(".player-nav button")[0].addEventListener("click", () => { currentFeeling -= 1; paint(); });
  player.querySelectorAll(".player-nav button")[2].addEventListener("click", () => { currentFeeling += 1; paint(); });
  player.querySelector(".quiet-button").addEventListener("click", () => showExperience("universe")); paint(); target.append(player);
}

function renderUniverse(target) {
  const map = document.createElement("div"); map.className = "universe-map";
  const locations = [[10,17],[36,9],[65,17],[82,38],[67,64],[42,73],[17,62],[8,39],[32,43],[57,39]];
  const popup = document.createElement("div"); popup.className = "surprise-popup"; popup.innerHTML = `<h3>Elige un corazón</h3><p>Algunos detalles se descubren mejor poco a poco.</p>`;
  surprises.forEach((surprise, index) => {
    const node = document.createElement("button"); node.type = "button"; node.className = "surprise-node"; node.textContent = "♥"; node.style.left = `${locations[index][0]}%`; node.style.top = `${locations[index][1]}%`; node.setAttribute("aria-label", `Descubrir: ${surprise.title}`);
    node.addEventListener("click", () => { popup.innerHTML = `<h3>${surprise.title}</h3><p>${surprise.text}</p><small>✦ ${surprise.effect}</small>`; node.animate([{transform:"scale(1)"},{transform:"scale(1.22)"},{transform:"scale(1)"}],{duration:420,easing:"cubic-bezier(.16,1,.3,1)"}); }); map.append(node);
  }); map.append(popup); target.append(map);
  const wrap=document.createElement("div");wrap.className="continue-wrap";wrap.innerHTML=`<button class="primary-button" type="button">Hay algo más para ti <span aria-hidden="true">↗</span></button>`;wrap.querySelector("button").addEventListener("click",()=>showExperience("letter"));target.append(wrap);
}

function renderLetter(target) {
  const stage = document.createElement("div"); stage.className = "envelope-stage";
  stage.innerHTML = `<div class="envelope"><div class="envelope-copy"><p class="kicker">UN MOMENTO PARA LEER CON CALMA</p><h3>Una carta para ti</h3><p>Hay cosas que quiero decirte con calma, sin prisas y sin que se me olviden las palabras.</p><button class="primary-button" type="button">Abrir mi carta</button></div></div>`;
  stage.querySelector("button").addEventListener("click", () => {
    stage.innerHTML = `<article class="letter-paper"><h3>Carta de Iván para Yamileth</h3><p>${letterText}</p><div class="continue-wrap"><button class="primary-button" type="button">Hay un último detalle para ti <span aria-hidden="true">♥</span></button></div></article>`;
    stage.querySelector("button").addEventListener("click", showFinal);
  }); target.append(stage);
}

function clearHeartTimers() { heartTimers.forEach(clearTimeout); heartTimers = []; }
function heartCoordinates() {
  return [ [[18,34,3],[66,82,3]], [[7,45,6],[55,93,6]], [[6,94,14]], [[9,91,14]], [[13,87,12]], [[18,82,10]], [[22,78,10]], [[27,73,8]], [[32,68,6]], [[38,62,4]], [[44,56,2]], [[47,53,2]] ];
}
function placeLoveWords() {
  const holder = $("#loveWords"); holder.innerHTML = ""; let item = 0;
  const colors = ["#fff8fb", "#ffc1d7", "#ff83ae", "#f4c7ff"];
  heartCoordinates().forEach((ranges, row) => ranges.forEach(([start, end, count]) => {
    const step = (end - start) / count;
    for (let column = 0; column < count; column += 1) {
      const language = loveLanguages[item++]; const word = document.createElement("span"); word.className = "love-word"; word.textContent = language.phrase;
      word.style.left = `${start + column * step}%`; word.style.top = `${6 + row * 7.1}%`; word.style.setProperty("--w", `${step * .98}%`); word.style.setProperty("--word", colors[(item + row) % colors.length]); word.setAttribute("aria-label", `${language.language}: ${language.phrase}`); word.title = language.language; holder.append(word);
    }
  }));
}
function completeHeart() { clearHeartTimers(); document.querySelectorAll(".love-word").forEach((word) => word.classList.add("is-visible")); $("#completeHeart").hidden = true; $("#finalMessage").hidden = false; }
function startHeart() {
  placeLoveWords(); const heart = $("#loveHeart"); heart.classList.remove("is-active"); void heart.offsetWidth; heart.classList.add("is-active");
  const words = [...document.querySelectorAll(".love-word")]; const reveal = () => words.forEach((word, index) => heartTimers.push(setTimeout(() => { word.classList.add("is-visible"); if (index === words.length - 1) completeHeart(); }, reducedMotion ? 0 : 1500 + index * 110)));
  reveal();
}
function showFinal() { $("#home").hidden = true; $("#experience").hidden = true; $("#finalScene").hidden = false; $("#backButton").hidden = false; $("#completeHeart").hidden = false; $("#finalMessage").hidden = true; window.scrollTo({top:0,behavior:reducedMotion?"auto":"smooth"}); startHeart(); }

makeAtmosphere(); renderHome();
$("#enterButton").addEventListener("click", () => { $("#intro").hidden = true; $("#app").hidden = false; showHome(); });
$("#homeButton").addEventListener("click", showHome); $("#backButton").addEventListener("click", showHome); $("#completeHeart").addEventListener("click", completeHeart); $("#returnHome").addEventListener("click", showHome);

