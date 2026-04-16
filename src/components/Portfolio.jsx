import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MagicMotion } from "react-magic-motion";

const Portfolio = () => {
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

  const categories = ["Todos", "Diseño web", "Móvil", "API"];

  const currentCategoryName = categories[currentCategory];

  const projects = [
    {
      img: "/portfolio/portfolio-01.jpg",
      title: "BuildingHomeConstructora S.A.S",
      description:
        "Explora nuestra última creación LandingPage: Startup para BuildingHomeConstructora. Descubre cómo esta empresa de construcción se destaca con una presentación impresionante y funcionalidades que capturan la atención de sus clientes potenciales. ¡Visita ahora y conoce el futuro de la construcción!",
      categories: ["Diseño web", "API"],
      link: "https://www.buildinghomeconstructora.com/",
    },
    {
      img: "/portfolio/portfolio-02.jpg",
      title: "GamaRentCar",
      description:
        "Explora nuestro e-commerce con tecnología 360° que te permite inspeccionar cada detalle de sus autos desde todos los ángulos.",
      categories: ["Diseño web", "Móvil"],
      link: "https://www.gamarentcarsas.com/",
    },
    {
      img: "/portfolio/portfolio-03.png",
      title: "La Liga De Futbol Del Tolima",
      description:
        "La página web de la Liga de Fútbol del Tolima, desarrollada por Codevistax, es una plataforma moderna y responsiva diseñada para fortalecer su presencia digital. Cuenta con secciones dinámicas y un panel administrativo de autogestión que permite personalizar colores, contenidos y gestionar la información de manera fácil, brindando total control y actualización constante.",
      categories: ["API"],
      link: "https://www.ligadefutboldeltolima.com/",
    },
    {
      img: "/portfolio/cabal-dashboard.png",
      title: "Cabal Studios - Sistema de Gestión",
      description:
        "Sistema de gestión integral para un estudio de fotografía profesional. Incluye dashboard con KPIs en tiempo real, facturación con estados de pago, recordatorios automáticos vía WhatsApp y email, sincronización con Google Calendar, y generación de recibos tipo POS con código QR.",
      categories: ["Diseño web", "API"],
      link: null,
      gallery: {
        images: [
          { src: "/portfolio/cabal-login.png", caption: "Login - Autenticación JWT con sistema de roles (Owner, Admin, Photographer, Assistant, Viewer)" },
          { src: "/portfolio/cabal-dashboard.png", caption: "Dashboard - KPIs en tiempo real: clientes, facturas, pagos. Gráficas de ingresos mensuales y distribución de facturas" },
          { src: "/portfolio/cabal-conexiones.png", caption: "Conexiones - Integración con WhatsApp (Evolution API) y Google Calendar (OAuth2) para recordatorios automáticos" },
        ],
      },
    },
    {
      img: "/portfolio/portfolio-05.png",
      title: "SmartStart S.A.S",
      description:
        "Landing page de una empresa que ofrece soluciones especializadas para la industria petrolera con un enfoque en calidad, tecnología de vanguardia y costos eficientes.",
      categories: ["Diseño web"],
      link: "https://www.smartstarsas.com/",
    },
  ];

  const projectsFilter = projects.filter((project) =>
    currentCategory === 0
      ? true
      : project.categories.includes(currentCategoryName)
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
            <p className="text-white/30 text-[11px] text-center mt-3 sm:hidden">Desliza para navegar</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Portfolio;
