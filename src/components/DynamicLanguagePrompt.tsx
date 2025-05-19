
import { useEffect, useState } from "react";

const prompts = [
  "Choose Language",
  "Elige el idioma",
  "言語を選択",
  "Escolle a lingua",
  "Choisissez la langue",
];

export const DynamicLanguagePrompt = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % prompts.length);
    }, 2100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs text-gray-500 text-center mb-1 transition-all min-h-[1.2em]">
      {prompts[idx]}
    </div>
  );
};
