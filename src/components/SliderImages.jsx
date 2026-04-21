import { useEffect, useState } from "react";
import "../style/slider.css";

const SliderImages = ({ images }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Detectar tema actual al cargar
    const updateTheme = () => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    updateTheme();

    // Escuchar cambios de clase dark en html
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        if (scroller.getAttribute("data-animated")) return;

        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroller">
      <div className="scroller__inner">
        {images.map((image, index) => (
          <img
            key={index}
            className="w-52 aspect-square object-contain"
            src={theme === "dark" && image.darkSrc ? image.darkSrc : image.src}
            alt={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImages;
