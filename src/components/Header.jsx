import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Sobre nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#works", label: "Trabajos" },
  { href: "#pricing", label: "Precios" },
  { href: "#contact", label: "Contacto" },
];

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  useEffect(() => {
    localStorage.getItem("theme") && setTheme(localStorage.getItem("theme"));

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active section observer
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect, {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("theme-transitioning");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 400);
  }, [theme]);

  const headerClass = [
    "p-4 sticky top-0 z-40 transition-all duration-300",
    "backdrop-blur-md",
    scrolled
      ? "bg-white/80 dark:bg-black/80 shadow-lg dark:shadow-primary/5 border-b border-black/5 dark:border-white/10"
      : "bg-white/60 dark:bg-black/60 border-b border-transparent",
  ].join(" ");

  return (
    <>
    <header className={headerClass}>
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        {/* Logo */}
        {theme === "light" ? (
          <img src="/Logo.svg" alt="" />
        ) : (
          <img className="max-w-[155px]" src="/logo-dark.png" alt="" />
        )}

        {/* Navegacion desktop */}
        <nav className="text-black dark:text-white text-[16.5px] font-inter md:flex gap-6 hidden items-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className={`transition-colors relative group ${
                activeSection === href ? "text-primary" : "hover:text-primary"
              }`}
              href={href}
            >
              {label}
              <span
                className={`absolute -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === href
                    ? "w-full left-0"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </a>
          ))}
          <button onClick={handleClick}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  transform: "",
                  msFilter: "",
                }}
                className="fill-primary"
              >
                <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  transform: "",
                  msFilter: "",
                }}
                className="fill-white"
              >
                <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
              </svg>
            )}
          </button>
        </nav>

        {/* Boton menu */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={handleClick}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  transform: "",
                  msFilter: "",
                }}
                className="fill-primary"
              >
                <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  transform: "",
                  msFilter: "",
                }}
                className="fill-white"
              >
                <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
              </svg>
            )}
          </button>
          <button onClick={handleToggleMenu}>
            {!isShowMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2 dark:text-white"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            )}

            {isShowMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Navegacion mobile */}
        <nav
          className={`text-black font-inter flex flex-col gap-6 md:hidden absolute top-[4.5rem] z-40 bg-white/90 backdrop-blur-md shadow-md p-5 right-4 rounded-lg dark:bg-black/90 dark:text-white dark:shadow-white/30 border border-black/5 dark:border-white/10 ${
            isShowMenu ? "block" : "hidden"
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className={`transition-colors ${
                activeSection === href ? "text-primary font-semibold" : "hover:text-primary"
              }`}
              href={href}
              onClick={() => setIsShowMenu(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
    {/* Botón de WhatsApp - fuera del header para que fixed funcione con backdrop-blur */}
    <a
      href="https://wa.me/+573184281039"
      className="whatsapp-pulse fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center duration-300 ease-in-out transform hover:scale-125 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-whatsapp"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    </a>
    </>
  );
};
export default Header;
