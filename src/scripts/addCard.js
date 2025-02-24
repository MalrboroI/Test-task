import { BASE_HOST } from "../utils/contans";

//  Сервис для работы с карточками
const fetchPosts = async (start, limit) => {
  const response = await fetch(
    `${BASE_HOST}/posts?_start=${start}&_limit=${limit}`
  );
  return response.json();
};

/**
 * Создание элемента карточки
 * @param {Object} post - Данные поста
 * @returns {HTMLElement} - Элемент карточки
 */
const createCardElement = (post) => {
  const card = document.createElement("article");
  card.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("card__image");
  image.src = `${BASE_HOST}/photos/url`;
  image.alt = "img";
  card.appendChild(image);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const header = document.createElement("h3");
  header.classList.add("card__header");
  header.textContent = post.id;
  cardContent.appendChild(header);

  const text = document.createElement("p");
  text.classList.add("card__text");
  text.textContent = post.body;
  cardContent.appendChild(text);

  const button = document.createElement("a");
  button.href = "#";
  button.classList.add("card__button");
  button.textContent = "Continue reading";
  cardContent.appendChild(button);

  card.appendChild(cardContent);
  return card;
};

/**
 * Инициализация сервиса для работы с карточками
 * @param {Object} options - Параметры инициализации
 * @param {string} options.loadButtonSelector - Селектор кнопки "Загрузить еще"
 * @param {string} options.spinnerContainerSelector - Селектор контейнера спиннера
 * @param {string} options.cardsContainerSelector - Селектор контейнера карточек
 */
export const initCardsService = ({
  loadButtonSelector,
  spinnerContainerSelector,
  cardsContainerSelector,
}) => {
  let loadedCardLength = 0; // Количество загруженных карточек
  const maxCardsAmount = 30; // Максимальное количество карточек

  const loadButton = document.querySelector(loadButtonSelector);
  const spinnerContainer = document.querySelector(spinnerContainerSelector);
  const cardsContainer = document.querySelector(cardsContainerSelector);

  // Открытие спиннера загрузки

  const openSpinner = () => {
    spinnerContainer?.classList.add("spinner__container_open");
  };

  //  Закрытие спиннера загрузки
  const closeSpinner = () => {
    spinnerContainer?.classList.remove("spinner__container_open");
  };

  /**
   * Загрузка карточек
   * @param {number} limit - Количество карточек для загрузки.
   */
  const loadCards = async (limit = 5) => {
    if (loadedCardLength >= maxCardsAmount) return;

    try {
      openSpinner();
      loadButton.disabled = true;

      const posts = await fetchPosts(loadedCardLength, limit);
      const fragment = document.createDocumentFragment();

      posts.forEach((post) => {
        const card = createCardElement(post);
        fragment.appendChild(card);
      });

      cardsContainer.appendChild(fragment);
      loadedCardLength += posts.length;

      if (loadedCardLength >= maxCardsAmount) {
        loadButton.disabled = true;
      }
    } catch (error) {
      console.error("Ошибка загрузки карточек:", error);
    } finally {
      closeSpinner();
      loadButton.disabled = false;
    }
  };

  // Добавление обработчика на кнопку "Загрузить еще"
  loadButton?.addEventListener("click", () => loadCards());

  // Первоначальная загрузка карточек
  loadCards();
};
