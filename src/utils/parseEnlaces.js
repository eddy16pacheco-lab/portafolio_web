// Parser mínimo para docs/ENLACES.md (sin dependencias).
// Soporta los formatos reales del archivo:
//   - URL desnuda:      https://ejemplo.com/
//   - Markdown ([URL]): ([https://ejemplo.com/])
//   - Enlace [(URL)]:   [(https://ejemplo.com/)]
//   - Teléfono:         +584269154122
//
// Regla 2.1 de MEMORY.md: los enlaces de contacto deben leerse de
// enlaces.md, no hardcodearse en el HTML/React.

const URL_RE = /https?:\/\/[^\s)\]>"]+/gi;
const PHONE_RE = /\+?\d[\d\s-]{9,}\d/g;

const KEYWORDS = [
  { key: 'barbapp', words: ['barbeapp', 'barbe', 'barber'] },
  { key: 'github', words: ['github'] },
  { key: 'instagram', words: ['instagram'] },
  { key: 'facebook', words: ['facebook'] },
  { key: 'whatsapp', words: ['whatsapp', 'telefono', 'telefónico'] },
];

export function normalizeKey(title = '') {
  const t = title.toLowerCase();
  const hit = KEYWORDS.find((k) => k.words.some((w) => t.includes(w)));
  return hit ? hit.key : 'other';
}

/**
 * Parsea el markdown de enlaces.md.
 * @returns {{ sections: Array<{title,key,href,extra,phones,raw}>, phones: string[] }}
 */
export function parseEnlaces(mdText = '') {
  const sections = [];
  const phones = [];
  let currentTitle = null;

  for (const rawLine of mdText.split('\n')) {
    const line = rawLine.trim();

    // Título de sección: ***Título***
    const titleMatch = line.match(/^\*\*\*(.+?)\*\*\*$/);
    if (titleMatch) {
      currentTitle = titleMatch[1].trim();
      continue;
    }

    const urls = line.match(URL_RE) || [];
    // Quitar URLs antes de buscar teléfonos (evita duplicar el nº de wa.me)
    const sinUrls = line.replace(URL_RE, '');
    const foundPhones = (sinUrls.match(PHONE_RE) || []).map((p) =>
      p.replace(/[\s-]/g, '')
    );

    if (currentTitle && urls.length > 0) {
      sections.push({
        title: currentTitle,
        key: normalizeKey(currentTitle),
        href: urls[0],
        extra: urls.slice(1),
        phones: foundPhones,
        raw: line,
      });
      if (foundPhones.length) phones.push(...foundPhones);
      currentTitle = null;
      continue;
    }

    if (currentTitle && foundPhones.length) {
      phones.push(...foundPhones);
    }
  }

  return { sections, phones };
}
