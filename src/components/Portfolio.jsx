import { useState } from "react";
import { MagicMotion } from "react-magic-motion";

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

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
      link: "/proyecto/saas-landing-page",
    },
    {
      img: "/portfolio/portfolio-04.jpg",
      title: "Business & corporate template",
      description:
        "Plantilla corporativa profesional con diseño limpio y modular, ideal para empresas que buscan una presencia digital sólida y confiable.",
      categories: ["Diseño web", "Móvil"],
      link: "/proyecto/business-corporate-template",
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
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] mx-auto gap-6 pt-6 w-full">
          {projectsFilter.map(({ title, img, description, link }) => (
            <li key={title}>
              <article className="text-start grid gap-4 group">
                <header className="hover:shadow-2xl dark:hover:shadow-primary/40 shadow-none cursor-pointer transition-shadow">
                  <a href={link} target="_blank" rel="noreferrer">
                    <img className="w-full rounded-lg" src={img} alt={title} loading="lazy" decoding="async" />
                  </a>
                </header>
                <h5 className="font-bold dark:text-white">{title}</h5>
                <p className="text-slate-500 text-sm">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </MagicMotion>
    </>
  );
};

export default Portfolio;
