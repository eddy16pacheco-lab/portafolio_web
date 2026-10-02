import { useEffect, useState } from 'react';
import { terminalLines } from '../data/content.jsx';

/**
 * Efecto terminal/typing en el Hero:
 * escribe comandos de código y muestra sus respuestas línea a línea, en bucle.
 */
export default function TypingTerminal() {
  const [state, setState] = useState({ line: 0, typed: 0, outTyped: 0, phase: 'cmd' });

  useEffect(() => {
    const current = terminalLines[state.line % terminalLines.length];
    let delay;
    let timer;

    if (state.phase === 'cmd') {
      if (state.typed >= current.cmd.length) {
        delay = 380;
        timer = setTimeout(
          () => setState((s) => ({ ...s, phase: 'out', outTyped: 0 })),
          delay
        );
        return () => clearTimeout(timer);
      }
      delay = 45 + Math.random() * 70;
      timer = setTimeout(
        () => setState((s) => ({ ...s, typed: s.typed + 1 })),
        delay
      );
      return () => clearTimeout(timer);
    }

    // fase de salida
    if (state.outTyped >= current.out.length) {
      delay = 1600;
      timer = setTimeout(
        () =>
          setState((s) => ({
            line: (s.line + 1) % terminalLines.length,
            typed: 0,
            outTyped: 0,
            phase: 'cmd',
          })),
        delay
      );
      return () => clearTimeout(timer);
    }
    delay = 10 + Math.random() * 22;
    timer = setTimeout(
      () => setState((s) => ({ ...s, outTyped: s.outTyped + 1 })),
      delay
    );
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <div className="glass rounded-xl overflow-hidden shadow-neon-purple">
      {/* barra de ventana */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">
          eddy@portafolio: ~/terminal
        </span>
      </div>
      {/* cuerpo */}
      <div className="p-4 md:p-5 font-mono text-[13px] leading-7 min-h-[196px]">
        {terminalLines.map((l, i) => {
          if (i < state.line) {
            return (
              <div key={i}>
                <p>
                  <span className="text-neon">$ </span>
                  <span className="text-white">{l.cmd}</span>
                </p>
                <p className="text-muted">→ {l.out}</p>
              </div>
            );
          }
          if (i === state.line) {
            return (
              <div key={i}>
                <p>
                  <span className="text-neon">$ </span>
                  <span className="text-white">
                    {l.cmd.slice(0, state.typed)}
                    {state.phase === 'cmd' && (
                      <span className="terminal-caret" />
                    )}
                  </span>
                </p>
                {state.phase === 'out' && (
                  <p className="text-muted">
                    → {l.out.slice(0, state.outTyped)}
                    {state.outTyped < l.out.length && (
                      <span className="terminal-caret" />
                    )}
                  </p>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
