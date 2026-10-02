import { useMemo } from 'react';
import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: true });

/** Renderiza markdown (los README de los proyectos) con estilos cyberpunk. */
export default function Markdown({ source, className = '' }) {
  const html = useMemo(
    () => marked.parse(source || '', { async: false }),
    [source]
  );
  return (
    <div
      className={`md-body ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
