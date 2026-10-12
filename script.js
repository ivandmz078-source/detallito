// ── Personaliza la música aquí cuando agregues un archivo autorizado a assets/audio/ ──
// Ejemplo: { title: "Piano para Yamileth", artist: "Tu artista autorizado", src: "assets/audio/tu-pista.mp3" }
// Mantén la lista vacía hasta que el archivo exista: así nunca se muestra una pista rota.
const playlist = [];

const chapters = [
  ["01", "Cuando nuestros caminos se encontraron", "encuentros", "✦", "rgba(193, 144, 248, .23)", "#d9a3ff"],
  ["02", "Las conversaciones que nos acercaron", "complicidad", "✧", "rgba(248, 164, 113, .20)", "#ffd0a4"],
  ["03", "Descubrirte poco a poco", "admiración", "☾", "rgba(116, 181, 255, .2)", "#b7dcff"],
  ["04", "La ternura de las pequeñas cosas", "ternura", "♥", "rgba(255, 130, 188, .23)", "#ffb8d7"],
  ["05", "Todo lo que me hace admirarte", "gratitud", "✦", "rgba(255, 197, 101, .20)", "#ffe09c"],
  ["06", "Aunque todavía haya momentos por vivir", "ilusión", "↗", "rgba(130, 218, 212, .19)", "#acebe5"],
  ["07", "Nuestro pequeño universo", "alegría", "☀", "rgba(255, 175, 103, .20)", "#ffd3a1"],
  ["08", "Elegirte desde la libertad", "confianza", "∞", "rgba(151, 154, 255, .20)", "#c3c4ff"],
  ["09", "El amor que permanece", "cariño", "♥", "rgba(246, 105, 146, .20)", "#ffb0c8"],
  ["10", "Todas las páginas que todavía nos quedan", "esperanza", "✧", "rgba(255, 213, 137, .20)", "#ffe5a6"],
];

const $ = (selector) => document.querySelector(selector);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const stars = $("#stars");
const hearts = $("#floatingHearts");
const audio = $("#ambientAudio");
const toast = $("#toast");
let toastTimer;

function makeSky() {
  const starCount = reducedMotion ? 25 : 60;
  const heartCount = reducedMotion ? 4 : 12;
  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = (Math.random() * .7 + .15).toFixed(2);
    star.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
    stars.append(star);
  }
  for (let i = 0; i < heartCount; i += 1) addBackgroundHeart(true);
}

function addBackgroundHeart(initial = false) {
  const heart = document.createElement("span");
  heart.className = "bg-heart";
  heart.textContent = Math.random() > .45 ? "♥" : "✦";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${.6 + Math.random() * 1.1}rem`;
  heart.style.setProperty("--duration", `${9 + Math.random() * 12}s`);
  heart.style.setProperty("--drift", `${-50 + Math.random() * 100}px`);
  heart.style.animationDelay = initial ? `${-Math.random() * 18}s` : "0s";
  hearts.append(heart);
  if (!initial) window.setTimeout(() => heart.remove(), 21000);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

let currentIndex = 0;
let surpriseHistory = [];
let favorites = new Set();
try { favorites = new Set(JSON.parse(localStorage.getItem("yamileth-favorites") || "[]")); } catch { /* localStorage may be unavailable */ }

function saveFavorites() {
  try { localStorage.setItem("yamileth-favorites", JSON.stringify([...favorites])); } catch { /* the page still works for this visit */ }
}

function renderFavorites() {
  const section = $("#favoritos");
  const list = $("#favoritesList");
  list.innerHTML = "";
  if (!favorites.size) { section.hidden = true; return; }
  section.hidden = false;
  [...favorites].sort((a, b) => a - b).forEach((id) => {
    const poem = poems.find((item) => item.id === id);
    if (!poem) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "favorite-item";
    button.innerHTML = `<span>♥</span><b>${poem.title}</b><small>${poem.author}</small>`;
    button.addEventListener("click", () => openPoem(poem.id - 1));
    list.append(button);
  });
}

function renderPoem() {
  const poem = poems[currentIndex];
  const chapter = String(poem.chapter).padStart(2, "0");
  $("#readerChapterNumber").textContent = chapter;
  $("#readerChapterTitle").textContent = poem.chapterTitle.toUpperCase();
  $("#poemCounter").textContent = `Poema ${String(poem.id).padStart(2, "0")} de ${poems.length}`;
  $("#poemLanguage").textContent = poem.language.toUpperCase();
  $("#readerTitle").textContent = poem.title;
  $("#poemAuthor").textContent = poem.author;
  $("#poemText").textContent = poem.text;
  $("#poemSource").href = poem.source;
  $("#readingProgress").style.width = `${((poem.id / poems.length) * 100).toFixed(1)}%`;
  const saved = favorites.has(poem.id);
  const favoriteButton = $("#favoriteButton");
  favoriteButton.setAttribute("aria-pressed", String(saved));
  favoriteButton.innerHTML = `<span aria-hidden="true">${saved ? "♥" : "♡"}</span> ${saved ? "Guardado" : "Guardar"}`;
  $("#previousPoem").disabled = currentIndex === 0;
  $("#nextPoem").disabled = currentIndex === poems.length - 1;
  const reader = $("#poemReader");
  reader.classList.remove("is-changing");
  void reader.offsetWidth;
  reader.classList.add("is-changing");
}

function openPoem(index, shouldScroll = true) {
  currentIndex = Math.max(0, Math.min(index, poems.length - 1));
  $("#poemas").hidden = false;
  renderPoem();
  if (shouldScroll) $("#poemas").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
}

function surprisePoem() {
  const choices = poems.map((_, index) => index).filter((index) => index !== currentIndex && !surpriseHistory.includes(index));
  const next = choices[Math.floor(Math.random() * choices.length)] ?? (currentIndex + 1) % poems.length;
  surpriseHistory = [...surpriseHistory, next].slice(-5);
  addBackgroundHeart();
  openPoem(next, false);
  showToast(`El universo eligió el ${poems[next].title}.`);
}

function buildChapters() {
  const grid = $("#chapterGrid");
  chapters.forEach(([number, title, theme, icon, tint, glow]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-card";
    button.style.setProperty("--chapter-tint", tint);
    button.style.setProperty("--chapter-glow", glow);
    button.style.setProperty("--chapter-shadow", `${glow}26`);
    button.innerHTML = `<span class="chapter-number">CAPÍTULO ${number}</span><span class="chapter-icon" aria-hidden="true">${icon}</span><h3>${title}</h3><span class="chapter-sub">${theme}</span>`;
    button.addEventListener("click", () => {
      $("#chapterMessage").innerHTML = `<span aria-hidden="true">${icon}</span><p><strong>Capítulo ${number}:</strong> ${title}. Abriendo su primer soneto.</p>`;
      button.animate([{ transform: "scale(1)" }, { transform: "scale(.97)" }, { transform: "scale(1)" }], { duration: 280, easing: "cubic-bezier(.16, 1, .3, 1)" });
      addBackgroundHeart();
      openPoem((Number(number) - 1) * 10);
    });
    grid.append(button);
  });
}

async function startMusic() {
  if (!playlist.length) return false;
  const track = playlist[0];
  if (audio.dataset.track !== track.src) {
    audio.src = track.src;
    audio.dataset.track = track.src;
    audio.volume = .16;
  }
  try {
    await audio.play();
    $("#soundControl").hidden = false;
    $("#soundButton").textContent = "Ⅱ";
    $("#soundButton").setAttribute("aria-label", "Pausar música");
    return true;
  } catch (error) {
    return false;
  }
}

function setEntryCopy() {
  if (playlist.length) {
    $("#enterButton").innerHTML = `Entrar con música <span aria-hidden="true">♫</span>`;
    $("#entryNote").textContent = "Piano suave · volumen bajo";
  }
}

async function enterExperience() {
  const page = $("#pageContent");
  const entry = $("#entryScreen");
  const musicStarted = await startMusic();
  if (playlist.length && !musicStarted) showToast("Tu navegador pidió un toque para iniciar la música. Vuelve a tocar el botón de sonido cuando quieras.");
  page.removeAttribute("aria-hidden");
  page.classList.add("is-visible");
  entry.classList.add("is-leaving");
  window.setTimeout(() => entry.remove(), 550);
}

function setupAudioControls() {
  $("#soundButton").addEventListener("click", async () => {
    if (audio.paused) {
      const started = await startMusic();
      if (!started) showToast("No se pudo encontrar la pista. Revisa assets/audio/.");
    } else {
      audio.pause();
      $("#soundButton").textContent = "♫";
      $("#soundButton").setAttribute("aria-label", "Reproducir música");
    }
  });
  $("#muteButton").addEventListener("click", () => {
    audio.muted = !audio.muted;
    $("#muteButton").textContent = audio.muted ? "×" : "◌";
    $("#muteButton").setAttribute("aria-label", audio.muted ? "Activar sonido" : "Silenciar música");
  });
  audio.addEventListener("error", () => showToast("No se encontró la pista configurada. La página sigue funcionando sin música."));
}

function setupReveals() {
  if (reducedMotion) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-revealed"));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); }
  }), { threshold: .13 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

makeSky();
buildChapters();
setEntryCopy();
setupAudioControls();
setupReveals();
$("#enterButton").addEventListener("click", enterExperience);
$("#sparkButton").addEventListener("click", () => { for (let i = 0; i < 8; i += 1) window.setTimeout(() => addBackgroundHeart(), i * 80); showToast("Unas lucecitas extra, solo porque sí."); });
$("#replayButton").addEventListener("click", () => { for (let i = 0; i < 16; i += 1) window.setTimeout(() => addBackgroundHeart(), i * 55); showToast("El universo volvió a encenderse."); });
$("#previousPoem").addEventListener("click", () => openPoem(currentIndex - 1, false));
$("#nextPoem").addEventListener("click", () => openPoem(currentIndex + 1, false));
$("#surpriseButton").addEventListener("click", surprisePoem);
$("#favoriteButton").addEventListener("click", () => {
  const id = poems[currentIndex].id;
  if (favorites.has(id)) { favorites.delete(id); showToast("Se quitó de tus favoritos."); }
  else { favorites.add(id); showToast("Guardado entre tus favoritos."); }
  saveFavorites(); renderFavorites(); renderPoem();
});
renderFavorites();

