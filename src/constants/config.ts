export const SITE = {
  name: 'CodeVista',
  description: 'CodeVista - Agencia de desarrollo web en Colombia. Diseño, e-commerce y soluciones digitales a medida.',
  url: 'https://codevista.com.co',
  locale: 'es_CO',
  timezone: 'America/Bogota',
} as const;

export const COLORS = {
  primary: 'rgb(74, 108, 247)',
  primaryLight: 'rgb(100, 140, 255)',
  secondary: 'rgb(9, 14, 52)',
  accent: 'rgb(120, 80, 220)',
} as const;

export const LANGUAGES = {
  default: 'es',
  supported: ['es', 'en', 'fr'] as const,
} as const;
