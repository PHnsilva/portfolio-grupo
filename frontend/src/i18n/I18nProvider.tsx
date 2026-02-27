import React, { createContext, useContext, useMemo, useState } from "react";
import { dictionaries, type Lang } from "./dictionaries";

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  ta: (key: string) => string[];
};

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "portfolio.lang";

function safeGetStoredLang(): Lang | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "pt" || raw === "en") return raw;
    return null;
  } catch {
    return null;
  }
}

function safeSetStoredLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
}

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc: any, part) => (acc ? acc[part] : undefined), obj as any);
}

function interpolate(text: string, vars?: Record<string, string | number>) {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => safeGetStoredLang() ?? "pt");

  const setLang = (l: Lang) => {
    setLangState(l);
    safeSetStoredLang(l);
  };

  const value = useMemo<I18nValue>(() => {
    const dict = dictionaries[lang];

    const t = (key: string, vars?: Record<string, string | number>) => {
      const raw = getByPath(dict, key);
      if (typeof raw !== "string") return key;
      return interpolate(raw, vars);
    };

    const ta = (key: string) => {
      const raw = getByPath(dict, key);
      if (Array.isArray(raw) && raw.every((v) => typeof v === "string")) return raw as string[];
      return [];
    };

    return {
      lang,
      setLang,
      toggleLang: () => setLang(lang === "pt" ? "en" : "pt"),
      t,
      ta,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
