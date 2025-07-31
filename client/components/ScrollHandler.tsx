import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // Прокрутка к якорю, если он есть
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const navbarHeight = 80; // Высота навигационной панели
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        return; // Выходим, если обработали якорь
      }
    }

    // Иначе прокручиваем наверх страницы
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollHandler;
