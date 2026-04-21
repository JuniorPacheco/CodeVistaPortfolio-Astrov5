import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Inicio" },
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
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
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

      const observer = new IntersectionObserver(handleIntersect, {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((observer) => observer.disconnect());
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
      ? "bg-white/80 dark:bg-[#050816]/90 shadow-lg dark:shadow-primary/5 border-b border-black/5 dark:border-white/10"
      : "bg-white/60 dark:bg-[#050816]/90 border-b border-transparent",
  ].join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-[1320px] mx-auto flex justify-between items-center">
          {/* Logo */}
          {theme === "light" ? (
            <img src="/Logo.svg" alt="CodeVista" />
          ) : (
            <img
              className="max-w-[155px]"
              src="/logo-dark.png"
              alt="CodeVista"
            />
          )}

          {/* Navegación desktop */}
          <nav className="text-black dark:text-slate-300 text-[16.5px] font-inter md:flex gap-6 hidden items-center">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-colors relative group ${
                  activeSection === href ? "text-primary" : "hover:text-primary"
                }`}
              >
                {label}

                <span
                  className={`absolute -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === href
                      ? "w-full left-0"
                      : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                  }`}
                />
              </a>
            ))}

            <button onClick={handleClick}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </nav>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={handleClick}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button onClick={handleToggleMenu}>
              {isShowMenu ? "✕" : "☰"}
            </button>
          </div>

          {/* Navegación móvil */}
          <nav
            className={`text-black font-inter flex flex-col gap-6 md:hidden absolute top-[4.5rem] z-40 bg-white/90 backdrop-blur-md shadow-md p-5 right-4 rounded-lg dark:bg-[#050816]/95 dark:text-slate-300 dark:shadow-primary/10 border border-black/5 dark:border-white/10 ${
              isShowMenu ? "block" : "hidden"
            }`}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsShowMenu(false)}
                className={`transition-colors ${
                  activeSection === href
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+573184281039"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center duration-300 ease-in-out transform hover:scale-125 transition-transform"
      >
        WhatsApp
      </a>
    </>
  );
};

export default Header;
