import { useEffect, useState } from "react";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  useEffect(() => {
    localStorage.getItem("theme") && setTheme(localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="bg-white/90 p-4 sticky top-0 z-40 dark:bg-black/90 transition-colors">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        {/* Logo */}
        {theme === "light" ? (
          <img src="/Logo.svg" alt="" />
        ) : (
          <img className="max-w-[155px]" src="/logo-dark.png" alt="" />
        )}

        {/* Navegacion desktop */}
        <nav className="text-black dark:text-white text-[16.5px] font-inter md:flex gap-6 hidden">
          <a className="hover:text-blue-600" href="#hero">
            Home
          </a>
          <a className="hover:text-blue-600" href="#about">
            Sobre nosotros
          </a>
          <a className="hover:text-blue-600" href="#services">
            Servicios
          </a>
          <a className="hover:text-blue-600" href="#works">
            Trabajos
          </a>
          <a className="hover:text-blue-600" href="#pricing">
            Precios
          </a>
          <a className="hover:text-blue-600" href="#contact">
            Contacto
          </a>
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
          className={`text-black font-inter flex flex-col gap-6 md:hidden absolute top-[4.5rem] z-40 bg-white shadow-md p-5 right-4 dark:bg-black/90 dark:text-white dark:shadow-white/30 ${
            isShowMenu ? "block" : "hidden"
          }`}
        >
          <a className="hover:text-primary" href="#hero">
            Home
          </a>
          <a className="hover:text-primary" href="#about">
            Sobre nosotros
          </a>
          <a className="hover:text-primary" href="#services">
            Servicios
          </a>
          <a className="hover:text-primary" href="#works">
            Trabajos
          </a>
          <a className="hover:text-primary" href="#pricing">
            Precios
          </a>
          <a className="hover:text-primary" href="#contact">
            Contacto
          </a>
        </nav>
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/+573184281039"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center duration-300 ease-in-out transform hover:scale-125 transition-transform "
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
      </div>
    </header>
  );
};
export default Header;
