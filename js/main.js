document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕" : "☰";
    });
  }

  document.querySelectorAll("[data-placeholder-link='true']").forEach(link => {
    link.addEventListener("click", event => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        alert("Este link ainda está por configurar. Edita o href no ficheiro HTML e coloca o endereço correto.");
      }
    });
  });

  document.querySelectorAll(".copy-button").forEach(button => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent);
        const old = button.textContent;
        button.textContent = "Copiado!";
        setTimeout(() => button.textContent = old, 1400);
      } catch {
        alert("Não foi possível copiar automaticamente. Seleciona o código e copia manualmente.");
      }
    });
  });
});