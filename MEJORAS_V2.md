# CodeVista - Mejoras V2: Librerias, Efectos Avanzados y Correccion de Contenido

> Segunda ronda de mejoras. Incluye efectos inspirados en landing pages de referencia
> (Linear, Vercel, Stripe, Raycast), librerias recomendadas, y correcciones de texto.

---

## PARTE 1: CORRECCIONES DE TEXTO Y CONTENIDO (Urgente)

Errores actuales que afectan la profesionalidad del sitio.

---

### ~~1. Corregir idioma del HTML y meta descripcion~~ COMPLETADA

**Archivo:** `Layout.astro`
**Prioridad:** Critica (SEO)

| Linea | Actual | Correccion |
|-------|--------|------------|
| 28 | `lang="en"` | `lang="es"` |
| 33 | `"Innovación en desarrollo y soluciones tecnológicas"` | `"CodeVista - Agencia de desarrollo web en Colombia. Diseño, e-commerce y soluciones digitales a medida."` |

---

### ~~2. Corregir acentos faltantes en todo el sitio~~ COMPLETADA

**Prioridad:** Alta

| Archivo | Actual | Correccion |
|---------|--------|------------|
| `Hero.astro` | "Contactanos" | "Contáctanos" |
| `Hero.astro` | "Conocenos" | "Conócenos" |
| `Services.astro` | "Busqueda de usuarios" | "Búsqueda de usuarios" |
| `Services.astro` | "¿Que ofrecemos?" | "¿Qué ofrecemos?" |
| `CompanySlider.astro` | "¿Con quien trabajamos?" | "¿Con quién trabajamos?" |
| `Pricing.astro` | "Configuracion individual" (x3 planes) | "Configuración individual" |
| `Pricing.astro` | "...realización de una pagina web..." | "...realización de una página web..." |
| `Contact.astro` | "Compañia (Opcional)" (x2) | "Compañía (Opcional)" |
| `Contact.astro` | "Numero de telefono" | "Número de teléfono" |

---

### ~~3. Corregir errores de ortografia y gramatica~~ COMPLETADA

**Prioridad:** Alta

| Archivo | Actual | Correccion | Tipo |
|---------|--------|------------|------|
| `Pricing.astro` | "4 desarroladores" (plan Enterprise) | "4 desarrolladores" | Typo |
| `Pricing.astro` | "Soporte premium: 2 mes" | "Soporte premium: 2 meses" | Gramatica |
| `Team.astro` | "es diseñador  front-end con buenas ideas de  diseño" | "es diseñador front-end con buenas ideas de diseño" | Espacios dobles |
| `Portfolio.jsx` | "Landing page de una empresa que soluciones especializadas" | "Landing page de una empresa que ofrece soluciones especializadas" | Verbo faltante |

---

### ~~4. Reemplazar texto Lorem Ipsum en Portfolio~~ COMPLETADA

**Archivo:** `Portfolio.jsx`
**Prioridad:** Critica (visible al usuario)

Dos proyectos tienen placeholder text:

**SaaS landing page (portfolio-03):**
- Actual: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."`
- Sugerencia: `"Plataforma SaaS con interfaz intuitiva, diseñada para optimizar la gestión de recursos y mejorar la productividad empresarial."`

**Business & corporate template (portfolio-04):**
- Actual: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."`
- Sugerencia: `"Plantilla corporativa profesional con diseño limpio y modular, ideal para empresas que buscan una presencia digital sólida y confiable."`

---

### ~~5. Corregir inconsistencias de idioma (ingles/espanol mezclado)~~ COMPLETADA

**Prioridad:** Media

| Archivo | Actual | Correccion |
|---------|--------|------------|
| `Header.jsx` / `Portfolio.jsx` | `"Home"` en navbar | `"Inicio"` |
| `Portfolio.jsx` | `categories = ["All", "Web design", "Mobile", "API"]` | `["Todos", "Diseño web", "Móvil", "API"]` |
| `Team.astro` | Descripcion en espanol pero `subName: "Founder @ Code Vista"` | `"Fundador @ Code Vista"` o dejarlo en ingles como decision de marca |

---

### ~~6. Agregar alt text a imagenes (Accesibilidad + SEO)~~ COMPLETADA

**Prioridad:** Alta

| Archivo | Imagen | Alt sugerido |
|---------|--------|-------------|
| `Hero.astro` | `/hero-image.png` | `"Equipo de CodeVista desarrollando soluciones web"` |
| `Header.jsx` | `/Logo.svg` | `"CodeVista"` |
| `Header.jsx` | `/logo-dark.png` | `"CodeVista"` |
| `Team.astro` | Foto de cada miembro | Usar `alt={name}` dinamicamente |
| `Portfolio.jsx` | Cada proyecto | Usar `alt={title}` dinamicamente |

---

### ~~7. Mejorar textos para que sean mas persuasivos~~ COMPLETADA

**Prioridad:** Media

**Hero - descripcion principal:**
- Actual: `"Experiencia, creatividad y tecnología: Nuestro compromiso en cada proyecto."`
- Sugerencia: `"Diseñamos y desarrollamos experiencias digitales que convierten visitantes en clientes. Más de 5 proyectos entregados con excelencia."`

**Descripciones de planes de Pricing:**
- Landing page actual: `"La mejor opción para uso personal y para tu próximo proyecto."`
- Sugerencia: `"Perfecta para emprendedores y profesionales que necesitan una presencia web impactante y funcional."`

- E-commerce actual: `"Relevante para múltiples usuarios, soporte extendido y premium."`
- Sugerencia: `"Tu tienda online completa con carrito de compras, pasarela de pagos y gestión de inventario integrada."`

- Enterprise actual: `"La mejor opción para crear ese proyecto único que tienes en mente."`
- Sugerencia: `"Solución a medida para empresas con necesidades específicas. Funcionalidad avanzada y soporte dedicado."`

---

## PARTE 2: EFECTOS AVANZADOS CON LIBRERIAS

Mejoras que requieren instalar librerias para lograr efectos tipo Linear/Vercel/Stripe.

---

### 8. Smooth Scroll premium con Lenis

**Libreria:** `lenis` (por Studio Freight)
**Prioridad:** Alta
**Impacto:** Todo el sitio

El scroll nativo del navegador es lineal y abrupto. Lenis agrega un scroll con inercia suave tipo butter-smooth que se siente premium. Es la misma tecnica que usan Linear, Vercel y Raycast.

**Que hacer:**
- Instalar `lenis` via npm.
- Inicializar Lenis en `Layout.astro` con configuracion de duracion y easing.
- Integrar con los IntersectionObserver existentes.
- Es compatible con el smooth scroll de CSS pero lo mejora drasticamente.

---

### ~~9. Animaciones avanzadas con GSAP ScrollTrigger~~ COMPLETADA

**Libreria:** `gsap` + plugin `ScrollTrigger`
**Prioridad:** Alta
**Impacto:** Hero, Secciones con scroll-driven animations

GSAP es el estandar de la industria para animaciones web. ScrollTrigger permite crear animaciones que progresan con el scroll (scrub). Esto permite efectos como:

**Que hacer:**
- Instalar `gsap` via npm.
- Reemplazar el sistema manual de IntersectionObserver por ScrollTrigger (mas robusto y con mas opciones).
- Agregar animacion de "scrub" al hero: que el texto haga parallax con el scroll.
- Crear secciones con "pin": la seccion de servicios se puede fijar mientras las tarjetas aparecen una a una.
- Agregar split-text animation en los titulos principales: cada letra/palabra aparece individualmente.

---

### ~~10. Efecto Spotlight en tarjetas (estilo Linear/Stripe)~~ COMPLETADA

**Libreria:** Ninguna (CSS + JS puro)
**Prioridad:** Alta
**Impacto:** Tarjetas de servicios, pricing, team

Un degradado radial que sigue el cursor del mouse sobre las tarjetas, creando un efecto de "spotlight" o "luz" que se mueve. Es la firma visual de Linear.app y Stripe.

**Que hacer:**
- Crear un componente que escuche `mousemove` sobre cada tarjeta.
- Calcular la posicion relativa del mouse dentro de la tarjeta.
- Aplicar un `background: radial-gradient()` que siga esa posicion.
- El gradiente debe ser muy sutil: un circulo del color primary al 5-8% de opacidad.
- Agregar un borde con gradiente que brille mas cerca del cursor.

---

### ~~11. Textura de grano/noise sutil (estilo premium)~~ COMPLETADA

**Libreria:** Ninguna (SVG filter)
**Prioridad:** Baja
**Impacto:** Fondo general del sitio

Los sitios premium agregan una textura de ruido casi imperceptible sobre toda la pagina. Esto elimina la sensacion de "plano digital" y da una calidad mas organica, similar a papel de alta calidad.

**Que hacer:**
- Crear un SVG filter con `<feTurbulence>` para generar noise.
- Aplicarlo como pseudo-elemento `::after` en el body con opacidad 3-5%.
- Debe ser `pointer-events: none` y `position: fixed` para cubrir toda la pagina.
- En dark mode, aumentar ligeramente la opacidad.

---

### ~~12. Seccion de testimonios o metricas con contadores~~ COMPLETADA

**Libreria:** Ninguna
**Prioridad:** Media
**Impacto:** Nueva seccion entre About y Services

Agregar una barra de metricas/estadisticas que genere confianza:

**Que hacer:**
- Crear una seccion con 3-4 metricas en fila: "5+ Proyectos entregados", "3 Años de experiencia", "100% Clientes satisfechos", "24/7 Soporte".
- Usar el mismo sistema de conteo animado que ya existe en Pricing.
- Los numeros deben contar desde 0 al entrar al viewport.
- Estilo: numeros grandes en color primary, texto descriptivo debajo en gris.

---

### ~~13. Bento Grid para la seccion de servicios~~ COMPLETADA

**Libreria:** Ninguna (CSS Grid)
**Prioridad:** Media
**Impacto:** Seccion de Services

Reemplazar el grid uniforme de 4 tarjetas iguales por un layout estilo Bento (tarjetas de diferentes tamaños), popularizado por Apple. Esto crea jerarquia visual y hace que la seccion se vea mas interesante.

**Que hacer:**
- El primer servicio (User Research) ocupa 2 columnas como tarjeta principal.
- Los otros 3 servicios se distribuyen en tamaños regulares.
- Cada tarjeta puede tener un mini-grafico, ilustracion o icono animado diferente.
- En mobile, se apila en columna unica.

---

### ~~14. Animacion de texto split (estilo Vercel)~~ COMPLETADA

**Libreria:** `gsap` (SplitText plugin) o CSS puro con spans
**Prioridad:** Media
**Impacto:** Titulos principales

Los titulos de seccion pueden animar cada caracter individualmente con un efecto de "cascada" donde cada letra aparece con un delay minimo. Vercel usa esto extensivamente en sus titulos hero.

**Que hacer:**
- Crear una utilidad que envuelva cada caracter en un `<span>`.
- Animar cada span con un delay progresivo (15-20ms entre cada caracter).
- Usar `clip-path: inset(0 100% 0 0)` que se anima a `inset(0 0% 0 0)` para un efecto de "revelado".
- Solo aplicar en los titulos h3 de cada seccion, no en texto de cuerpo.

---

### ~~15. Seccion de FAQ (Preguntas Frecuentes)~~ COMPLETADA

**Libreria:** Ninguna
**Prioridad:** Media
**Impacto:** Nueva seccion entre Pricing y Team

Una seccion de FAQ con acordeon animado responde dudas comunes y reduce la friccion antes de contactar. Tambien ayuda con SEO.

**Que hacer:**
- Crear un componente de acordeon con animacion de apertura/cierre suave.
- Incluir 4-6 preguntas frecuentes:
  - "¿Cuánto tiempo toma desarrollar una landing page?"
  - "¿Qué incluye el soporte premium?"
  - "¿Puedo solicitar cambios después de la entrega?"
  - "¿Cómo es el proceso de trabajo?"
  - "¿Ofrecen hosting y dominio?"
  - "¿Qué métodos de pago aceptan?"
- El icono de + debe rotar a x al abrir, con transicion suave.

---

### 16. Transiciones de pagina con View Transitions API

**Libreria:** Integrada en Astro (`astro:transitions`)
**Prioridad:** Baja
**Impacto:** Navegacion entre paginas (si se agregan mas paginas)

Astro tiene soporte nativo para la View Transitions API. Si en el futuro se agregan paginas individuales para cada proyecto del portafolio, las transiciones entre paginas pueden ser animadas.

**Que hacer:**
- Agregar `<ViewTransitions />` en el `<head>` del Layout.
- Definir `transition:name` en elementos compartidos entre paginas.
- Los elementos comunes (header, logo) se mantienen mientras el contenido transiciona.

---

### ~~17. Gradientes mesh animados en el Hero (estilo Stripe)~~ COMPLETADA

**Libreria:** Ninguna (CSS o Canvas)
**Prioridad:** Baja
**Impacto:** Hero section

Reemplazar el circulo SVG estatico del hero por un gradiente mesh animado como el que usa Stripe. Son multiples circulos de colores desenfocados que se mueven lentamente.

**Que hacer:**
- Crear 3-4 elementos con `border-radius: 50%` y colores del brand (azul, purpura, indigo).
- Aplicar `filter: blur(80px)` a cada uno.
- Animar sus posiciones con `@keyframes` muy lentos (30-60 segundos por ciclo).
- Opacidad baja (10-15%) para que no distraigan.
- En dark mode, los colores pueden ser mas vibrantes.

---

### ~~18. Animaciones de iconos SVG en Services~~ COMPLETADA

**Libreria:** `@rive-app/canvas` o `lottie-web`
**Prioridad:** Baja
**Impacto:** Seccion de Services

Los iconos estaticos de servicios pueden ser reemplazados por iconos animados que se reproducen al entrar al viewport o al hacer hover. Esto le da vida a la seccion.

**Que hacer:**
- Crear o buscar animaciones de iconos en Rive o LottieFiles.
- Integrar con un componente React que controle play/pause.
- Los iconos deben animarse una vez al entrar al viewport, y en loop al hover.

---

## PARTE 3: MEJORAS DE RENDIMIENTO Y UX

---

### ~~19. Lazy loading de imagenes del Portfolio~~ COMPLETADA

**Libreria:** Nativa (`loading="lazy"`)
**Prioridad:** Alta
**Impacto:** Portfolio, Team

Las imagenes del portfolio cargan todas de golpe. Agregar `loading="lazy"` y `decoding="async"` para que carguen conforme el usuario scrollea.

---

### ~~20. Optimizar imagenes a formato WebP/AVIF~~ COMPLETADA

**Libreria:** Integrada en Astro (`astro:assets`)
**Prioridad:** Alta
**Impacto:** Todo el sitio

Las imagenes actualmente son JPG/PNG. Astro tiene un sistema de optimizacion de imagenes integrado que convierte a WebP/AVIF automaticamente y genera srcsets responsivos.

**Que hacer:**
- Mover las imagenes de `public/` a `src/assets/`.
- Usar el componente `<Image>` de Astro en vez de `<img>` nativo.
- Esto genera automaticamente multiples resoluciones y formatos modernos.

---

## Orden de implementacion recomendado

| Paso | Mejora | Tipo | Esfuerzo |
|------|--------|------|----------|
| 1 | Correcciones de acentos y typos (#2, #3) | Texto | Bajo |
| 2 | Reemplazar Lorem Ipsum (#4) | Texto | Bajo |
| 3 | Corregir lang y meta (#1) | SEO | Bajo |
| 4 | Agregar alt text (#6) | Accesibilidad | Bajo |
| 5 | Corregir idioma mixto (#5) | Texto | Bajo |
| 6 | Mejorar textos persuasivos (#7) | Texto | Medio |
| 7 | Spotlight en tarjetas (#10) | Efecto | Medio |
| 8 | Smooth scroll con Lenis (#8) | Libreria | Medio |
| 9 | Textura noise (#11) | Efecto | Bajo |
| 10 | Seccion de metricas (#12) | Nuevo contenido | Medio |
| 11 | GSAP ScrollTrigger (#9) | Libreria | Alto |
| 12 | Lazy loading imagenes (#19) | Performance | Bajo |
| 13 | Optimizar imagenes (#20) | Performance | Medio |
| 14 | Bento Grid servicios (#13) | Rediseño | Medio |
| 15 | FAQ Acordeon (#15) | Nuevo contenido | Medio |
| 16 | Split text animation (#14) | Efecto | Medio |
| 17 | Gradient mesh hero (#17) | Efecto | Medio |
| 18 | Iconos animados (#18) | Libreria | Alto |
| 19 | View Transitions (#16) | Libreria | Bajo |
