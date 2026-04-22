export const languages = {
  es: "Español",
  en: "English",
  fr: "Français",
} as const;

export const defaultLang = "es" as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre nosotros",
      services: "Servicios",
      works: "Trabajos",
      pricing: "Precios",
      contact: "Contacto",
    },
    hero: {
      words: ["Code", "Vista", "Soluciones", "sólidas"],
      subtitlePre: "Profesionales",
      subtitlePost: "en el desarrollo web",
      description:
        "Diseñamos y desarrollamos experiencias digitales que convierten visitantes en clientes. Calidad y compromiso en cada proyecto.",
      btnPrimary: "Contáctanos",
      btnSecondary: "Conócenos",
      imageAlt: "Equipo de CodeVista desarrollando soluciones web",
    },
    about: {
      tag: "Sobre nosotros",
      titleLine1: "El mejor diseño,",
      titleLine2: "La mejor experiencia",
      description:
        "CodeVista es una empresa líder en desarrollo web, reconocida por su innovación y excelencia técnica. Fundada por un equipo apasionado, nos destacamos por ofrecer soluciones de alta calidad, personalizadas para cada cliente.",
      connectTitle: "Conecta con nosotros",
      connectDescription:
        "¿Listo para llevar tu presencia en línea al siguiente nivel? ¡Estamos aquí para ayudarte! Ponte en contacto con nuestro equipo experto en desarrollo web y descubre cómo podemos hacer realidad tus proyectos digitales. ¡Conéctate con nosotros hoy mismo!",
    },
    metrics: [
      "Proyectos entregados",
      "Años de experiencia",
      "Clientes satisfechos",
      "Soporte disponible",
    ],
    services: {
      tag: "¿Qué ofrecemos?",
      title: "Nuestros servicios",
      description:
        "CodeVista potencia tu presencia en línea con soluciones web personalizadas. Desde diseño creativo hasta desarrollo avanzado, hacemos realidad tus proyectos digitales. ¡Destácate en la web con nosotros!",
      items: [
        {
          title: "Desarrollo Web a Medida",
          description:
            "Construimos sitios web y aplicaciones desde cero, adaptados a las necesidades específicas de tu negocio. Código limpio, rendimiento óptimo y escalabilidad garantizada.",
        },
        {
          title: "Diseño Visual",
          description:
            "Destaca tu marca y conecta con tu audiencia de manera memorable con nuestra experiencia en diseño web.",
        },
        {
          title: "Investigación de Usuarios",
          description:
            "Analizamos el comportamiento y preferencias de tu público para mejorar la usabilidad y aumentar la conversión.",
        },
        {
          title: "Experiencia de Usuario",
          description:
            "Garantizamos la excelencia de tu sitio con pruebas exhaustivas para una experiencia óptima del usuario.",
        },
        {
          title: "Diseño Responsivo",
          description:
            "Tu sitio se verá perfecto en cualquier dispositivo. Diseñamos pensando en móvil, tablet y escritorio.",
        },
      ],
    },
    works: {
      tag: "Portafolio",
      title: "Trabajos recientes",
      description:
        "Descubre nuestros proyectos recientes en CodeVista. Inspírate con nuestra experiencia y calidad en proyectos innovadores y visualmente impactantes para clientes satisfechos.",
      filters: ["Todos", "Diseño web", "Móvil", "API"],
      projects: [
        {
          title: "BuildingHomeConstructora S.A.S",
          description:
            "Explora nuestra última creación LandingPage: Startup para BuildingHomeConstructora. Descubre cómo esta empresa de construcción se destaca con una presentación impresionante y funcionalidades que capturan la atención de sus clientes potenciales.",
        },
        {
          title: "GamaRentCar",
          description:
            "Explora nuestro e-commerce con tecnología 360° que te permite inspeccionar cada detalle de sus autos desde todos los ángulos.",
        },
        {
          title: "La Liga De Futbol Del Tolima",
          description:
            "Plataforma moderna y responsiva con panel administrativo de autogestión que permite personalizar colores, contenidos y gestionar la información de manera fácil.",
        },
        {
          title: "Cabal Studios - Sistema de Gestión",
          description:
            "Sistema de gestión integral para un estudio de fotografía profesional. Incluye dashboard con KPIs en tiempo real, facturación, recordatorios vía WhatsApp y email, sincronización con Google Calendar, y recibos POS con código QR.",
          captions: [
            "Login - Autenticación JWT con sistema de roles (Owner, Admin, Photographer, Assistant, Viewer)",
            "Dashboard - KPIs en tiempo real: clientes, facturas, pagos. Gráficas de ingresos y distribución de facturas",
            "Conexiones - Integración con WhatsApp (Evolution API) y Google Calendar (OAuth2) para recordatorios automáticos",
          ],
        },
        {
          title: "SmartStart S.A.S",
          description:
            "Landing page de una empresa que ofrece soluciones especializadas para la industria petrolera con un enfoque en calidad, tecnología de vanguardia y costos eficientes.",
        },
      ],
      swipeHint: "Desliza para navegar",
    },
    companySlider: {
      tag: "¿Con quién trabajamos?",
      title: "Nuestros clientes",
    },
    pricing: {
      tag: "Planes Codevistax",
      title: "Soluciones digitales profesionales",
      description:
        "Desarrollamos páginas web y plataformas diseñadas para escalar tu negocio y aumentar tus ventas.",
      badges: {
        recommended: "Recomendado",
        mostComplete: "Más completo",
      },
      button: "Elegir plan",
      whatsappTemplate:
        "Hola, me interesa el plan *{plan}* y quiero más información.",
      plans: [
        {
          name: "Landing Page Pro",
          description:
            "Landing page de alto impacto diseñada para convertir visitantes en clientes.",
          features: [
            "Diseño UI/UX personalizado",
            "Responsive mobile-first",
            "Animaciones + slider",
            "Integración WhatsApp",
            "SEO optimizado",
            "Soporte premium: 1 mes",
          ],
        },
        {
          name: "E-commerce Pro",
          description:
            "Tienda online completa con pagos integrados y panel administrativo.",
          features: [
            "Carrito de compra",
            "Pasarela de pagos",
            "Gestión de productos",
            "Panel autogestionable",
            "Notificaciones",
            "Soporte premium: 2 meses",
          ],
        },
        {
          name: "Plataforma Enterprise",
          description:
            "Sistema web a medida con backend, API y arquitectura escalable.",
          features: [
            "Frontend + Backend",
            "API propia",
            "Base de datos",
            "Roles y permisos",
            "Escalabilidad",
            "Soporte premium: 3 meses",
          ],
        },
        {
          name: "Elite Digital Solution",
          description:
            "Solución digital avanzada para empresas que buscan escalar y automatizar.",
          features: [
            "Todo lo Enterprise",
            "Automatización de procesos",
            "Integraciones CRM/API",
            "Dashboard avanzado",
            "Alta prioridad",
            "Soporte premium: 6 meses",
          ],
        },
      ],
    },
    faq: {
      tag: "Resolvemos tus dudas",
      title: "Preguntas frecuentes",
      description:
        "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, procesos y formas de trabajo.",
      items: [
        {
          question: "¿Cuánto tiempo toma desarrollar una landing page?",
          answer:
            "El tiempo promedio es de 2 a 3 semanas, dependiendo de la complejidad del diseño y las funcionalidades requeridas. Mantenemos comunicación constante para cumplir con los plazos acordados.",
        },
        {
          question: "¿Qué incluye el soporte premium?",
          answer:
            "El soporte premium incluye corrección de errores, actualizaciones de contenido, optimización de rendimiento, monitoreo del sitio y asistencia técnica prioritaria durante el período contratado.",
        },
        {
          question: "¿Puedo solicitar cambios después de la entrega?",
          answer:
            "Sí, durante el período de soporte incluido puedes solicitar ajustes y modificaciones. Cambios mayores o nuevas funcionalidades se cotizan por separado con tarifas preferenciales para clientes existentes.",
        },
        {
          question: "¿Cómo es el proceso de trabajo?",
          answer:
            "Nuestro proceso tiene 4 etapas: descubrimiento (entendemos tu negocio y objetivos), diseño (creamos prototipos y mockups), desarrollo (construimos tu sitio) y lanzamiento (pruebas finales y puesta en producción).",
        },
        {
          question: "¿Ofrecen hosting y dominio?",
          answer:
            "Sí, podemos gestionar el hosting y dominio por ti. Trabajamos con proveedores confiables que garantizan velocidad, seguridad y un uptime del 99.9%.",
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer:
            "Aceptamos transferencias bancarias, pagos con tarjeta de crédito/débito y plataformas digitales. El pago se divide normalmente en 50% al iniciar y 50% al entregar.",
        },
      ],
    },
    team: {
      tag: "Trabajo inteligente",
      title: "Nuestro equipo",
      description:
        "Conoce al dedicado equipo de CodeVista, comprometido en hacer realidad tus proyectos digitales. Desde diseñadores creativos hasta desarrolladores expertos, nos esforzamos por la excelencia en cada detalle. Confía en nosotros para llevar tu visión más allá.",
      founders: [
        {
          name: "Oscar López",
          subName: "Founder @ Code Vista",
          description:
            "Oscar López es diseñador web, emprendedor, empresario y fundador de CodeVista. Especialista en desarrollo web y estrategia digital, ha liderado proyectos con grandes empresas. Como CEO, impulsa soluciones innovadoras orientadas al crecimiento empresarial.",
        },
        {
          name: "Junior Pacheco",
          subName: "Founder @ Code Vista",
          description:
            "Cofundador y CTO de CodeVista, desarrollador FullStack con sólida experiencia en Frontend, Backend y Diseño, enfocado en la excelencia técnica y la creación de soluciones eficientes. Instructor de Programación Web, comprometido con la formación de nuevos desarrolladores.",
        },
        {
          name: "Anderson Castro Vallejo",
          subName: "Partner @ Code Vista",
          description:
            "Partner de CodeVista, es diseñador front-end con buenas ideas de diseño. Su creatividad y enfoque meticuloso han sido cruciales para el éxito de la empresa, desarrollando interfaces web intuitivas y atractivas.",
        },
      ],
    },
    contact: {
      tag: "Contacta con nosotros",
      title: "¿Tienes algún proyecto en mente?",
      description:
        "En CodeVista, transformamos tus ideas en realidad digital. Cuéntanos tu visión y trabajaremos juntos para hacerla posible.",
      infoTitle: "Información de contacto",
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
      locationValue: "Colombia",
      form: {
        name: "Nombre",
        namePlaceholder: "Ingrese su nombre",
        company: "Compañía (Opcional)",
        emailLabel: "Correo",
        emailPlaceholder: "Email",
        phoneLabel: "Número de Teléfono",
        phonePlaceholder: "Telefono",
        project: "Cuéntanos acerca del proyecto",
        projectPlaceholder: "Proyecto",
        submit: "Contactar",
      },
    },
    footer: {
      description:
        "Innovación en desarrollo y soluciones tecnológicas. Transformamos tus ideas en experiencias digitales.",
      linksTitle: "Enlaces",
      contactTitle: "Contacto",
      copyright: "© 2024. CodeVista. Todos los derechos reservados.",
      backToTop: "Volver arriba",
      links: [
        { label: "Servicios", hash: "services" },
        { label: "Portafolio", hash: "works" },
        { label: "Precios", hash: "pricing" },
        { label: "Contacto", hash: "contact" },
      ],
    },
    languageSwitcher: {
      label: "Idioma",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About us",
      services: "Services",
      works: "Works",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      words: ["Code", "Vista", "Solid", "solutions"],
      subtitlePre: "Professionals",
      subtitlePost: "in web development",
      description:
        "We design and build digital experiences that turn visitors into customers. Quality and commitment in every project.",
      btnPrimary: "Contact us",
      btnSecondary: "About us",
      imageAlt: "CodeVista team building web solutions",
    },
    about: {
      tag: "About us",
      titleLine1: "The best design,",
      titleLine2: "The best experience",
      description:
        "CodeVista is a leading web development company, known for innovation and technical excellence. Founded by a passionate team, we stand out for delivering high-quality, tailored solutions for every client.",
      connectTitle: "Connect with us",
      connectDescription:
        "Ready to take your online presence to the next level? We're here to help! Get in touch with our expert web development team and discover how we can bring your digital projects to life. Connect with us today!",
    },
    metrics: [
      "Projects delivered",
      "Years of experience",
      "Satisfied clients",
      "Support available",
    ],
    services: {
      tag: "What we offer",
      title: "Our services",
      description:
        "CodeVista powers your online presence with custom web solutions. From creative design to advanced development, we bring your digital projects to life. Stand out on the web with us!",
      items: [
        {
          title: "Custom Web Development",
          description:
            "We build websites and apps from scratch, tailored to your business needs. Clean code, optimal performance and guaranteed scalability.",
        },
        {
          title: "Visual Design",
          description:
            "Make your brand stand out and connect with your audience memorably with our web design expertise.",
        },
        {
          title: "User Research",
          description:
            "We analyze your audience's behavior and preferences to improve usability and boost conversion.",
        },
        {
          title: "User Experience",
          description:
            "We ensure your site's excellence with thorough testing for an optimal user experience.",
        },
        {
          title: "Responsive Design",
          description:
            "Your site will look perfect on any device. We design mobile-first for mobile, tablet and desktop.",
        },
      ],
    },
    works: {
      tag: "Portfolio",
      title: "Recent work",
      description:
        "Discover our recent projects at CodeVista. Get inspired by our experience and quality in innovative, visually impactful projects for satisfied clients.",
      filters: ["All", "Web Design", "Mobile", "API"],
      projects: [
        {
          title: "BuildingHomeConstructora S.A.S",
          description:
            "Check out our latest creation: a Startup landing page for BuildingHomeConstructora. See how this construction company stands out with an impressive presentation and features that capture potential clients' attention.",
        },
        {
          title: "GamaRentCar",
          description:
            "Explore our e-commerce with 360° technology letting you inspect every car detail from all angles.",
        },
        {
          title: "Liga De Futbol Del Tolima",
          description:
            "Modern, responsive platform with a self-managed admin panel that lets you customize colors, content and manage information easily.",
        },
        {
          title: "Cabal Studios - Management System",
          description:
            "Full management system for a professional photo studio. Includes real-time KPI dashboard, billing, WhatsApp and email reminders, Google Calendar sync and POS receipts with QR code.",
          captions: [
            "Login - JWT authentication with role system (Owner, Admin, Photographer, Assistant, Viewer)",
            "Dashboard - Real-time KPIs: clients, invoices, payments. Revenue charts and invoice distribution",
            "Connections - Integration with WhatsApp (Evolution API) and Google Calendar (OAuth2) for automatic reminders",
          ],
        },
        {
          title: "SmartStart S.A.S",
          description:
            "Landing page for a company providing specialized solutions for the oil industry with a focus on quality, cutting-edge technology and cost efficiency.",
        },
      ],
      swipeHint: "Swipe to navigate",
    },
    companySlider: {
      tag: "Who we work with",
      title: "Our clients",
    },
    pricing: {
      tag: "Codevistax Plans",
      title: "Professional digital solutions",
      description:
        "We build websites and platforms designed to scale your business and grow your sales.",
      badges: {
        recommended: "Recommended",
        mostComplete: "Most complete",
      },
      button: "Choose plan",
      whatsappTemplate:
        "Hi, I'm interested in the *{plan}* plan and would like more information.",
      plans: [
        {
          name: "Landing Page Pro",
          description:
            "High-impact landing page designed to convert visitors into customers.",
          features: [
            "Custom UI/UX design",
            "Mobile-first responsive",
            "Animations + slider",
            "WhatsApp integration",
            "SEO optimized",
            "Premium support: 1 month",
          ],
        },
        {
          name: "E-commerce Pro",
          description:
            "Full online store with integrated payments and admin panel.",
          features: [
            "Shopping cart",
            "Payment gateway",
            "Product management",
            "Self-managed panel",
            "Notifications",
            "Premium support: 2 months",
          ],
        },
        {
          name: "Enterprise Platform",
          description:
            "Custom web system with backend, API and scalable architecture.",
          features: [
            "Frontend + Backend",
            "Custom API",
            "Database",
            "Roles and permissions",
            "Scalability",
            "Premium support: 3 months",
          ],
        },
        {
          name: "Elite Digital Solution",
          description:
            "Advanced digital solution for companies looking to scale and automate.",
          features: [
            "Everything in Enterprise",
            "Process automation",
            "CRM/API integrations",
            "Advanced dashboard",
            "High priority",
            "Premium support: 6 months",
          ],
        },
      ],
    },
    faq: {
      tag: "We answer your questions",
      title: "Frequently asked questions",
      description:
        "Find answers to the most common questions about our services, processes and how we work.",
      items: [
        {
          question: "How long does a landing page take to build?",
          answer:
            "Average time is 2 to 3 weeks, depending on design complexity and required features. We keep constant communication to meet agreed deadlines.",
        },
        {
          question: "What does premium support include?",
          answer:
            "Premium support includes bug fixes, content updates, performance optimization, site monitoring and priority technical assistance during the contracted period.",
        },
        {
          question: "Can I request changes after delivery?",
          answer:
            "Yes, during the included support period you can request adjustments and modifications. Major changes or new features are quoted separately with preferential rates for existing clients.",
        },
        {
          question: "What is the work process like?",
          answer:
            "Our process has 4 stages: discovery (we understand your business and goals), design (we create prototypes and mockups), development (we build your site) and launch (final testing and go-live).",
        },
        {
          question: "Do you offer hosting and domain?",
          answer:
            "Yes, we can manage hosting and domain for you. We work with reliable providers guaranteeing speed, security and 99.9% uptime.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept bank transfers, credit/debit card payments and digital platforms. Payment is typically split 50% upfront and 50% on delivery.",
        },
      ],
    },
    team: {
      tag: "Smart work",
      title: "Our team",
      description:
        "Meet the dedicated CodeVista team, committed to bringing your digital projects to life. From creative designers to expert developers, we strive for excellence in every detail. Trust us to take your vision further.",
      founders: [
        {
          name: "Oscar López",
          subName: "Founder @ Code Vista",
          description:
            "Oscar López is a web designer, entrepreneur and founder of CodeVista. A specialist in web development and digital strategy, he has led projects with major companies. As CEO he drives innovative solutions focused on business growth.",
        },
        {
          name: "Junior Pacheco",
          subName: "Founder @ Code Vista",
          description:
            "Co-founder and CTO of CodeVista, FullStack developer with solid experience in Frontend, Backend and Design, focused on technical excellence and building efficient solutions. Web programming instructor committed to training new developers.",
        },
        {
          name: "Anderson Castro Vallejo",
          subName: "Partner @ Code Vista",
          description:
            "Partner at CodeVista, a front-end designer with great design ideas. His creativity and meticulous approach have been crucial to the company's success, building intuitive, appealing web interfaces.",
        },
      ],
    },
    contact: {
      tag: "Contact us",
      title: "Have a project in mind?",
      description:
        "At CodeVista, we turn your ideas into digital reality. Tell us your vision and we'll work together to make it happen.",
      infoTitle: "Contact information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Colombia",
      form: {
        name: "Name",
        namePlaceholder: "Enter your name",
        company: "Company (Optional)",
        emailLabel: "Email",
        emailPlaceholder: "Email",
        phoneLabel: "Phone number",
        phonePlaceholder: "Phone",
        project: "Tell us about the project",
        projectPlaceholder: "Project",
        submit: "Contact",
      },
    },
    footer: {
      description:
        "Innovation in development and technology solutions. We turn your ideas into digital experiences.",
      linksTitle: "Links",
      contactTitle: "Contact",
      copyright: "© 2024. CodeVista. All rights reserved.",
      backToTop: "Back to top",
      links: [
        { label: "Services", hash: "services" },
        { label: "Portfolio", hash: "works" },
        { label: "Pricing", hash: "pricing" },
        { label: "Contact", hash: "contact" },
      ],
    },
    languageSwitcher: {
      label: "Language",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      works: "Projets",
      pricing: "Tarifs",
      contact: "Contact",
    },
    hero: {
      words: ["Code", "Vista", "Solutions", "solides"],
      subtitlePre: "Professionnels",
      subtitlePost: "du développement web",
      description:
        "Nous concevons et développons des expériences numériques qui transforment les visiteurs en clients. Qualité et engagement sur chaque projet.",
      btnPrimary: "Contactez-nous",
      btnSecondary: "En savoir plus",
      imageAlt: "Équipe CodeVista développant des solutions web",
    },
    about: {
      tag: "À propos de nous",
      titleLine1: "Le meilleur design,",
      titleLine2: "La meilleure expérience",
      description:
        "CodeVista est une entreprise leader en développement web, reconnue pour son innovation et son excellence technique. Fondée par une équipe passionnée, nous nous distinguons par des solutions de haute qualité, personnalisées pour chaque client.",
      connectTitle: "Connectez-vous avec nous",
      connectDescription:
        "Prêt à faire passer votre présence en ligne au niveau supérieur ? Nous sommes là pour vous aider ! Contactez notre équipe experte en développement web et découvrez comment nous pouvons concrétiser vos projets numériques. Connectez-vous avec nous dès aujourd'hui !",
    },
    metrics: [
      "Projets livrés",
      "Années d'expérience",
      "Clients satisfaits",
      "Support disponible",
    ],
    services: {
      tag: "Que proposons-nous ?",
      title: "Nos services",
      description:
        "CodeVista booste votre présence en ligne avec des solutions web personnalisées. Du design créatif au développement avancé, nous concrétisons vos projets numériques. Démarquez-vous sur le web avec nous !",
      items: [
        {
          title: "Développement Web sur Mesure",
          description:
            "Nous créons des sites et applications sur mesure, adaptés aux besoins spécifiques de votre entreprise. Code propre, performances optimales et évolutivité garantie.",
        },
        {
          title: "Design Visuel",
          description:
            "Démarquez votre marque et connectez-vous à votre audience de manière mémorable grâce à notre expertise en design web.",
        },
        {
          title: "Recherche Utilisateurs",
          description:
            "Nous analysons le comportement et les préférences de votre public pour améliorer l'utilisabilité et augmenter les conversions.",
        },
        {
          title: "Expérience Utilisateur",
          description:
            "Nous garantissons l'excellence de votre site avec des tests approfondis pour une expérience utilisateur optimale.",
        },
        {
          title: "Design Responsive",
          description:
            "Votre site sera parfait sur tous les appareils. Nous concevons pour mobile, tablette et bureau en pensant mobile-first.",
        },
      ],
    },
    works: {
      tag: "Portfolio",
      title: "Projets récents",
      description:
        "Découvrez nos projets récents chez CodeVista. Inspirez-vous de notre expérience et de notre qualité dans des projets innovants et visuellement percutants pour des clients satisfaits.",
      filters: ["Tous", "Design web", "Mobile", "API"],
      projects: [
        {
          title: "BuildingHomeConstructora S.A.S",
          description:
            "Découvrez notre dernière création : landing page Startup pour BuildingHomeConstructora. Voyez comment cette entreprise de construction se démarque avec une présentation impressionnante et des fonctionnalités qui captent l'attention des clients potentiels.",
        },
        {
          title: "GamaRentCar",
          description:
            "Explorez notre e-commerce avec technologie 360° qui permet d'inspecter chaque détail des voitures sous tous les angles.",
        },
        {
          title: "Liga De Futbol Del Tolima",
          description:
            "Plateforme moderne et responsive avec panneau d'administration autogéré permettant de personnaliser couleurs, contenus et gérer les informations facilement.",
        },
        {
          title: "Cabal Studios - Système de Gestion",
          description:
            "Système de gestion complet pour un studio photo professionnel. Inclut tableau de bord KPI en temps réel, facturation, rappels WhatsApp et email, synchronisation Google Calendar et reçus POS avec code QR.",
          captions: [
            "Connexion - Authentification JWT avec système de rôles (Owner, Admin, Photographer, Assistant, Viewer)",
            "Tableau de bord - KPIs en temps réel : clients, factures, paiements. Graphiques des revenus et distribution des factures",
            "Connexions - Intégration WhatsApp (Evolution API) et Google Calendar (OAuth2) pour rappels automatiques",
          ],
        },
        {
          title: "SmartStart S.A.S",
          description:
            "Landing page d'une entreprise offrant des solutions spécialisées pour l'industrie pétrolière, axée sur la qualité, la technologie de pointe et l'efficacité des coûts.",
        },
      ],
      swipeHint: "Glissez pour naviguer",
    },
    companySlider: {
      tag: "Avec qui nous travaillons",
      title: "Nos clients",
    },
    pricing: {
      tag: "Plans Codevistax",
      title: "Solutions numériques professionnelles",
      description:
        "Nous développons des sites web et plateformes conçus pour faire évoluer votre entreprise et augmenter vos ventes.",
      badges: {
        recommended: "Recommandé",
        mostComplete: "Plus complet",
      },
      button: "Choisir le plan",
      whatsappTemplate:
        "Bonjour, je suis intéressé(e) par le plan *{plan}* et je souhaite plus d'informations.",
      plans: [
        {
          name: "Landing Page Pro",
          description:
            "Landing page à fort impact conçue pour convertir les visiteurs en clients.",
          features: [
            "Design UI/UX personnalisé",
            "Responsive mobile-first",
            "Animations + slider",
            "Intégration WhatsApp",
            "SEO optimisé",
            "Support premium : 1 mois",
          ],
        },
        {
          name: "E-commerce Pro",
          description:
            "Boutique en ligne complète avec paiements intégrés et panneau d'administration.",
          features: [
            "Panier d'achat",
            "Passerelle de paiement",
            "Gestion des produits",
            "Panneau autogéré",
            "Notifications",
            "Support premium : 2 mois",
          ],
        },
        {
          name: "Plateforme Enterprise",
          description:
            "Système web sur mesure avec backend, API et architecture évolutive.",
          features: [
            "Frontend + Backend",
            "API propre",
            "Base de données",
            "Rôles et permissions",
            "Évolutivité",
            "Support premium : 3 mois",
          ],
        },
        {
          name: "Elite Digital Solution",
          description:
            "Solution numérique avancée pour les entreprises cherchant à évoluer et automatiser.",
          features: [
            "Tout Enterprise",
            "Automatisation des processus",
            "Intégrations CRM/API",
            "Tableau de bord avancé",
            "Haute priorité",
            "Support premium : 6 mois",
          ],
        },
      ],
    },
    faq: {
      tag: "Nous répondons à vos questions",
      title: "Questions fréquentes",
      description:
        "Trouvez des réponses aux questions les plus fréquentes sur nos services, processus et façons de travailler.",
      items: [
        {
          question: "Combien de temps faut-il pour développer une landing page ?",
          answer:
            "Le temps moyen est de 2 à 3 semaines, selon la complexité du design et les fonctionnalités requises. Nous maintenons une communication constante pour respecter les délais convenus.",
        },
        {
          question: "Qu'inclut le support premium ?",
          answer:
            "Le support premium comprend les corrections de bugs, les mises à jour de contenu, l'optimisation des performances, la surveillance du site et une assistance technique prioritaire pendant la période contractée.",
        },
        {
          question: "Puis-je demander des changements après la livraison ?",
          answer:
            "Oui, pendant la période de support incluse, vous pouvez demander des ajustements et modifications. Les changements majeurs ou nouvelles fonctionnalités sont devisés séparément avec des tarifs préférentiels pour les clients existants.",
        },
        {
          question: "Comment se déroule le processus de travail ?",
          answer:
            "Notre processus comporte 4 étapes : découverte (nous comprenons votre entreprise et vos objectifs), design (prototypes et maquettes), développement (construction de votre site) et lancement (tests finaux et mise en production).",
        },
        {
          question: "Proposez-vous hébergement et nom de domaine ?",
          answer:
            "Oui, nous pouvons gérer l'hébergement et le domaine pour vous. Nous travaillons avec des fournisseurs fiables garantissant vitesse, sécurité et 99,9 % de disponibilité.",
        },
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer:
            "Nous acceptons les virements bancaires, paiements par carte de crédit/débit et plateformes numériques. Le paiement est généralement divisé en 50 % au début et 50 % à la livraison.",
        },
      ],
    },
    team: {
      tag: "Travail intelligent",
      title: "Notre équipe",
      description:
        "Rencontrez l'équipe dévouée de CodeVista, engagée à concrétiser vos projets numériques. Des designers créatifs aux développeurs experts, nous visons l'excellence dans chaque détail. Faites-nous confiance pour porter votre vision plus loin.",
      founders: [
        {
          name: "Oscar López",
          subName: "Founder @ Code Vista",
          description:
            "Oscar López est designer web, entrepreneur et fondateur de CodeVista. Spécialiste du développement web et de la stratégie numérique, il a dirigé des projets avec de grandes entreprises. En tant que CEO, il impulse des solutions innovantes axées sur la croissance des entreprises.",
        },
        {
          name: "Junior Pacheco",
          subName: "Founder @ Code Vista",
          description:
            "Cofondateur et CTO de CodeVista, développeur FullStack avec une solide expérience en Frontend, Backend et Design, axé sur l'excellence technique et la création de solutions efficaces. Formateur en programmation web engagé dans la formation de nouveaux développeurs.",
        },
        {
          name: "Anderson Castro Vallejo",
          subName: "Partner @ Code Vista",
          description:
            "Partenaire de CodeVista, designer front-end avec de bonnes idées de design. Sa créativité et son approche méticuleuse ont été cruciales pour le succès de l'entreprise, développant des interfaces web intuitives et attrayantes.",
        },
      ],
    },
    contact: {
      tag: "Contactez-nous",
      title: "Vous avez un projet en tête ?",
      description:
        "Chez CodeVista, nous transformons vos idées en réalité numérique. Parlez-nous de votre vision et nous travaillerons ensemble pour la réaliser.",
      infoTitle: "Informations de contact",
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Colombie",
      form: {
        name: "Nom",
        namePlaceholder: "Entrez votre nom",
        company: "Société (Facultatif)",
        emailLabel: "E-mail",
        emailPlaceholder: "E-mail",
        phoneLabel: "Numéro de téléphone",
        phonePlaceholder: "Téléphone",
        project: "Parlez-nous du projet",
        projectPlaceholder: "Projet",
        submit: "Contacter",
      },
    },
    footer: {
      description:
        "Innovation en développement et solutions technologiques. Nous transformons vos idées en expériences numériques.",
      linksTitle: "Liens",
      contactTitle: "Contact",
      copyright: "© 2024. CodeVista. Tous droits réservés.",
      backToTop: "Retour en haut",
      links: [
        { label: "Services", hash: "services" },
        { label: "Portfolio", hash: "works" },
        { label: "Tarifs", hash: "pricing" },
        { label: "Contact", hash: "contact" },
      ],
    },
    languageSwitcher: {
      label: "Langue",
    },
  },
} as const;

export type UIStrings = (typeof ui)[Lang];
