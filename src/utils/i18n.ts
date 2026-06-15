import type { AstroGlobal } from 'astro';

export function getLangFromAstro(Astro: AstroGlobal): 'en' | 'es' {
  const cookieLang = Astro.cookies.get('lang')?.value;
  if (cookieLang === 'en' || cookieLang === 'es') {
    return cookieLang;
  }
  const acceptLang = Astro.request.headers.get('accept-language') || '';
  if (acceptLang && acceptLang.toLowerCase().startsWith('en')) {
    return 'en';
  }
  return 'es';
}
