"use client";

import {useState} from "react";

export default function Home() {
  const [emailInput, setEmailInput] = useState("");
  const [validEmails, setValidEmails] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const processEmails = () => {
    const emails = emailInput
      .split(/[\n,;]+/)
      .map((e) => e.trim())
      .filter((e) => e.length > 0);

    const valid = emails.filter(validateEmail);
    const unique = Array.from(new Set(valid));

    setValidEmails(unique);
    setError("");

    if (unique.length === 0) {
      setError("No se encontraron correos válidos");
    }

    return unique;
  };

  const selectWinner = () => {
    const uniqueEmails = processEmails();

    if (uniqueEmails.length === 0) {
      setError("No hay correos válidos para sortear");
      setWinner(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * uniqueEmails.length);
    setWinner(uniqueEmails[randomIndex]);
  };

  const clearAll = () => {
    setEmailInput("");
    setValidEmails([]);
    setWinner(null);
    setError("");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen p-8">
      <main className="flex flex-col w-full max-w-2xl gap-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-2">Sorteo de Correos</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Pega tu lista de correos y selecciona un ganador al azar</p>
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium text-black dark:text-zinc-50">
            Lista de correos (uno por línea, separados por comas o punto y coma)
          </label>
          <textarea
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="ejemplo1@email.com&#10;ejemplo2@email.com&#10;ejemplo3@email.com"
            className="w-full h-48 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-zinc-50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {validEmails.length > 0 && (
          <div className="text-sm text-zinc-600 dark:text-zinc-400">Se encontraron {validEmails.length} correos únicos válidos</div>
        )}

        {error && <div className="text-sm text-red-500 dark:text-red-400">{error}</div>}

        <div className="flex gap-4">
          <button
            onClick={selectWinner}
            className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Sortear Ganador
          </button>
          <button
            onClick={clearAll}
            className="flex-1 h-12 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-zinc-50 font-medium rounded-lg transition-colors"
          >
            Limpiar
          </button>
        </div>

        {winner && (
          <div className="mt-8 p-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 ¡El ganador es! 🎉</h2>
            <p className="text-3xl font-bold text-white">{winner}</p>
          </div>
        )}
      </main>
    </div>
  );
}
