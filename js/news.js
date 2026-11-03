/*
  ============================================================
  COMO ADICIONAR UMA NOTÍCIA À ON NEWS
  ============================================================
  1. Abre este ficheiro: js/news.js
  2. Dentro da lista NEWS, copia um dos exemplos.
  3. Altera title, date, category e text.
  4. Usa a data no formato AAAA-MM-DD (ex.: 2026-11-03).
  5. Guarda o ficheiro. A notícia aparece automaticamente na
     página ON News e, se for a mais recente, na página inicial.

  EXEMPLO:
  {
    title: "Novo produto ON TIC",
    date: "2026-11-04",
    category: "Produtos",
    text: "A ON TIC apresenta um novo produto."
  }

  Mantém uma vírgula entre notícias e não apagues os [ ].
*/

const NEWS = [
  {
    title: "ON TIC Cria sua propria linguagem de programação",
    date: "2026-11-03",
    category: "Conquistas",
    text: "A ON TIC Criou a ON Code a linguagem de programação oficial da ON TIC que pode ser acessada atravez do botão que está na pagina ON Code no Site"
  }
];

function formatNewsDate(dateString) {
  const date = new Date(dateString + "T12:00:00");
  return new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "long", year: "numeric" }).format(date);
}
function makeNewsCard(item) {
  const article = document.createElement("article");
  article.className = "news-card";
  const category = document.createElement("span");
  category.className = "tag";
  category.textContent = item.category;
  const date = document.createElement("time");
  date.dateTime = item.date;
  date.textContent = formatNewsDate(item.date);
  const title = document.createElement("h3");
  title.textContent = item.title;
  const text = document.createElement("p");
  text.textContent = item.text;
  article.append(category, date, title, text);
  return article;
}
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("news-list");
  const home = document.getElementById("home-latest-news");
  const sorted = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
  if (list) {
    list.replaceChildren();
    if (!sorted.length) list.textContent = "Ainda não existem notícias publicadas.";
    sorted.forEach(item => list.appendChild(makeNewsCard(item)));
  }
  if (home) {
    home.replaceChildren();
    sorted.slice(0, 3).forEach(item => home.appendChild(makeNewsCard(item)));
    if (!sorted.length) home.textContent = "Em breve serão publicadas notícias.";
  }
});