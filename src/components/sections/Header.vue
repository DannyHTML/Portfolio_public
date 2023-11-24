<template>
  <div
    class="fixed z-50 flex h-24 w-full items-center justify-between px-5 transition duration-300"
    :class="{ 'bg-black bg-opacity-100': scrolled }"
  >
    <div>
      <a href="#"
        ><img
          class="relative z-50 w-40 md:w-52"
          src="/images/logo-white.png"
          alt="Logo of Danny Jager Portfolio."
      /></a>
    </div>

    <div class="flex items-center">
      <div class="mr-10 md:hidden">
        <button @click="switchLanguage('nl')" class="block">
          <img
            v-show="language.currentLanguage === 'nl'"
            class="w-10 h-10"
            src="/images/english-flag.png"
            alt=""
          />
        </button>
        <button @click="switchLanguage('en')" class="block">
          <img
            v-show="language.currentLanguage === 'en'"
            class="w-10 h-10"
            src="/images/dutch-flag.png"
            alt=""
          />
        </button>
      </div>
      <ul
        class="relative hidden gap-10 text-white md:z-50 md:flex md:items-center"
      >
        <li class="links">
          <a href="#About">{{ language.translatedText.nav.about }}</a>
        </li>
        <li class="links">
          <a href="#Skills">{{ language.translatedText.nav.skill }}</a>
        </li>
        <li class="links">
          <a href="#Projects">{{ language.translatedText.nav.projects }}</a>
        </li>
        <li class="links">
          <a href="#Contact">{{ language.translatedText.nav.contact }}</a>
        </li>
        <div class="mr-10 md:mr-10">
          <button @click="switchLanguage('nl')" class="block">
            <img
              v-show="language.currentLanguage === 'nl'"
              class="w-10 h-10"
              src="/images/english-flag.png"
              alt="English flag"
            />
          </button>
          <button @click="switchLanguage('en')" class="block">
            <img
              v-show="language.currentLanguage === 'en'"
              class="w-10 h-10"
              src="/images/dutch-flag.png"
              alt="Dutch flag"
            />
          </button>
        </div>
      </ul>

      <div class="relative md:hidden">
        <Transition name="fade">
          <div @click="isHidden = !isHidden">
            <font-awesome-icon
              class="absolute z-50 -mx-6 -my-3 duration-300"
              :class="isHidden ? `opacity-100` : `opacity-0`"
              :icon="['fas', 'bars']"
              size="xl"
              style="color: #fff"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  <Transition name="slide">
    <div
      class="fixed right-0 top-0 z-50 h-96 w-full overflow-x-hidden bg-white shadow-2xl md:hidden"
      v-show="!isHidden"
    >
      <a href="#" @click="isHidden = !isHidden"
        ><img
          class="absolute left-5 top-5 inline w-40"
          src="/images/logo-black.png"
          alt="Logo of Danny Jager Portfolio."
      /></a>
      <ul
        class="flex h-full flex-col items-center justify-center pt-14 text-center font-bold"
      >
        <div class="flex w-32 flex-col gap-5">
          <li
            class="border-b-2 border-primary text-lg"
            @click="isHidden = !isHidden"
          >
            <a href="#About">{{ language.translatedText.nav.about }}</a>
          </li>
          <li
            class="border-b-2 border-primary text-lg"
            @click="isHidden = !isHidden"
          >
            <a href="#Skills">{{ language.translatedText.nav.skill }}</a>
          </li>
          <li
            class="border-b-2 border-primary text-lg"
            @click="isHidden = !isHidden"
          >
            <a href="#Projects">{{ language.translatedText.nav.projects }}</a>
          </li>
          <li
            class="border-b-2 border-primary text-lg"
            @click="isHidden = !isHidden"
          >
            <a href="#Contact">{{ language.translatedText.nav.contact }}</a>
          </li>
          <li @click="isHidden = !isHidden">
            <a href="https://github.com/DannyHTML" target="_blank"
              ><font-awesome-icon class="h-8" :icon="['fab', 'square-github']"
            /></a>
          </li>
        </div>
      </ul>
      <div @click="isHidden = !isHidden">
        <font-awesome-icon
          class="absolute right-6 top-6 z-50 duration-300"
          :icon="['fas', 'xmark']"
          size="2xl"
          style="color: #000"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useLanguageStore } from "../../store/language";

const isHidden = ref<boolean>(true);
const scrolled = ref<boolean>(false);

const language = useLanguageStore();

const switchLanguage = (newLanguage: string) => {
  if (newLanguage === "nl") {
    language.setLanguage("en");
  } else if (newLanguage === "en") {
    language.setLanguage("nl");
  }
};

const scrollEffect = (): void => {
  scrolled.value = window.scrollY > 60;
};

onMounted((): void => window.addEventListener("scroll", scrollEffect));

onBeforeUnmount((): void => window.removeEventListener("scroll", scrollEffect));
</script>

<style scoped>
.links {
  position: relative;
  font-size: 20px;
}

.links::before {
  content: "";
  position: absolute;
  bottom: -4px;
  right: 0;
  height: 2px;
  width: 0;
  background-color: theme("backgroundColor.primary");
  transition-duration: 0.3s;
}

.links:hover::before {
  left: 0;
  width: 100%;
}
</style>
