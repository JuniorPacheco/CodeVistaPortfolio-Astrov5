import { useEffect, useRef, useState } from "react";
import { ui, languages, defaultLang } from "../i18n/ui";

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

const LanguageSwitcher = ({ lang }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const switchLang = (newLang) => {
    if (newLang === lang) {
      setOpen(false);
      return;
    }
    window.location.href =
      newLang === defaultLang ? "/" : `/${newLang}/`;
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/15 bg-white/50 dark:bg-white/5 hover:border-primary hover:text-primary dark:hover:text-primary transition-colors"
      >
        <GlobeIcon />
        <span>{lang}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[140px] rounded-xl bg-white dark:bg-[#0a1025] border border-black/5 dark:border-white/10 shadow-xl shadow-primary/10 overflow-hidden z-50"
        >
          {Object.entries(languages).map(([code, name]) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => switchLang(code)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                  code === lang
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                <span>{name}</span>
                <span className="text-xs font-bold uppercase tracking-wide opacity-60">
                  {code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = ({ lang = defaultLang }) => {
  const t = ui[lang] || ui[defaultLang];

  const navLinks = [
    { href: "#hero", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#works", label: t.nav.works },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

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

  const homePath = lang === defaultLang ? "/" : `/${lang}/`;

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-[1320px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href={homePath} aria-label="CodeVista">
            {theme === "light" ? (
              <img src="/Logo.svg" alt="CodeVista" />
            ) : (
              <img
                className="max-w-[155px]"
                src="/logo-dark.png"
                alt="CodeVista"
              />
            )}
          </a>

          {/* Desktop nav */}
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

            <LanguageSwitcher lang={lang} />

            <button onClick={handleClick} aria-label="Toggle theme">
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <button onClick={handleClick} aria-label="Toggle theme">
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button onClick={handleToggleMenu} aria-label="Menu">
              {isShowMenu ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile nav */}
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
