import { defineStore } from "pinia";
import { langDutch } from "../language/dutch";
import { langEnglish } from "../language/english";
import { ref, Ref, computed } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const currentLanguage: Ref<string> = ref("nl");
  const translatedText = computed(() =>
    currentLanguage.value === "nl" ? langDutch : langEnglish
  );
  const setLanguage = (newLanguage: string): string =>
    (currentLanguage.value = newLanguage);

  return { currentLanguage, translatedText, setLanguage };
});
