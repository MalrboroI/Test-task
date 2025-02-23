import { addHeaderLogic } from "../src/scripts/header";
import { initCardsService } from "./scripts/addCard";
import "../src/style/Main.css";

document.addEventListener("DOMContentLoaded", () => {
  addHeaderLogic();

  // Инициализация сервиса для работы с карточками
  initCardsService({
    loadButtonSelector: "#load-button",
    spinnerContainerSelector: "#spinner-container",
    cardsContainerSelector: "#cards-container",
  });
});
