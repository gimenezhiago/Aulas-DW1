const navbar = document.querySelector(".navbar")
const lista = document.querySelector("nav ul")

navbar.addEventListener("click", () => {
  lista.classList.toggle("show")
  navbar.textContent = navbar.textContent === "☰" ? "✖" : "☰"
});
