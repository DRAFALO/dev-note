import { LocaleEnum } from "@/types/locales";

interface Props {
  locale: LocaleEnum;
  link: string;
}

function renderLinkByLocale(props: Props) {
  const { locale, link } = props;

  if (!link) return `/${locale}`;

  const segments = link.split("/");

  segments[1] = locale;

  return segments.join("/");
}

export default renderLinkByLocale;
