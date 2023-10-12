import { defineStore } from 'pinia'
import { langDutch } from '../components/Languages/dutch';
import { langEnglish } from '../components/Languages/english';



export const useLanguageStore = defineStore({
    id: "language",
    state: () => ({
        currentLanguage: "nl",
    }),
    getters: {
        translatedText: (state) => {
            return state.currentLanguage === "nl" ? langDutch : langEnglish;
        },
    },
    actions: {
        setLanguage(newLanguage: string) {
                this.currentLanguage = newLanguage;
            },
        },
});

