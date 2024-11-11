function showPopup(game) {
  if (!game || !game.image || !game.title || !game.description) {
    console.error("Invalid game object");
    return;
  }

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closePopup(this)">&times;</span>
      <img src="${game.image}" alt="${game.title}" class="modal-image" />
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <button class="buy-button">Comprar</button>
    </div>
  `;

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closePopup(modal);
    }
  });

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");
}

function closePopup(element) {
  element.closest(".modal").remove();
  document.body.classList.remove("modal-open");
}
