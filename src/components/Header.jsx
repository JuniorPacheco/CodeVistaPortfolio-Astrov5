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
          <div className="md:hidden flex items-center gap-3 text-black dark:text-slate-200">
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
        href={`https://wa.me/${import.meta.env.PUBLIC_WA_PHONE || '+573184281039'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center duration-300 ease-in-out transform hover:scale-125 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>
    </>
  );
};

export default Header;
