import { useEffect } from "react";
import "../style/slider.css";

const SliderImages = ({ images }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    //TODO Pendiente revisar el hecho de que al hacer un re-render el scroll aumenta la velocidad, esto se debe poder solucionar con un limpiado en el useEffect

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div className="scroller">
      <div className="scroller__inner">
        {images.map((image) => (
          <img
            className="w-52 aspect-square object-contain"
            key={image.src}
            src={image.src}
            alt={image.name}
          />
        ))}
      </div>
    </div>
  );
};
export default SliderImages;
