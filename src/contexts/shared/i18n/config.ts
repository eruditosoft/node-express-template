import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { config } from "@/src/app/config/config";
import { KeyValue } from "@/contexts/shared/data/commons";

export const translate = i18next.use(Backend).init({
  initImmediate: false,
  fallbackLng: config.language,
  ns: ["commons", "translations", "errors"],
  defaultNS: "translations",
  backend: {
    loadPath: "./locales/{{lng}}/{{ns}}.json",
  },
});

/**
 *
 * @param key
 * @formatter key => [name_file]:[key] => commons is located at the path ./locales/{{lng}}/commons.json"
 * @param options replacement object in text string
 * @returns string translate
 *
 * @example t('commons:some') =>   "some commons mesaje",
 * @example t('commons:dad.chilld') =>   "i am a child",
 * @example t('error:some') =>   "Some error",
 * @example t('commons:with.params', {name: 'JOSE'}) =>   "Some error",
 */
export default function t(key: string, options = {}): string {
  return i18next.t(key, options);
}

export function getErrorDetails(key: string): {
  title: string;
  description: string;
} {
  return {
    title: i18next.t(`errors:${key}.name`),
    description: i18next.t(`errors:${key}.description`),
  };
}
