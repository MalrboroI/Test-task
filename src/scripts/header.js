/**
 * Переключение классов для открытия/закрытия меню.
 * @param {HTMLElement} navigationWrapper - Контейнер навигации.
 * @param {HTMLElement} background - Фоновый элемент.
 */
const toggleMenuClasses = ({ navigationWrapper, background }) => {
  navigationWrapper?.classList.toggle("navigation__wrapper_open");
  background?.classList.toggle("navigation__wrapper-background_open");
  document.body.classList.toggle("body_stop-scrolling");
};

/**
 * Прокрутка страницы вверх при открытии меню.
 * @param {HTMLElement} navigationWrapper - Контейнер навигации.
 */
const scrollToTopIfMenuOpen = (navigationWrapper) => {
  if (navigationWrapper?.classList.contains("navigation__wrapper_open")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

/**
 * Обработчик клика по элементам меню.
 * @param {Event} event - Событие клика.
 * @param {HTMLElement} navigationWrapper - Контейнер навигации.
 * @param {HTMLElement} background - Фоновый элемент.
 */
const handleMenuClick = (event, navigationWrapper, background) => {
  const targetClasses = Array.from(event.target?.classList ?? []);

  // Элементы, по клику на которые меню должно закрываться
  const closeMenuOnClick = [
    "navigation__link",
    "button__icon",
    "button__text",
    "nav-menu-buttons__button",
  ];

  if (closeMenuOnClick.some((item) => targetClasses.includes(item))) {
    toggleMenuClasses({ navigationWrapper, background });
  }
};

/**
 * Инициализация логики для работы меню.
 */
export const addHeaderLogic = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#menu-toggle");
    const navigationWrapper = document.querySelector(".navigation__wrapper");
    const background = document.querySelector(
      ".navigation__wrapper-background"
    );

    console.log('Toggle:', toggle); // кнопка
    console.log('Navigation Wrapper:', navigationWrapper); // Проверка, что контейнер найден
    console.log('Background:', background); // Проверка, что фон найден

    // Обработчик клика по кнопке меню
    toggle?.addEventListener("click", () => {
      toggleMenuClasses({ navigationWrapper, background });
      scrollToTopIfMenuOpen(navigationWrapper);
    });

    // Обработчик клика по фону
    background?.addEventListener("click", () => {
      toggleMenuClasses({ navigationWrapper, background });
    });

    // Обработчик клика по элементам меню
    navigationWrapper?.addEventListener("click", (event) => {
      handleMenuClick(event, navigationWrapper, background);
    });
  });
};
