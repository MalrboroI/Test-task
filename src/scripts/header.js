// Ф-я для открытия меню
const toggleOpenClasses = ({ navigationWrapper, background }) => {
  navigationWrapper?.classList.toggle("navigation__wrapper_open");
  background?.classList.toggle("navigation__wrapper-background_open");
  document.body.classList.toggle("body_stop-scrolling");
};

// Локика сраб-я кнопки вызова меню
const handleToggleClick = (navigationWrapper, background) => {
  toggleOpenClasses({ navigationWrapper, background });

  if (navigationWrapper?.classList.contains("navigation__wrapper_open")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// Закрытие при нажатии на фон
const handleBackgroundClick = (navigationWrapper, background) => {
  toggleOpenClasses({ navigationWrapper, background });
};

// Элементы, по клику на которые меню должно закрываться
const handleNavigationClick = (event, navigationWrapper, background) => {
  const targetClasses = Array.from(event.target?.classList ?? []);

  if (
    [
      "navigation__link",
      "button__icon",
      "button__text",
      "nav-menu-buttons__button",
    ].some((item) => targetClasses.includes(item))
  ) {
    toggleOpenClasses({ navigationWrapper, background });
  }
};

//  * Инициализация логики для работы меню.
export const addHeaderLogic = () => {
  addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#menu-toggle");
    const navigationWrapper = document.querySelector(".navigation__wrapper");
    const background = document.querySelector(
      ".navigation__wrapper-background"
    );

    //     // Обработчик клика по кнопке меню
    toggle?.addEventListener("click", () =>
      handleToggleClick(navigationWrapper, background)
    );
    // Обработчик клика по фону
    background?.addEventListener("click", () =>
      handleBackgroundClick(navigationWrapper, background)
    );
    //     // Обработчик клика по элементам меню
    navigationWrapper?.addEventListener("click", (event) =>
      handleNavigationClick(event, navigationWrapper, background)
    );
  });
};
