"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { i18n } from "@/i18n-config";

type LanguageSelectProps = {
  params: { locale: string };
};

export default function LanguageSelect({ params }: LanguageSelectProps) {
  const { locale: selectedLocale } = params;
  const { locales } = i18n;

  const router = useRouter();

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const locale = event.target.value;
    router.push(`/${locale}`);
  };

  return (
    <select value={selectedLocale} onChange={handleChangeLanguage}>
      {locales.sort().map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}
