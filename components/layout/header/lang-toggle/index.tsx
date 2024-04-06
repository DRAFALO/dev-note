"use client";

import React from "react";
import isEqual from "react-fast-compare";
import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { i18n } from "@/dictionaries/i18n-config";
import renderLinkByLocale from "@/lib/render-link-by-locale";
import { LocaleEnum, MappingLocaleEnum } from "@/types/locales";

interface LangToggleProps {
  lang: string;
}

function LangToggle(props: LangToggleProps) {
  const { lang } = props;
  const pathname = usePathname();
  const router = useRouter();

  const onRenderLinkByLocale = (locale: LocaleEnum) => {
    return renderLinkByLocale({
      link: pathname,
      locale,
    });
  };

  const onChangeLocale = (locale: LocaleEnum) => {
    const link = onRenderLinkByLocale(locale);

    router.push(link);
  };

  return (
    <Select onValueChange={onChangeLocale}>
      <SelectTrigger className="w-auto min-w-[6.25rem]">
        {MappingLocaleEnum[lang as LocaleEnum]}
      </SelectTrigger>

      <SelectContent className="shadow-md" align="end">
        {i18n.locales.map((locale) => (
          <SelectItem key={`locale-${locale}`} value={locale}>
            {MappingLocaleEnum[locale]} {locale === lang && "✨"}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default React.memo(LangToggle, isEqual);
