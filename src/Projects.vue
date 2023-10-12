<template>
  <div class="mb-5">
    <div class="mb-12 pt-20">
      <h2 id="Projects">{{ language.translatedText.projects['projecten.title'] }}</h2>
    </div>
    <div class="mx-5 flex flex-wrap justify-center gap-5">
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative mx-auto my-5 rounded-md border-2 border-primary border-opacity-50 bg-white p-4 shadow-xl"
      >
        <div class="flex flex-col items-center justify-center">
          <h3 class="mb-4 text-center text-2xl font-bold lg:text-3xl">
            {{ project.title }}
          </h3>
          <a :href="project.urlLive" target="_blank"
            ><img
              class="rounded-lg shadow-[0px_5px_15px] shadow-gray-400 transition-all hover:scale-105 sm:max-w-sm"
              :src="project.img"
              alt="Example of project for mobile, tablet and desktop. Responsive design."
          /></a>
        </div>
        <div
          class="mx-auto mb-20 flex items-center px-2 pt-8 text-center sm:max-w-sm"
        >

          <p>
            {{ project.description }}
          </p>
        </div>
        <div class="absolute bottom-0 left-0 mb-5 flex w-full justify-around">
          <div>
            <a :href="project.urlLive" target="_blank"><ButtonSite /></a>
          </div>
          <div>
            <a :href="project.urlGithub" target="_blank"><ButtonGithub /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonSite from "./components/Button-site.vue";
import ButtonGithub from "./components/Button-github.vue";
import { useLanguageStore } from "./store/language";
import { computed } from "vue";

const language = useLanguageStore();

interface Projecten {
  id: number,
  title: string,
  img: string,
  description: string,
  urlLive: string,
  urlGithub: string
}

const projects = computed(() => {
  const projecten: Projecten[] = language.translatedText.projecten;
    return projecten.map((project) => ({
      ...project,
      description: project.description,
  }));
});

</script>

<style scoped></style>
