import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MagicMotion } from "react-magic-motion";

const Portfolio = ({ projects = [], filterLabels, filterKeys, swipeHint = "Desliza para navegar" }) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [gallery, setGallery] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (!gallery) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setGallery(null);
      if (e.key === "ArrowRight") setGalleryIndex((i) => (i + 1) % gallery.images.length);
      if (e.key === "ArrowLeft") setGalleryIndex((i) => (i - 1 + gallery.images.length) % gallery.images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [gallery]);

  const categories = filterLabels || ["Todos", "Diseño web", "Móvil", "API"];
  const keys = filterKeys || ["Todos", "Diseño web", "Móvil", "API"];

  const currentCategoryKey = keys[currentCategory];


  const projectsFilter = projects.filter((project) =>
    currentCategory === 0
      ? true
      : project.categories.includes(currentCategoryKey)
  );
  return (
    <>
      <ul className="flex gap-2 justify-center flex-wrap">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => setCurrentCategory(index)}
              className={`hover:bg-primary transition-colors hover:text-white p-1 px-4 rounded-full ${
                currentCategory === index
                  ? "bg-primary text-white"
                  : "text-slate-500 bg-transparent"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <MagicMotion>
        <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] mx-auto gap-6 pt-6 w-full">
          {projectsFilter.map(({ title, img, description, link, gallery: projectGallery }) => (
            <li key={title}>
              <article className="text-start grid gap-4 group">
                <header className="hover:shadow-2xl dark:hover:shadow-primary/40 shadow-none cursor-pointer transition-shadow">
                  {projectGallery ? (
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={() => { setGallery({ title, ...projectGallery }); setGalleryIndex(0); }}
                    >
                      <img className="w-full rounded-lg" src={img} alt={title} loading="lazy" decoding="async" />
                    </button>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      <img className="w-full rounded-lg" src={img} alt={title} loading="lazy" decoding="async" />
                    </a>
                  )}
                </header>
                <h5 className="font-bold dark:text-white">{title}</h5>
                <p className="text-slate-500 text-sm">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </MagicMotion>
      {gallery && createPortal(
        <div
          className="fixed inset-0 z-50 bg-black/95 sm:bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setGallery(null); }}
        >
          <div className="min-h-full flex flex-col justify-center max-w-5xl mx-auto px-3 py-4 sm:p-6">
            {/* Header: title + close */}
            <div className="flex items-center justify-between mb-4 shrink-0">
              <h4 className="text-white font-bold text-base sm:text-lg truncate pr-4">{gallery.title}</h4>
              <button
                onClick={() => setGallery(null)}
                className="text-white/70 hover:text-white text-3xl font-light shrink-0 w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>

            {/* Image with swipe */}
            <div
              className="relative flex items-center justify-center shrink-0"
              onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStart === null) return;
                const diff = touchStart - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) {
                  diff > 0
                    ? setGalleryIndex((i) => (i + 1) % gallery.images.length)
                    : setGalleryIndex((i) => (i - 1 + gallery.images.length) % gallery.images.length);
                }
                setTouchStart(null);
              }}
            >
              {/* Arrows - hidden on mobile, visible on sm+ */}
              <button
                onClick={() => setGalleryIndex((i) => (i - 1 + gallery.images.length) % gallery.images.length)}
                className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full items-center justify-center text-xl z-10"
              >
                &#8249;
              </button>

              <img
                src={gallery.images[galleryIndex].src}
                alt={gallery.images[galleryIndex].caption}
                className="w-full sm:w-auto sm:max-h-[70vh] max-w-full rounded-lg object-contain mx-auto select-none"
              />

              <button
                onClick={() => setGalleryIndex((i) => (i + 1) % gallery.images.length)}
                className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full items-center justify-center text-xl z-10"
              >
                &#8250;
              </button>
            </div>

            {/* Caption */}
            <p className="text-white/80 text-xs sm:text-sm text-center mt-4 px-1 sm:px-4">
              {gallery.images[galleryIndex].caption}
            </p>

            {/* Dots */}
            <div className="flex justify-center gap-4 sm:gap-2 mt-4 shrink-0">
              {gallery.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`w-3.5 h-3.5 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                    i === galleryIndex ? "bg-primary" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Swipe hint - only on mobile */}
            <p className="text-white/30 text-[11px] text-center mt-3 sm:hidden">{swipeHint}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Portfolio;
