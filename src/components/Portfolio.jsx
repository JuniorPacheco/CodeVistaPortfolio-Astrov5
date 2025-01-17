import { useState } from "react";
import { MagicMotion } from "react-magic-motion";

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = ["All", "Web design", "Mobile", "API"];

  const currentCategoryName = categories[currentCategory];

  const projects = [
    {
      img: "/portfolio/portfolio-01.jpg",
      title: "Startup landing page",
      description:
        "Explora nuestra última creación: Startup para BuildingHomeConstructora. Descubre cómo esta empresa de construcción se destaca con una presentación impresionante y funcionalidades que capturan la atención de sus clientes potenciales. ¡Visita ahora y conoce el futuro de la construcción!",
      categories: ["Web design", "API"],
      link: "https://www.buildinghomeconstructora.com/",
    },
    {
      img: "/portfolio/portfolio-02.jpg",
      title: "E-commerce Rent car",
      description:
        "Explora nuestro e-commerce con tecnología 360° que te permite inspeccionar cada detalle de sus autos desde todos los ángulos.",
      categories: ["Web design", "Mobile"],
      link: "https://www.gamarentcarsas.com/",
    },
    {
      img: "/portfolio/portfolio-03.jpg",
      title: "SaaS landing page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
      categories: ["API"],
      link: "/proyecto/saas-landing-page",
    },
    {
      img: "/portfolio/portfolio-04.jpg",
      title: "Business & corporate template",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
      categories: ["Web design", "Mobile"],
      link: "/proyecto/business-corporate-template",
    },
    {
      img: "/portfolio/portfolio-05.webp",
      title: "SmartStart landing page",
      description:
        "Landing page de una empresa que soluciones especializadas para la industria petrolera con un enfoque en calidad, tecnología de vanguardia y costos eficientes.",
      categories: ["Web design"],
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
                    <img className="w-full rounded-lg" src={img} alt="" />
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
