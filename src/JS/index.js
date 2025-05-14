document.addEventListener("DOMContentLoaded", () => {
  let cards = document.querySelectorAll(".card");
  let btnAll = document.getElementById("btnAll");
  let btnActive = document.getElementById("btnActive");
  let btnInative = document.getElementById("btnInative");
  let btnRemove = document.getElementById("remove");

  btnAll.addEventListener("click", () => {
    cards.forEach((card) => {
      card.style.display = "flex";
    });
  });

  btnActive.addEventListener("click", () => {
    cards.forEach((card) => {
      const active = card.querySelector(".switch")?.checked;
      card.style.display = active ? "flex" : "none";
    });
  });

  btnInative.addEventListener("click", () => {
    cards.forEach((card) => {
      const inative = card.querySelector(".switch")?.checked;
      card.style.display = inative ? "none" : "flex";
    });
  });
});
