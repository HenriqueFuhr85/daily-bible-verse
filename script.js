// Quantos dias se passaram desde 1/1/1970 (no fuso horário local).
// Todo mundo vê o mesmo versículo no mesmo dia, e ele muda à meia-noite.
function dayNumber(date) {
  const localMidnight = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor(localMidnight / 86400000);
}

function verseForDate(date) {
  return VERSES[dayNumber(date) % VERSES.length];
}

const today = new Date();
let offset = 0; // 0 = hoje, -1 = ontem, +1 = amanhã...

const dateEl = document.getElementById("date");
const textEl = document.getElementById("verse-text");
const refEl = document.getElementById("verse-ref");
const statusEl = document.getElementById("status");

function selectedDate() {
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
}

function render() {
  const date = selectedDate();
  const verse = verseForDate(date);
  dateEl.textContent = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  textEl.textContent = `“${verse.text}”`;
  refEl.textContent = verse.ref;
  statusEl.textContent = "";
}

async function share() {
  const verse = verseForDate(selectedDate());
  const message = `“${verse.text}” — ${verse.ref}`;

  try {
    if (navigator.share) {
      await navigator.share({ title: "Versículo do Dia", text: message, url: location.href });
    } else {
      await navigator.clipboard.writeText(message);
      statusEl.textContent = "Versículo copiado!";
    }
  } catch (err) {
    // Usuário cancelou o compartilhamento, ou o navegador bloqueou a cópia.
    if (err.name !== "AbortError") {
      statusEl.textContent = "Não foi possível compartilhar.";
    }
  }
}

document.getElementById("prev").addEventListener("click", () => {
  offset--;
  render();
});

document.getElementById("next").addEventListener("click", () => {
  offset++;
  render();
});

document.getElementById("share").addEventListener("click", share);

render();
