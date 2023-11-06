<template>
  <div class="text-white">
    <div class="mb-12 pt-20">
      <h2 id="Skills" class="custom-title">
        {{ language.translatedText.skills.title }}
      </h2>
    </div>
    <div class="flex flex-wrap justify-center gap-10">
      <div
        v-for="(skill, index) in skills"
        :key="skill.id"
        class="relative flex items-center justify-center"
      >
        <img class="mb-14 w-28" :src="skill.img" alt="Images of skill logo's" />
        <div
          v-if="index === 4"
          class="absolute bottom-0 -translate-y-8 text-black"
        >
          tailwindcss
        </div>
        <div
          v-if="index === 2"
          class="absolute bottom-0 -translate-y-8 text-black"
        >
          javascript
        </div>
        <div
          v-if="index === 6"
          class="absolute bottom-0 -translate-y-8 text-black"
        >
          typescript
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLanguageStore } from "../../store/language";

const language = useLanguageStore();

interface Skills {
  id: number;
  img: string;
}

const skills = ref<Skills[]>([
  {
    id: 1,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    id: 2,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
  {
    id: 3,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
  },
  {
    id: 5,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    id: 6,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  },
  {
    id: 7,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
]);
</script>

<style scoped></style>
