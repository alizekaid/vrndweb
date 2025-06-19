import translations from "components/Translation/translations.json";

const availableLanguages = ["tr", "en"];
let translation_lang_error;

function translate(key, selectedLanguage) {
  const urlParams = new URLSearchParams(window.location.search);
  const languageFromUrl = urlParams.get("lang");
  let language = selectedLanguage || languageFromUrl || "tr";

  if (!availableLanguages.includes(language)) {
    console.warn({ translation_lang_error }, language);
    language = "en";
  }

  return translations[key]?.[language] ?? key;
}

translation_lang_error = translate("translation_lang_error");
export { translate, availableLanguages };
